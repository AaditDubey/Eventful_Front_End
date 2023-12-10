import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import apiService from '../../apis';
import Layout from '../../components/Layout';
import PageTitle from '../../components/pagetitle/PageTitle';
import bg from '../../images/background/pattern-27.png';
import utils from '../../utils/utils';
import EventsSection from '../../components/EventsSection/EventsSection';
import Loading from '../../components/loading';

const SpeakerSinglePage = (props) => {
    const { slug } = useParams()
    const [speakerId, setSpeakerId] = useState('')
    const { isLoading: loading, data: speaker } = useQuery([`GetSpeakerDetails${slug}`], async () => {
        const res = await apiService.speaker.getBySlug(slug);
        if (res) {
            setSpeakerId(res.id)
        }
        return res
    })
    if (loading)
        return <Loading />
    if (!speaker) {
        return <div>
            Not found
        </div>
    }

    return (
        <Layout>
            <PageTitle pageTitle={speaker.name} pagesub='Team Single' pageTitle2={'Team Single'} />
            <section className="team-single-section">
                <div className="speaker-detail">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="speaker-detail_author-column col-lg-4 col-md-6 col-sm-12">
                                <div className="speaker-detail_author-inner">
                                    <div className="speaker-detail_author-pattern" style={{ backgroundImage: `url(${bg})` }}></div>
                                    <div className="speaker-detail_author-image">
                                        <img src={utils.images.getImageUrl(speaker.image)} alt="" />
                                    </div>
                                    <div className="speaker-detail_author-content">
                                        <h4 className="speaker-detail_title">{speaker?.name}</h4>
                                        <div className="speaker-detail_designation">{speaker?.description}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-column col-lg-8 col-md-12 col-sm-12">
                                <h2 className="speaker-detail_subtitle">Personal Information</h2>
                                <p>{speaker?.shortInformation}</p>
                                {
                                    speaker.genericAttributes && speaker.genericAttributes.length > 0 &&
                                    <div>
                                        <h3 className="speaker-detail_subtitle">Contact info</h3>
                                        <div className="row clearfix">
                                            {
                                                speaker.genericAttributes.map(i => (
                                                    <div className="col-lg-6 col-md-6 col-sm-12" key={i.key}>
                                                        <ul className="speaker-detail_info">
                                                            <li><span>{i.key}:</span> {i.value}</li>
                                                        </ul>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {
                    speakerId &&
                    <div className="speaker-schedule">
                        <div className="auto-container">
                            <EventsSection props={{ speakerId: speakerId, title: `Speeches By: ${speaker?.name}`, description: `All events and workshop from ${speaker?.name}` }} />
                        </div>
                    </div>
                }
            </section>
        </Layout>
    )
};
export default SpeakerSinglePage;
