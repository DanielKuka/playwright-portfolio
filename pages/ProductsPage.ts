import {Page} from '@playwright/test'
import {BasePageObject} from "./BasePageObject";

export class ProductsPage extends BasePageObject {
    constructor(page: Page, baseUrl: string) {
        super(page, baseUrl)
    }

    // Add & remove items

    addBackpack = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    removeBackpack = this.page.locator('[data-test="remove-sauce-labs-backpack"]');

    addBikeLight = this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    removeBikeLight = this.page.locator('[data-test="remove-sauce-labs-bike-light"]');

    addTShort = this.page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    removeTShort = this.page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');

    addJacket = this.page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    removeJacket = this.page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');

    addOnesie = this.page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
    removeOnesie = this.page.locator('[data-test="remove-sauce-labs-onesie"]');

    addAllTheThings = this.page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    removeAllTheThings = this.page.locator('[data-test="remove-test.allthethings()-t-shirt-(red)"]');


    item0 = this.page.locator('[data-test="item-0-title-link"]');
    item1 = this.page.locator('[data-test="item-1-title-link"]');
    item2 = this.page.locator('[data-test="item-2-title-link"]');
    item3 = this.page.locator('[data-test="item-3-title-link"]');
    item4 = this.page.locator('[data-test="item-4-title-link"]');
    item5 = this.page.locator('[data-test="item-5-title-link"]');

    shoppingCart = this.page.locator('[data-test="shopping-cart-link"]');
}