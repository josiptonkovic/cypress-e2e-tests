class Overview {
    private firstOrderedItem: string = "#item_0_title_link";
    private secondOrderedItem: string = "#item_5_title_link";
    private firstItemPrice: string = "/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[2]/div[2]/div";
    private secondItemPrice: string = "/html/body/div/div/div/div[2]/div/div[1]/div[4]/div[2]/div[2]/div";
    private paymentInfo: string = "#last-name";
    private shippingInfo: string = "#last-name";
    private taxPrice: string = "#last-name";
    private totalPrice: string = "#last-name";
      
    get firstOrderedItemElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstOrderedItem);
    }
      
    get secondOrderedItemElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.secondOrderedItem);
    }

    get firstItemPriceElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstItemPrice);
    }

    get secondItemPriceElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.secondItemPrice);
    }
}
  
  export const OverviewtPage = new Overview();