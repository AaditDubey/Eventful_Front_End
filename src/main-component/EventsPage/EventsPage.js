import React from 'react';
import EventsSection from '../../components/EventsSection/EventsSection';

import Layout from '../../components/Layout';
import PageTitle from '../../components/pagetitle/PageTitle';

const EventsPage = (props) => {
    return (
        <Layout>
            <PageTitle pageTitle={'Events'} pagesub={'Events'} pageTitle2={'Events'}/>
            <EventsSection />
        </Layout>
    )
};
export default EventsPage;
