import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Link } from 'react-router-dom'
import 'react-modal-video/scss/modal-video.scss'
import './style.scss'


const pragraphs = [
    { text: 'When someone ask me this…”tell me about yourself”? Pause……Out of the blue,thousands of thoughts 💭 pops up..Budding Photographer 📸! Makeup artist👩🏻‍🦰 ! IT student⌨️! Active socialist! Craziee 🤪! Scribbler too! Positivity spreader! Explorer🌌! Cuisiner ! When I try to put this in a sentence its harder to explain what I feel🎖! What I need! And what I’m focusing on exactly! But lemme make it simple! ' },
    { text: 'This is Gayathri ! Trying to find out my cup of tea 🛤! Make some time so that you can talk with me walking through my ups and downs 🎡 ! You can taste my 🥘{No Promises🤞🏻} ! We can explore together I hope 🤿and we all can have a cherishable journey🎢!! Shall we start ?' },
]

const About = ({ subTitle, title, videoId, className, signature,images,orderLast }) => {
    const [video, setVideo] = useState(false)
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className={orderLast ? `${orderLast} col col-lg-6`:'col col-lg-6'}>
                        <div className="aboutImageWrap">
                            <img src={images} alt="" />
                            {/* {videoId && <i onClick={() => setVideo(true)} className="fa fa-play"></i>}
                            <ModalVideo
                                channel='youtube'
                                isOpen={video}
                                videoId={videoId}
                                onClose={() => () => setVideo(false)} /> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="aboutContent">
                            {subTitle && <span>{subTitle}</span>}
                            <h2>{title}</h2>
                            {pragraphs.map((pragraph, i) => (
                                <p key={i}>{pragraph.text}</p>
                            ))}
                            {/* <div className="btnStyle">
                                <Link to='/about'>More About Us..</Link>
                            </div> */}
                            {signature && <div className="signature">
                                <img src={signature} alt="" />
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About