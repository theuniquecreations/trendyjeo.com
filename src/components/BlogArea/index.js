import React from 'react'
import SectionTitle from '../Title'
import { Link } from 'react-router-dom'
import './style.scss'

// images
import blog1 from '../../images/blog/1.jpg'
import blog2 from '../../images/blog/2.jpg'
import blog3 from '../../images/blog/3.jpg'
import avatar from '../../images/blog-page/6.jpg'

const blogs = [
    {
        images: blog1, title: 'Justice May For You If You Are Innocent', meta: {
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


const BlogArea = ({ className, title, subTitle }) => {
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
                    {blogs.map((blog, i) => (
                        <div key={i} className="col-lg-4 col-sm-6 col-12" >
                            <div className="blogWrap">
                                <div className="blogImage">
                                    <img src={blog.images} alt="" />
                                </div>
                                <div className="blogContent">
                                    <h3><Link to="/blog-fullwidth">Title</Link></h3>
                                    <ul className="blogMeta">
                                        <li><img src={blog.meta.avatar} alt="" /></li>
                                        <li>{blog.meta.name}</li>
                                        <li>{blog.meta.time}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default BlogArea