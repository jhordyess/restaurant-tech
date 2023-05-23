import * as React from "react";
import { useRoutes } from "react-router-dom";
import About from "@pages/About";
import BookNow from "@pages/BookNow";
import Contact from "@pages/Contact";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Menu from "@pages/Menu";
import MyAccount from "@pages/MyAccount";
import MyOrder from "@pages/MyOrder";
import MyOrders from "@pages/MyOrders";
import NotFound from "@pages/NotFound";
import SignIn from "@pages/SignIn";

const customerRoutes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
    position: "left",
  },
  {
    path: "about",
    element: <About />,
    position: "left",
  },
  {
    path: "Contact",
    element: <Contact />,
    position: "left",
  },
  {
    path: "/menu",
    element: <Menu />,
    name: "Menu",
    position: "center",
  },
  {
    path: "/order-now",
    element: <BookNow />,
    name: "Order Now",
    position: "right",
  },
  {
    path: "/login",
    element: <Login />,
    name: "Login",
    position: "right",
  },
  {
    path: "/sign-in",
    element: <SignIn />,
    name: "Sign In",
    position: "right",
    isPrivate: true,
  },
  {
    path: "/my-account",
    element: <MyAccount />,
    name: "My Account",
    position: "right",
    isPrivate: true,
  },
  {
    path: "/my-orders",
    element: <MyOrders />,
    name: "My Orders",
    position: "right",
    isPrivate: true,
  },
  {
    path: "/my-order",
    element: <MyOrder />,
    name: "My Order",
    position: "right",
    isPrivate: true,
  },
  {
    path: "*",
    element: <NotFound />,
    name: "Not Found",
    excluded: true,
  },
];

export const customersLinks = customerRoutes
  .filter(({ excluded }) => !excluded)
  .map(({ path, name, isPrivate, position }) => ({
    path,
    name,
    isPrivate,
    position,
  }));

export const CustomerRoutes = () =>
  useRoutes(customerRoutes.map(({ path, element }) => ({ path, element })));
