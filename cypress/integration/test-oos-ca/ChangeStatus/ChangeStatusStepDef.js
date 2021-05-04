/// <reference types="Cypress" />
/* global Given, When, Then */
import { Given, When, Then, But, And } from 'cypress-cucumber-preprocessor/steps';

Background: 
Given('the user is on home Page',()=>{
cy.visit('http://localhost:3000/');
})

// Scenario:1 Verify the crew-member up button present
When ('user see the crew member information',()=>{
cy.get('div:nth-child(3)[class="CrewMember-container"]').should('be.visible')
});

Then ('user should see the crew-member up button is present',()=>{
cy.get('div:nth-child(3) >div[class="CrewMember-toolbar"]>button').should('be.visible');
});

// Scenario:2 Verify the crew-member up button change the status
When('user click the crew-member up button',()=>{
cy.get('div:nth-child(3) >div[class="CrewMember-toolbar"]>button').click();
})

Then ('user should be able to see crew member status changed from applied to interviewing',()=>{
cy.get('div:nth-child(2) > div > h2').contains('Interviewing');

cy.get('div[class="App-column"]:nth-child(2)')
.should('be.visible')
.each(($li, index, $list) => {
return true;
})
.then(($list) => {
expect($list).to.have.length(1);
});
})

// Scenario: 3 Upon changing the status to Interviewing user should see the two buttons
When ('user check the Interviewing candidate',()=>{
cy.get('div:nth-child(3) >div[class="CrewMember-toolbar"]>button').click();
cy.get('div:nth-child(2) > div > h2').contains('Interviewing');
cy.get('div:nth-child(2) > div > div > div.CrewMember-toolbar').should('be.visible')
})
Then ('user should see the two buttons',()=>{
cy.get('div:nth-child(2) > div > div > div.CrewMember-toolbar>button').should('be.visible');
})

// Scenario:4 Verify the back button change the status from interviewing to applied
When ('user click the back button',()=>{
cy.get('div:nth-child(2) > div > div > div.CrewMember-toolbar>button:nth-child(1)').click();
})

Then ('user should be able to see crew member status changed from interviewing to applied',()=>{
cy.get('div:nth-child(1) > div > h2').contains('Applied');
const CrewMemeber = 'div:nth-child(1) > div > div[class="CrewMember-container"]'
cy.get(CrewMemeber).each(($el, index, $list) => {
cy.log(`index: ` + index);
if (index === 5) {
cy.wrap($el)
}
console.log($el, index, $list)
})
})

// Scenario: 5 Verify the crew-member up button change the status from interviewing to Hired

When ('user click the crew-member up button for interviewing candidate',()=>{
cy.get('div:nth-child(2) > div > div > div.CrewMember-toolbar>button:nth-child(2)').click();   
})
Then ('user should be able to see crew member status changed from interviewing to hired',()=>{
cy.get('div:nth-child(3) > div > h2').contains('Hired');
cy.get('div[class="App-column"]:nth-child(3)')
.should('be.visible')
.each(($li, index, $list) => {
return true;
})
.then(($list) => {
expect($list).to.have.length(1);
});
})