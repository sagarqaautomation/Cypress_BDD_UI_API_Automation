Feature: Swimline API

   API Validation for create,get and deleted

   Scenario: Record Creation, Get Record information and Delete the Record
      When I should do "POST" call with login User details and Save the Token
      Then I should do "POST" call to verify the response code as "200"
      And I should do "GET" call and verify the response code as "200"
      And I should do "DELETE" call and verify the response code as "204"

