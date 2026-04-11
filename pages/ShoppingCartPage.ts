import {Page} from '@playwright/test';
import {BasePageObject} from "./BasePageObject";

export class ShoppingCart extends BasePageObject {
    constructor(page: Page, baseUrl: string) {
        super(page, baseUrl);
    }

    continueShoppingButton = this.page.locator('[data-test="continue-shopping"]');
    checkoutButton = this.page.locator('[data-test="checkout"]');

}
