//import {test, expect} from '@playwright/test'
const {test, expect} = require('@playwright/test')

test ('name', async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html");

await page.locator('#login2').click();
   //await page.click('#login2');

    await page.click('#loginusername');
    await page.fill('#loginusername', 'valuetextassendkeys');

    await page.click('#loginpassword');
    await page.fill('#loginpassword','valuepasswordassendkeys');

await page.locator("//button[normalize-space()='Log in']").click();

await page.locator("//div[@id='logInModal']//button[@type='button'][normalize-space()='Close']").click();

const logoutElement = await page.locator("#signin2");

await expect(logoutElement).toBeVisible();

page.close();
})