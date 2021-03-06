import React from "react";
import { Link } from "react-router-dom";

//import logo from "../../images/logo/logo.png";
import "./style.scss";
const footerLinks = [
  {
    title: "Quick Link",
    menus: [
      /* <Link to="/Orders" className="btn btn-outline-success">Pay On Delivery User Ordered List</Link> */
      { name: "About", route: "about" },
      { name: "Our Products", route: "products" },
      { name: "Contact", route: "contact" },
    ],
  },
  {
    title: "Products",
    menus: [
      { name: "Pillow", route: "products" },
      { name: "Mug", route: "products" },
      { name: "Handmade Gifts frame", route: "products" },
      { name: "Wall Hanging Frame", route: "products" },
      { name: "Table Stand Frame", route: "products" },
      { name: "Keychain", route: "products" },
      { name: "Magical Gifts", route: "products" },
      { name: "Customized Gifts", route: "products" },
      { name: "Compo Gifts", route: "products" },
      { name: "Other Gifts", route: "products" },
    ],
  },
  {
    title: "Contact me",
    menus: [
      /*
      { name: "https://www.instagram.com/trendy_jeo/?igshid=1e5w3hmdcb2t7" },*/
      { name: "Contact us: +91-9345495954" },
      { name: "Email: trendyjeo@gmail.com" },
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
                <p>Customized Gifts & Hand Made gifts</p>
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
