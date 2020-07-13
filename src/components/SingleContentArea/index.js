import React from 'react'

import './style.scss'


const SingleContentArea = ({ className, posttitle,post, image }) => {
const text={post}
    console.log("post",post)
    return (

        <div className={className}>
            <div className="singleContentImg">
                <img src={image} alt="" />
            </div>
            <div className="singleContentWrap">
                <h3>{posttitle}</h3>
                  <div dangerouslySetInnerHTML={{ __html: post }} />
            </div>
        </div>
    )
}
export default SingleContentArea