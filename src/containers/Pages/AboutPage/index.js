import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import About from "../../../components/About";
import FooterArea from "../../../components/FooterArea";
// images
import about from "../../../images/about/2.jpg";

import "./style.scss";

const aboutText = [
  {
    text:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ,",
  },
  {
    text:
      'and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum',
  },
];

const AboutPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
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
