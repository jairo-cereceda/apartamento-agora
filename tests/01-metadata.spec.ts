import { test, expect } from '@playwright/test';

test.describe('Metadata & Layout', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have the correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(
      /Apartamento Agora \| Alojamiento en Las Redes en El Puerto de Santa María/i
    );
  });

  test('should have essential Open Graph meta tags', async ({ page }) => {
    const ogTitle = page.locator('head meta[property="og:title"]');
    const ogDescription = page.locator('head meta[property="og:description"]');
    const ogType = page.locator('head meta[property="og:type"]');

    await expect(ogTitle).toHaveAttribute(
      'content',
      'Apartamento Vacacional | Tu escapada perfecta'
    );
    await expect(ogDescription).toHaveAttribute(
      'content',
      'Un alojamiento cómodo y acogedor para disfrutar de unos días de descanso y desconexión.'
    );
    await expect(ogType).toHaveAttribute('content', 'website');
  });

  test('should contain a functional skip-to-content link', async ({ page }) => {
    const skipLink = page.getByRole('link', {
      name: 'Ir al contenido principal',
    });
    await expect(skipLink).toHaveAttribute('href', '#main');

    const mainContent = page.locator('#main');
    await expect(mainContent).toBeAttached();
  });
});
