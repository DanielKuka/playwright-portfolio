import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://reqres.in',
    extraHTTPHeaders: {
      'x-api-key': process.env.REQRES_API_KEY ?? '',
    },
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'ui',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://www.saucedemo.com',
      },
      testMatch: '**/tests/ui/**/*.test.ts',
    },

    {
      name: 'api',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/api/**/*.test.ts',
    },
  ],
});