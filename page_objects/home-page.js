import { Selector, t } from 'testcafe';

class HomePage {
    get accountBtn() { return Selector("#navbarAccount"); }
    get loginBtn() { return Selector("#navbarLoginButton"); }
    get dismissCookies() { return Selector("a.cc-btn.cc-dismiss'"); }
    get closeWelcomeBanner() { return Selector(".close-dialog"); }

    async navigateToLoginPage() {
        console.log('inside navigate function')
        await t.click(this.accountBtn).
            click(this.loginBtn)
    }

    async dismissCookiesAndCloseWelcomeBanner() {
        console.log('inside dismissCookiesAndCloseWelcomeBanner function')
        await t.click(this.dismissCookies)
            .click(this.closeWelcomeBanner)
            .wait(60000)
    }

}


export default new HomePage();