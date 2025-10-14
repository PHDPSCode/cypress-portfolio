/// <reference types="cypress" />

describe('Valida tela inicial', () => {
  before(() => {
    cy.realizarLogin();
  })
  it('Validando menu', () => {
    cy.get('.app_logo').should('have.text', 'Swag Labs').and('be.visible');
    cy.get('[data-test="shopping-cart-link"]').should('be.visible');
    cy.get('#react-burger-menu-btn').should('be.visible');
  })
  it('Validando menu lateral', () => {
    cy.get('#react-burger-menu-btn').should('be.visible').click();
    cy.get('[data-test="inventory-sidebar-link"]').should('have.text', 'All Items').and('be.visible');
    cy.get('[data-test="about-sidebar-link"]').should('have.text', 'About').and('be.visible');
    cy.get('[data-test="logout-sidebar-link"]').should('have.text', 'Logout').and('be.visible');
    cy.get('[data-test="reset-sidebar-link"]').should('have.text', 'Reset App State').and('be.visible');
    cy.get('.bm-cross-button').should('be.visible').click();
  })
  it('Validando submenu produtos', () => {
    cy.get('[data-test="secondary-header"]').should('be.visible');
    cy.get('[data-test="title"]').should('have.text', 'Products').and('be.visible');
    cy.get('[data-test="product-sort-container"]').should('be.visible'); // clicar e validar o filtro
    cy.get('.inventory_item').should('have.length', 6).and('be.visible');
  })
  it('Validando produto', () => {
    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible');
    cy.get('[data-test="item-3-title-link"] > [data-test="inventory-item-name"]')
      .should('have.text', 'Test.allTheThings() T-Shirt (Red)')
      .and('be.visible');
    cy.get('[data-test="inventory-item-desc"]')
      .last()
      .should('have.text', 'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.')
      .and('be.visible');
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').should('be.visible'); // criar command dinâmico
    cy.get(':nth-child(6) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')
      .should('have.text', '$15.99').and('be.visible');
  })
})
