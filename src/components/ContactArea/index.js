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
                            <span>For Collabration</span>
                            <br/>
                            <h2>Contact @</h2>
                            <br/>
                          <h5> <a href="https://www.instagram.com/thedreamyfad" className="text-white" target="blank"><i className="fa fa-instagram" aria-hidden="true">
                          </i>  { " "}   Instagram</a>
                          </h5>   <p>Description: </p>
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