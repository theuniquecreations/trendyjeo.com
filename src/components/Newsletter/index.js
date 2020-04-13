import React, { useState } from 'react'
import './style.scss'
const NewsLetter = ({ className }) => {
    const [email, setEmail] = useState('')
    const submitHandler = event =>{
        event.preventDefault()
        console.log('email =',email)
    }
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="newsletterWrap">
                            <h3>Subscribe  Newsletter</h3>
                            <form onSubmit={submitHandler} className="newsletterForm">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="form-control"
                                    placeholder="Enter Your Email Address..." />
                                <button type="submit">subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsLetter