exports.LoginPage = class LoginPage {

constructor(page) {
    this.page = page;
    this.pageURL = "https://staging.wisdompanel.com/app/";
    this.pageTitle = "Sign in to your account | Wisdom Panel™ pet DNA tests";
    this.wisdomHealthLogo = "//img[@alt='Wisdom Health']";
    this.welcomeBack = "//h1[normalize-space()='Welcome back.']";
    this.email = "//input[@id='email']";
    this.nextButton = "//button[@type='submit']";
    
    this.password = "//input[@id='password']";
    this.viewPassword = "//label[@class='input floating ']//*[name()='svg']";
    this.forgotPasswordLink = "//a[@id='forgotPassword']";
    this.signInButton = "//button[normalize-space()='Sign In']";



    this.newToWisdomPanelDiv = "//div[@class='_activate-link-container_1nmako']";
    this.activateYourKitLink = "//a[@id='ember8']";
    this.help = "//a[normalize-space()='Help']";
    this.privacy = "//a[normalize-space()='Privacy']";
    this.termsConditions = "//a[normalize-space()='Terms & Conditions']";
    this.copyrightText = "//p[normalize-space()='© 2025 Mars, Incorporated. All rights reserved.']";
    this.tableImage = "//div[@class='_tablet-img_1nmako']";

    this.profileButton = "//button[@id='name']";
  }

  async goToLoginPage() {
    await this.page.goto('https://staging.wisdompanel.com/app/');
  }

  async login(email, password) {
    await this.page.fill(this.email, email);
    await this.page.click(this.nextButton);
    await this.page.fill(this.password, password);
    await this.page.click(this.signInButton);
  }

//   async verifyProfileButtonText(expectedText) {
//     const profileButton = this.page.locator(this.profileButton);
//     await expect(profileButton).toContainText(expectedText);
//   }

//   render() {
//     return `<h1>${this.pageTitle}</h1>`;
//   }
}