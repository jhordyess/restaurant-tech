import * as React from "react";
import Customer from "./layouts/customer";
import { HashRouter } from "react-router-dom";
import { CustomerRoutes, customersLinks } from "./routes";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import reducer from "@store/reducer";

export default function App() {
  const store = createStore(reducer);

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
