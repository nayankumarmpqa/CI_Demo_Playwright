import { test, expect } from '@playwright/test';
import dayjs from 'dayjs';

test('Select system date as departure date', async ({ page }) => {
  // Get today's date using dayjs
  const today = dayjs().format('DD-MM-YYYY'); // You can adjust the date format as per the website's requirement

  // Navigate to the flight booking page (replace with the actual URL)
  await page.goto('https://www.spicejet.com');

// Click on the departure date field (using visible text selector)
await page.locator("//div[normalize-space()='Departure Date']").click();

// Wait for the date picker to appear
await page.waitForSelector('div[data-testid="undefined-calendar"]', { state: 'visible', timeout: 10000 }).catch(() => {}); // fallback if testid changes

// Select today's date by matching the visible day number in the calendar
const todayDay = dayjs().date();
await page.locator(`//div[contains(@data-testid, 'undefined-calendar')]//div[text()="${todayDay}"]`).first().click();

  // You might need to trigger an action, like submitting or confirming the date
  await page.click('button[type="submit"]'); // Or another relevant action
});
