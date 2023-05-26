import ActionTypes from "./actionTypes";
import { TProduct } from "types";
import { IToggleFavorite, ISetLoadingProducts, ISetProducts } from "./actions";
import { fromJS, FromJS } from "immutable";

export type IState = FromJS<{
  products: TProduct[];
  loadingProducts: boolean;
}>;

type Action = ISetProducts | ISetLoadingProducts | IToggleFavorite;

const initialState: IState = fromJS({
  products: [],
  loadingProducts: false,
});

export default function reducer(state: IState = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state.setIn(["products"], fromJS(action.products));
    case ActionTypes.SET_LOADING:
      return state.setIn(["loadingProducts"], action.loadingProducts);
    case ActionTypes.TOGGLE_FAVORITE:
      //FIXME "any"
      const currentProductIndex = (state.get("products") as any).findIndex(
        (product) => product.get("id") === action.id
      );

      if (currentProductIndex < 0) return state;

      const isFavorite = state.getIn([
        "products",
        currentProductIndex,
        "favorite",
      ]);

      return state.setIn(
        ["products", currentProductIndex, "favorite"],
        !isFavorite
      );
    default:
      return state;
  }
}
