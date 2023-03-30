class ShoppingCart {
    private firstItem: string = "#item_5_title_link";
    private secondItem: string = "#item_0_title_link";

    private checkoutButton: string = "#checkout"
      
    get firstItemElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstItem);
    }
      
    get secondItemElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.secondItem);
    }

    get checkoutButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutButton);
    }
}
  
  export const ShoppingCartPage = new ShoppingCart();