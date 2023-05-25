import ActionTypes from "./actionTypes";
import { TProduct } from "types";

export interface IState {
  products: TProduct[];
}

interface SetProducts {
  type: ActionTypes.SET_PRODUCTS;
  products: TProduct[];
}

type Action = SetProducts;

// -- //

const initialState: IState = {
  products: [],
};

export default function reducer(state: IState = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
}
