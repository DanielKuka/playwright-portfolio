import {Page} from '@playwright/test'
import {BasePageObject} from "./BasePageObject";

export class CheckoutStepOne extends BasePageObject {
    constructor(page: Page, baseUrl: string) {
        super(page, baseUrl);
    }

    cancelButton = this.page.locator('[data-test="cancel"]');
    continueButton = this.page.locator('[data-test="continue"]');
    firstNameField = this.page.locator('[data-test="firstName"]');
    lastNameField = this.page.locator('[data-test="lastName"]');
    postalCodeField = this.page.locator('[data-test="postalCode"]');

    async fillPersonalInfoPage( user: {username: string, password: string}) {
        await this.firstNameField.fill(user.username)
        await this.lastNameField.fill(user.password)
        await this.postalCodeField.fill(user.username)
    }
}