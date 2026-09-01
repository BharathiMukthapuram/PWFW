import {test as base} from "@playwright/test"
import commonData from "../Data/commonData.json"

export const test= base.extend({
    LoginPage: async({page},use)=>{
         await page.goto(commonData.url);
         await page.locator('[name="user_name"]').fill(commonData.userName);
         await page.locator('[name="user_password"]').fill(commonData.password);
         await page.locator("#submitButton").click();
         await use(page)
    }
})
export {expect} from "@playwright/test"