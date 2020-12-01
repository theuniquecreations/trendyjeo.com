import React from "react";
import { Link } from "react-router-dom";
//import logo from "../../images/logo/logo.png";
import "./style.scss";
const footerLinks = [
  {
    title: "Quick Link",
    menus: [
      { name: "Home", route: "/" },
      { name: "Products", route: "/" },
      { name: "Contact", route: "/" },
    ],
  },
  {
    title: "Products",
    menus: [
      { name: "Handmade", route: "products" },
      { name: "Pillow", route: "products" },
      { name: "Cup", route: "products" },
      { name: "Custom", route: "products" },
    ],
  },
  {
    title: "Contact me",
    menus: [
      { name: "www.instagram.com/trendyjeo" },
      { name: "www.facebook.com/trendyjeo" },
      { name: "Email: treandyjep@gmail.com" },
    ],
  },
];

const FooterArea = () => {
  return (
    <footer className="footerArea">
      <div className="footerTopArea">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footerLogo">
                <Link to="/">
                  <h1>Trendy Jeo</h1>
                </Link>
                <p>
                  Description Description Description Description Description
                </p>
              </div>
            </div>
            {footerLinks.map((menu, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                <div className="footerWrap">
                  <h3>{menu.title}</h3>
                  <ul>
                    {menu.menus.map((item, i) => (
                      <li key={i}>
                        {item.route ? (
                          <Link to={`/${item.route}`}>{item.name}</Link>
                        ) : (
                          `${item.name}`
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footerBottomArea">
        <div className="container">
          <div className="footerBottomContent">
            <div className="row">
              <div className="col-md-8 col-sm-10 col-12 ">
                <span className="small">
                  Privacy Policy | © {new Date().getFullYear()} Developed by{" "}
                  <a
                    href="https://www.instagram.com/theuniquecreations"
                    target="blank"
                  >
                    TheUniqueCreations
                  </a>
                </span>
              </div>
              <div className="col-md-4 col-sm-2 col-12">
                <ul className="socialListFooter">
                  <li>
                    <a
                      href="https://www.instagram.com/theuniquecreations"
                      className="text-white"
                      target="blank"
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterArea;
