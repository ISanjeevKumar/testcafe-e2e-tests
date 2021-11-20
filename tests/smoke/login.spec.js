import juiceshopApp from "../../page_objects/juiceshop-app";

fixture`Login test`
    .page`http://localhost:3000/`

test('should be able to login', async t => {
    juiceshopApp.homePage.dismissCookiesAndCloseWelcomeBanner()
    juiceshopApp.homePage.navigateToLoginPage()
});