// import {test} from "@playwright/test"

// test("create organization", async({page})=>{
//     // login into application
//     await page.goto("http://49.249.29.4:8888/")
//     await page.locator('[name="user_name"]').fill("admin")
//     await page.locator('[name="user_password"]').fill('admin')
//     await page.locator('#submitButton').click()

//     // click on organizations link
//     await page.getByText('Organizations').click()

//     // click on create organization lookup image
//     await page.locator('[alt="Create Organization..."]').click()

//     // Enter organisation name
//     let org= "Vtiger"+Math.floor(Math.random()*1000)
//     await page.locator('[name="accountname"]').fill(org)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the organization is created in Organization Information page
//     let orgname=await page.locator('[id="dtlview_Organization Name"]').textContent()
//     if(org==orgname){
//         console.log("organization created successfully")
//     }
//     else{
//         console.log("organization is not created")
//     }


//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()
//     await page.waitForTimeout(2000)
// })


//! DDT with JSON


import { test } from "@playwright/test";
import commonData from "../../Data/commonData.json"
import XLSX from "xlsx"
import path from "node:path";

let file_path = path.join(__dirname, "../../Data/Excel.xlsx")

test("create organization", async ({ page }) => {
  // login into application
  await page.goto(commonData.url);
  await page.locator('[name="user_name"]').fill(commonData.userName);
  await page.locator('[name="user_password"]').fill(commonData.password);
  await page.locator("#submitButton").click();

  // click on organizations link
//   await page.getByText("Organizations").click();
 let workbook=await XLSX.readFile(file_path)
  let sheet = await workbook.Sheets[workbook.SheetNames[3]]
  let Data = await XLSX.utils.sheet_to_json(sheet,{header:1})

  for(let data of Data){

  await page.getByRole("link", { name: "Organizations" }).first().click();


  // click on create organization lookup image
  await page.locator('[alt="Create Organization..."]').click();

  // Enter organisation name
  let org = "Vtiger" + Math.floor(Math.random() * 1000);
  await page.locator('[name="accountname"]').fill(org);

  // ->click on save Btn
  await page.locator('(//input[@value="  Save  "])[2]').click();

  // ->verify whether the organization is created in Organization Information page
  let orgname = await page
    .locator('[id="dtlview_Organization Name"]')
    .textContent();
  if (org == orgname) {
    console.log("organization created successfully");
  } else {
    console.log("organization is not created");
  }
}

  //  Logout from the application.
  await page.locator('[src="themes/softed/images/user.PNG"]').hover();
  await page.getByText("Sign Out").click();
  await page.waitForTimeout(2000);
});



