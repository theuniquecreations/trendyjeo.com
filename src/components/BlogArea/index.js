//import React from 'react'
import SectionTitle from '../Title'
import { Link } from 'react-router-dom'
import './style.scss'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


// images
import defaultimg from '../../images/blog/D.png'
import blog2 from '../../images/blog/2.jpg'
import blog3 from '../../images/blog/3.jpg'
import avatar from '../../images/about/2.jpg'

const blogs = [
    {
        images: defaultimg, title: 'Justice May For You If You Are Innocent', meta: {
            avatar: avatar, name: 'By Aliza', time: 'Oct 12,2018'
        }
    },
    {
        images: blog2, title: 'Justice May For You If You Are Innocent', meta: {
            avatar: avatar, name: 'By Aliza', time: 'Oct 12,2018'
        }
    },
    {
        images: blog3, title: 'Justice May For You If You Are Innocent', meta: {
            avatar: avatar, name: 'By Aliza', time: 'Oct 12,2018'
        }
    },
]

const BlogArea = ({ className, title, subTitle, post}) => {
   // console.log("blog area",post)
   // console.log("blog area",blogs)
//const BlogArea = ({ className, title, subTitle }) => {
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SectionTitle
                            title={title}
                            subTitle={subTitle}
                        />
                    </div>
                    {post.map((blog, i) => (
                        blog.itemType === "post"?(
                        <div key={i} className="col-lg-4 col-sm-6 col-12" >
                            <div className="blogWrap">
                                <div className="blogImage">
                                    <img src={defaultimg} alt="" />
                                </div>
                                <div className="blogContent">
                                    {/* <h3><Link to="/blog-fullwidth">{blog.postTitle}</Link></h3> */}
                                    <h3><Link to="/">{blog.postTitle}</Link></h3>
                                    <ul className="blogMeta">
                                        <li><img src={avatar} alt="avator" /></li>
                                        <li>{blog.updatedby}</li>
                                        <li>{blog.date}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>):""
                    ))}
                </div>
            </div>
        </div>
    )
}
export default BlogArea