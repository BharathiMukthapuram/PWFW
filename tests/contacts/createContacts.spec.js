// import { test } from "@playwright/test";

// test("create product", async ({ page }) => {
//   // login into application
//   await page.goto("http://49.249.29.4:8888/");
//   await page.locator('[name="user_name"]').fill("admin");
//   await page.locator('[name="user_password"]').fill("admin");
//   await page.locator("#submitButton").click();

//   // ->click on Contacts link
//   await page.getByText("Contacts").click();

//   // ->click on create contact lookup image
//   await page.getByAltText("Create Contact...").click();

//   // ->Enter FirstName and LastName

//   let FN = "Bharathi";
//   await page.locator('[name="salutationtype"]').selectOption("Ms.");
//   await page.locator('[name="firstname"]').fill(FN);
//   let LN = "Mukthapuram";
//   await page.locator('[name="lastname"]').fill(LN);

//   // ->click on save Btn

//   await page.locator('(//input[@value="  Save  "])[2]').click();

//   // ->verify whether the Contact is created with firstName and LastName in Contact Information page
//   let fn = await page.locator('[id="dtlview_First Name"]').textContent();
//   let ln = await page.locator('[id="dtlview_Last Name"]').textContent();
//   if (fn == FN && ln == LN) {
//     console.log("contact created successfully");
//   } else {
//     console.log("contact is not created");
//   }

//   //  Logout from the application.
//   await page.locator('[src="themes/softed/images/user.PNG"]').hover();
//   await page.getByText("Sign Out").click();
//   await page.waitForTimeout(2000);
// });

//! Data driven testing using Excel

// import { test } from "@playwright/test";
// import commonData from "../../Data/commonData.json"
// test("create product", async ({ page }) => {
//   // login into application
//   await page.goto(commonData.url);
//   await page.locator('[name="user_name"]').fill(commonData.userName);
//   await page.locator('[name="user_password"]').fill(commonData.password);
//   await page.locator("#submitButton").click();

//   // ->click on Contacts link
//   await page.getByText("Contacts").click();

//   // ->click on create contact lookup image
//   await page.getByAltText("Create Contact...").click();

//   // ->Enter FirstName and LastName

//   let FN = "Bharathi";
//   await page.locator('[name="salutationtype"]').selectOption("Ms.");
//   await page.locator('[name="firstname"]').fill(FN);
//   let LN = "Mukthapuram";
//   await page.locator('[name="lastname"]').fill(LN);

//   // ->click on save Btn

//   await page.locator('(//input[@value="  Save  "])[2]').click();

//   // ->verify whether the Contact is created with firstName and LastName in Contact Information page
//   let fn = await page.locator('[id="dtlview_First Name"]').textContent();
//   let ln = await page.locator('[id="dtlview_Last Name"]').textContent();
//   if (fn == FN && ln == LN) {
//     console.log("contact created successfully");
//   } else {
//     console.log("contact is not created");
//   }

//   //  Logout from the application.
//   await page.locator('[src="themes/softed/images/user.PNG"]').hover();
//   await page.getByText("Sign Out").click();
//   await page.waitForTimeout(2000);
// });


//! data driven testing with Excel


import { test } from "@playwright/test";
import commonData from "../../Data/commonData.json";
import XLSX from "xlsx"
import path from "node:path";
import Login from "../../Pages/LoginPage.js"
import homePage from "../../Pages/HomePage.js"
import ExcelData from "../../Utilities/ExcelUtil";


let file_path=path.join(__dirname,"../../Data/Excel.xlsx")
test("create product", async ({ page }) => {
  // login into application
  // await page.goto(commonData.url);
  // await page.locator('[name="user_name"]').fill(commonData.userName);
  // await page.locator('[name="user_password"]').fill(commonData.password);
  // await page.locator("#submitButton").click();

  let login = new Login(page);
  await login.gotoLoginPage(commonData.url);
  await login.loginPage(commonData.userName, commonData.password);

//  let workbook= await XLSX.readFile(file_path)
//  let sheet = await workbook.Sheets[workbook.SheetNames[1]]
//  let Data = await XLSX.utils.sheet_to_json(sheet,{header:1})
let ExcelObj = new ExcelData();
let Data = await ExcelObj.readExcel(file_path,1);

console.log(Data)

 for(let data of Data){
  // ->click on Contacts link
  // await page.getByRole('link', {name:"Contacts"}).first().click();

  let home= new homePage(page)
  await home.gotoContacts()
  // ->click on create contact lookup image
  await page.getByAltText("Create Contact...").click();

  // ->Enter FirstName and LastName

  let FN = data[0]
  await page.locator('[name="salutationtype"]').selectOption("Ms.");
  await page.locator('[name="firstname"]').fill(FN);
  let LN = data[1]
  await page.locator('[name="lastname"]').fill(LN);

  // ->click on save Btn

  await page.locator('(//input[@value="  Save  "])[2]').click();

  // ->verify whether the Contact is created with firstName and LastName in Contact Information page
  let fn = await page.locator('[id="dtlview_First Name"]').textContent();
  let ln = await page.locator('[id="dtlview_Last Name"]').textContent();
  if (fn == FN && ln == LN) {
    console.log(`${FN} ${LN} contact created successfully`);
  } else {
    console.log("contact is not created");
  }
  await page.goBack()
 }
  //  Logout from the application.
  await page.locator('[src="themes/softed/images/user.PNG"]').hover();
  await page.getByText("Sign Out").click();
  await page.waitForTimeout(2000);
});