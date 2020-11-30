import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import FooterArea from "../../../components/FooterArea";

import "./style.scss";

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "Contact" }];

const ContactPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>

      <div className="contactusPageArea ">
        <div className="container">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-5">
              <div className="contactUsInfo mt-10">
                <h3>Contact me</h3>

                <h4>Phone</h4>
                <span>0-123-456-7890</span>
                <span>0-123-456-7890</span>
                <h4>Email</h4>
                <span>trendyjeo@gmail.com</span>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contactUSForm">
                <h3>Quick Contact Form</h3>
                <p>
                  Description Description DescriptionDescription
                  DescriptionDescription Description Description
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <NewsLetter
                className="newsLetterArea"
            /> */}
      <FooterArea />
    </Fragment>
  );
};
export default ContactPage;
