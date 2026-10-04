import { test, expect } from '@playwright/test';

test.describe('navigation', () => {
  test('user can navigate from home page to venue details', async ({
    page,
  }) => {
    await page.goto('/');

    const firstVenue = page.locator('a[href^="/venue/"]').first();
    await expect(firstVenue).toBeVisible();

    await firstVenue.click();

    await expect(
      page.getByRole('heading', { name: /venue details/i }),
    ).toBeVisible();
  });
});
