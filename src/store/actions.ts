import { TProduct } from "types";
import ActionTypes from "./actionTypes";
import { fetchProductImage } from "@api/requests";

export const setProducts = (products: TProduct[]) => ({
  type: ActionTypes.SET_PRODUCTS,
  products,
});

export const getProductsWithImage: any =
  (products: TProduct[] = []) =>
  async (dispatch) => {
    //🤔
    const newProducts = await Promise.all(
      products.map((product) => fetchProductImage(product)) //🤔
    );

    dispatch(setProducts(newProducts));
  };
