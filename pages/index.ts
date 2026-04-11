import {expect, Page} from "@playwright/test";
import {LoginPage} from "./LoginPage";
import {SideBarMenu} from "./SideBarMenu";
import {ProductsPage} from "./ProductsPage";
import {ShoppingCart} from "./ShoppingCartPage";
import {CheckoutStepOne} from "./CheckoutStepOne";
import {CheckoutStepTwo} from "./CheckoutStepTwo";
import {CompletePage} from "./CompletePage";


export class SauceDemoSite {
    constructor(public page: Page) {}

    readonly baseUrl = process.env.SAUCEDEMO_BASE_URL ?? 'https://www.saucedemo.com';

    login = new LoginPage(this.page, this.baseUrl);
    sideBar = new SideBarMenu(this.page, this.baseUrl);
    products = new ProductsPage(this.page, this.baseUrl);
    shoppingCart = new ShoppingCart(this.page, this.baseUrl);
    checkoutStepOne = new CheckoutStepOne(this.page, this.baseUrl);
    checkoutStepTwo = new CheckoutStepTwo(this.page, this.baseUrl);
    completePage = new CompletePage(this.page, this.baseUrl);

}