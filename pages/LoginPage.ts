import type { Page } from '@playwright/test'
import {BasePageObject} from "./BasePageObject";

export class LoginPage extends BasePageObject {
    constructor(page: Page, baseUrl: string) {
        super(page, baseUrl)
    }

    // Inputs & buttons
    userNameInput = this.page.locator('[data-test="username"]');
    passwordInput = this.page.locator('[data-test="password"]');
    loginButton = this.page.locator('[data-test="login-button"]');

    // Errors
    errorMessage = this.page.locator('[data-test="error"]');

    async open() {
        await this.goto('')
    }

    async fillLoginForm (user: {username: string, password: string}) {
        await this.userNameInput.fill(user.username);
        await this.passwordInput.fill(user.password);
    }

    async submit() {
        await this.loginButton.click();
    }

}