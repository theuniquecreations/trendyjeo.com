import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import HeroSlider from "../../../components/HeroSlider";
import About from "../../../components/About";
import FooterArea from "../../../components/FooterArea";
import Cards from "../../../components/Cards/Card";
import SectionTitle from "../../../components/Title";

// images
import about from "../../../images/about/2.jpg";
import signature from "../../../images/about/1.png";
import axios from "axios";

const heroSliders = [
  {
    images: "slideWrapperOne",
    title: "",
    subTitle: "",
    text: "The Most Talented Law Frim",
    button: "Contact us now",
  },
  {
    images: "slideWrapperTwo",
    title: "Handmade",
    subTitle: "",
    text: "Lets Review it",
    button: "Contact us now",
  },
  {
    images: "slideWrapperThree",
    title: "Crafts",
    subTitle: "",
    text: "Lets Review it",
    button: "Contact us now",
  },
];

const services = [
  {
    icon: "flaticon-parents",
    title: "Family Law",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
  },
  {
    icon: "flaticon-wounded",
    title: "Personal Injury",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
  },
  {
    icon: "flaticon-employee",
    title: "Business Law",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
  },
  {
    icon: "flaticon-thief",
    title: "Criminal Law",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
  },
  {
    icon: "flaticon-university-graduate-hat",
    title: "Education Law",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
  },
  {
    icon: "flaticon-house",
    title: "Real Estate Law",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
  },
];

function HomePageOne() {
  const [responseData, setResponseData] = React.useState([]);

  // React.useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url:
  //       "https://tucservices.azurewebsites.net/api/DynamoDB/GetItems?website=dreamyfad.com",
  //     headers: {
  //       "content-type": "application/json",
  //       "x-access-key": "tucblog101289101289",
  //       "x-access-token": "tucblog101289101289",
  //     },
  //   })
  //     .then((response) => {
  //       setResponseData(response.data.items);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  // console.log(responseData);

  return (
    <Fragment>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBotton className="headerBottomArea" />
      </header>
      <HeroSlider sliders={heroSliders} className="heroSliderArea" />

      <SectionTitle title="Our Products" />

      <Cards />
      <SectionTitle title="Contact us : +91-9876543290" />
      <FooterArea />
    </Fragment>
  );
}
export default HomePageOne;
