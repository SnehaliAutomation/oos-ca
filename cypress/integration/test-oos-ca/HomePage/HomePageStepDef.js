/// <reference types="Cypress" />
/* global Given, When, Then */
import { Given, When, Then, But, And } from 'cypress-cucumber-preprocessor/steps';

Background: 
Given('the user is on home Page',()=>{
cy.visit('http://localhost:3000/');
})

// Scenario:1 Verify Logo

Then ('user should be able to view site loge',()=>{
cy.get('img[class="App-logo"]').should('be.visible');
})

// Scenario:2 Verify h1 title

Then ('user should be able to view h1 title of the Page',()=>{
cy.get('h1[class="App-title"]').should('be.visible').contains('OpenOceanStudio: Crew Applications');
})