import { test, expect } from '@playwright/test';

test.describe('Fictional Popup (Demo Dialog)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('dialog should be closed by default', async ({ page }) => {
    const dialog = page.locator('#fictional-popup');
    await expect(dialog).not.toHaveAttribute('open', '');
  });

  test('should open dialog when clicking the WhatsApp button', async ({
    page,
  }) => {
    const dialog = page.locator('#fictional-popup');
    const whatsappButton = page.getByRole('button', {
      name: /Háblanos por whatsapp/i,
    });

    await whatsappButton.scrollIntoViewIfNeeded();
    await expect(async () => {
      await whatsappButton.click();
      await expect(dialog).toHaveAttribute('open', '', { timeout: 1000 });
    }).toPass({ timeout: 5000 });

    await expect(dialog).toBeVisible();
    await expect(page.getByRole('heading', { name: /DEMO/i })).toBeVisible();
  });

  test('should open dialog when clicking the form Send button', async ({
    page,
  }) => {
    const dialog = page.locator('#fictional-popup');
    const sendButton = page.getByRole('button', { name: 'Enviar' });

    await sendButton.scrollIntoViewIfNeeded();
    await expect(async () => {
      await sendButton.click();
      await expect(dialog).toHaveAttribute('open', '', { timeout: 1000 });
    }).toPass({ timeout: 5000 });

    await expect(dialog).toBeVisible();
  });

  test('should close dialog when clicking the close button', async ({
    page,
  }) => {
    const dialog = page.locator('#fictional-popup');
    const openButton = page.getByRole('button', {
      name: /Háblanos por whatsapp/i,
    });
    const closeButton = page.locator('#fictional-popup-close');

    await openButton.click();
    await expect(dialog).toHaveAttribute('open', '');

    await closeButton.click();
    await expect(dialog).not.toHaveAttribute('open', '');
  });

  test('should close dialog when pressing the Escape key', async ({ page }) => {
    const dialog = page.locator('#fictional-popup');
    const openButton = page.getByRole('button', {
      name: /Háblanos por whatsapp/i,
    });

    await openButton.click();
    await expect(dialog).toHaveAttribute('open', '');

    await page.keyboard.press('Escape');
    await expect(dialog).not.toHaveAttribute('open', '');
  });

  test('should close dialog when clicking outside the content', async ({
    page,
  }) => {
    const dialog = page.locator('#fictional-popup');
    const openButton = page.getByRole('button', {
      name: /Háblanos por whatsapp/i,
    });

    await openButton.click();
    await expect(dialog).toHaveAttribute('open', '');

    await dialog.click({ position: { x: 10, y: 10 } });
    await expect(dialog).not.toHaveAttribute('open', '');
  });

  test('should verify the portfolio link inside the popup', async ({
    page,
  }) => {
    const dialog = page.locator('#fictional-popup');
    const openButton = page.getByRole('button', {
      name: /Háblanos por whatsapp/i,
    });

    await openButton.scrollIntoViewIfNeeded();
    await expect(async () => {
      await openButton.click();
      await expect(dialog).toHaveAttribute('open', '', { timeout: 1000 });
    }).toPass({ timeout: 5000 });

    const portfolioLink = dialog.locator('a');
    await expect(portfolioLink).toBeVisible();
    await expect(portfolioLink).toHaveAttribute(
      'href',
      'https://jairo-cereceda.github.io/'
    );
    await expect(portfolioLink).toHaveText('Visita mi portfolio');
  });
});
