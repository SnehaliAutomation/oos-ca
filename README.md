# `Getting Started with cypress web app automation`

This project has been created to reduce the manual repetative testing - javascript based tool cypress has been used to automate this webapp.
https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
<<<<<< HEAD
### `As per task requirements I have used below Tech Stack:`

VS Code
Node.Js/NPM
Cypress / javascript
Cucumber preprocessor plugin
Cypress Test runner
Chrome browser
Chrome Dev tools


### `How to Run App:`
1. Clone the repository
2. Open project in VS Code
3. Run yarn/NPM Install command app level directory
4. Once node module updated
5. Run the yarn start command to run the app
6. App will open in browser
7. To open Cypress use command yarn run cypress open
8. Cypress test runner will show oss-ca folder which contains all the feture files
9. Click on the feature file to run
10. New browser window will open and run that feature

## `ADD ON:-`
# Cucumber plugin:-
1. Hybrid framework has been set up inconjuction with cucumber. To enabled cucumber a plugin -cypress-cucumber-preprocessor has been installed 
2. To add support for the feature files configuration "testFiles": "**/*.feature" has been added to cypress.json
3. Path to the stepdefinition has been definded "cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
} within the package.json
4. I have followed the recommended way for the folder stucture. The .feature file will use steps definitions from a directory with the same name as your .feature file. eg.file is in cypress/integration/test-oos-ca/ApplicantDetails.feature, the preprocessor will read all the files inside cypress/integration/test-oos-ca/ApplicantDetails/, so: cypress/integration/test-oos-ca/ApplicantDetails.js
45. To give a global scope to Given, When Then function I have used /* global Given, When, Then */ in step definitin file

# Fixture:-
Fixture file is locataed in cypress/fixture which helps to manage test data. It is written inside the json file. Path to the fixture file imports the test data to the stepdef file.

# Error and Edge cases:-
There is are bugs in the system
1. Scenario: Click the Clear button the empty the search field
When user enters the candidate "name" 
And user enters the "city" name
And use click Submit button
When user click the clear button

Actual Behaviour:
Then the search field still contain test data

Expected Behaviour:
Then user should see empty search field

2. Scenario: Candidate can not be searched with their full name
When user enters the candidate "name" and "surname"
And use click Submit button

Actual Behaviour:
Then there are no candidate filtered

Expected Behaviour:
Then candidate should be found with their name and surname

### `Making app:`

- I have used cypress as automation tool as it enables to test mordern JavaScript applications. Cypress can test anything that runs in a browser so test is reliable and fast.
- The node module was present outside the root directory, as a result oos-ca app was not running correctly, so after few test and research I found that node module was missing from main root directory.Node mode is created in root directory with `yarn install command`
- The package.json was created upon installing node module within the root directory.
- Eslint module was missing as a result prop types were missing,upon installing eslint module it sorted the problem and the oos-ca app started running successfully.



# CREW APPLICATION

Simple application which represents dashboard with candidates.

### Running locally
`yarn install`

`yarn start`

App will be available on http://localhost:3000


### Running in docker
`docker build -t crew-app .`

`docker run -it --rm -p 5000:5000 --name crew-container crew-app`

App will be available on http://localhost:5000
