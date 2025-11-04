/// <reference types="cypress" />

const produtos = [
  {
    nome: "Sauce Labs Backpack",
    preco: "$29.99",
    descricao:
      "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
  },
  {
    nome: "Sauce Labs Bike Light",
    preco: "$9.99",
    descricao:
      "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
  },
  {
    nome: "Sauce Labs Bolt T-Shirt",
    preco: "$15.99",
    descricao:
      "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.",
  },
  {
    nome: "Sauce Labs Fleece Jacket",
    preco: "$49.99",
    descricao:
      "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
  },
  {
    nome: "Sauce Labs Onesie",
    preco: "$7.99",
    descricao:
      "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
  },
  {
    nome: "Test.allTheThings() T-Shirt (Red)",
    preco: "$15.99",
    descricao:
      "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.",
  },
];

describe("Valida produtos da tela inicial", () => {
  before(() => {
    cy.realizarLogin();
  });
  it("Validando produtos do menu", () => {
    produtos.forEach((produto) => {
      cy.validaProduto(produto.nome, produto.preco, produto.descricao);
    });
  });
});
