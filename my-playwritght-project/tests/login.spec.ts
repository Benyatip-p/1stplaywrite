import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/.*inventory.html/);

  // ตรวจสอบหัวข้อหน้า Products
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');

  await expect(page.locator('.inventory_item')).toHaveCount(6);
});