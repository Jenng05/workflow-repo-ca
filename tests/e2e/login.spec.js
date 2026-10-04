import { test, expect } from '@playwright/test';

test.describe('login', () => {
  test('user can log in with valid credentials', async ({ page }) => {
    await page.goto('/login/');
    await page.locator('input[name="email"]').fill(process.env.LOGIN_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.LOGIN_PASSWORD);
    await page.locator('#loginForm button').click();
    await expect(page.getByRole('button', { name: /log ?out/i })).toBeVisible();
  });

  test('user sees an error message with invalid credentials', async ({
    page,
  }) => {
    await page.goto('/login/');
    await page.locator('input[name="email"]').fill('wrong@stud.noroff.no');
    await page.locator('input[name="password"]').fill('wrongpassword123');
    await page.locator('#loginForm button').click();
    await expect(page.getByRole('alert')).toBeVisible();
  });
});
