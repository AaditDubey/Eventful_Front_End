
import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../../api/blogs';
import BlogSingle from '../../components/BlogDetails/BlogDetails';
import Layout from '../../components/Layout';
import PageTitle from '../../components/pagetitle/PageTitle';


const BlogDetails = () => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    return (
        <Layout>
            <PageTitle pageTitle={BlogDetails?.title} pagesub={'Blog'} pageTitle2={'BLOG'}/>
            <BlogSingle />
        </Layout>
    )
};
export default BlogDetails;
