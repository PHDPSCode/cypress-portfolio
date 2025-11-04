Cypress.Commands.add('validaListaProdutos', (
    nome,
    preco,
    descricao
) => {
    
    cy.contains('[data-test="inventory-item"]', nome)
      .find('[data-test="inventory-item-desc"]')
      .should('contain.text', descricao)
    
    cy.contains('[data-test="inventory-item"]', nome)
      .find('[data-test="inventory-item-price"]')
      .should('contain.text', preco)
});
