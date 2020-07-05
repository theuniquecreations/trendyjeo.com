import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

import blog1 from '../../images/blog-page/1.jpg'
import blog2 from '../../images/blog-page/2.jpg'
import blog3 from '../../images/blog-page/3.jpg'
import blog4 from '../../images/blog-page/4.jpg'
import blog5 from '../../images/blog-page/5.jpg'
import avatar from '../../images/blog-page/6.jpg'
const blogPost = [
    {
        image: blog1,
        title: 'Title 1',
        text: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
        meta: [
            { avatar: avatar, name: 'By Gayathri', level: 'Travel', date: 'Oct 12,2018' }
        ]
    },
    {
        image: blog2,
        title: 'Title 2',
        text: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
        meta: [
            { avatar: avatar, name: 'By Gayathri', level: 'Fashion', date: 'Oct 12,2018' }
        ]
    },
    {
        image: blog3,
        title: 'Title 3',
        text: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
        meta: [
            { avatar: avatar, name: 'By Gayathri', level: 'Food', date: 'Oct 12,2018' }
        ]
    },
    {
        image: blog4,
        title: 'who do not know how to pursue pleasure',
        text: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
        meta: [
            { avatar: avatar, name: 'By Gayathri', level: 'Life Style', date: 'Oct 12,2018' }
        ]
    },
    {
        image: blog5,
        title: 'Title 4',
        text: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
        meta: [
            { avatar: avatar, name: 'By Gayathri', level: 'Family Law', date: 'Oct 12,2018' }
        ]
    },
]
const BlogPost = () => {
    return (
        <Fragment>
            {blogPost.map((blog, i) => (
                <div key={i} className="blogPostWrapper">
                    <div className="blogPostImg">
                        <img src={blog.image} alt="" />
                    </div>
                    <div className="blogPostContent">
                        <ul className="blogPostMeta">
                            {blog.meta.map((meta, i) => (
                                <Fragment key={i}>
                                    <li><img src={meta.avatar} alt=""/></li>
                                    <li>{meta.name}</li>
                                    <li>{meta.level}</li>
                                    <li>{meta.date}</li>
                                </Fragment>
                            ))}
                        </ul>
                        <h3><Link to='blog-details'>{blog.title}</Link></h3>
                        <p>{blog.text}</p>
                        <Link className="readmore" to='blog-details'>Read more..</Link>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}
export default BlogPost