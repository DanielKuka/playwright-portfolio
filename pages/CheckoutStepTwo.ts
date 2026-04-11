import {Page} from '@playwright/test'
import {BasePageObject} from "./BasePageObject";

export class CheckoutStepTwo extends BasePageObject {
    constructor(page: Page, baseUrl: string) {
        super(page, baseUrl);
    }

    cancelButton = this.page.locator('[data-test="cancel"]');
    finishButton = this.page.locator('[data-test="finish"]');

}