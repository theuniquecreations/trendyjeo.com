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
        {/* <HeaderTop className="headerTop" /> */}
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Products className="aboutArea" title="About" />

      <FooterArea />
    </Fragment>
  );
};
export default ProductPage;
