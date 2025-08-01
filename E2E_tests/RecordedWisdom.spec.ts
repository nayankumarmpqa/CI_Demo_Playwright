import { test, expect } from '@playwright/test';

test('Wisdomtest', async ({ page }) => {
  await page.goto('https://wh-wisdom-staging.herokuapp.com/app/');

  await expect(page).toHaveURL('https://wh-wisdom-staging.herokuapp.com/app/');
  await expect(page).toHaveTitle('Sign in to your account | Wisdom Panel™ pet DNA tests');

 // await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('coco@wisdompanel.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('passwerk1234');
 
  await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
  await page.getByRole('button', { name: 'Sign In' }).click();
  
  await expect(page.getByLabel('My Animals').locator('span')).toContainText('My Animals');
  await expect(page.getByRole('link', { name: 'Breeder Advanced', exact: true })).toBeVisible();
  
  await page.getByRole('button', { name: 'dropdown' }).click();
 // await page.getByRole('link', { name: 'Manage Account' }).click({
 //   button: 'right'
 // });
  await page.getByRole('link', { name: 'Manage Account' }).click();
  
  await expect(page.locator('h1')).toContainText('Manage your account.');
  await expect(page.locator('#user-full-name')).toContainText('Coco Owner');
  await expect(page.getByText('© 2025 Mars, Inc. All Rights')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Wisdom Health' })).toBeVisible();
  
  await page.getByRole('button', { name: 'dropdown' }).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
  
  await expect(page.getByRole('heading', { name: 'Welcome back.' })).toBeVisible();
  await expect(page.locator('body')).toContainText('New to Wisdom Panel? Activate your kit');

  await page.close();


});