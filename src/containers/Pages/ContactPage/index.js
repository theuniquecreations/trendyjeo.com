import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import FooterArea from "../../../components/FooterArea";
import HeaderTop from "../../../components/HeaderTop";
import "./style.scss";

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "Contact" }];

const ContactPage = () => {
  return (
    <Fragment>
      <header className="headerArea"><HeaderTop className="headerTop" />
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
                <i class="fa fa-phone" aria-hidden="true"> +91-9345495954 </i> 
                <br></br>
                <h4>Email</h4>
                <i class="fa fa-envelope" aria-hidden="true">   trendyjeo@gmail.com </i>  <br></br>
                <br></br>
                <p>Instagram</p>
               <span> <a
                      href="https://www.instagram.com/trendy_jeo/?igshid=1e5w3hmdcb2t7"
                      className="text-white"
                      target="blank"
                      className="clr"
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a></span>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contactUSForm">
                <h3> Gifts that makeyour memories </h3>
                <p>
                Gift shop, Arts & crafts shop, Cultural gift shop
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
