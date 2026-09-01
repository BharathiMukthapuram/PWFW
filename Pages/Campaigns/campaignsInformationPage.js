class campaignsInformation{
    constructor(page){
        this.page=page
        this.campaignName = '[id="dtlview_Campaign Name"]';
    }
    async validation(){
        let camp =await this.page.locator(this.campaignName).textContent()
        return camp
    }
}
export default campaignsInformation