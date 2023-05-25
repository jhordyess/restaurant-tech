export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const extraProduct = (store) => (next) => (actionInfo) => {
  const newProducts = [
    {
      name: "Helado de canela",
      category: "Desserts",
      price: 2.99,
      image: "",
    },
    ...actionInfo.products,
  ];

  const updatedActionInfo = {
    ...actionInfo,
    products: newProducts,
  };

  next(updatedActionInfo);
};
