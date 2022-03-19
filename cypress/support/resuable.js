/// <reference types="cypress" />
import loginElements from "../integration/PageElements/loginElements";

const login = new loginElements();

Cypress.Commands.add("login", (username, pw) => {
  login.getUserNameLabel().type(username);
  login.getPasswordLabel().type(pw);
});

Cypress.Commands.add("navigateToUrl", (url) => {
  cy.visit(url);
});

Cypress.Commands.add("ValidateURL", (URL) => {
  cy.url().should("include", URL);
});

Cypress.Commands.add("randomstring", (value) => {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < value; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
});
