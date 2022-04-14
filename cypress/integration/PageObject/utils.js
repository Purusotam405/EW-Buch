let emailAddress;
export function generateMailosaurEmail(){
    emailAddress=`anything@${Cypress.env('serverId')}.mailosaur.net`
    cy.datacy('email').type(emailAddress)
}
export function verifyEmail(emailSubject){
    cy.mailosaurGetMessage(Cypress.env("serverID"),{
        sendTo:emailAddress
    }).then(email=>{
        expect(email.subject).to.equal(emailSubject);
        cy.visit(email.html.links[0].href)

    })
}
export function setPasswordAndLofin(){}
