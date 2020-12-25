import React from "react";
import "./style.scss";
const HeaderTop = (props) => {
  return (
    <div className={props.className}>
      <div className="container">
        <div className="headerTopMainWrapper">
          <div className="row">
            <div className="col-md-3 col-sm-12 col-12 col-lg-5">
              <ul className="d-flex accountLoginArea">
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>Saral,
                  Kanyakumari
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12 col-12 col-lg-5">
              <ul className="headerContact">
                <li>
                  <i className="fa fa-phone"></i> +91-9345495954
                </li>
                <li>
                  <i className="fa fa-clock-o"></i> 9AM - 9PM
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12">
              <div className="btnStyle btnStyle2 text-right">
                <a href="http://api.whatsapp.com/send?phone=919345495954">
                  Whats app
                </a>
                
              </div>
              
            </div>
           
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
