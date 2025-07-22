import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.whistle.com/');
  await page.getByRole('link', { name: 'Shop', exact: true }).click();
  await page.getByRole('link', { name: 'Leashes and Collars' }).click();
  await page.getByRole('link', { name: 'Product whistle dog collar' }).nth(1).click();
  await page.getByRole('link', { name: 'Shop' }).click();
  await page.getByRole('link', { name: 'Product whistle health gps dog tracker activity monitor' }).nth(1).click();
  await page.getByRole('button', { name: 'Device + plan' }).click();
  await page.getByRole('link', { name: 'Shop All' }).click();
  await page.getByRole('link', { name: 'Whistle Switch GPS Smart' }).click();
});