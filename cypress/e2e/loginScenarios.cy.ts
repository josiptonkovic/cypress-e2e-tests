import { LoginPage } from "./pages/Login";
describe("Basics", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Valid Login credentials", () => {
    LoginPage.usernameElement.type("standard_user");
    LoginPage.passwordElement.type("secret_sauce");
    LoginPage.loginElement.click();
    cy.url().should("contain", "inventory.html");
    cy.get(".title").should("have.text", "Products");
  });

  it("Invalid Login credentials", () => {
    LoginPage.submitLogin("wrongUser", "wrongPassword");
    cy.url().should("not.contain", "inventory.html");
    LoginPage.invalidLoginMessageElement.should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});