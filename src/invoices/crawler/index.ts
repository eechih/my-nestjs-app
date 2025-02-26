import { sleep } from '../../common/utils';
import { loginIfNeed } from './login';
import { createBrowser } from './puppeteer-utils';

export default class Crawler {
  constructor() {}

  public static newInstance() {
    return new Crawler();
  }

  public async crawl() {
    console.log('Crawler start....');
    const browser = await createBrowser();
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1024 });
    await loginIfNeed(page);
    await sleep(10000);
    await page.close();
    await browser.close();
  }
}
