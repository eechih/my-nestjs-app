import { Page } from 'puppeteer-core';
import { recognizeCaptcha } from './captcha-utils';
import {
  clearCookies,
  loadCookiesFromFile,
  saveCookiesToFile,
} from './puppeteer-utils';

const COOKIE_FILE = 'tmp/cookies.json';

export async function loginIfNeed(page: Page): Promise<void> {
  const loggedIn = await checkLogin(page);
  if (!loggedIn) {
    await login(page);
  }
}

async function checkLogin(page: Page): Promise<boolean> {
  console.log('checkLogin...');
  await loadCookiesFromFile(page, COOKIE_FILE);

  await page.goto('https://www.einvoice.nat.gov.tw');
  await page.waitForNavigation({ waitUntil: 'networkidle2' });

  const loggedIn = await page.evaluate((sel) => {
    const title = document.querySelector(sel)?.getAttribute('title');
    console.log('title', title);
    return title === '登出';
  }, 'ul.other_menu > li > a');

  if (!loggedIn) {
    await clearCookies(page);
  }
  return loggedIn;
}

async function login(page: Page) {
  console.log('login...');

  try {
    await page.goto('https://www.einvoice.nat.gov.tw/accounts/login');

    await page.waitForNetworkIdle();
    await page.type('#mobile_phone', '0912306471', { delay: 50 });
    await page.type('#password', 'kVk4G-bc', { delay: 50 });

    const captchaImage = await page.evaluate(
      (sel) => document.querySelector(sel)?.getAttribute('src'),
      'img[alt="圖形驗證碼"]',
    );

    if (!captchaImage) {
      throw new Error('無法取得圖形驗證碼');
    }

    const captcha = await recognizeCaptcha(captchaImage);
    console.log('captcha', captcha);
    await page.type('#captcha', captcha, { delay: 50 });

    // Click Login Button
    await page.click('#submitBtn');
    await page.waitForNetworkIdle({});
    await saveCookiesToFile(page, COOKIE_FILE);
  } catch (error) {
    console.log('Error login', error);
  }

  // .toast_box
}
