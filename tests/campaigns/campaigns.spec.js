// import { test } from "@playwright/test";

// test("create campaign", async ({ page }) => {
//   // login into application
//   await page.goto("http://49.249.29.4:8888/");
//   await page.locator('[name="user_name"]').fill("admin");
//   await page.locator('[name="user_password"]').fill("admin");
//   await page.locator("#submitButton").click();

//   // ->mouseOverOn more Link
//   await page.locator('//a[text()="More"]').hover();

//   // ->click on campaigns
//   await page.locator('[name="Campaigns"]').click();

//   // ->click on create campaign lookup image
//   await page.locator('[alt="Create Campaign..."]').click();

//   // ->Enter campaignName
//   let campaignname = "campaign1";
//   await page.locator('[name="campaignname"]').fill(campaignname);

//   // ->click on save Btn
//   await page.locator('(//input[@value="  Save  "])[2]').click();

//   let camp = await page.locator('[id="dtlview_Campaign Name"]').textContent();
//   if (camp == campaignname) {
//     console.log("campaign created successfully");
//   } else {
//     console.log("campaign is not created");
//   }

//   //  Logout from the application.
//   await page.locator('[src="themes/softed/images/user.PNG"]').hover();
//   await page.getByText("Sign Out").click();

//   await page.waitForTimeout(2000);
// });

//! data driven testing using JSON

// import { test } from "@playwright/test";
// import commonData from "../../Data/commonData.json";

// test("create campaign", async ({ page }) => {
//   // login into application
//   await page.goto(commonData.url);
//   await page.locator('[name="user_name"]').fill(commonData.userName);
//   await page.locator('[name="user_password"]').fill(commonData.password);
//   await page.locator("#submitButton").click();

//   // ->mouseOverOn more Link
//   await page.locator('//a[text()="More"]').hover();

//   // ->click on campaigns
//   await page.locator('[name="Campaigns"]').click();

//   // ->click on create campaign lookup image
//   await page.locator('[alt="Create Campaign..."]').click();

//   // ->Enter campaignName
//   let campaignname = "campaign1";
//   await page.locator('[name="campaignname"]').fill(campaignname);

//   // ->click on save Btn
//   await page.locator('(//input[@value="  Save  "])[2]').click();

//   let camp = await page.locator('[id="dtlview_Campaign Name"]').textContent();
//   if (camp == campaignname) {
//     console.log("campaign created successfully");
//   } else {
//     console.log("campaign is not created");
//   }

//   //  Logout from the application.
//   await page.locator('[src="themes/softed/images/user.PNG"]').hover();
//   await page.getByText("Sign Out").click();

//   await page.waitForTimeout(2000);
// });

//! Data driven testing using Excel


// import { test } from "@playwright/test";
// import commonData from "../../Data/commonData.json";
// import XLSX from "xlsx"
// import path from "node:path";
// let file_path = path.join(__dirname,'../../Data/Excel.xlsx');

// test("create campaign", async ({ page }) => {
//   // login into application
//   await page.goto(commonData.url);
//   await page.locator('[name="user_name"]').fill(commonData.userName);
//   await page.locator('[name="user_password"]').fill(commonData.password);
//   await page.locator("#submitButton").click();

//   let workbook=await XLSX.readFile(file_path)
//   let sheet=await workbook.Sheets[workbook.SheetNames[0]]
//   let Data= XLSX.utils.sheet_to_json(sheet,{header:1})

//   console.log(Data)
//   for(let data of Data){
//     let campaignName= data[0]

//   // ->mouseOverOn more Link
//   await page.locator('//a[text()="More"]').hover();

//   // ->click on campaigns
//   await page.locator('[name="Campaigns"]').click();

//   // ->click on create campaign lookup image
//   await page.locator('[alt="Create Campaign..."]').click();

//   // ->Enter campaignName
// //   let campaignname = "campaign1";
//   await page.locator('[name="campaignname"]').fill(campaignName);

//   // ->click on save Btn
//   await page.locator('(//input[@value="  Save  "])[2]').click();

//   let camp = await page.locator('[id="dtlview_Campaign Name"]').textContent();
//   if (camp == campaignName) {
//     console.log(`${campaignName} is successfully created.`);
//   } else {
//     console.log("campaign is not created");
//   }
// }

//   //  Logout from the application.
//   await page.locator('[src="themes/softed/images/user.PNG"]').hover();
//   await page.getByText("Sign Out").click();
  
//   await page.waitForTimeout(2000);

// });


//& Hooks & POM

// import { expect, test } from "@playwright/test";
// import commonData from "../../Data/commonData.json";
// import XLSX from "xlsx"
// import path from "node:path";
// import Login from "../../Pages/LoginPage.js"
// import homePage from "../../Pages/HomePage.js"
// import CamapaignsPage from "../../Pages/Campaigns/campaignsPage.js";
// import createCampaignPage from "../../Pages/Campaigns/createCampaignsPage.js"
// import campaignsInformation from "../../Pages/Campaigns/campaignsInformationPage.js"

// let file_path = path.join(__dirname,'../../Data/Excel.xlsx');
// let context;
// let page;
// let campaign
// let home

// test.beforeAll(async({browser})=>{
//   context= await browser.newContext()
//   page = await context.newPage()
//   let login = new Login(page);
//   await login.gotoLoginPage(commonData.url);
//   await login.loginPage(commonData.userName, commonData.password);
//    home = new homePage(page);
//    await home.gotoCampaigns();
//     campaign = new CamapaignsPage(page);
// })

// test.afterAll(async()=>{
// await page.locator('[src="themes/softed/images/user.PNG"]').hover();
// await page.getByText("Sign Out").click();
// await page.waitForTimeout(2000);
// })

// test("create campaign", async () => {


//   let workbook=await XLSX.readFile(file_path)
//   let sheet=await workbook.Sheets[workbook.SheetNames[0]]
//   let Data= XLSX.utils.sheet_to_json(sheet,{header:1})

//   console.log(Data)
//   for(let data of Data){
//     let campaignName= data[0]

   
//     await campaign.clickOnLookupImage()

//     let createCampaign =new createCampaignPage(page)
//     await createCampaign.create(campaignName)

//     let campaignInfo= new campaignsInformation(page)
//     let camp=await campaignInfo.validation()

//     console.log(camp)
//     if (camp == campaignName) {
//       console.log(`${campaignName} is successfully created.`);
//     } else {
//       console.log("campaign is not created");
//     }

//   // ->click on create campaign lookup image
//   await page.locator('[alt="Create Campaign..."]').click();

//   // ->Enter campaignName
// //   let campaignname = "campaign1";
//   await page.locator('[name="campaignname"]').fill(campaignName);

//   // ->click on save Btn
//   await page.locator('(//input[@value="  Save  "])[2]').click();

//   let camp = await page.locator('[id="dtlview_Campaign Name"]').textContent();
//   if (camp == campaignName) {
//     console.log(`${campaignName} is successfully created.`);
//   } else {
//     console.log("campaign is not created");
//   }
// }

  //  Logout from the application.
  // await page.locator('[src="themes/softed/images/user.PNG"]').hover();
  // await page.getByText("Sign Out").click();
  // await page.waitForTimeout(2000);

// });


// test("deleteCampaign",async()=>{
//    await home.gotoCampaigns();

//    page.on('dialog', (d)=>{
//     d.accept()
//    })
//   let text= await campaign.DeletingCampaign()
//    await campaign.Delete_campaign()
  
//   await expect(page.getByText(text)).toBeHidden()
//    await page.waitForTimeout(3000)

// })
 

//! Utilities

// import { test } from "@playwright/test";
// import commonData from "../../Data/commonData.json";
// import XLSX from "xlsx";
// import path from "node:path";
// let file_path = path.join(__dirname, "../../Data/Excel.xlsx");
// import ExcelData from "../../Utilities/ExcelUtil.js"
// import ScreenShot from "../../Utilities/screenShotutil.js"
// test("create campaign", async ({ page }) => {
//   // login into application
//   await page.goto(commonData.url);
//   await page.locator('[name="user_name"]').fill(commonData.userName);
//   await page.locator('[name="user_password"]').fill(commonData.password);
//   await page.locator("#submitButton").click();

//   await ScreenShot(page,"Login")

//  let ExcelObj= new ExcelData()
//  let Data= await ExcelObj.readExcel(file_path,0)

//   console.log(Data);
//   for (let data of Data) {
//     let campaignName = data[0];

//     // ->mouseOverOn more Link
//     await page.locator('//a[text()="More"]').hover();

//     // ->click on campaigns
//     await page.locator('[name="Campaigns"]').click();

//     // ->click on create campaign lookup image
//     await page.locator('[alt="Create Campaign..."]').click();

//     // ->Enter campaignName
//     //   let campaignname = "campaign1";
//     await page.locator('[name="campaignname"]').fill(campaignName);

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click();

//     let camp = await page.locator('[id="dtlview_Campaign Name"]').textContent();
//     if (camp == campaignName) {
//       console.log(`${campaignName} is successfully created.`);
//     } else {
//       console.log("campaign is not created");
//     }
//   }

//   //  Logout from the application.
//   await page.locator('[src="themes/softed/images/user.PNG"]').hover();
//   await page.getByText("Sign Out").click();

//   // await page.waitForTimeout(2000);
// });


//! Login custom fixtures
import { test} from "../../CustomFixtures/LoginPage.js";
import path from "node:path";
let file_path = path.join(__dirname, "../../Data/Excel.xlsx");
import ExcelData from "../../Utilities/ExcelUtil.js";
import ScreenShot from "../../Utilities/screenShotutil.js";

test("create campaign", async ({ page , LoginPage}) => {
  // login into application

  await ScreenShot(page, "Login");

  let ExcelObj = new ExcelData();
  let Data = await ExcelObj.readExcel(file_path, 0);

  console.log(Data);
  for (let data of Data) {
    let campaignName = data[0];

    // ->mouseOverOn more Link
    await page.locator('//a[text()="More"]').hover();

    // ->click on campaigns
    await page.locator('[name="Campaigns"]').click();

    // ->click on create campaign lookup image
    await page.locator('[alt="Create Campaign..."]').click();

    // ->Enter campaignName
    //   let campaignname = "campaign1";
    await page.locator('[name="campaignname"]').fill(campaignName);

    // ->click on save Btn
    await page.locator('(//input[@value="  Save  "])[2]').click();

    let camp = await page.locator('[id="dtlview_Campaign Name"]').textContent();
    if (camp == campaignName) {
      console.log(`${campaignName} is successfully created.`);
    } else {
      console.log("campaign is not created");
    }
  }

  //  Logout from the application.
  await page.locator('[src="themes/softed/images/user.PNG"]').hover();
  await page.getByText("Sign Out").click();

  // await page.waitForTimeout(2000);
});
