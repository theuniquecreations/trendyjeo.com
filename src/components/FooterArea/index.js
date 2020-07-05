import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo/logo.png'
import './style.scss'
const footerLinks = [
    {
        title: 'Quick Link', menus: [
            { name: 'Home', route: '/' },
            { name: 'Blog', route: 'practice' },
            { name: 'Contact', route: 'team' },
            { name: 'Features', route: 'case' },
          
        ]
    },
    {
        title: 'Blog Area', menus: [
            { name: 'Photography', route: 'home' },
            { name: 'Food', route: 'home' },
            { name: 'Travell', route: 'home' },
            { name: 'Fun', route: 'home' },
            
        ]
    },
    {
        title: 'Contact me', menus: [
            { name: 'www.instagram.com/thedreamyfad' },
            { name: 'www.facebook.com/thedreamyfad', },
            { name: 'www.linkedin.com/thedreamyfad', },
            { name: 'www.twitter.com/thedreamyfad', },
            { name: 'Email: thedreamyfad@gmail.com', },
        ]
    },
]

const FooterArea = () => {
    return (
        <footer className="footerArea">
            <div className="footerTopArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footerLogo">
                                <Link to="/">
                                   <h1>Dreamy Fad</h1>
                                </Link>
                                <p>Out of the blue,thousands of thoughts 💭 pops up..Budding Photographer 📸! Makeup artist👩🏻‍🦰 ! IT student⌨️! Active socialist! Craziee 🤪! Scribbler too! Positivity spreader! Explorer🌌! Cuisiner ! When I try to put this in a sentence its harder to explain what I feel🎖! What I need! And what I’m focusing on exactly! </p>
                            </div>
                        </div>
                        {footerLinks.map((menu, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footerWrap">
                                    <h3>{menu.title}</h3>
                                    <ul>
                                        {menu.menus.map((item, i) => (
                                            <li key={i}>{item.route ? <Link to={`/${item.route}`}>{item.name}</Link> : `${item.name}`}</li>
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
                                <span className="small">Privacy Policy | ©  {new Date().getFullYear()} Developed by <a href="https://www.instagram.com/theuniquecreations" target="blank">TheUniqueCreations</a></span>
                            </div>
                            <div className="col-md-4 col-sm-2 col-12">
                                <ul className="socialListFooter">
                                  
                                    <li><a href="https://www.instagram.com/theuniquecreations" className="text-white" target="blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default FooterArea