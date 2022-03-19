/// <reference types="cypress" />
const loginscreen = require("../../integration/PageElements/Locaters/login.json");

class loginElements {
  getWelocmeText() {
    return cy.contains(loginscreen.login_Header);
  }
  getSubHeaderText() {
    return cy.contains(loginscreen.login_SubHeader);
  }
  getUserNameLabel() {
    return cy.get(loginscreen.userNameLabel);
  }
  getPasswordLabel() {
    return cy.get(loginscreen.passwordLabel);
  }
  getLoginButton() {
    return cy.get(loginscreen.sign_Button);
  }
  getToggleEyeIcon() {
    return cy.get(loginscreen.eyeIcon_loginScreen);
  }
  getLoginFailed() {
    return cy.contains(loginscreen.loginFailed_ErrorMessage);
  }
}

export default loginElements;
