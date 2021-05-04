/// <reference types="Cypress" />
/* global Given, When, Then */
import { Given, When, Then, But, And } from 'cypress-cucumber-preprocessor/steps';
import candidateDetailFixture from '../../../fixtures/candidateDetail';

Background: 
Given('the user is on home Page',()=>{
cy.visit('http://localhost:3000/');
})


//Scenario:Search for applied candidate and verify the test result

//used fixer json to load data from candidateDetail.json
When ('user enters the candidate "name"',()=>{
cy.get('#name').click().type(candidateDetailFixture.name);
})
And ('user enters the "city" name',()=>{
cy.get('#city').click().type(candidateDetailFixture.city);
})
And ('use click Submit button',()=>{
cy.get('form[id="filters"]>button[type="submit"]').click();
})
Then ('user should see the filtered result',()=>{
cy.get('div[class="CrewMember-container"]')
.should('be.visible');
})
//  Scenario: Click the Clear button the empty the search field
When('user click the clear button',()=>{
cy.get('form[id="filters"]>button[type="button"]').click();

});
Then ('user should see the empty search field',()=>{
cy.get('#name').should('not.have.value', 'julia');
})

Then ('user should see filtered result',()=>{
cy.get('div[class="CrewMember-container"]')
.should('be.visible')
.each(($li, index, $list) => {
return true;
})
.then(($list) => {
expect($list).to.have.length(5);
});

//Scenario: Search for the non applied candidates
When ('user enters the non applied person',()=>{
cy.get('#name').click().type('monica');
cy.get('form[id="filters"]>button[type="submit"]').click();
})

Then ('the search results should show no candidates',()=>{ 
cy.get('h2>div').should('have.length', 0)
})


// Scenario: Upon clearing the search results user should see the all the applied candidates

Then ('user should see all applied candidates',()=>{
cy.get('div[class="CrewMember-container"]')
.should('be.visible')
.each(($li, index, $list) => {
return true;
})
.then(($list) => {
expect($list).to.have.length(5);
});
})
})
