import * as React from "react";
import Customer from "./layouts/customer";
import { BrowserRouter } from "react-router-dom";
import { CustomerRoutes, customersLinks } from "./routes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Customer links={customersLinks}>
          <CustomerRoutes />
        </Customer>
      </BrowserRouter>
    </>
  );
}
