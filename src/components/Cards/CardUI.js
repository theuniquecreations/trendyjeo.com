import React from 'react';
import './Card.css';


const Card = props => {
    return (
        <div className="card text-center">
            <div className="overflow">
              
                <img src={props.img} height="250px" width="300px"/> 
            </div>
            <div className="card-body text-dart">
                  <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary"> {props.des} </p>
                <a href="#" className="btn btn-outline-success">More Items</a>
            </div>
        </div>
    );
}
export default Card;