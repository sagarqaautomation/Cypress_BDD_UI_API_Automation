import {
  Given,
  And,
  Then,
  When,
  Before,
} from "cypress-cucumber-preprocessor/steps";
import UserTokenGenerateAPI from "../../integration/PageActions/API/UserTokenGenerateAPI";
import APIValidation from "../../integration/PageActions/API/POST_GET_DELETE_API";

When(
  'I should do {string} call with login User details and Save the Token',
  () => {
    UserTokenGenerateAPI.generateToken();
  }
);
Then(
  'I should do {string} call to verify the response code as {string}',
  (httprequest, responseCode) => {
    APIValidation.createNewRecordAPI(httprequest, responseCode);
  }
);
And(
  'I should do {string} call and verify the response code as {string}',
  (httprequest, responseCode) => {
    APIValidation.getNewRecordAPI(httprequest, responseCode);
  }
);
And(
  'I should do {string} call and verify the response code as {string}',
  (httprequest, responseCode) => {
    APIValidation.deleteNewRecordAPI(httprequest, responseCode);
  }
);
