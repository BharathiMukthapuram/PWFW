class CreateCampaigns{
    constructor(page){
        this.page=page
        this.campaignName = '[name="campaignname"]';
        this.saveButton = '(//input[@value="  Save  "])[2]';
    }
    async create(CN){
        await this.page.locator(this.campaignName).fill(CN)
        await this.page.locator(this.saveButton).click()
    }
}

export default CreateCampaigns