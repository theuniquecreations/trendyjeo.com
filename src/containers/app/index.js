import React, { Fragment, Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePageOne from "../Pages/HomePageOne";
import AboutPage from "../Pages/AboutPage";
import ProductPage from "../Pages/ProductPage";
import AdminPage from "../Pages/AdminPage";
import ContactPage from "../Pages/ContactPage";
import Checkout from "../../components/Payment/checkout";
import Order from "../../scripts/orderedList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <ToastContainer autoClose={2500} position="top-center" />
          <Switch>
            <Route exact path="/" component={HomePageOne} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/products" component={ProductPage} />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/Checkout" component={Checkout} />Order
            <Route exact path="/Order" component={Order} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
