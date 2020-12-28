import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import About from "../../../components/About";
import FooterArea from "../../../components/FooterArea";
// images
import about from "../../../images/about/2.jpg";

import "./style.scss";

const aboutText = [
  {
    text: "Gifts are a wonderful way of expressing our love. When you think of gifting your loved ones, no matter whatever is the occasion or wherever they are in the world, GiftsnIdeas is there to take care of your gifting need as its own and makes sure that your beloved friends or family members receive the best to make their day memorable at both your ends. We care for your feelings!!",
  },
  {
    text: "Gift shop, Arts & crafts shop, Cultural gift shop",
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
        images={about}
        pragraphs={aboutText}
      />

      <FooterArea />
    </Fragment>
  );
};
export default AboutPage;
