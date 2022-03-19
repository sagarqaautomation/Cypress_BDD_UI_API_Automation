Feature: Swimline login

    Validating Login for Swimline

    Background: Login Screen
        Given I launch the Simline login Screen

    Scenario: Intial load Login Screen Validation
        Then I Should validate labels in the login Screen
        And I Should validate buttons in the login Screen
        And I Should validate headers and Subheaders in the login Screen

    Scenario: Login with Valid details using Datable
        When I enter
            | Username        | Password     |
            | sagar.tatipally | F*@5jM5RDX5m |
        And I click on login button in the login Screen
        Then I Should validate Dashboard Url and title

    Scenario: Login with Valid details using hardcoded paramertes in feature file
        When I enter username and password as "sagar.tatipally" and "F*@5jM5RDX5m" in the login Screen
        And I click on login button in the login Screen
        Then I Should validate Dashboard Url and title

    Scenario: Login with Valid details using Environment variables from cypress json file
        When I enter username and password in the login Screen
        And I click on login button in the login Screen
        Then I Should validate Dashboard Url and title

    Scenario Outline: Login with Multiple testdata using Examples
        When I enter username and password as "<username>" and "<password>" in the login Screen
        And I click on login button in the login Screen
        Then I validate login failed error message
        Examples:
            | username        | password        |
            | sagar.tatipally | welcome         |
            | welcome         | sagar.tatipally |
