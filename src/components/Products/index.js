import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import "react-modal-video/scss/modal-video.scss";
import "./style.scss";

const pragraphs = [{ text: "Products" }, { text: "Products" }];

const About = ({
  subTitle,
  title,
  videoId,
  className,
  signature,
  images,
  orderLast,
}) => {
  const [video, setVideo] = useState(false);
  return (
    <div className={className}>
      <div className="container">
        <div className="row">Product list</div>
      </div>
    </div>
  );
};
export default About;
