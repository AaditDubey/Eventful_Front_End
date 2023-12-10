import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Navbar from '../../components/Navbar/Navbar';
import Subscribe2 from '../../components/Subscribe2/Subscribe2';
import Footer2 from '../../components/footer2/Footer2';

const BlogPageLeft =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'}/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogList blLeft={'order-lg-1'} blRight={'order-lg-2'}/>
            <Subscribe2 />
            <Footer2 />
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPageLeft;

