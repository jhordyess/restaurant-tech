import { TProduct } from "types";
import ActionTypes from "./actionTypes";

export const setProducts = (products: TProduct[]) => ({
  type: ActionTypes.SET_PRODUCTS,
  products,
});
