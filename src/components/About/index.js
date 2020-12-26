import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const About = ({
  pragraphs,
  subTitle,
  title,
  className,
  images,
  orderLast,
}) => {
  const [video, setVideo] = useState(false);
  return (
    <div className={className}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="aboutContent">
              {subTitle && <span>{subTitle}</span>}
              <h2>{title}</h2>
              {pragraphs.map((pragraph, i) => (
                <p key={i}>{pragraph.text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
