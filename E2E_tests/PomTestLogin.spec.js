import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/WisdomLognPage';

test('@smoke Login test works', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goToLoginPage();
  await expect(page).toHaveTitle(loginPage.pageTitle);

  // Directly use locators from the LoginPage class
  await expect.soft(loginPage.welcomeBack).toBeVisible();
  await expect.soft(loginPage.wisdomHealthLogo).toBeVisible();
  await expect.soft(loginPage.newToWisdomPanelDiv).toBeVisible();
  await expect.soft(loginPage.activateYourKitLink).toBeVisible();
  await expect.soft(loginPage.help).toBeVisible();
  await expect.soft(loginPage.privacy).toBeVisible();
  await expect.soft(loginPage.termsConditions).toBeVisible();
  await expect.soft(loginPage.copyrightText).toBeVisible();

  // Optional: table image visibility (uncomment if needed)
  // await expect(loginPage.tableImage).toBeVisible();

  await loginPage.login('coco@wisdompanel.com', 'passwerk1234');

  await page.waitForTimeout(5000); // Consider using a smarter wait instead of timeout

  await expect.soft(page).toHaveTitle('Wisdom Panel™');
  await expect.soft(loginPage.profileButton).toContainText('Coco');

  await page.close();
});
