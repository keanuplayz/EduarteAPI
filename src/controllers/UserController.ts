import { Post, JsonController, BodyParam } from 'routing-controllers';
import * as puppeteer from 'puppeteer';

@JsonController()
export class UserController {
  @Post('/token')
  async post(@BodyParam('user', {required: true}) user: string, @BodyParam('passwd', {required: true}) passwd: string, @BodyParam('school', {required: true}) school: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://${school}.educus.nl`, { waitUntil: 'networkidle2' });
    await page.waitForSelector('input[name=gebruikersnaam]');
    await page.focus('input[name=gebruikersnaam]');
    await page.keyboard.type(user);
    await page.focus('input[name=wachtwoord]');
    await page.keyboard.type(passwd);
    await page.$eval('a#id4', (btn: HTMLButtonElement) => btn.click());
    await page.waitForSelector('ul.blocks');

    // Fetch the cookies from the current page.
    let cookieArray: string[] = [];
    await page.cookies()
      .then(cookie => {
        let name = cookie[0].name;
        let value = cookie[0].value.replace("\\\"", '')
        cookieArray.push(name, value)
      });

    await browser.close();

    return {cookieArray};
  }
}
