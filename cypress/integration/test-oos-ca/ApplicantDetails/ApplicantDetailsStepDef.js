/// <reference types="Cypress" />
/* global Given, When, Then */
import { Given, When, Then, But, And } from 'cypress-cucumber-preprocessor/steps';

Background: 

var selectedItem = null;

Given('the user is on home Page',()=>{
  cy.visit('http://localhost:3000/');
})
//Scenario:1 To verify number of candidate applied
When ('user check the number of applied candidates',()=>{
  cy.get('div:nth-child(1) > div > h2').contains('Applied');
})

Then ('user should be able to see all the applied candidates',()=>{
const CrewMemeber = 'div:nth-child(1) > div > div[class="CrewMember-container"]'
cy.get(CrewMemeber).each(($el, index, $list) => {
cy.log(`index: ` + index);
if (index === 5) {
cy.wrap($el)
}
console.log($el, index, $list)
})
})
//Scenario:2 To verify number of candidate are interviewing

When ('user check number of applicant interviewing',()=>{
  cy.get('div:nth-child(2) > div > h2').contains('Interviewing')
})
Then ('user should be able to see the number of candidates are currently interviewing',()=>{
  const CrewMemeber = 'div[class="App-column"]:nth-child(2)'
  cy.get(CrewMemeber).each(($el, index, $list) => {
  cy.log(`index: ` + index);
      if (index === 5) {
        cy.wrap($el)
      }
    console.log($el, index, $list)
})
})
//Scenario:3 To verify number of candidate are hired
When ('user check hired applicant details',()=>{
  cy.get('div:nth-child(3) > div > h2').contains('Hired')
})
//
Then ('user should be able to see the number of candidates are hired',()=>{
  const CrewMemeber = 'div:nth-child(3) > div > div[class="CrewMember-container"]'
  cy.get(CrewMemeber).each(($el, index, $list) => {
  cy.log(`index: ` + index);
      if (index === 5) {
        cy.wrap($el)
      }
    console.log($el, index, $list)
})
})

// Scenario:4 To verify any candidate details
When ('user check applicant details',()=>{
  cy.get('div:nth-child(1) > div > div[class="CrewMember-container"]').then((el) => {
  let index = Math.floor(Math.random() * el.length);
  selectedItem = el.eq(index).text();
  cy.log('*****' + selectedItem);
  el.eq(index);
});
})

Then ('user should be able to see their name and city',()=>{
cy.get('div:nth-child(1) > div > div[class="CrewMember-container"]>div>div:nth-child(2)').should('contain', selectedItem)   
})