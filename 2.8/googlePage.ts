import {By} from "selenium-webdriver";
import {basePage} from "./basePage";

export class Google extends basePage {
    searchBar: By = By.name('q');
    results: By = By.id('rcnt');

    constructor() {
        super({url: "https://www.google.com/"});
    };
    async search(thingToSearch: string) {
        return this.setInput(this.searchBar, `${thingToSearch}\n`);
    };
    async getResults() {
        return this.getText(this.results);
    };
};