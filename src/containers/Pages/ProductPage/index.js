import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Products from "../../../components/Products";
import FooterArea from "../../../components/FooterArea";
import "./style.scss";
import UploadImage from "../../../scripts/uploadImage";
const ProductPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
        <HeaderTop className="headerTop" />
      </header>
      <Products className="ProductArea" title="Product" />
      <FooterArea />
    </Fragment>
  );
};
export default ProductPage;
