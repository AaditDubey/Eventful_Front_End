import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Pricing2 from '../../components/Pricing2/Pricing2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Subscribe2 from '../../components/Subscribe2/Subscribe2';
import Footer2 from '../../components/footer2/Footer2';

const PricingPage = (props) => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Pricing Plan'} pagesub={'Pricing'} pageTitle2={'Pricing'}/>
            <Pricing2/>
            <Subscribe2 />
            <Footer2/>
            <Scrollbar />
        </Fragment>
    )
};
export default PricingPage;
