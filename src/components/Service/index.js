import React from 'react'
import './style.scss'

const services = [
    { icon: 'fi flaticon-social', subtitle: 'All Post', title: 'Latest Post' },
    { icon: 'fi flaticon-scale', subtitle: 'Top Post', title: 'Featured Post' },
    { icon: 'fi flaticon-network', subtitle: 'You Can Easily', title: 'Collaborate' },
]
const Service = props => {
    return (
        <div className={props.className}>
            <div className="container">
                <div className="row">
                    {services.map((service, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="serviceItem">
                                {/* <div className="serviceIcon">
                                    <i className={service.icon}></i>
                                </div> */}
                                <div className="serviceText">
                                    <span>{service.subtitle}</span>
                                    <h3>{service.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Service