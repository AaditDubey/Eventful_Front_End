import React from 'react';
import Layout from '../../components/Layout';
import Speakers from '../../components/Speakers/Speakers';
import VenueSection from '../../components/VenueSection/VenueSection';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';

const SpeakerPage = (props) => {

    return (
        <Layout>
            <PageTitle pageTitle={'Teams'} pagesub={'Team'} pageTitle2={'Team'}/>
            <Speakers/>
            <VenueSection />
            <Scrollbar />
        </Layout>
    )
};
export default SpeakerPage;
