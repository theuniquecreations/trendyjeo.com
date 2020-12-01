import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import UploadImage from "../../../scripts/uploadImage";
import FooterArea from "../../../components/FooterArea";
// images
import "./style.scss";

const AdminPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <div className="contactusPageArea ">
        <div className="container">
          <UploadImage />
        </div>
      </div>
      <FooterArea />
    </Fragment>
  );
};
export default AdminPage;
