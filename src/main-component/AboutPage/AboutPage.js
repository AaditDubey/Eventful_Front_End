import React from 'react';
import Business from '../../components/Business/Business';
import EventsSection from '../../components/EventsSection/EventsSection';
import Features from '../../components/Features';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar/Navbar';
import Speakers from '../../components/Speakers/Speakers';
import VideoArea from '../../components/VideoArea/VideoArea';
import PageTitle from '../../components/pagetitle/PageTitle';

const AboutPage = (props) => {

    return (
        <Layout>
            <Navbar />
            <PageTitle pageTitle={'About Us'} pagesub={'About Us'} pageTitle2={'About Us'}/>
            <Business />
            <Features />
            <Speakers />
            <EventsSection />
            <VideoArea />
        </Layout>
    )
};
export default AboutPage;
