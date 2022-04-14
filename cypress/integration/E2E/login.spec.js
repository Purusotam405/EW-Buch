/// <reference types="Cypress" />
import LoginPage from "../PageObject/login/login";

describe('LI-001-Invalid Login',()=>{
    it('LI-001',()=>{
        LoginPage.VisitPage()
        LoginPage.login()
    })

})
describe('LI-002-Valid Login',()=>{
    it.only('LI-002',()=>{
        LoginPage.VisitPage()
        LoginPage.ValidLogin()
        LoginPage.DisplaySuccessMsg()
        cy.datacy('Users').click()
    
    
    
        })
        describe("LI-003-Client User-login",()=>{
            it('LI-003-Client User',()=>{

            })
        })
})