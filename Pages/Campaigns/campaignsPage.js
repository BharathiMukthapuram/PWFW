class CamapaignsPage{
    constructor(page){
        this.page=page
        this.lookupImage = '[alt="Create Campaign..."]';
        this.deleteCampaign = '(//input[@type="checkbox")[2]';
        this.deleteButton = '(//input[@value="Delete"])[1]';
        this.validationText='((//input[@type="checkbox"])[2]/../following-sibling::td)[1]'
    }
    async clickOnLookupImage(){
        await this.page.locator(this.lookupImage).click()
    }
    async Delete_campaign(){
        await this.page.locator(this.deleteCampaign).check()
        await this.page.locator(this.deleteButton).click()

    }
    async DeletingCampaign(){
        let text= await this.page.locator(this.validationText).textContent()
        return text
    }

}
export default CamapaignsPage