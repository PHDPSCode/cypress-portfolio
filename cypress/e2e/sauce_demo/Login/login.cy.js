/// <reference types="cypress" />

const user = Cypress.env("user").user;
const password = Cypress.env("user").password;
const inpassword = "secret_asdasadsauce";
const inuser = "standard_teste";

describe("Login na plataforma Sauce Demo", () => {
  before(() => {
    cy.acessarSauceDemo();
  });
  it("Validando tela de login", () => {
    cy.get('[data-test="username"]').should("be.visible");
    cy.get('[data-test="password"]').should("be.visible");
    cy.get('[data-test="login-button"]').contains("Login").should("be.visible");
    cy.get('[data-test="login-credentials"]').should("exist");
    cy.get('[data-test="login-password"]').should("exist");
  });
  it("Preenchendo credenciais inválidas: Senha", () => {
    cy.preencherCredenciais(user, inpassword);
    cy.get('[data-test="error"]')
      .should(
        "have.text",
        "Epic sadface: Username and password do not match any user in this service"
      )
      .and("be.visible");
  });
  it("Preenchendo credenciais inválidas: Usuário", () => {
    cy.preencherCredenciais(inuser, password);
    cy.get('[data-test="error"]')
      .should(
        "have.text",
        "Epic sadface: Username and password do not match any user in this service"
      )
      .and("be.visible");
  });
  it("Preenchendo credenciais válidas", () => {
    cy.preencherCredenciais(user, password);
  });
});
