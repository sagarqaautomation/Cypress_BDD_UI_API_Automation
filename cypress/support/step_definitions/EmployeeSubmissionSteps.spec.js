import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import employeeActions from "../../integration/PageActions/Functional/EmployeeSubmissionActions";

When("I click on New Submission plus icon", () => {
  employeeActions.click_NewEmployeeSubmission();
});

And("I enter the required fields in New Record Screen", () => {
  employeeActions.EnterRequiredFields_New_EmployeSubmission();
});

And("I click on save button", () => {
  employeeActions.Save_EmployeNewRecord();
  employeeActions.Save_ConfirmEmployeNewRecord();
});

Then("I should save the newly created Record", () => {
  employeeActions.getNewRecord();
});

When("I navigate to New Employee Submission Record", () => {
  employeeActions.click_NewSubmission_label();
});

Then("I should validate the record is created Succesuful", () => {
  employeeActions.ValidateNewlyCreatedRecord();
});
