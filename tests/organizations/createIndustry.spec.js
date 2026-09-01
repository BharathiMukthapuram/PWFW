// import {test} from "@playwright/test"

// test("create industry", async({page})=>{
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

//     // ->select industry from industry dropdown
//     let industry_name="Telecommunications"
//     await page.locator('[name="industry"]').selectOption(industry_name)

//     // ->select type from type dropdown

//     let type="Customer"
//     await page.locator('[name="accounttype"]').selectOption(type)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the organization is created in Organization Information page
//     let orgname=await page.locator('[id="dtlview_Organization Name"]').textContent()
//     let industry=await page.locator('id="dtlview_Industry"').textContent()
//     let o_type=await page.locator('[id="dtlview_Type"]').textContent()
//     if(org==orgname && industry_name==industry && type==o_type){
//         console.log("industry created successfully")
//     }
//     else{
//         console.log("industry is not created")
//     }


//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()
//     await page.waitForTimeout(2000)
// })

// //& DDT with JSON for login

// import {test} from "@playwright/test"
// import loginData from "../../Data/commonData.json"


// let url =loginData.url
// let un =loginData.userName
// let pw=loginData.password

// test("create industry", async({page})=>{
//     // login into application
//     await page.goto(url)
//     await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()

//     // click on organizations link
//     // await page.getByText('Organizations').click()

//   await page.getByRole("link", { name: "Organizations" }).first().click();

//     // click on create organization lookup image
//     await page.locator('[alt="Create Organization..."]').click()

//     // Enter organisation name
//     let org= "Vtiger"+Math.floor(Math.random()*1000)
//     await page.locator('[name="accountname"]').fill(org)

//     // ->select industry from industry dropdown
//     let industry_name="Telecommunications"
//     await page.locator('[name="industry"]').selectOption(industry_name)

//     // ->select type from type dropdown

//     let type="Customer"
//     await page.locator('[name="accounttype"]').selectOption(type)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the organization is created in Organization Information page
//     let orgname=await page.locator('[id="dtlview_Organization Name"]').textContent()
//     let industry=await page.locator('[id="dtlview_Industry"]').textContent()
//     let o_type=await page.locator('[id="dtlview_Type"]').textContent()
//     if(org==orgname && industry_name==industry && type==o_type){
//         console.log("industry created successfully")
//     }
//     else{
//         console.log("industry is not created")
//     }


//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()
//     await page.waitForTimeout(2000)
// })




//! DDT with Excel

import { test } from "@playwright/test";
import loginData from "../../Data/commonData.json";
import XLSX from "xlsx"
import path from "node:path";

let file_path = path.join(__dirname, "../../Data/Excel.xlsx")
test("create industry", async ({ page }) => {

  let url = loginData.url;
  let un = loginData.userName;
  let pw = loginData.password;

  // login into application
  await page.goto(url);
  await page.locator('[name="user_name"]').fill(un);
  await page.locator('[name="user_password"]').fill(pw);
  await page.locator("#submitButton").click();

  let workbook=await XLSX.readFile(file_path)
  let sheet = await workbook.Sheets[workbook.SheetNames[3]]
  let Data = await XLSX.utils.sheet_to_json(sheet,{header:1})

  for(let data of Data){

  // click on organizations link
  // await page.getByText('Organizations').click()
 

  await page.getByRole("link", { name: "Organizations" }).first().click();

  // click on create organization lookup image
  await page.locator('[alt="Create Organization..."]').click();

  // Enter organisation name
  let org = data[0] + Math.floor(Math.random() * 1000);
  await page.locator('[name="accountname"]').fill(org);

  // ->select industry from industry dropdown
  let industry_name =data[1];
  await page.locator('[name="industry"]').selectOption(industry_name);

  // ->select type from type dropdown

  let type = data[2];
  await page.locator('[name="accounttype"]').selectOption(type);

  // ->click on save Btn
  await page.locator('(//input[@value="  Save  "])[2]').click();

  // ->verify whether the organization is created in Organization Information page
  let orgname = await page
    .locator('[id="dtlview_Organization Name"]')
    .textContent();
  let industry = await page.locator('[id="dtlview_Industry"]').textContent();
  let o_type = await page.locator('[id="dtlview_Type"]').textContent();
  if (org == orgname && industry_name == industry && type == o_type) {
    console.log(`${industry_name} industry created successfully`);
  } else {
    console.log("industry is not created");
  }
  }
  //  Logout from the application.
  await page.locator('[src="themes/softed/images/user.PNG"]').hover();
  await page.getByText("Sign Out").click();
  await page.waitForTimeout(2000);
});




