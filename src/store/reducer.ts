import ActionTypes from "./actionTypes";
import { TProduct } from "types";
import { IToggleFavorite, ISetLoadingProducts, ISetProducts } from "./actions";

export interface IState {
  products: TProduct[];
  loadingProducts: boolean;
}

type Action = ISetProducts | ISetLoadingProducts | IToggleFavorite;

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
    case ActionTypes.TOGGLE_FAVORITE:
      const newProducts = [...state.products];

      const currentProductIndex = newProducts.findIndex(
        (product) => product.id === action.id
      );

      if (currentProductIndex < 0) return state;

      newProducts[currentProductIndex].favorite =
        !newProducts[currentProductIndex].favorite;

      return { ...state, products: newProducts };
    default:
      return state;
  }
}
