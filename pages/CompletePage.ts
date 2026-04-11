import {Page} from "@playwright/test";
import {BasePageObject} from "./BasePageObject";

export class CompletePage extends BasePageObject {
    constructor(page: Page, baseUrl: string) {
        super(page, baseUrl);
    }

    backToHome = this.page.locator('[data-test="back-to-products"]');

}