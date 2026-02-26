import { test, expect } from '@playwright/test';

test('assertion test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret');
  await page.locator('[data-test="login-button"]').click();

  // ── เมื่อ Login ผิดพลาด ──────────────────────────────
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]'))
         .toContainText('Username and password do not match');

  // ตรวจว่า Input field ถูก highlight แดง
  await expect(page.getByPlaceholder('Username')).toHaveClass(/error/);

  await page.locator('.error-button').click();
  await expect(page.getByTestId('error')).not.toBeVisible();

});