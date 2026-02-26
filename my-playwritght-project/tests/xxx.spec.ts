import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  await expect(page.getByRole('heading')).toContainText('todos');

  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('I love Gay');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  
  await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('button', { name: 'Clear completed' }).click();
});