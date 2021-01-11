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
                {/* <h4>Phone</h4>
                <div className="si">
                <i class="fa fa-phone" aria-hidden="true" style={{color: "black"}}>
                  {" "}
                  +91-9345495954{" "}
                </i></div>
                <a href="tel:9345495954" onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"><p class="call-button">Click to Call</p></a>
                <br></br> */}
{/*                 
                <h4>Email</h4>
                <div className="si">
                <i class="fa fa-envelope" aria-hidden="true"> 
                
                  {" "}
                  trendyjeo@gmail.com{" "}
                </i></div> */}
                 <h4>Phone</h4>
                <span>
                  {" "}
                  <a href="tel:+91-9345495954"> 
                  <div className="si " style={{color: "black"}}>
                  <i class="fa fa-phone" aria-hidden="true">
                   
                  +91-9345495954 </i> </div>
                    </a>
                
                    
                   
                </span>
                <br></br>
                <h4>Email</h4>
                <span>
                  {" "}
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVVsvNnFQnZlqCFZQpPrntkHDzqWlpDgVDJQvvjWxNpjpfbTwhvQlmPGPgtWgwfqrQhcxG"
                    className="text-white"
                    target="blank"
                    className="clr" 
                  >
                    <div className="si" style={{color: "black"}}>
                    <i  class="fa fa-envelope" aria-hidden="true" >  trendyjeo@gmail.com</i> </div>
                  </a>
                </span>
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
                    <div className="si" style={{color: "black"}}>
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
                   <div className="si" style={{color: "black"}}>  <i class="fa fa-facebook-square" aria-hidden="true"> Trendy jeo</i> </div>
                  </a>
                </span>   <br></br>
              </div>
            </div>
         
            <div className="col-lg-7">
              <div className="contactUSForm">
                <h3> Address </h3>
                <p className="sz">Shop No - 4 , <br></br>
                Renuga Shopping Complex ,<br></br>
                Peyode Junction, <br></br>
                Sarel Road ,<br></br>
                Kanyakumari ,<br></br>
                Tamil Nadu, <br></br>
                629203 
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
