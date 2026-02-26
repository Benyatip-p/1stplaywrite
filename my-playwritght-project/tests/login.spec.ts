import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toContainText('Products');

  // wait for 5 seconds to see the result before closing the browser
  await page.waitForTimeout(5000);
});
