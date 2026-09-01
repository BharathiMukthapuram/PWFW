class  LoginPage{
    constructor(page){
        this.page=page
        this.userName = '[name="user_name"]';
        this.password = '[name="user_password"]';
        this.loginButton="#submitButton"
    }
    async gotoLoginPage(url){
        await this.page.goto(url)
    }
    async loginPage(UN,PW){
        await this.page.locator(this.userName).fill(UN)
        await this.page.locator(this.password).fill(PW)
        await this.page.locator(this.loginButton).click()

    }
}

export default LoginPage