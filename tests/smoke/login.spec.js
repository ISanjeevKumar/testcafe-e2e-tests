import juiceshopApp from "../../page_objects/juiceshop-app";
import { BASE_URL } from "../../environment/environment"

fixture`Login test`
    .page(BASE_URL)

test('should not be able to login with invalid credentials', async t => {

    await juiceshopApp.homePage.dismissCookiesAndCloseWelcomeBanner();
    await juiceshopApp.homePage.navigateToLoginPage();

    await juiceshopApp.loginPage.login('abc', 'def');
    await t.expect(juiceshopApp.loginPage.getErrorMessage).eql('Invalid email or password.');

});