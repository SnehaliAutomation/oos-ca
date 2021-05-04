Feature: Search

As a user, I want to be able to search for the candidates who applied for the job,
So that I can track their application progress.

Background:
Given the user is on home Page

Scenario:1.Search for applied candidate and verify the test result
When user enters the candidate "name" 
And user enters the "city" name
And use click Submit button
Then user should see the filtered result

Scenario:2. Click the Clear button the empty the search field
When user enters the candidate "name" 
And user enters the "city" name
And use click Submit button
When user click the clear button
# Then user should see the empty search field (There is a bug in the system)
Then user should see filtered result

Scenario: 3.Search for the non applied candidates
When user enters the non applied person
Then the search results should show no candidates


Scenario: 4.Upon clearing the search results user should see the all the applied candidates
When user click the clear button
Then user should see all applied candidates