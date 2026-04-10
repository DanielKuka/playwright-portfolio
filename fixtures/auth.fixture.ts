import {SauceDemoSite} from "../pages";
import { test as base } from '@playwright/test';


interface MyFixtures {
    sauceDemoSite: SauceDemoSite;
}

export const test = base.extend<MyFixtures>({
    sauceDemoSite: async ({ page }, use) => {
        const sauceDemoSite = new SauceDemoSite(page);
        await use(sauceDemoSite);
    },
});

export { expect } from '@playwright/test';