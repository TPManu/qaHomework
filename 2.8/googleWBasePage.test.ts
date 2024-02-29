import { Google } from "./googlePage";
import { Driver } from "selenium-webdriver/chrome";
const fs = require('fs')
const page = new Google();

test('do a search', async () => {
    await page.navigate();
    await page.search('QA jobs in Utah');
    let text = await page.getResults();
    expect(text).toContain('QA jobs in Utah');
    await fs.writeFile(`${__dirname}/qaJobsInUtah.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Picture saved');
    }
    )
    fs.writeFile(`${__dirname}/test.txt`, text, (e) => {
        if (e) console.error(e)
        else console.log('Picture saved')
    })
});
afterAll(async () => {
    await page.driver.quit();
});