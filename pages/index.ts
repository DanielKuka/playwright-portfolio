import {expect, Page} from "@playwright/test";
import {LoginPage} from "./LoginPage";

export class SauceDemoSite {
    constructor(public page: Page) {}

    readonly baseUrl = process.env.SAUCEDEMO_BASE_URL ?? 'https://www.saucedemo.com';

    login = new LoginPage(this.page, this.baseUrl);
}