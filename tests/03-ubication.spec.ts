import { test, expect } from '@playwright/test';

test.describe('Ubication Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render location information and valid external map links', async ({
    page,
  }) => {
    const mapLink = page.getByRole('link', { name: 'Abrir en google maps' });
    const directionsLink = page.getByRole('link', {
      name: 'Ver ruta en google maps',
    });

    await expect(mapLink).toBeVisible();
    await expect(mapLink).toHaveAttribute('target', '_blank');
    await expect(mapLink).toHaveAttribute('rel', 'noopener noreferrer');

    await expect(directionsLink).toBeVisible();
    await expect(directionsLink).toHaveAttribute('target', '_blank');
    await expect(directionsLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
