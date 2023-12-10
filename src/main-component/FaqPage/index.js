import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer2 from '../../components/footer2/Footer2';
import Scrollbar from '../../components/scrollbar/scrollbar'
import FaqSection from './FaqSection';
import Subscribe2 from '../../components/Subscribe2/Subscribe2';

const FaqPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Frequently Asked Questions'} pagesub={'FAQ'}  pageTitle2={'FAQ'}/>
            <FaqSection/>
            <Subscribe2 />
            <Footer2 />
            <Scrollbar />
        </Fragment>
    )
};
export default FaqPage;

