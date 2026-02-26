import { test, expect } from '@playwright/test';

test('sort products', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // 1. เลือก Sort by Price (low to high)
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
  // 2. ตรวจสอบว่า สินค้าตัวแรก มีราคา $7.99
  const firstProductPrice = page.locator('.inventory_item_price').first();
  await expect(firstProductPrice).toHaveText('$7.99');
  
});