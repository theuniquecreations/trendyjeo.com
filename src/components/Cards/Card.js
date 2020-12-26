import React, { Component } from "react";
import Card from "./CardUI";

import cup from "../../images/cup.jpg";
import hand from "../../images/hand.jpg";
import phone from "../../images/phone.jpg";
import photo from "../../images/photo.jpg";
import pillow from "../../images/pillow.jpg";
import tshirt from "../../images/tshirt.jpg";
import key from "../../images/key.jpg";
import digit from "../../images/digit.jpg";

class Cards extends Component {
  one = "This is Photo painting";
  two = "This is pillow printing";
  three = "This is Cup printing";
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-3">
            <Card img={cup} title="Mug" />
          </div>
          <div className="col-md-3">
            <Card img={hand} title="Hand made craft"   />
          </div>
          <div className="col-md-3">
            <Card img={phone} title="Mobile Case"   />
          </div>
          <div className="col-md-3">
            <Card img={photo} title="Photo Frame"   />
          </div> 
          <div className="col-md-3">
            <Card img={pillow} title="Pillow"  />
          </div>
          <div className="col-md-3">
            <Card img={tshirt} title="T-Shirt"  />
          </div>
          <div className="col-md-3">
            <Card img={key} title="Key Chain"  />
          </div>
          <div className="col-md-3">
            <Card img={digit} title="Digital Oil Painting"   />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
