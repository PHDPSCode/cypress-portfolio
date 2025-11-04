Cypress.Commands.add('acessarSauceDemo', () => {
  cy.clearCookies();
  cy.visit('/');
});

Cypress.Commands.add('preencherCredenciais', (
    usuario = Cypress.env("user").username, 
    senha = Cypress.env("user").password
) => {
  cy.get('[data-test="username"]').type(`{selectall}{del}${usuario}`);
  cy.get('[data-test="password"]').type(`{selectall}{del}${senha}`);
  cy.submeterLogin();
});

Cypress.Commands.add('submeterLogin', () => {
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('realizarLogin', (
    usuario = Cypress.env("user").username, 
    senha = Cypress.env("user").password
) => {
  cy.acessarSauceDemo();
  cy.preencherCredenciais(usuario, senha);
  cy.get('.app_logo').should('have.text', 'Swag Labs').and('be.visible');
});