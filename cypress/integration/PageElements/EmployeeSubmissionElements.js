/// <reference types="cypress" />
const employeeSubmission = require("../../integration/PageElements/Locaters/EmployeeSubmission.json");
class EmployeeSubmissionElements {
  getNewEmployeSubmission() {
    return cy
      .contains(employeeSubmission.newEmployeeSubmission_Label)
      .parent()
      .find(employeeSubmission.plusIcon);
  }

  getFirstName_TextField() {
    return cy
      .contains(employeeSubmission.firstName_Label)
      .parent()
      .parent()
      .find(employeeSubmission.textField_TagName);
  }

  getLastName_TextField() {
    return cy
      .contains(employeeSubmission.lastName_Label)
      .parent()
      .parent()
      .find(employeeSubmission.textField_TagName);
  }

  getCity_TextField() {
    return cy
      .contains(employeeSubmission.city_Label)
      .parent()
      .parent()
      .find(employeeSubmission.textField_TagName);
  }

  getEmployeeSubmission_Save() {
    return cy.contains(employeeSubmission.save_Label);
  }

  getEmpployeeSubmision_ConfirmSave() {
    return cy.get(employeeSubmission.confirm_Save);
  }

  getNewlyCreatedRecord() {
    return cy.get(employeeSubmission.record_Title);
  }

  getNewEmployeSubmission_Label() {
    return cy.contains(employeeSubmission.newEmployeeSubmission_Label);
  }

  validaterecordId(record) {
    return cy.contains(record);
  }
}

export default EmployeeSubmissionElements;
