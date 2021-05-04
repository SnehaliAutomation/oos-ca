Feature: Applicant details

As a user, I want to be able to have appied candidates details,
So that I can have their details


Background:
Given the user is on home Page

Scenario:1 To verify number of candidate applied
When user check the number of applied candidates
Then user should be able to see all the applied candidates

Scenario:2 To verify number of candidate are interviewing
When user check number of applicant interviewing
Then user should be able to see the number of candidates are currently interviewing

Scenario:3 To verify number of candidate are hired
When user check hired applicant details
Then user should be able to see the number of candidates are hired

Scenario:4 To verify any candidate details
When user check applicant details
Then user should be able to see their name and city
