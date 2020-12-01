import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Products from "../../../components/Products";
import FooterArea from "../../../components/FooterArea";
import "./style.scss";
const ProductPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Products className="aboutArea" title="About" />
      <FooterArea />
    </Fragment>
  );
};
export default ProductPage;
