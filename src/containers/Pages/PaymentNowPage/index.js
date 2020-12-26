import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import PaymentType from "../../../components/Payment/paynow";
import FooterArea from "../../../components/FooterArea";
import "./style.scss";
import UploadImage from "../../../scripts/uploadImage";
const ProductPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderBotton className="headerBottomArea" />
        <HeaderTop className="headerTop" />
      </header>
      <div className="container1">
        <div className="vertical-center1">
          <PaymentType className="ProductArea" title="Product" />
        </div>
      </div>
      <FooterArea />
    </Fragment>
  );
};
export default ProductPage;
