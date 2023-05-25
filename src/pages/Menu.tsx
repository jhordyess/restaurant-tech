import * as React from "react";
import { fetchCategories, fetchProducts } from "@api/requests";
import { useDispatch, useSelector } from "react-redux";
import { getProductsWithImage, setLoadingProducts } from "@store/actions";
import { IState } from "@store/reducer";

const ProductCard = ({ title, price, image, category }) => {
  return (
    <div>
      <figure className="w-64 h-72 relative border-x border-t b-b">
        <img className="w-full h-full" src={image} alt="None" />
        <div className="absolute top-0 right-0 flex flex-row text-sm">
          <button className="hover:bg-red-100 py-2 px-3">➕</button>
          <button className="hover:bg-red-100 py-2 px-3">🖤</button>
        </div>
      </figure>
      <div className="h-16 border flex flex-col items-center justify-center">
        <span className="font-bold">{title}</span>
        <span className="text-amber-800">{price}$</span>
      </div>
    </div>
  );
};

function Menu() {
  const [categories, setCategories] = React.useState<string[]>([]);

  const products = useSelector((state: IState) => state.products);
  const loading = useSelector((state: IState) => state.loadingProducts);
  const dispatch = useDispatch();

  const getCategories = async () => {
    const categories = await fetchCategories();
    setCategories(categories);
  };

  const getProducts = async () => {
    dispatch(setLoadingProducts(true));
    const products = await fetchProducts();
    dispatch(getProductsWithImage(products));
    dispatch(setLoadingProducts(false));
  };

  React.useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  return (
    <section className="flex flex-col items-center py-6 gap-y-6">
      <section className="w-64 mx-auto flex flex-row justify-between items-center">
        <input
          type="text"
          placeholder="Hamburger?"
          className="w-full h-8 border px-2 text-sm box-content outline-none"
        />
        <button className="p-1 border-y border-r hover:bg-red-100 box-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="w-6 h-6"
            viewBox="0 0 100 100"
            stroke="currentColor"
          >
            <circle cx="45" cy="45" r="18" strokeWidth="5" />
            <line x1="55" y1="55" x2="75" y2="75" strokeWidth="5" />
          </svg>
        </button>
      </section>
      {categories.length > 1 && (
        <section>
          <ul className="flex flex-row gap-6">
            {categories.map((name, index) => (
              <li key={"cat-" + index}>{name}</li>
            ))}
          </ul>
        </section>
      )}
      {loading ? (
        <div className="w-16 h-16 border-8 border-t-red-200 rounded-full animate-spin"></div>
      ) : (
        <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {products.map(({ name, category, image, price }, index) => (
            <ProductCard
              key={name}
              category={category}
              title={name}
              image={image}
              price={price}
            />
          ))}
        </section>
      )}
    </section>
  );
}

export default Menu;
