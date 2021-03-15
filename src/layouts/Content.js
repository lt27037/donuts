import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

const Content = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>

      <Route path="/produkt/:id">
        <Product />
      </Route>

      <Route path="/koszyk">
        <Cart />
      </Route>
    </Switch>
  );
};

export default Content;
