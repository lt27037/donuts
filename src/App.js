import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ProductsPage from "./pages/ProductsPage";

import "./styles/App.scss";

const App = () => {
  return (
    <Router basename="/">
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

        <Route path="/produkty">
          <ProductsPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
