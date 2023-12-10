import React from 'react';
import { useQuery } from 'react-query';
import apiService from '../../apis';
import BlogSection from '../../components/BlogSection/BlogSection';
import EventsSection from '../../components/EventsSection/EventsSection';
import Layout from '../../components/Layout';
import Speakers from '../../components/Speakers/Speakers';
import VideoArea from '../../components/VideoArea/VideoArea';
import Hero2 from '../../components/hero2';
import Loading from '../../components/loading';
const HomePage = () => {
    const { isLoading: loading, data: eventsData } = useQuery([`GetTopEvents`], async () => {
        const res = await apiService.product.getAll({ pageSize: 1 });
        return res
    })
    if (loading)
        return <Loading />

    return (
        <Layout>
            {
                eventsData && eventsData.items && eventsData.items.length > 0 &&
                <Hero2 eventsData={eventsData.items} />
            }
            <Speakers />
            {/* <GallerySection /> */}
            <EventsSection />
            <VideoArea />
            <BlogSection />
        </Layout>
    )
};
export default HomePage;