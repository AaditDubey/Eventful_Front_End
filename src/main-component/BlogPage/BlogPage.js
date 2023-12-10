import React from 'react';
import BlogList from '../../components/BlogList/BlogList.js';
import Layout from '../../components/Layout';
import PageTitle from '../../components/pagetitle/PageTitle';

const BlogPage =() => {
    return(
        <Layout>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'} pageTitle2={'Blog'}/> 
            <BlogList/>
        </Layout>
    )
};
export default BlogPage;

