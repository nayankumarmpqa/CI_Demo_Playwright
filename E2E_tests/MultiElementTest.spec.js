import{test, expect} from '@playwright/test'

test('tname2', async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html");

   const elements =  await page.$$('a'); // Get all <a> tags
   
    
   console.log(`Total number of <a> tags on page: ${elements.length}`);
       
   console.log(elements.length);


   for(const eachElem of elements){

    const linkLabel = await eachElem.textContent();
    //console.log(linlabel);

    console.log(linkLabel?.trim()); // Optional chaining + trim

   }
})