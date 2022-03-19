import GenericMethods from "../../GenericFunctions/GenericMethods";
import UserTokenGenerateAPI from "./UserTokenGenerateAPI";

const genericMethods = new GenericMethods();
const recordURL = Cypress.env("APIURL") + Cypress.env("createRecordURI");
const applicationId = Cypress.env("applicationId");

const values = {
  aHxOeHmCTIGd_hg1b: "TestLastName",
  aHdR_gHQmRT8ItVTL: "TestFirstName",
  aFjm80LnbJf780V6p: "TestCity",
};
const api_Options = {};

class APIValidation {
  static recordId;
  static recordName;
  /**Create a new record via POST Call */
  static createNewRecordAPI(httprequest, responseCode) {
    api_Options.method = httprequest;
    api_Options.url = recordURL;
    (api_Options.body = { applicationId: applicationId, values: values }),
      (api_Options.headers = {
        Authorization: "Bearer " + UserTokenGenerateAPI.token,
      });

    genericMethods
      .request_Options(api_Options, responseCode)
      .then((response) => {
        this.recordId = response.body.id;
        this.recordName = response.body.name;
      });
  }

  /**Get the above record details via GET Call */
  static getNewRecordAPI(httprequest, responseCode) {
    api_Options.method = httprequest;
    api_Options.url = recordURL + "/" + this.recordId;
    api_Options.headers = {
      Authorization: "Bearer " + UserTokenGenerateAPI.token,
    };
    genericMethods
      .request_Options(api_Options, responseCode)
      .then((response) => {
        if (response.body?.name)
          expect(response.body.name).to.eq(this.recordName);
      });
  }

  /**Delete the  record details via Delete Call */
  static deleteNewRecordAPI(httprequest, responseCode) {
    api_Options.method = httprequest;
    api_Options.url = recordURL + "/" + this.recordId;
    api_Options.headers = {
      Authorization: "Bearer " + UserTokenGenerateAPI.token,
    };
    genericMethods.request_Options(api_Options, responseCode);
  }
}
export default APIValidation;
