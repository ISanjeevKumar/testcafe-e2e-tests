import { Selector, t } from 'testcafe';

class LoginPage {

    constructor() {
        this.email = Selector('#email');
        this.password = Selector('#password');
        this.loginBtn = Selector('#loginButton');
        this.errorToast = Selector('.error');
    }

    get getErrorMessage() {
        return this.errorToast.textContent
    }

    async login(username, password) {
        await t.typeText(this.email, username).
            typeText(this.password, password).
            click(this.loginBtn)

    }

}
export default new LoginPage();