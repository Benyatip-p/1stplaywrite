// 1️⃣ Import test และ expect จาก Playwright
import { test, expect } from '@playwright/test';

// 2️⃣ เขียน Test Case แรก
test('has title', async ({ page }) => {
  // เปิดเว็บไซต์
  await page.goto('https://playwright.dev/');

  // ตรวจสอบว่า Title มีคำว่า "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
});

// 3️⃣ เขียน Test Case ที่สอง
test('get started link', async ({ page }) => {
  // เปิดเว็บไซต์
  await page.goto('https://playwright.dev/');

  // คลิกลิงก์ "Get started"
  await page.getByRole('link', { name: 'Get started' }).click();

  // ตรวจสอบว่า Heading มีข้อความ "Installation"
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});