import { combineReducers } from "redux";
import dataSlice from "@store/slices/dataSlice";
import uiSlice from "@store/slices/uiSlice";

const rootReducer = combineReducers({
  data: dataSlice,
  ui: uiSlice,
});

export default rootReducer;
