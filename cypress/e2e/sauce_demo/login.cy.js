/// <reference types="cypress" />

const user = 'standard_user';
const password = 'secret_sauce';
const inpassword = 'secret_asdasadsauce';

describe('Login na plataforma Sauce Demo', () => {
  before(() => {
    cy.visit('https://www.saucedemo.com/')
  })
  it('Validando tela de login', () => {
    cy.get('[data-test="username"]').should('be.visible');
    cy.get('[data-test="password"]').should('be.visible');
    cy.get('[data-test="login-button"]').contains('Login').should('be.visible');
    cy.get('[data-test="login-credentials"]').should('exist');
    cy.get('[data-test="login-password"]').should('exist');
  })
  it('Preenchendo credenciais inválidas', () => {
    cy.get('[data-test="username"]').type(user);
    cy.get('[data-test="password"]').type(`{selectall}{del}${inpassword}`);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
    .contains('Epic sadface: Username and password do not match any user in this service')
    .should('be.visible');
  })
  it('Preenchendo credenciais válidas', () => {
    cy.get('[data-test="username"]').type(`{selectall}{del}${user}`);
    cy.get('[data-test="password"]').type(`{selectall}{del}${password}`);
    cy.get('[data-test="login-button"]').click();
  })
})
