import ActionTypes from "./actionTypes";
import { TProduct } from "types";
import { ISetLoadingProducts, ISetProducts } from "./actions";

export interface IState {
  products: TProduct[];
  loadingProducts: boolean;
}

type Action = ISetProducts | ISetLoadingProducts;

const initialState: IState = {
  products: [],
  loadingProducts: false,
};

export default function reducer(state: IState = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loadingProducts: action.loadingProducts,
      };
    default:
      return state;
  }
}
