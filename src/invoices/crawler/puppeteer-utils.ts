import fs from 'fs';
import puppeteer, { Page } from 'puppeteer-core';

export async function createBrowser() {
  const browser = await puppeteer.launch({
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: false,
  });
  return browser;
}

export async function saveCookiesToFile(page: Page, filePath: string) {
  try {
    // Getting the cookies from the current page
    const cookies = await page.browser().cookies();

    // Writing the cookies to a file as JSON
    fs.writeFileSync(filePath, JSON.stringify(cookies, null, 2));

    // Cookies have been saved successfully
    return true;
  } catch (error) {
    // An error occurred while saving cookies
    console.error('Error saving cookies:', error);
    return false;
  }
}

export async function loadCookiesFromFile(page: Page, filePath: string) {
  try {
    // Reading cookies from the specified file
    const cookiesJson = fs.readFileSync(filePath, 'utf-8');
    const cookies = JSON.parse(cookiesJson);

    // Setting the cookies in the current page
    await page.browser().setCookie(...cookies);
    // Cookies have been loaded successfully
    return true;
  } catch (error) {
    // An error occurred while loading cookies
    console.error('Error loading cookies:', error);
    return false;
  }
}

export async function clearCookies(page: Page) {
  console.log('clear cookies...');
  try {
    const cookies = await page.browser().cookies();
    await page.browser().deleteCookie(...cookies);
    // Cookies have been cleared successfully
    return true;
  } catch (error) {
    // An error occurred while clearing cookies
    console.error('Error clearing cookies:', error);
    return false;
  }
}
