import { test, expect } from '@playwright/test';

test.describe('Hero Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render hero title and background image', async ({ page }) => {
    const mainHeading = page.locator('section #hero-info h1');
    await expect(mainHeading).toBeVisible();

    const heroImage = page.locator('section img').first();
    await expect(heroImage).toBeVisible();
  });
});
