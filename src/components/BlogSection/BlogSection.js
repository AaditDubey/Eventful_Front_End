import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import apiService from '../../apis'
import utils from '../../utils/utils'
import Loading from '../loading'

const BlogSection = (props) => {

    const { isLoading: loading, data: blogsData } = useQuery(["GetBlogs"], async () => {
        const res = await apiService.blog.getAll();
        return res
    })
    if (loading)
        return <Loading />
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="news-one" id='blog'>
            <div className="auto-container">
                <div className="sec-title">
                    <div className="d-flex justify-content-between align-items-end flex-wrap">
                        <div className="title-box title-anim">
                            <div className="sec-title_title">Blog % Articles</div>
                            <h2 className="sec-title_heading">News & Articles</h2>
                        </div>
                        <div className="button-box title-anim">
                            <Link onClick={ClickHandler} to="/blog" className="theme-btn btn-style-one">
                                <span className="btn-wrap">
                                    <span className="text-one">View More News</span>
                                    <span className="text-two">View More News</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    {
                        blogsData && blogsData.items && blogsData.items.length > 0 &&
                        blogsData.items.map((blog, Bitem) => (
                            <div className="news-block_one col-lg-4 col-md-6 col-sm-12" key={Bitem}>
                                <div className="news-block_one-inner">
                                    <div className="news-block_one-tag">New</div>
                                    <div className="news-block_one-image">
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.seName}`}><img src={utils.images.getImageUrl(blog.image)} alt="" /></Link>
                                        <img src={utils.images.getImageUrl(blog.image)} alt="" />
                                    </div>
                                    <div className="news-block_one-content">
                                        <div className="news-block_one-date">{utils.date.formatToShortDate(blog.createdOn)}</div>
                                        <ul className="news-block_one-meta">
                                            <li><span className="icon fa fa-calendar"></span>by Admin</li>
                                        </ul>
                                        <h5 className="news-block_one-title"><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h5>
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="news-block_one-more">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default BlogSection;