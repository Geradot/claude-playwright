import { test, expect } from '@playwright/test';
import { HondaMainPage } from '../pageObjects/HondaMainPage';
import { TestDrivePage } from '../pageObjects/TestDrivePage';

test.describe('Honda Main Test', () => {
  test('honda-claude-main - Complete user journey from main page to test drive', async ({ page }) => {
    const hondaMainPage = new HondaMainPage(page);
    const testDrivePage = new TestDrivePage(page);

    await test.step('Visit Honda main page', async () => {
      await hondaMainPage.goto();
    });

    await test.step('Scroll page to the bottom', async () => {
      await hondaMainPage.scrollToBottom();
    });

    await test.step('Click on ЗАПИСАТИСЯ button', async () => {
      await hondaMainPage.clickSignUpButton();
    });

    await test.step('Verify URL contains /test_drive-ua', async () => {
      await expect(page).toHaveURL(/.*test_drive-ua.*/);
    });

    await test.step('Verify "Записатися на тест-драйв" message is displayed', async () => {
      await expect(testDrivePage.heading).toBeVisible();
    });

    await test.step('Scroll page to the bottom', async () => {
      await testDrivePage.scrollToBottom();
    });

    await test.step('Verify social media links are displayed', async () => {
      const socialLinks = await testDrivePage.getSocialMediaLinks();
      await expect(socialLinks.facebook).toBeVisible();
      await expect(socialLinks.youtube).toBeVisible();
      await expect(socialLinks.instagram).toBeVisible();
    });
  });
});
