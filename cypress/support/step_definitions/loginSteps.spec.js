import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import loginActions from "../../integration/PageActions/Functional/loginActions";

Given("I launch the Simline login Screen", () => {
  loginActions.launchURL();
});

Then("I Should validate labels in the login Screen", () => {
  loginActions.validateLabels_LoginScreen();
});

And("I Should validate buttons in the login Screen", () => {
  loginActions.validateButtons_LoginScreen();
});

And("I Should validate headers and Subheaders in the login Screen", () => {
  loginActions.validateHeaders_SubHeaders_LoginScreen();
});

When("I enter", (datatable) => {
  loginActions.enterCredentials_Datatable(datatable);
});

Then("I Should validate Dashboard Url and title", () => {
  loginActions.dashboardTitle();
  loginActions.CurrentURl();
});

And("I click on login button in the login Screen", () => {
  loginActions.loginButton();
});

When(
  "I enter username and password as {string} and {string} in the login Screen",
  (username, password) => {
    loginActions.enterCredentials_Parameterization(username, password);
  }
);

When("I enter username and password in the login Screen", () => {
  loginActions.enterCredentials();
});

When(
  'I enter username and password as "(.*?)"$/ and "(.*?)"$/ in the login Screen',
  (username, password) => {
    loginActions.enterCredentials(username, password);
  }
);

Then("I validate login failed error message", () => {});
