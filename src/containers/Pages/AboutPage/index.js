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
    text: "Gift shop, Arts & crafts shop, Cultural gift shop",
  },
  {
    text: " ",
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
        title="About"
        images={about}
        pragraphs={aboutText}
      />

      <FooterArea />
    </Fragment>
  );
};
export default AboutPage;
