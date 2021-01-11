import React, { Component } from "react";
import Card from "./CardUI";

import Pillow from "../../images/Pillow.jpeg";
import Mug from "../../images/Mug.jpeg";
import Handmade  from "../../images/HandmadeGifts.jpeg";
import Wall  from "../../images/Wallhangingframe.jpeg";
import Table from "../../images/TableStandFrame.jpeg";
import Keychain from "../../images/Keychain.jpeg";
import Customized from "../../images/CustomizedGifts.jpeg";
import Combo  from "../../images/ConboGifts.jpeg";
import Other  from "../../images/OtherGifts.jpeg";
import Magical  from "../../images/MagicalGifts.jpeg";

class Cards extends Component {
  one = "This is Photo painting";
  two = "This is pillow printing";
  three = "This is Cup printing";
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-3">
            <Card img={Pillow} title="Pillow" />
          </div>
          <div className="col-md-3">
            <Card img={Mug} title="Mug"   />
          </div>
          <div className="col-md-3">
            <Card img={Handmade} title="Handmade Gifts"   />
          </div>
          <div className="col-md-3">
            <Card img={Wall} title="Wall Hanging Frame"   />
          </div> 
          <div className="col-md-3">
            <Card img={Table} title="Table Stand Frame"  />
          </div>
          <div className="col-md-3">
            <Card img={Keychain} title="Keychain"  />
          </div>
          <div className="col-md-3">
            <Card img={Customized} title="Customized Gifts"  />
          </div>
          <div className="col-md-3">
            <Card img={Combo} title="Combo Gifts"   />
          </div>
          <div className="col-md-3">
            <Card img={Other} title="Other Gifts"   />
          </div>
          <div className="col-md-3">
            <Card img={Magical} title="Magical Gifts"   />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
