import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./components/About/index.js";
import Galery from "./components/Galery/index.js";
import ProductGrid from "./components/ProductGrid/index.js";
import ProductDetails from "./components/ProductDetails/index.js";
import Products from "./components/Products/index.js";
import FAQ from "./components/FAQ/index.js";
import FormLogin from "./components/FormLogin/index.js";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ProductGrid} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/galery" component={Galery} />
        <Route path="/product-details" component={ProductDetails} />
        <Route path="/faq" component={FAQ} />
        <Route path="/login" component={FormLogin} />
      </Switch>
    </BrowserRouter>
  );
}
