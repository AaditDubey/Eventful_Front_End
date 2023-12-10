import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import EventsSection3 from '../../components/EventsSection3/EventsSection3';
import Testimonial from '../../components/Testimonial/Testimonial';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Subscribe2 from '../../components/Subscribe2/Subscribe2';
import Footer2 from '../../components/footer2/Footer2';


const SchedulePage = (props) => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'schedule'} pagesub={'schedule'} pageTitle2={'schedule'} />
            <EventsSection3 />
            <Testimonial />
            <Subscribe2 />
            <Footer2 />
            <Scrollbar />
        </Fragment>
    )
};
export default SchedulePage;
