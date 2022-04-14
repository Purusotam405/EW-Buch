/// <reference types="Cypress" />
 import 'cypress-mailosaur' 

Cypress.Commands.add('login',()=>{
    cy.visit('/')
    cy.fixture('example').then(data=>{
        const Email=data.Email
        const Password=data.Password
        cy.get ('form').find('#sf-input-0').type(Email)
        cy.get('#sf-input-1').type(Password)
        cy.get('.sf-icon--clickable').click()
        cy.get('.auth__container__signin-form > .mdc-button').click()
        // cy.get('.bg--primary').should('have.text','infoLogin failed. Potential reasons- Invalid Password or Email addressclose' )
        
        
    })
    Cypress.Commands.add('datacy',(selector)=>{
        cy.get(`[data-cy='${selector}']`)
    })



})

Cypress.Commands.add('datacy', (value) => {
    cy.get(`[data-cy="${value}"]`);
});


Cypress.Commands.add('login',(userType,  userName, password)=>{
    const types = {
        admin: {
            email: "ps@selise.ch",
            password: Cypress.env('password')
        },
        client: {
            email: "42102",
            password: Cypress.env('password')
        },
        newUser: {
            email: userName,
            password: password || Cypress.env('password')
        },
        newAdmin: {
            email: userName,
            password: password || Cypress.env('password')
        }
    }
})