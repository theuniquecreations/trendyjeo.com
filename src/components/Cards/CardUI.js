import React from "react";
import "./Card.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.img} height="250px" width="300px" />
      </div>
      <div className="card-body text-dart">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary"> {props.des} </p>
        {/* <a href="#" className="btn btn-outline-success">More Items</a> */}
        <Link to="/products" className="btn btn-outline-success">
          More Products
        </Link>
        {/* <Link to="/products" className="btn btn-outline-success">More Items</Link> */}
      </div>
    </div>
  );
};
export default Card;
