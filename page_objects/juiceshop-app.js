import homePage from "./home-page"
import loginPage from "./login-page"

class JuiceShopApp {
    get homePage() { return homePage }
    get loginPage() { return loginPage }
}

export default new JuiceShopApp();