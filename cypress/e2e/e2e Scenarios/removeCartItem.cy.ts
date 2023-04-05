import { LoginPage } from "../pages/Login";
import { InventoryPage } from "../pages/Inventory";
import { ShoppingCartPage } from "../pages/Cart";

describe("Add and Remove Items from Cart", () => {

  it("Visit Store page and Log in", () => {
    cy.visit("/");
    LoginPage.usernameElement.type("standard_user");
    LoginPage.passwordElement.type("secret_sauce");
    LoginPage.loginElement.click();
    cy.url().should("contain", "inventory.html");
    cy.get(".title").should("have.text", "Products");
  });

  it("Add 2 items to Cart and verify Remove button is shown", () => {
    InventoryPage.buttonBackpackElement.click();
    InventoryPage.removeButtonBackpackElement.should("be.visible");
    InventoryPage.removeButtonBackpackElement.should(
        "have.text",
        "Remove"
    );
    InventoryPage.buttonOnesieElement.click();
    InventoryPage.removeButtonOnesieElement.should("be.visible");
    InventoryPage.removeButtonOnesieElement.should(
        "have.text",
        "Remove"
    );
  });

  it("Click on Shopping Cart", () => {
    InventoryPage.buttonShoppingCartElement.click();
  });

  it("Remove Items from Cart", () => {
    ShoppingCartPage.removeCartBackpackElement.click();
    ShoppingCartPage.removeCartOnesieElement.click();
    ShoppingCartPage.cartItemElement.should("not.exist");
  });

  it("Return to Inventory and check the items are removed", () => {
    ShoppingCartPage.continueShoppingButtonElement.click();
    cy.url().should("not.contain", "cart.html");
    InventoryPage.removeButtonBackpackElement.should("not.exist");
    InventoryPage.buttonBackpackElement.should("be.visible");
    InventoryPage.removeButtonOnesieElement.should("not.exist");
    InventoryPage.buttonOnesieElement.should("be.visible");
  });

  it("Log out of WebShop", () => {
    InventoryPage.menuButtonElement.click()
    InventoryPage.logoutButtonElement.click()
    cy.url().should("contain", "/");
  });
  
});