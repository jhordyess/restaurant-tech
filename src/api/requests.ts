import { TProduct } from "types";
import { fakeRequest, makeRequest } from ".";

// export const getCategories = async () => {
//   const { data } = await makeRequest({
//     url: "/products",
//     values: {},
//     requestType: "GET",
//   });
//   console.info(data);
// };

export const fetchCategories = () =>
  fakeRequest([
    "All",
    "Daily Specials",
    "Main Entrees",
    "Desserts",
    "Soups and Broths",
    "Appetizers",
  ]);

export const fetchProducts = () =>
  fakeRequest<TProduct[]>([
    {
      name: "Keperí al horno",
      category: "Main Entrees",
      price: 15.99,
      image: "",
    },
    {
      name: "Asadito Colorado Vallegrandino",
      category: "Main Entrees",
      price: 18.99,
      image: "",
    },
    {
      name: "Asadito Camba",
      category: "Main Entrees",
      price: 16.99,
      image: "",
    },
    {
      name: "Mondongo Chuquisaqueño",
      category: "Main Entrees",
      price: 14.99,
      image: "",
    },
    {
      name: "Saice Boliviano",
      category: "Main Entrees",
      price: 17.99,
      image: "",
    },
    {
      name: "Queso Humacha",
      category: "Main Entrees",
      price: 12.99,
      image: "",
    },
    { name: "Falso Conejo", category: "Main Entrees", price: 16.99, image: "" },
    {
      name: "Sajta de Pollo",
      category: "Main Entrees",
      price: 14.99,
      image: "",
    },
    { name: "Pique Macho", category: "Main Entrees", price: 19.99, image: "" },
    {
      name: "Pampaku Boliviano ",
      category: "Main Entrees",
      price: 15.99,
      image: "",
    },
    {
      name: "Silpancho Cochabambino",
      category: "Main Entrees",
      price: 17.99,
      image: "",
    },
    {
      name: "Majadito Cruceño",
      category: "Main Entrees",
      price: 13.99,
      image: "",
    },
    {
      name: "Picante de Pollo Boliviano",
      category: "Main Entrees",
      price: 16.99,
      image: "",
    },
    {
      name: "Surubí al Horno",
      category: "Main Entrees",
      price: 18.99,
      image: "",
    },
    {
      name: "K'jaras Vallegrandinas",
      category: "Main Entrees",
      price: 15.99,
      image: "",
    },
    {
      name: "Repostería Boliviana",
      category: "Desserts",
      price: 8.99,
      image: "",
    },
    {
      name: "Muffins de avena y manzana",
      category: "Desserts",
      price: 3.99,
      image: "",
    },
    { name: "Barritas fit", category: "Desserts", price: 2.99, image: "" },
    { name: "Muffin Fit", category: "Desserts", price: 4.99, image: "" },
    {
      name: "Paneton Navideño Estilo Boliviano",
      category: "Desserts",
      price: 12.99,
      image: "",
    },
    {
      name: "Pan Sarnita Boliviano",
      category: "Desserts",
      price: 9.99,
      image: "",
    },
    {
      name: "Rollito de Queso Boliviano",
      category: "Desserts",
      price: 6.99,
      image: "",
    },
    {
      name: "Api con Pastel Boliviano",
      category: "Desserts",
      price: 5.99,
      image: "",
    },
    {
      name: "Bizcochuelo de Todos Santos",
      category: "Desserts",
      price: 7.99,
      image: "",
    },
    {
      name: "Ranga Ranga",
      category: "Soups and Broths",
      price: 10.99,
      image: "",
    },
    {
      name: "Caldo de Kawi",
      category: "Soups and Broths",
      price: 9.99,
      image: "",
    },
    {
      name: "Picana Navideña",
      category: "Soups and Broths",
      price: 11.99,
      image: "",
    },
    {
      name: "Fricase Boliviano",
      category: "Soups and Broths",
      price: 13.99,
      image: "",
    },
    {
      name: "Chairo Sopa Boliviana",
      category: "Soups and Broths",
      price: 12.99,
      image: "",
    },
    {
      name: 'Fideos Uchu "Cochabambino"',
      category: "Soups and Broths",
      price: 11.99,
      image: "",
    },
    {
      name: "Locro de Gallina Boliviano",
      category: "Soups and Broths",
      price: 14.99,
      image: "",
    },
    {
      name: "Sopa de Maní Boliviano",
      category: "Soups and Broths",
      price: 10.99,
      image: "",
    },
    { name: "Boletus", category: "Appetizers", price: 8.99, image: "" },
    {
      name: "Tortitas con Espinacas y Queso",
      category: "Appetizers",
      price: 7.99,
      image: "",
    },
    {
      name: "Tortitas de Lentejas",
      category: "Appetizers",
      price: 6.99,
      image: "",
    },
    {
      name: "Salteñas Bolivianas",
      category: "Appetizers",
      price: 3.99,
      image: "",
    },
    {
      name: "Masaco de Plátano Verde",
      category: "Appetizers",
      price: 9.99,
      image: "",
    },
    {
      name: "Tucumanas Bolivianas",
      category: "Appetizers",
      price: 4.99,
      image: "",
    },
    {
      name: "Humintas o Tamales Bolivianos",
      category: "Appetizers",
      price: 5.99,
      image: "",
    },
    {
      name: "Relleno de Papa Boliviano",
      category: "Appetizers",
      price: 6.99,
      image: "",
    },
    {
      name: "Api con Pastel Boliviano",
      category: "Appetizers",
      price: 5.99,
      image: "",
    },
  ]);
