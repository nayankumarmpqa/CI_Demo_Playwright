const {test, expect} = require('@playwright/test')

test('testname1', async({page})=>{

    await page.goto('https://www.wisdompanel.com/en-us');

    // expect assertion
    await expect(page).toHaveTitle('Wisdom Panel™ | The world\'s most accurate pet DNA test service');

    const pageTtile = await page.title();
    console.log(pageTtile);
    const pageURL = await page.url();
    console.log(pageURL);
    
   await expect(page).toHaveURL('https://www.wisdompanel.com/en-us');


    page.close();

})