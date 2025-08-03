import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/WisdomLognPage';

test('testname', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await expect(page).toHaveTitle(loginPage.pageTitle);    
    await expect(page.locator(loginPage.welcomeBack)).toBeVisible();
    await expect(page.locator(loginPage.wisdomHealthLogo)).toBeVisible();
    await expect(page.locator(loginPage.newToWisdomPanelDiv)).toBeVisible();
    await expect(page.locator(loginPage.activateYourKitLink)).toBeVisible();
    await expect(page.locator(loginPage.help)).toBeVisible();
    await expect(page.locator(loginPage.privacy)).toBeVisible();    
    await expect(page.locator(loginPage.termsConditions)).toBeVisible();
    await expect(page.locator(loginPage.copyrightText)).toBeVisible();
   // await expect(page.locator(loginPage.tableImage)).toBeVisible();
    await loginPage.login('coco@wisdompanel.com', 'passwerk1234');
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle('Wisdom Panel™');
await expect(page.locator(loginPage.profileButton)).toContainText('Coco');
});

