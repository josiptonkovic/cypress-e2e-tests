class Checkout {
    private firstName: string = "#first-name";
    private lastName: string = "#last-name";
    private zipCode: string = "#postal-code";

    private continueButton: string = "#continue"
      
    get firstNameElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstName);
    }
      
    get lastNameElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.lastName);
    }

    get zipCodeElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.zipCode);
    }

    get continueButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.continueButton);
    }
}
  
  export const CheckoutPage = new Checkout();