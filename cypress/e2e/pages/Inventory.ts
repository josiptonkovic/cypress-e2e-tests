class Inventory {
    private buttonBackpack: string = "#add-to-cart-sauce-labs-backpack";
    private buttonBikeLight: string = "#add-to-cart-sauce-labs-bike-light";
    private buttonTshirt: string = "#add-to-cart-sauce-labs-bolt-t-shirt";
    private buttonJacket: string = "#add-to-cart-sauce-labs-fleece-jacket";
    private buttonOnesie: string = "#add-to-cart-sauce-labs-onesie";
    private buttonTshirtRed: string = "#add-to-cart-test.allthethings()-t-shirt-(red)";

    private buttonShoppingCart: string = "#shopping_cart_container";    
  
    get buttonBackpackElement(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(this.buttonBackpack);
    }
  
    get buttonBikeLightElement(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(this.buttonBikeLight);
    }
  
    get buttonTshirtElement(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(this.buttonTshirt);
    }
  
    get buttonJacketElement(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(this.buttonJacket);
    }

    get buttonOnesieElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.buttonOnesie);
    }

    get buttonTshirtRedElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.buttonTshirtRed);
    }

    get buttonShoppingCartElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.buttonShoppingCart);
    }

  }
  
  export const InventoryPage = new Inventory();