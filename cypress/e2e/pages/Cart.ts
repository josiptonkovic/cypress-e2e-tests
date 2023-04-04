class ShoppingCart {
    private firstItem: string = "#item_5_title_link";
    private secondItem: string = "#item_0_title_link";
    private cartItem: string = "#cart_item"

    private checkoutButton: string = "#checkout"
    private continueShoppingButton: string = "#continue-shopping"

    private removeCartOnesie: string = "#remove-sauce-labs-onesie"
    private removeCartBackpack: string = "#remove-sauce-labs-backpack"
      
    get firstItemElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstItem);
    }
      
    get secondItemElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.secondItem);
    }

    get cartItemElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartItem);
    }

    get checkoutButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutButton);
    }

    get continueShoppingButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.continueShoppingButton);
    }

    get removeCartOnesieElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.removeCartOnesie);
    }

    get removeCartBackpackElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.removeCartBackpack);
    }
}
  
  export const ShoppingCartPage = new ShoppingCart();