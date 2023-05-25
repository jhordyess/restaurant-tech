import * as React from "react";
import Customer from "./layouts/customer";
import { HashRouter } from "react-router-dom";
import { CustomerRoutes, customersLinks } from "./routes";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose as reduxCompose,
  legacy_createStore as createStore,
} from "redux";
import reducer from "@store/reducer";
import thunk from "redux-thunk";
import { extraProduct, logger } from "@store/middleware";

const compose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose;

const enhancer = compose(applyMiddleware(thunk, logger, extraProduct));

const store = createStore(reducer, enhancer);

export default function App() {
  return (
    <>
      <HashRouter>
        <Customer links={customersLinks}>
          <Provider store={store}>
            <CustomerRoutes />
          </Provider>
        </Customer>
      </HashRouter>
    </>
  );
}
