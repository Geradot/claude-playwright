import { test, expect } from '@playwright/test';
import { HondaMainPage } from '../pageObjects/HondaMainPage';

test.describe('Honda Contact Information Test', () => {
  test('honda-contact-info - Verify social links, phone numbers and emails on main page', async ({ page }) => {
    const hondaMainPage = new HondaMainPage(page);

    await test.step('Visit Honda main page', async () => {
      await hondaMainPage.goto();
    });

    await test.step('Scroll page to the bottom', async () => {
      await hondaMainPage.scrollToBottom();
    });

    await test.step('Verify the three social links are displayed', async () => {
      const socialLinks = await hondaMainPage.getSocialMediaLinks();
      await expect(socialLinks.facebook).toBeVisible();
      await expect(socialLinks.youtube).toBeVisible();
      await expect(socialLinks.instagram).toBeVisible();
    });

    await test.step('Verify the two contact phone numbers are displayed', async () => {
      const phones = await hondaMainPage.getPhoneNumbers();
      await expect(phones.phone1).toBeVisible();
      await expect(phones.phone2).toBeVisible();
    });

    await test.step('Verify the two contact emails are displayed', async () => {
      const emails = await hondaMainPage.getEmails();
      await expect(emails.email1).toBeVisible();
      await expect(emails.email2).toBeVisible();
    });
  });
});
