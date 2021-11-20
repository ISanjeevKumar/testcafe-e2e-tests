import { Selector, t } from 'testcafe';

class HomePage {

    constructor() {
        this.accountBtn = Selector("button[id='navbarAccount']");
        this.loginBtn = Selector('#navbarLoginButton');
        this.dismissCookies = Selector('a.cc-btn.cc-dismiss');
        this.closeWelcomeBanner = Selector('.close-dialog');
    }

    async navigateToLoginPage() {
        await t.click(this.accountBtn).
            click(this.loginBtn)
    }

    async dismissCookiesAndCloseWelcomeBanner() {
        await t.click(this.dismissCookies)
            .click(this.closeWelcomeBanner)
    }

}


export default new HomePage();