import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import GallerySection3 from '../../components/GallerySection3/GallerySection3';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Subscribe2 from '../../components/Subscribe2/Subscribe2';
import Footer2 from '../../components/footer2/Footer2';


const GalleryPage = (props) => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'GALLERY'} pagesub={'GALLERY'} pageTitle2={'GALLERY'}/>
            <GallerySection3 />
            <Subscribe2 />
            <Footer2/>
            <Scrollbar />
        </Fragment>
    )
};
export default GalleryPage;
