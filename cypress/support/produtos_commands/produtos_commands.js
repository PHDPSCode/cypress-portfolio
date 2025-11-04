Cypress.Commands.add("validaProduto", (nome, preco, descricao) => {
  const produto = cy.contains('[data-test="inventory-item"]', nome);

  produto
    .then(($productCard) => {
      cy.wrap($productCard)
        .find('[data-test="inventory-item-price"]')
        .should('contain.text', preco);
      cy.wrap($productCard)
        .find('[data-test="inventory-item-desc"]')
        .should('contain.text', descricao);
    });
});
