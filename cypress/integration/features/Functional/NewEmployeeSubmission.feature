Feature: Employee Submission

    Create a new employee Submission ,Edit and Delete Submission

    Background: Login into the Application
        Given I launch the Simline login Screen
        When I enter username and password in the login Screen
        And I click on login button in the login Screen

    Scenario: Create a New Employee Submission
        When I click on New Submission plus icon
        And I enter the required fields in New Record Screen
        And I click on save button
        Then I should save the newly created Record
        When I navigate to New Employee Submission Record
        Then I should validate the record is created Succesuful



