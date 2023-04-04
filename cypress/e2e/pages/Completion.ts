class Completion {
    private completeHeader: string = ".complete-header";
    private backHomeButton: string = "#back-to-products";
      
    get completeHeaderElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.completeHeader);
    }

    get backHomeButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.backHomeButton);
    }

}
  
  export const CompletionPage = new Completion();