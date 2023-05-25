import { TProduct } from "types";
import ActionTypes from "./actionTypes";
import { fetchProductImage } from "@api/requests";

export interface ISetProducts {
  type: ActionTypes.SET_PRODUCTS;
  products: TProduct[];
}

export const setProducts = (products: TProduct[]): ISetProducts => ({
  type: ActionTypes.SET_PRODUCTS,
  products,
});

export interface ISetLoadingProducts {
  type: ActionTypes.SET_LOADING;
  loadingProducts: boolean;
}

export const setLoadingProducts = (
  loadingProducts: boolean
): ISetLoadingProducts => ({
  type: ActionTypes.SET_LOADING,
  loadingProducts,
});

export const getProductsWithImage: any =
  (products: TProduct[] = []) =>
  async (dispatch) => {
    //🤔
    const newProducts = await Promise.all(
      products.map((product, index) => fetchProductImage(product, index + 30)) //🤔
    );

    dispatch(setProducts(newProducts));
  };
