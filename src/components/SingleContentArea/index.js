import React from 'react'
import avatarImg from '../../images/practice/4.jpg'

import './style.scss'


const SingleContentArea = ({ className, posttitle,post, image }) => {

    console.log("imagew",image)
    return (

        <div className={className}>
            <div className="singleContentImg">
                <img src={image} alt="" />
            </div>
            <div className="singleContentWrap">
                <h3>{posttitle}</h3>
                  <div>{post}</div>
            </div>
        </div>
    )
}
export default SingleContentArea