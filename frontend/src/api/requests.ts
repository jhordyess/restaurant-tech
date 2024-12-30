import { fakeRequest } from '.'

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
    'All',
    'Daily Specials',
    'Main Entrees',
    'Desserts',
    'Soups and Broths',
    'Appetizers'
  ])

export const fetchProducts = () =>
  fakeRequest<TProduct[]>([
    {
      name: 'Keperí al horno',
      category: 'Main Entrees',
      price: 15.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Asadito Colorado Vallegrandino',
      category: 'Main Entrees',
      price: 18.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Asadito Camba',
      category: 'Main Entrees',
      price: 16.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Mondongo Chuquisaqueño',
      category: 'Main Entrees',
      price: 14.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Saice Boliviano',
      category: 'Main Entrees',
      price: 17.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Queso Humacha',
      category: 'Main Entrees',
      price: 12.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Falso Conejo',
      category: 'Main Entrees',
      price: 16.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Sajta de Pollo',
      category: 'Main Entrees',
      price: 14.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Pique Macho',
      category: 'Main Entrees',
      price: 19.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Pampaku Boliviano ',
      category: 'Main Entrees',
      price: 15.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Silpancho Cochabambino',
      category: 'Main Entrees',
      price: 17.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Majadito Cruceño',
      category: 'Main Entrees',
      price: 13.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Picante de Pollo Boliviano',
      category: 'Main Entrees',
      price: 16.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Surubí al Horno',
      category: 'Main Entrees',
      price: 18.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: "K'jaras Vallegrandinas",
      category: 'Main Entrees',
      price: 15.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Repostería Boliviana',
      category: 'Desserts',
      price: 8.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Muffins de avena y manzana',
      category: 'Desserts',
      price: 3.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Barritas fit',
      category: 'Desserts',
      price: 2.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Muffin Fit',
      category: 'Desserts',
      price: 4.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Paneton Navideño Estilo Boliviano',
      category: 'Desserts',
      price: 12.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Pan Sarnita Boliviano',
      category: 'Desserts',
      price: 9.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Rollito de Queso Boliviano',
      category: 'Desserts',
      price: 6.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Api con Pastel Boliviano',
      category: 'Desserts', //Also Appetizers
      price: 5.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Bizcochuelo de Todos Santos',
      category: 'Desserts',
      price: 7.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Ranga Ranga',
      category: 'Soups and Broths',
      price: 10.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Caldo de Kawi',
      category: 'Soups and Broths',
      price: 9.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Picana Navideña',
      category: 'Soups and Broths',
      price: 11.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Fricase Boliviano',
      category: 'Soups and Broths',
      price: 13.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Chairo Sopa Boliviana',
      category: 'Soups and Broths',
      price: 12.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Fideos Uchu "Cochabambino"',
      category: 'Soups and Broths',
      price: 11.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Locro de Gallina Boliviano',
      category: 'Soups and Broths',
      price: 14.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Sopa de Maní Boliviano',
      category: 'Soups and Broths',
      price: 10.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Boletus',
      category: 'Appetizers',
      price: 8.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Tortitas con Espinacas y Queso',
      category: 'Appetizers',
      price: 7.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Tortitas de Lentejas',
      category: 'Appetizers',
      price: 6.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Salteñas Bolivianas',
      category: 'Appetizers',
      price: 3.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Masaco de Plátano Verde',
      category: 'Appetizers',
      price: 9.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Tucumanas Bolivianas',
      category: 'Appetizers',
      price: 4.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Humintas o Tamales Bolivianos',
      category: 'Appetizers',
      price: 5.99,
      image: '',
      favorite: false,
      id: ''
    },
    {
      name: 'Relleno de Papa Boliviano',
      category: 'Appetizers',
      price: 6.99,
      image: '',
      favorite: false,
      id: ''
    }
  ])

export const fetchProductImage = (product: TProduct, index: number = 118) =>
  fakeRequest({
    ...product,
    id: index,
    image: `https://picsum.photos/id/${index}/300/400`
  })
