import GenericMethods from "../../GenericFunctions/GenericMethods";

const genericMethods = new GenericMethods();
const statusCode = Cypress.env("SUCCESS_STATUS");
const loginURL = Cypress.env("APIURL") + Cypress.env("loginAPIURl");
const body = {
  username: Cypress.env("Username"),
  password: Cypress.env("Password"),
};
/** Genertate token via Post call with User Credentials */
class UserTokenGenerateAPI {
  static token;
  static generateToken() {
    genericMethods
      .request("POST", loginURL, body, statusCode)
      .then((response) => {
        this.token = response.body.token;
        cy.writeFile("cypress\\fixtures\\example.json", {
          token: this.token,
        });
      });
  }
}

export default UserTokenGenerateAPI;
