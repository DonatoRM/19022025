/*
Declaramos un array que contendrá los grupos de productos
*/
const groupProducts = [
  {
    category: "refresco",
    url: "../assets/image/bebidas/refrescos.jpg",
  },
  {
    category: "cervezas",
    url: "../assets/image/bebidas/cervezas.png",
  },
  {
    category: "cafés",
    url: "../assets/image/bebidas/cafes.png",
  },
  {
    category: "alcohol",
    url: "../assets/image/bebidas/alcohol.jpeg",
  },
  {
    category: "whiskys",
    url: "../assets/image/bebidas/whisky.png",
  },
  {
    category: "licores",
    url: "../assets/image/bebidas/licores.png",
  },
  {
    category: "vinos",
    url: "../assets/image/bebidas/vinos.png",
  },
  {
    category: "cocktail",
    url: "../assets/image/bebidas/cocktails.png",
  },
  {
    category: "ensalada",
    url: "../assets/image/bebidas/ensaladas.png",
  },
  {
    category: "tapas",
    url: "../assets/image/bebidas/tapas.png",
  },
  {
    category: "bocadillo",
    url: "../assets/image/bebidas/bocadillos.png",
  },
  {
    category: "pescados",
    url: "../assets/image/bebidas/pescados.jpg",
  },
  {
    category: "platos e",
    url: "../assets/image/bebidas/platose.jpg",
  },
  {
    category: "carnes",
    url: "../assets/image/bebidas/carnes.png",
  },
  {
    category: "comida r",
    url: "../assets/image/bebidas/comidar.jpeg",
  },
  {
    category: "helados",
    url: "../assets/image/bebidas/helados.png",
  },
  {
    category: "combinad",
    url: "../assets/image/bebidas/combinad.png",
  },
  {
    category: "desayuno",
    url: "../assets/image/bebidas/desayuno.jpeg",
  },
];
document.addEventListener(
  "DOMContentLoaded",
  () => {
    const templateProductGroups = document.getElementById("productGroups");
    groupProducts.forEach((product) => {
      const card = document.createElement("div");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", "cardTitle-" + product.category);
      card.classList.add("cardGroupProducts");
      const figure = document.createElement("figure");
      figure.classList.add("figureGroupProducts");
      const img = document.createElement("img");
      img.setAttribute("src", product.url);
      img.setAttribute("alt", "imagen de " + product.category);
      img.classList.add("cardGroupProductsImg");
      const figcaption = document.createElement("figcaption");
      figcaption.textContent = product.category;
      figcaption.classList.add("cardGroupProductsFigcaption");
      figure.appendChild(img);
      figure.appendChild(figcaption);
      card.appendChild(figure);
      templateProductGroups.appendChild(card);
    });
  },
  false
);
