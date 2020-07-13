import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import CetagorySidebar from '../../../components/CetagorySidebar'
import FooterArea from '../../../components/FooterArea'
import BannerSidebar from '../../../components/BannerSidebar'
import SingleContentArea from '../../../components/SingleContentArea'
import { Redirect } from "react-router-dom";
// images
import breadcumb from '../../../images/breadcumb/1.jpg'
import banner from '../../../images/practice/2.jpg'
import single from '../../../images/practice/3.jpg'

import './style.scss'


const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'AllPost', route: '/allposts' }
]

const BlogSinglePage = (post) => {
    if (post !== undefined) {
       //   console.log("undeifed check , blog single page", singlepost)
        var singlepost = post.location.query.post
        console.log("undeifed check , blog single page", singlepost)
        localStorage.setItem("lsLastViewedPost", JSON.stringify(singlepost));
        console.log("form ls", JSON.parse(localStorage.getItem("lsLastViewedPost")))
    }
    else {
        var singlepost = JSON.parse(localStorage.getItem("lsLastViewedPost"))
        console.log("from ls , blog single page", singlepost)
    }

    if (singlepost.id !== '') {
        //var singlepost = post.location.query.post
        //console.log("querry titlw", post.location.query)
        //console.log("querry titlw", singlepost.postTitle)
        return (
            <Fragment>
                <header className="headerArea">
                    {/* <HeaderTop className="headerTop" /> */}
                    <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
                </header>
                <Breadcumb
                    className="breadcumbArea"
                    title={singlepost.postTitle}
                    breadcumbMenu={breadcumbMenu}
                    background={breadcumb}
                />
                <div className="singleArea">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <aside className=" pr25">
                                    {/* <BannerSidebar
                                    image={banner}
                                    className="bannerWrapper"
                                /> */}
                                    {/* <CetagorySidebar
                                    title="Category"
                                    className="cetagoryWrap"
                                />  */}
                                </aside>
                            </div>
                            <div className="col-lg-12 mt-5">
                                <SingleContentArea
                                    className="singleContentArea"
                                    image={singlepost.image}
                                    posttitle={singlepost.postTitle}
                                    post={singlepost.post}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <NewsLetter
                className="newsLetterArea"
            /> */}
                <FooterArea />
            </Fragment>
        )
    }
    else {
        return <Redirect to="/"></Redirect>
    }
}
export default BlogSinglePage