import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import apiService from '../../apis';
import Layout from '../../components/Layout';
import PageTitle from '../../components/pagetitle/PageTitle';
import utils from '../../utils/utils';
import BookForm from './bookForm';
import Loading from '../../components/loading';


const BookEventPage = (props) => {
    const { slug } = useParams()
    const { isLoading: loading, isError, data: event } = useQuery([`GetEventDetails${slug}`], async () => {
        const res = await apiService.product.getBySlug(slug);
        return res
    })
    
    if(loading)
        return <Loading />

    if (!event) {
        return <div>
            Not found
        </div>
    }
    return (
        <Layout>
            <PageTitle pageTitle={event?.name} pagesub={'Event Details'} pageTitle2={'Event Details'} />
            <section className="event-detail">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="upper-box d-flex justify-content-between flex-wrap">
                            <h2 className="event-detail_title">{event.name}</h2>
                            <div className="event-detail_author">
                                {
                                    event.speaker && event.speaker.image &&
                                    <div className="event-detail_author-image">
                                        <img src={utils.images.getImageUrl(event.speaker.image)} alt="" />
                                    </div>
                                }
                                <div className="event-detail_author-name">{event.speaker?.name}, <span>{event.speaker?.description}</span></div>
                                <div className="event-detail_author-location"><span>Location:</span>{event.location} </div>
                                <div className="event-detail_author-timing">{utils.date.formatToShortDate(event.startDateUtc)}</div>
                                <div className="event-detail_author-icon flaticon-voice"></div>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center '>
                        <div className='col-md-7 col-lg-6'>
                            <div className="styled-form">
                                <BookForm productId={event.id} price={event.price}/>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    )
};
export default BookEventPage;
