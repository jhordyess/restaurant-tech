import * as React from "react";
import Customer from "./layouts/customer";
import { HashRouter } from "react-router-dom";
import { CustomerRoutes, customersLinks } from "./routes";

export default function App() {
  return (
    <>
      <HashRouter>
        <Customer links={customersLinks}>
          <CustomerRoutes />
        </Customer>
      </HashRouter>
    </>
  );
}
