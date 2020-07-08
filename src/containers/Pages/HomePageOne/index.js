import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import HeroSlider from '../../../components/HeroSlider'
import Service from '../../../components/Service'
import About from '../../../components/About'
import ServiceArea from '../../../components/ServiceArea'
import Portfolio from '../../../components/Portfolio'
import Testmonial from "../../../components/Testmonial";
import ContactArea from '../../../components/ContactArea'
import TeamMember from '../../../components/TeamMember'
import CounterArea from '../../../components/CounterArea'
import BlogArea from '../../../components/BlogArea'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
// images
import about from '../../../images/about/2.jpg'
import signature from '../../../images/about/1.png'
import axios from 'axios';

// images
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'
import portfolio4 from '../../../images/studies/4.jpg'
import portfolio5 from '../../../images/studies/5.jpg'
import BlogPost from '../../../components/BlogPost'

const aboutText = [
    { text: 'When someone ask me this…”tell me about yourself”? Pause……Out of the blue,thousands of thoughts 💭 pops up..Budding Photographer 📸! Makeup artist👩🏻‍🦰 ! IT student⌨️! Active socialist! Craziee 🤪! Scribbler too! Positivity spreader! Explorer🌌! Cuisiner ! When I try to put this in a sentence its harder to explain what I feel🎖! What I need! And what I’m focusing on exactly! But lemme make it simple! ' },
    { text: 'This is Gayathri ! Trying to find out my cup of tea 🛤! Make some time so that you can talk with me walking through my ups and downs 🎡 ! You can taste my 🥘{No Promises🤞🏻} ! We can explore together I hope 🤿and we all can have a cherishable journey🎢!! Shall we start ?' },
]

const heroSliders = [
    {
        images: 'slideWrapperOne',
        title: 'Food',
        subTitle: '',
        text: 'The Most Talented Law Frim',
        button: 'Contact us now'
    },
    {
        images: 'slideWrapperTwo',
        title: 'Food',
        subTitle: '',
        text: 'Lets Review it',
        button: 'Contact us now'
    },
]

const services = [
    {
        icon: 'flaticon-parents',
        title: 'Family Law',
        content: 'It is a long established fact that a reader will be distracted by the readable content of '
    },
    {
        icon: 'flaticon-wounded',
        title: 'Personal Injury',
        content: 'It is a long established fact that a reader will be distracted by the readable content of '
    },
    {
        icon: 'flaticon-employee',
        title: 'Business Law',
        content: 'It is a long established fact that a reader will be distracted by the readable content of '
    },
    {
        icon: 'flaticon-thief',
        title: 'Criminal Law',
        content: 'It is a long established fact that a reader will be distracted by the readable content of '
    },
    {
        icon: 'flaticon-university-graduate-hat',
        title: 'Education Law',
        content: 'It is a long established fact that a reader will be distracted by the readable content of '
    },
    {
        icon: 'flaticon-house',
        title: 'Real Estate Law',
        content: 'It is a long established fact that a reader will be distracted by the readable content of '
    },
]

const portfolioItem = [
    { images: portfolio1, title: 'General Service', subtitle: 'Corporate' },
    { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
    { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
    { images: portfolio4, title: 'Accounting issue', subtitle: 'Criminal' },
    { images: portfolio5, title: 'Business Accounting', subtitle: 'Family Issue' }
]
function HomePageOne() {
    const [responseData, setResponseData] = React.useState([]);
   
    React.useEffect(() => {
        axios({
            "method": "GET",
            "url": "https://tucservices.azurewebsites.net/api/DynamoDB/GetItems?website=dreamyfad.com",
            "headers": {
              "content-type": "application/json",
              "x-access-key": "tucblog101289101289",
              "x-access-token": "tucblog101289101289"
            }, "params": {
              "language_code": "en"
            }
          })
          .then((response) => {
            setResponseData(response.data.items)
       
          })
          .catch((error) => {
            console.log(error)
          })
    }, [])
    console.log((responseData))
  
    
    return ( 
   
        <Fragment>
            <header className="headerArea">
                {/* <HeaderTop className="headerTop" /> */}
                <HeaderBotton className="headerBottomArea" />
            </header>
            <HeroSlider 
                sliders={heroSliders}
                className="heroSliderArea" />
            <Service className="serviceArea" />
           
              <BlogArea
                className="blogArea"
                title="Latest Post"
                subTitle="From Our Blog"
                post={responseData}
            />
           <section id='about'>
             <About
                className="aboutArea"
                title="About"
                images={about}
               // signature={signature}
               // pragraphs={aboutText}
            /></section>
            {/* <ServiceArea
                className="ourServiceArea"
                title="How Can We Help You"
                subTitle="Area Of Practice"
                services={services}
            /> */}
            {/* <Portfolio
                className="portfolioArea"
                title="Our Resent Case Studies"
                subTitle="Here Our Best Work"
                portfolioItem={portfolioItem}
            /> */}
            {/* <Testmonial
                className="testmonialArea"
            /> */}
            <ContactArea
                className="contactArea"
            />
            {/* <TeamMember
                title="Qualified Attorneys "
                subTitle="Meet Our Experts"
                className="teamArea"
                slider={true}
            /> */}
            {/* <CounterArea
                className="counterArea"
            /> */}
          
            {/* <NewsLetter
                className="newsLetterArea"
            /> */}
            <FooterArea/>
        </Fragment>
    )
}
export default HomePageOne