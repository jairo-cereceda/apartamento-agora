import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should allow user to type into form fields', async ({ page }) => {
    const nameInput = page.getByLabel('Tu nombre:');
    const emailInput = page.getByLabel('Tu correo:');
    const messageInput = page.getByLabel('Mensaje:');

    await nameInput.fill('John Doe');
    await emailInput.fill('john@example.com');
    await messageInput.fill('Hello, I am interested in booking.');

    await expect(nameInput).toHaveValue('John Doe');
    await expect(emailInput).toHaveValue('john@example.com');
    await expect(messageInput).toHaveValue(
      'Hello, I am interested in booking.'
    );
  });
});
