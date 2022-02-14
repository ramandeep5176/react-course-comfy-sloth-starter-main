import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />}>
          <Home />
        </Route>
        <Route exact path="/checkout/:id">
          <Checkout />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
