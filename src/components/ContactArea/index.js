import React from 'react'
import Form from '../Form'
import './style.scss'
const ContactArea = ({ className }) => {
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-12">
                        <div className="contactInfo">
                            <span>For Our Honorabe Clients</span>
                            <h2>Free Consulting</h2>
                            <h6>Call us 24/7 at (888)123-4567 or fill out the form.</h6>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less able English.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactArea