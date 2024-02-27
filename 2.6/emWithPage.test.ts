import { employeeManagerPage } from "./employeeManagerPage";
import {Builder, Capabilities, WebDriver} from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();
const page = new employeeManagerPage(driver, 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html');

const empPage = new employeeManagerPage(driver, 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html');

test("Promoted Phillip to CEO, Fired Bernice Ortiz", async () => {
    await empPage.navigate();
    await page.click(page.berniceOrtiz);
    await driver.sleep(1000);
    await page.sendKeys(empPage.titleEntry, "fired");
    await driver.sleep(1000);
    await page.click(empPage.saveBtn);
    await driver.sleep(1000);
    await page.click(empPage.phillipWeaver);
    await driver.sleep(1000);
    await page.sendKeys(empPage.titleEntry, "CEO");
    await driver.sleep(1000);
    await page.click(empPage.saveBtn);
    await driver.sleep(2000)
    await driver.quit();
})