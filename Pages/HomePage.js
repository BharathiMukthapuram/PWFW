class HomePage{
    constructor(page){
        this.page=page
        this.more = '//a[text()="More"]';
        this.campaignsLink = '[name="Campaigns"]'
        this.contactsLink='//a[@href="index.php?module=Contacts&action=index"]'
        this.leadsLink = '[href="index.php?module=Leads&action=index"]';
        this.orgnizationsLink="link", { name: "Organizations" }
        this.productsLink = "link", { name: "Products" }
    }
    async gotoCampaigns(){
        await this.page.locator(this.more).hover()
        await this.page.locator(this.campaignsLink).click()
    }
    async gotoContacts(){
        await this.page.locator(this.contactsLink).click()
    }
    async gotoLeads(){
        await this.page.locator(this.leadsLink).click()
    }
    async gotoOrganizations(){
        await this.page.getByRole(this.orgnizationsLink).click()
    }
    async gotoProducts(){
        await this.page.getByRole(this.productsLink).click()
    }
}


export default HomePage