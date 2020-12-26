import React, { Fragment, Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePageOne from "../Pages/HomePageOne";
import AboutPage from "../Pages/AboutPage";
import ProductPage from "../Pages/ProductPage";
import AdminPage from "../Pages/AdminPage";
import ContactPage from "../Pages/ContactPage";
import Order from "../../scripts/paynoworderedList";
import Orders from "../../scripts/payondeliveryuserlist";
import PaymentTypePage from "../Pages/PaymentTypePage";
import PaymentDeliveryPage from "../Pages/PaymentDeliveryPage";
import PaymentNowPage from "../Pages/PaymentNowPage";

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
            <Route
              exact
              path="/PayOnDelivery"
              component={PaymentDeliveryPage}
            />
            Order
            <Route exact path="/Order" component={Order} />
            <Route exact path="/Orders" component={Orders} />
            <Route exact path="/Typeofpay" component={PaymentTypePage} />
            <Route exact path="/Paynow" component={PaymentNowPage} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
