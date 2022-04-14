/// <reference types="Cypress" />

describe('EW-LI-001',()=>{
    it('Login as an admin',()=>{
        cy.login();
        cy.datacy('Administrator').click();
        cy.get('.user-details__button > .mdc-button').click()
        cy.get('[data-cy="firstName"]').type('Purusotam')
        cy.get('[data-cy="lastName"]').type('Ghimiray')
        cy.get('.ng-invalid.ng-dirty > .mb-20').type('Junior QA Engineer')
        cy.datacy('mobileNumber').type('17468907')
        cy.datacy('email').type('purusotam405@gmail.com')
        cy.get('[data-cy="addBtn"]').click()
        // cy.get('[data-cy="cancelBtn"]').click()
        // cy.get('.sf-snack-bar__text').contains('You need to signin or signup before continuing')

       


    })
  
})