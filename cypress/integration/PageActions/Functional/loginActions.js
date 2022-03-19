/// <reference types="cypress" />

import loginElements from "../../PageElements/loginElements";

const login = new loginElements();

class loginActions {
  static launchURL() {
    cy.navigateToUrl(Cypress.env("loginURL"));
  }

  static validateLabels_LoginScreen() {
    login.getUserNameLabel().should("be.visible");
    login.getPasswordLabel().should("be.visible");
  }

  static validateButtons_LoginScreen() {
    login.getLoginButton().should("be.visible");
  }

  static validateHeaders_SubHeaders_LoginScreen() {
    login.getWelocmeText();
    login.getSubHeaderText();
  }

  static enterCredentials() {
    cy.login(Cypress.env("Username"), Cypress.env("Password"));
  }

  static enterCredentials_Datatable(datatable) {
    datatable.hashes().forEach((element) => {
      cy.login(element.Username, element.Password);
    });
  }

  static enterCredentials_Parameterization(username, password) {
    cy.login(username, password);
  }

  static dashboardTitle() {
    cy.title().should("eq", Cypress.env("title"));
  }

  static CurrentURl() {
    cy.ValidateURL(Cypress.env("Dashboard"));
  }

  static loginButton() {
    login.getLoginButton().click();
  }

  static loginFailed() {
    login.getLoginFailed().should("eq", "Login failed.");
  }
}

export default loginActions;
