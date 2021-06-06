import { Body, Get, Post, JsonController } from 'routing-controllers';
import * as puppeteer from 'puppeteer';

@JsonController()
export class UserController {
  @Get('/users')
  getAll() {
    return 'This action returns all users';
  }

  @Post('/users')
  async post(@Body({ required: true }) user: string, passwd: string, school: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://en.wikipedia.org', { waitUntil: 'networkidle2' });

    await page.waitForSelector('input[name=search]');

    await page.$eval(
      'input[name=search]',
      (el: HTMLInputElement) => (el.value = 'Adenosine triphosphate'),
    );

    await page.click('input[type=submit]');
    await page.waitForSelector('#mw-content-text');
    const text = await page.evaluate(() => {
      const anchor = document.querySelector('#mw-content-text');
      return anchor.textContent;
    });

    // const cookies = await page.cookies();

    await browser.close();

    return text;
  }
}
