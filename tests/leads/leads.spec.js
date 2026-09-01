// import { test } from "@playwright/test";

// test("create lead", async ({ page }) => {
//   // login into application
//   await page.goto("http://49.249.29.4:8888/");
//   await page.locator('[name="user_name"]').fill("admin");
//   await page.locator('[name="user_password"]').fill("admin");
//   await page.locator("#submitButton").click();
//   // ->click on Leads link
//   await page.locator("//a[text()='Leads']").click();

//   //->click on create lead lookup image
//   await page.getByAltText("Create Lead...").click();

//   //->Enter FirstName,LastName and companyName

//   let First_name = "Bharathi";
//   let Last_name = "Mukthapuram";
//   let companyName = "Google";
//   await page.locator('[name="salutationtype"]').selectOption("Ms.");
//   await page.locator('[name="firstname"]').fill(First_name);
//   await page.locator('[name="lastname"]').fill(Last_name);
//   await page.locator('[name="company"]').fill(companyName);

//   // ->click on save Btn
//   await page.locator('(//input[@value="  Save  "])[2]').click();

//   //->verify whether the Lead is created with LastName and CompanyName in Lead Information page

//   let fn = await page.locator('[id="dtlview_First Name"]').textContent();
//   let ln = await page.locator('[id="dtlview_Last Name"]').textContent();
//   let company = await page.locator('[id="dtlview_Company"]').textContent();

//   if (Last_name == ln && First_name == fn && company == companyName) {
//     console.log("lead created successfully");
//   } else {
//     console.log("lead is not created");
//   }

//   //  Logout from the application.
//   await page.locator('[src="themes/softed/images/user.PNG"]').hover();
//   await page.getByText("Sign Out").click();
//   await page.waitForTimeout(2000);
// });


//! data driven testing with json

// import { test } from "@playwright/test";
// import commonData from "../../Data/commonData.json"


// test("create lead", async ({ page }) => {
//   // login into application
//   await page.goto(commonData.url);
//   await page.locator('[name="user_name"]').fill(commonData.userName);
//   await page.locator('[name="user_password"]').fill(commonData.password);
//   await page.locator("#submitButton").click();
//   // ->click on Leads link
//   await page.locator("//a[text()='Leads']").click();

//   //->click on create lead lookup image
//   await page.getByAltText("Create Lead...").click();

//   //->Enter FirstName,LastName and companyName

//   let First_name = "Bharathi";
//   let Last_name = "Mukthapuram";
//   let companyName = "Google";
//   await page.locator('[name="salutationtype"]').selectOption("Ms.");
//   await page.locator('[name="firstname"]').fill(First_name);
//   await page.locator('[name="lastname"]').fill(Last_name);
//   await page.locator('[name="company"]').fill(companyName);

//   // ->click on save Btn
//   await page.locator('(//input[@value="  Save  "])[2]').click();

//   //->verify whether the Lead is created with LastName and CompanyName in Lead Information page

//   let fn = await page.locator('[id="dtlview_First Name"]').textContent();
//   let ln = await page.locator('[id="dtlview_Last Name"]').textContent();
//   let company = await page.locator('[id="dtlview_Company"]').textContent();

//   if (Last_name == ln && First_name == fn && company == companyName) {
//     console.log("lead created successfully");
//   } else {
//     console.log("lead is not created");
//   }

//   //  Logout from the application.
//   await page.locator('[src="themes/softed/images/user.PNG"]').hover();
//   await page.getByText("Sign Out").click();
//   await page.waitForTimeout(2000);
// });


//! Data driven testing with Excel

import { test } from "@playwright/test";
import commonData from "../../Data/commonData.json";
import XLSX from "xlsx"
import path from "node:path";
import Login from "../../Pages/LoginPage.js"
import homePage from "../../Pages/HomePage.js"

let file_path= path.join(__dirname,"../../Data/Excel.xlsx")

test("create lead", async ({ page }) => {
  // login into application
  // await page.goto(commonData.url);
  // await page.locator('[name="user_name"]').fill(commonData.userName);
  // await page.locator('[name="user_password"]').fill(commonData.password);
  // await page.locator("#submitButton").click();
  let login = new Login(page);
  await login.gotoLoginPage(commonData.url);
  await login.loginPage(commonData.userName, commonData.password);

  let workbook=await XLSX.readFile(file_path)
  let sheet = await workbook.Sheets[workbook.SheetNames[2]]
  let Data = await XLSX.utils.sheet_to_json(sheet, {header:1})
  
  for(let data of Data){
  // ->click on Leads link
  // await page.locator("//a[text()='Leads']").click();
  // await page.getByRole("link", { name: "Leads" }).first().click();

  let home= new homePage(page)
  await home.gotoLeads()


  //->click on create lead lookup image
  await page.getByAltText("Create Lead...").click();

  //->Enter FirstName,LastName and companyName

  let First_name = data[0];
  let Last_name = data[1];
  let companyName = data[2];
  await page.locator('[name="salutationtype"]').selectOption("Ms.");
  await page.locator('[name="firstname"]').fill(First_name);
  await page.locator('[name="lastname"]').fill(Last_name);
  await page.locator('[name="company"]').fill(companyName);

  // ->click on save Btn
  await page.locator('(//input[@value="  Save  "])[2]').click();

  //->verify whether the Lead is created with LastName and CompanyName in Lead Information page

  let fn = await page.locator('[id="dtlview_First Name"]').textContent();
  let ln = await page.locator('[id="dtlview_Last Name"]').textContent();
  let company = await page.locator('[id="dtlview_Company"]').textContent();

  if (Last_name == ln && First_name == fn && company == companyName) {
    console.log(`${First_name} lead created successfully`);
  } else {
    console.log("lead is not created");
  }
}

  //  Logout from the application.
  await page.locator('[src="themes/softed/images/user.PNG"]').hover();
  await page.getByText("Sign Out").click();
  await page.waitForTimeout(2000);
});
