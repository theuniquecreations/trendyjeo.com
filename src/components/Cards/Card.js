import React, { Component } from "react";
import Card from "./CardUI";

import Pillow from "../../images/Pillow.jpg";
import Mug from "../../images/Mug.jpg";
import Handmade  from "../../images/HandmadeGifts.jpg";
import Wall  from "../../images/Wallhangingframe.jpg";
import Table from "../../images/TableStandFrame.jpg";
import Keychain from "../../images/Keychain.jpg";
import Customized from "../../images/CustomizedGifts.jpg";
import Combo  from "../../images/ConboGifts.jpg";
import Other  from "../../images/OtherGifts.jpg";
import Magical  from "../../images/MagicalGifts.jpg";

class Cards extends Component {
  one = "This is Photo painting";
  two = "This is pillow printing";
  three = "This is Cup printing";
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row ph">
          <div className="wd">
            <Card img={Pillow} title="Pillow" />
          </div>
          <div className="wd">
            <Card img={Mug} title="Mug"   />
          </div>
          <div className="wd">
            <Card img={Handmade} title="Handmade Gifts"   />
          </div>
          <div className="wd">
            <Card img={Wall} title="Wall Hanging Frame"   />
          </div> 
          <div className="wd">
            <Card img={Table} title="Table Stand Frame"  />
          </div>
          <div className="wd">
            {/* col-md-3 */}
            <Card img={Keychain} title="Keychain"  />
          </div>
          <div className="wd">
            <Card img={Customized} title="Customized Gifts"  />
          </div>
          <div className="wd">
            <Card img={Combo} title="Combo Gifts"   />
          </div>
          <div className="wd">
            <Card img={Magical} title="Magical Gifts"   />
          </div>
          <div className="wd">
            <Card img={Other} title="Other Gifts"   />
          </div>
          
        </div>
      </div>
    );
  }
}

export default Cards;
