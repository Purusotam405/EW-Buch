export default class LoginPage {
  static VisitPage() {
    cy.visit("https://ruby-ew-buchs.selise.dev/auth/login/admin");
  }
  static login() {
    cy.fixture("example").then((data) => {
      const InvalidEmail = data.InvalidEmail;
      const InvalidPassword = data.InvalidPassword;
      cy.get("form").find("#sf-input-0").type(InvalidEmail);
      cy.get("#sf-input-1").type(InvalidPassword);
      cy.get(".sf-icon--clickable").click();
      cy.get(".auth__container__signin-form > .mdc-button").click();
      // cy.get('.bg--primary').should('have.text','infoLogin failed. Potential reasons- Invalid Password or Email addressclose' )
    });
  }
  static ValidLogin() {
    cy.fixture("example").then((data) => {
      const Email = data.Email;
      const Password = data.Password;
      cy.get("form").find("#sf-input-0").type(Email);
      cy.get("#sf-input-1").type(Password);
      cy.get(".sf-icon--clickable").click();
      cy.get(".auth__container__signin-form > .mdc-button").click();
    });
  }
  static DisplaySuccessMsg() {
    cy.get(".sf-snack-bar__text").contains("You have logged in successfully");
  }
}
