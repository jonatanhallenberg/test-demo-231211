/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://viaplay.se/se-sv/')
  })

  it('shows wrong password when logging in', () => {
    cy.get("#onetrust-accept-btn-handler").click();
    cy.get("[data-testid='open-login']").click();
    cy.get("[data-testid='login-email']").type("jonatan@gmail.com");
    cy.get("[data-testid='login-password']").type("sjdfhjksdfhjk");
    cy.get("[data-testid='login-button']").click();

    cy.get("[data-testid='login-error']").should('contain', 'Användarnamn och lösenord hör inte ihop. Försök igen.');
  })
})
