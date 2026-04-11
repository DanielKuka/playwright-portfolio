import { expect, test } from '../../fixtures/auth.fixture';
import {USERS} from '../../test-data/saucedemo/user-credentials';

test.describe('E2E Flow Tests with standard user', async () => {
    test.beforeEach(async ({sauceDemoSite}) => {
        await sauceDemoSite.login.open();
        await expect(sauceDemoSite.page).toHaveURL(`${sauceDemoSite.baseUrl}`)
        await expect(sauceDemoSite.login.loginButton).toBeVisible();
        await sauceDemoSite.login.fillLoginForm(USERS.standard);
        await sauceDemoSite.login.submit()
        await expect(sauceDemoSite.page).toHaveURL(`${sauceDemoSite.baseUrl}/inventory.html`, { timeout: 5000 });
    })

    test('all items are displayed on the page and visible', async ({sauceDemoSite}) => {

        const items = [
            sauceDemoSite.products.item0,
            sauceDemoSite.products.item1,
            sauceDemoSite.products.item2,
            sauceDemoSite.products.item3,
            sauceDemoSite.products.item4,
            sauceDemoSite.products.item5,
        ];

        for (const item of items) {
            await expect(item).toBeVisible();
        }
    })

    test('User can buy some item0 and finish the flow', async ({sauceDemoSite}) => {
        await expect(sauceDemoSite.products.addBackpack).toBeVisible()
        await expect(sauceDemoSite.products.removeBackpack).not.toBeVisible();
        await sauceDemoSite.products.addBackpack.click();
        await expect(sauceDemoSite.products.removeBackpack).toBeVisible();
        await expect(sauceDemoSite.products.addBackpack).not.toBeVisible();
        await sauceDemoSite.products.shoppingCart.click();
        await expect(sauceDemoSite.page).toHaveURL(`${sauceDemoSite.baseUrl}/cart.html`, {timeout: 5000});
        await expect(sauceDemoSite.products.item4).toBeVisible()
        await expect(sauceDemoSite.products.removeBackpack).toBeVisible();
        await expect(sauceDemoSite.shoppingCart.checkoutButton).toBeVisible();
        await sauceDemoSite.shoppingCart.checkoutButton.click();
        await expect(sauceDemoSite.page).toHaveURL(`${sauceDemoSite.baseUrl}/checkout-step-one.html`, {timeout: 5000});
        await sauceDemoSite.checkoutStepOne.fillPersonalInfoPage(USERS.standard);
        await sauceDemoSite.checkoutStepOne.continueButton.click();
        await expect(sauceDemoSite.page).toHaveURL(`${sauceDemoSite.baseUrl}/checkout-step-two.html`, {timeout: 5000});
        await expect(sauceDemoSite.products.item4).toBeVisible()
        await expect(sauceDemoSite.checkoutStepTwo.finishButton).toBeVisible();
        await sauceDemoSite.checkoutStepTwo.finishButton.click();
        await expect(sauceDemoSite.page).toHaveURL(`${sauceDemoSite.baseUrl}/checkout-complete.html`, {timeout: 5000});
        await expect(sauceDemoSite.completePage.backToHome).toBeVisible();
        await sauceDemoSite.completePage.backToHome.click();
        await expect(sauceDemoSite.page).toHaveURL(`${sauceDemoSite.baseUrl}/inventory.html`, { timeout: 5000 });
        await sauceDemoSite.sideBar.openBurgerMenu.click();
        await expect(sauceDemoSite.sideBar.logoutButton).toBeVisible();
        await sauceDemoSite.sideBar.logoutButton.click();
        await expect(sauceDemoSite.page).toHaveURL(`${sauceDemoSite.baseUrl}`);
        await expect(sauceDemoSite.login.loginButton).toBeVisible();
    })

})