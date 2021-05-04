Feature: Change applicatant status

As a user, I want to be able to change applicant status,
So that I can track their progress.

Background:
Given the user is on home Page

Scenario:1 Verify the crew-member up button present
When user see the crew member information
Then user should see the crew-member up button is present

Scenario:2 Verify the crew-member up button change the status from applied to interviewing
When user click the crew-member up button
Then user should be able to see crew member status changed from applied to interviewing

Scenario: 3 Upon changing the status to Interviewing user should see the two buttons
When user check the Interviewing candidate
Then user should see the two buttons

Scenario:4 Verify the back button change the status from interviewing to applied
When user click the crew-member up button
Then user should be able to see crew member status changed from applied to interviewing
When user click the back button
Then user should be able to see crew member status changed from interviewing to applied

Scenario: 5 Verify the crew-member up button change the status from interviewing to Hired
When user click the crew-member up button
Then user should be able to see crew member status changed from applied to interviewing
When user click the crew-member up button for interviewing candidate
Then user should be able to see crew member status changed from interviewing to hired