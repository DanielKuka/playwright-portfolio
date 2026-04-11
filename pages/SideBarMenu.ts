import type { Page } from '@playwright/test'
import { BasePageObject } from "./BasePageObject";

export class SideBarMenu extends BasePageObject {
    constructor (page: Page, baseUrl: string) {
        super (page, baseUrl)
    }

    openBurgerMenu = this.page.locator('#react-burger-menu-btn');
    closeBurgerMenu = this.page.locator('#react-burger-cross-btn');
    allItemsButton = this.page.locator('[data-test="inventory-sidebar-link"]');
    inventorySidebarLink = this.page.locator('[data-test="about-sidebar-link""]');
    logoutButton = this.page.locator('[data-test="logout-sidebar-link"]');
    resetAppButton = this.page.locator('[data-test="reset-sidebar-link"]');

}