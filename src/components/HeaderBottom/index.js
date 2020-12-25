import React, { useState, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo.jpeg";
import "./style.scss";

const HeaderBottom = (props) => {
  const [search, setSearch] = useState();
  const [responsive, setResponsive] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(search);
  };
  const clickHandler = () => {
    setTrigger(!trigger);
  };
  const responsiveHandler = () => {
    setResponsive(!responsive);
  };
  return (
    <div className={props.className}>
      <div className="container">
        <div className="headerBottomMainWrapper">
          <div className="row">
            <div className="col-lg-3 col-md-10 col-sm-6 col-8">
              <div className="logo">
                <NavLink to="/">
                  {/* <h1>TrendyJeo</h1> */}
                  <img src={logo} alt="top" height="80px" width="150px"/>
                </NavLink>
              </div>
            </div>
            <div
              className={
                responsive
                  ? "col-lg-8 responsiveWrapper active"
                  : "col-lg-8 responsiveWrapper"
              }
            >
              <ul className="mainMenuWrap">
                <li>
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/about">
                    About
                  </NavLink>
                </li>

                {/* <li><NavLink exact to='#'>Blog</NavLink>
                                     <ul className="subMenu">
                                        <li><NavLink exact to='/1case-stadies'>Fashion</NavLink></li>
                                        <li><NavLink exact to='/1ase-stadies-details'>Food</NavLink></li>
                                        <li><NavLink exact to='/1case-stadies-details'>Lifestyle</NavLink></li>
                                        <li><NavLink exact to='/1case-stadies-details'>Travel</NavLink></li>
                                   
                                    </ul> 
                                </li> */}
                <li>
                  <NavLink exact to="/products">
                    Our Products
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/contact">
                    Contact
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink exact to="/admin">
                    Admin
                  </NavLink>
                </li> */}
              </ul>
            </div>
            <div className="col-lg-1 col-md-2 col-sm-6 col-4">
              <div className="searchMenuWrapper">
                <div onClick={responsiveHandler} className="responsiveTrigger">
                  <span className="first"></span>
                  <span className="second"></span>
                  <span className="third"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBottom;
