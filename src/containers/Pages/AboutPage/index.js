import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import About from "../../../components/About";
import FooterArea from "../../../components/FooterArea";
// images
import ab from "../../../images/jeo.jpg";

import "./style.scss";

const aboutText = [
  {
  text:"Gifts are a wonderful way of expressing our love. When you think of gifting your loved ones, no matter whatever is the occasion or wherever they are in the world, GiftsnIdeas is there to take care of your gifting need as its own and makes sure that your beloved friends or family members receive the best to make their day memorable at both your ends. We care for your feelings!!"
  },
  {
    text:"Privacy and Policy :"
  },
  {
    text: "1. You can order in website by choosing cash on delivery or you can also order by making spot payment" },
  {        
    text: "2. But Both are online payment.",
  },
  {        
    text: "3. One method is to pay   before you get the product.",
  },
  {        
    text: "4.Other method is to pay after getting your product, When you getting your product you should pay within 12 hours in net banking.",
  },
  {        
    text: "5. If there is any issues or damage in product you should convey it with proof then we will replace the product.",
  },
  {        
    text: "6. Shop is not responsible for online payment issue.",
  },
  {        
    text: "7. Most customised product make 8 to 10 working days.",
  },
];

const AboutPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderBotton className="headerBottomArea" />
        <HeaderTop className="headerTop" />
      </header>
      <About
        className="aboutArea"
        title="Started at Sep 16 2020"
        images={ab}
       
        pragraphs={aboutText}
      />

      <FooterArea />
    </Fragment>
  );
};
export default AboutPage;
