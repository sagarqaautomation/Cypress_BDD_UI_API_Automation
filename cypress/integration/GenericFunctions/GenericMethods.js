/// <reference types="cypress" />

class GenericMethods {

  /** make an http call with the parameters */
  request(method, url, body, statusCode) {
    return cy.request(method, url, body).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.eql(statusCode);
    });
  }

  /** make an http call with the options object*/
  request_Options(options, responseCode) {
    return cy.request(options).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(JSON.parse(responseCode));
    });
  }
}

export default GenericMethods;
