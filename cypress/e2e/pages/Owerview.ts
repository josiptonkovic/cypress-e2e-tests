class Overview {
    private firstOrderedItem: string = "#item_0_title_link";
    private secondOrderedItem: string = "#item_5_title_link";
    private finishButton: string = "#finish";
      
    get firstOrderedItemElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstOrderedItem);
    }

    get secondOrderedItemElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.secondOrderedItem);
    }

    get finishButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.finishButton);
    }
}
  
  export const OverviewPage = new Overview();