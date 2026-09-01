// import {test} from "@playwright/test"

// test("create Product", async({page})=>{
//     // login into application
//     await page.goto("http://49.249.29.4:8888/")
//      await page.locator('[name="user_name"]').fill("admin")
//     await page.locator('[name="user_password"]').fill('admin')
//     await page.locator('#submitButton').click()

//     // ->click on products link
//     await page.locator("//a[text()='Products']").click()
//     // ->click on create product lookup image
//     await page.getByAltText('Create Product...').click()

//     let product="mango"
//     // ->Enter product name
//     await page.locator('[name="productname"]').fill(product)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     //->verify whether the product is created in product Information page
//     let prod=await page.locator('[id="dtlview_Product Name"]').textContent()

//     if(prod==product){
//         console.log("product created successfully")
//     }
//     else{
//         console.log("product is not created")
//     }

    
//      //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()    
//     await page.waitForTimeout(2000)
// })

//! DDT with JSON


// import { test } from "@playwright/test";
// import commonData from "../../Data/commonData.json"

// test("create Product", async ({ page }) => {
//   // login into application
//   await page.goto(commonData.url);
//   await page.locator('[name="user_name"]').fill(commonData.userName);
//   await page.locator('[name="user_password"]').fill(commonData.password);
//   await page.locator("#submitButton").click();

//   // ->click on products link
//   await page.locator("//a[text()='Products']").click();
//   // ->click on create product lookup image
//   await page.getByAltText("Create Product...").click();

//   let product = "mango";
//   // ->Enter product name
//   await page.locator('[name="productname"]').fill(product);

//   // ->click on save Btn
//   await page.locator('(//input[@value="  Save  "])[2]').click();

//   //->verify whether the product is created in product Information page
//   let prod = await page.locator('[id="dtlview_Product Name"]').textContent();

//   if (prod == product) {
//     console.log("product created successfully");
//   } else {
//     console.log("product is not created");
//   }

//   //  Logout from the application.
//   await page.locator('[src="themes/softed/images/user.PNG"]').hover();
//   await page.getByText("Sign Out").click();
//   await page.waitForTimeout(2000);
// });


//! DDT with Excel

import { test } from "@playwright/test";
import commonData from "../../Data/commonData.json";
import XLSX from "xlsx"
import path from "node:path";

let file_path=path.join(__dirname,"../../Data/Excel.xlsx")

test("create Product", async ({ page }) => {
  // login into application
  await page.goto(commonData.url);
  await page.locator('[name="user_name"]').fill(commonData.userName);
  await page.locator('[name="user_password"]').fill(commonData.password);
  await page.locator("#submitButton").click();

  let workbook=await XLSX.readFile(file_path)
    let sheet = await workbook.Sheets[workbook.SheetNames[4]]
    let Data = await XLSX.utils.sheet_to_json(sheet,{header:1})

    for(let data of Data){
  // ->click on products link
//   await page.locator("//a[text()='Products']").click();

  await page.getByRole("link", { name: "Products" }).first().click();

  // ->click on create product lookup image
  await page.getByAltText("Create Product...").click();

  let product = data[0];
  // ->Enter product name
  await page.locator('[name="productname"]').fill(product);

  // ->click on save Btn
  await page.locator('(//input[@value="  Save  "])[2]').click();

  //->verify whether the product is created in product Information page
  let prod = await page.locator('[id="dtlview_Product Name"]').textContent();

  if (prod == product) {
    console.log(`${product} product created successfully`);
  } else {
    console.log("product is not created");
  }
    }
  //  Logout from the application.
  await page.locator('[src="themes/softed/images/user.PNG"]').hover();
  await page.getByText("Sign Out").click();
  await page.waitForTimeout(2000);
});


test("deleteProduct",async({page})=>{
  
})
