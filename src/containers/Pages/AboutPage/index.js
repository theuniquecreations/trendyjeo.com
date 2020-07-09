import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import Service from '../../../components/Service'
import About from '../../../components/About'
import ServiceArea from '../../../components/ServiceArea'
import Testmonial from "../../../components/Testmonial";
import TeamMember from '../../../components/TeamMember'
import CounterArea from '../../../components/CounterArea'
import BlogArea from '../../../components/BlogArea'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
// images
import about from '../../../images/about/2.jpg'
import breadcumb from '../../../images/breadcumb/1.jpg'

import './style.scss'

const aboutText = [
    { text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ,' },
    { text: 'and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum' },
]



const AboutPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                {/* <HeaderTop className="headerTop" /> */}
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <About
                className="aboutArea"
                title="About"
                images={about}
               // signature={signature}
                pragraphs={aboutText}
            />
            {/* change service to blog area and then enable it */}
            {/* <BlogArea
                className="blogArea"
                title="Latest Post"
                subTitle="From Our Blog
                "
            /> */}
          
            <FooterArea/>
        </Fragment>
    )
}
export default AboutPage