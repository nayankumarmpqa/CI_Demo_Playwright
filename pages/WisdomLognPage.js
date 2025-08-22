// LoginPage.js

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.pageURL = "https://staging.wisdompanel.com/app/";
    this.pageTitle = "Sign in to your account | Wisdom Panel™ pet DNA tests";

    // Header & branding
    this.wisdomHealthLogo = page.locator("//img[@alt='Wisdom Health']");
    this.welcomeBack = page.locator("//h1[normalize-space()='Welcome back.']");

    // Login form
    this.email = page.locator("#email");
    this.nextButton = page.locator("//button[@type='submit']");
    this.password = page.locator("#password");
    this.viewPassword = page.locator("//label[@class='input floating ']//*[name()='svg']");
    this.forgotPasswordLink = page.locator("#forgotPassword");
    this.signInButton = page.locator("//button[normalize-space()='Sign In']");

    // Footer & links
    this.newToWisdomPanelDiv = page.locator("//div[@class='_activate-link-container_1nmako']");
    this.activateYourKitLink = page.locator("#ember8");
    this.help = page.locator("//a[normalize-space()='Help']");
    this.privacy = page.locator("//a[normalize-space()='Privacy']");
    this.termsConditions = page.locator("//a[normalize-space()='Terms & Conditions']");
    this.copyrightText = page.locator("//p[normalize-space()='© 2025 Mars, Incorporated. All rights reserved.']");
    this.tableImage = page.locator("//div[@class='_tablet-img_1nmako']");

    // After login
    this.profileButton = page.locator("#name");
  }

  async goToLoginPage() {
    await this.page.goto(this.pageURL);
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.nextButton.click();
    await this.password.fill(password);
    await this.signInButton.click();
  }
}
