import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./components/About/index.js";
import Galery from "./components/Galery/index.js";
import ProductGrid from "./components/ProductGrid/index.js";
import ProductDetails from "./components/ProductDetails/index.js";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ProductGrid} />
        <Route path="/about" component={About} />
        {/* <Route path="/products" component={Product} /> */}
        <Route path="/galery" component={Galery} />
        <Route path="/product-details" component={ProductDetails} />
      </Switch>
    </BrowserRouter>
  );
}
