import React, { Component } from "react";
import Card from "./CardUI";
import Logo from "../../assets/try.jpeg";
import Logo1 from "../../assets/3.jpg";
import Logo2 from "../../assets/5.jpg";

class Cards extends Component {
  one = "This is Photo painting";
  two = "This is pillow printing";
  three = "This is Cup printing";
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-3">
            <Card img={Logo} title="Photo" des={this.one} />
          </div>
          <div className="col-md-3">
            <Card img={Logo1} title="Pillow" des={this.two} />
          </div>
          <div className="col-md-3">
            <Card img={Logo2} title="Cup" des={this.three} />
          </div>
          <div className="col-md-3">
            <Card img={Logo} title="Photo" des={this.one} />
          </div>
          <div className="col-md-3">
            <Card img={Logo1} title="Pillow" des={this.two} />
          </div>
          <div className="col-md-3">
            <Card img={Logo2} title="Cup" des={this.three} />
          </div>
          <div className="col-md-3">
            <Card img={Logo2} title="Cup" des={this.three} />
          </div>
          <div className="col-md-3">
            <Card img={Logo2} title="Cup" des={this.three} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
