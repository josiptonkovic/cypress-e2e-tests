class Inventory {
    private buttonBackpack: string = "#add-to-cart-sauce-labs-backpack";
    private buttonBikeLight: string = "#add-to-cart-sauce-labs-bike-light";
    private buttonTshirt: string = "#add-to-cart-sauce-labs-bolt-t-shirt";
    private buttonJacket: string = "#add-to-cart-sauce-labs-fleece-jacket";
    private buttonOnesie: string = "#add-to-cart-sauce-labs-onesie";
    private buttonTshirtRed: string = "#add-to-cart-test.allthethings()-t-shirt-(red)";
    private menuButton: string = "#react-burger-menu-btn";

    private removeButtonBackpack: string = "#remove-sauce-labs-backpack";
    private removeButtonOnesie: string = "#remove-sauce-labs-onesie";

    private logoutButton: string = "#logout_sidebar_link";
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

    get menuButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(this.menuButton);
    }

    get logoutButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(this.logoutButton);
    }

    get removeButtonBackpackElement(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(this.removeButtonBackpack);
    }

    get removeButtonOnesieElement(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(this.removeButtonOnesie);
    }

  }
  
  export const InventoryPage = new Inventory();