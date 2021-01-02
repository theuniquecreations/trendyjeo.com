import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import FooterArea from "../../../components/FooterArea";
import HeaderTop from "../../../components/HeaderTop";
import "./style.scss";

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "Contact" }];

const ContactPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderBotton className="headerBottomArea" />
        <HeaderTop className="headerTop" />
      </header>

      <div className="contactusPageArea">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contactUsInfo mt-10">
                <h3>Contact me</h3>
                <h4>Phone</h4>
                <div className="si">
                <i class="fa fa-phone" aria-hidden="true">
                  {" "}
                  +91-9345495954{" "}
                </i></div>
                <br></br>
                <h4>Email</h4>
                <div className="si">
                <i class="fa fa-envelope" aria-hidden="true"> 
                
                  {" "}
                  trendyjeo@gmail.com{" "}
                </i></div>
               
                <br></br>
                <h4>Instagram</h4>
                <span>
                  {" "}
                  <a
                    href="https://www.instagram.com/trendy_jeo/?igshid=1e5w3hmdcb2t7"
                    className="text-white"
                    target="blank"
                    className="clr"
                  >
                    <div className="si">
                    <i className="fa fa-instagram" aria-hidden="true" >  Trendy jeo</i> </div>
                  </a>
                </span> <br></br>
                <h4>Facebook</h4>
                <span>
                  {" "}
                  <a
                    href="https://m.facebook.com/AntoBlobinJeo/?ref=bookmarks"
                    className="text-white"
                    target="blank"
                    className="clr"
                  >
                   <div className="si">  <i class="fa fa-facebook-square" aria-hidden="true"> Trendy jeo</i> </div>
                  </a>
                </span>   <br></br>
              </div>
            </div>
         
            <div className="col-lg-7">
              <div className="contactUSForm">
                <h3> Gifts that makeyour memories </h3>
                <p>Gifts are a wonderful way of expressing our love. When you think of gifting your loved ones, no matter whatever is the occasion or wherever they are in the world, GiftsnIdeas is there to take care of your gifting need as its own and makes sure that your beloved friends or family members receive the best to make their day memorable at both your ends. We care for your feelings!!</p>
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
