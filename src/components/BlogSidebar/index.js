import React from 'react';
import { Link } from 'react-router-dom';


const BlogSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={`sidebar-side col-lg-4 col-md-12 col-sm-12 ${props.blLeft}`}>
            <aside className="sidebar sticky-top">
                <div className="sidebar-widget popular-tags">
                    <div className="widget-content">
                        <h4 className="sidebar-widget_title">Tag</h4>
                        <Link onClick={ClickHandler} to="/blog-single/International-Conference-On-Art-Business" >Business</Link>
                        <Link onClick={ClickHandler} to="/blog-single/International-Conference-On-Art-Business" >Conference</Link>
                        <Link onClick={ClickHandler} to="/blog-single/International-Conference-On-Art-Business" >Digital</Link>
                        <Link onClick={ClickHandler} to="/blog-single/International-Conference-On-Art-Business" >Development</Link>
                        <Link onClick={ClickHandler} to="/blog-single/International-Conference-On-Art-Business" >Venue</Link>
                        <Link onClick={ClickHandler} to="/blog-single/International-Conference-On-Art-Business" >Tech</Link>
                        <Link onClick={ClickHandler} to="/blog-single/International-Conference-On-Art-Business" >Workshop</Link>
                        <Link onClick={ClickHandler} to="/blog-single/International-Conference-On-Art-Business" >Speaker</Link>
                    </div>
                </div>

            </aside>
        </div>
    )

}

export default BlogSidebar;
