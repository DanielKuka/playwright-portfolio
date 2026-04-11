import { expect, test } from '../../fixtures/auth.fixture';
import {USERS} from '../../test-data/saucedemo/user-credentials'

test.describe('Login page', () => {
    test.beforeEach(async ({sauceDemoSite}) => {
        await sauceDemoSite.login.open();
    })

    test('Login page should be rendered', async ({ sauceDemoSite }) => {
        await expect(sauceDemoSite.page).toHaveURL(`${sauceDemoSite.baseUrl}`)
        await expect(sauceDemoSite.login.loginButton).toBeVisible();
    })

    test('Should login with valid credentials', async ({sauceDemoSite}) => {
        await sauceDemoSite.login.fillLoginForm(USERS.standard);
        await sauceDemoSite.login.submit()
        await expect(sauceDemoSite.page).toHaveURL(`${sauceDemoSite.baseUrl}/inventory.html`, { timeout: 5000 });
    })

    test('Should show error with invalid credentials', async ({sauceDemoSite}) => {
        await sauceDemoSite.login.fillLoginForm(USERS.nonValid);
        await sauceDemoSite.login.submit();
        await expect(sauceDemoSite.login.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })
})

