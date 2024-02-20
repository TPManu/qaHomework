import {By, until, WebDriver, WebElement} from 'selenium-webdriver'; 
const chromedriver = require('chromedriver');

export class employeeManagerPage {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
    berniceOrtiz: By = By.name("employee1")
    phillipWeaver: By = By.name("employee3")
    nameEntry: By = By.name("nameEntry");
    titleEntry: By = By.name("titleEntry");
    saveBtn: By = By.id("saveBtn");
    constructor(driver: WebDriver, url: string) {
        this.driver = driver;
        this.url = url
    };
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.berniceOrtiz));
    };
    //navigates to the page and waits for the header to be located
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element));
        return element;
    };
    //this method gets the element requested make sure its on the page and then returns the elemnt
    async sendKeys(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy);
        await input.clear();
        return input.sendKeys(keys);
    };
    //set an input and clear said input and enter the keys provided
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    };
}