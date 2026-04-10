import { Page } from '@playwright/test'

export abstract class BasePageObject {
    readonly page: Page;
    readonly baseUrl: string;

    constructor (page:Page, baseUrl: string) {
        this.page = page;
        this.baseUrl = baseUrl;
    }

    async goto(path = '') {
        await this.page.goto(`${this.baseUrl}/${path}`);
    }
}