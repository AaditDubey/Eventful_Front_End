import React from 'react';
import { useQuery } from 'react-query';
import { Link, useSearchParams } from 'react-router-dom';
import apiService from '../../apis';
import sIcon5 from '../../images/background/pattern-10.png';
import sIcon1 from '../../images/icons/icon-1.png';
import sIcon2 from '../../images/icons/icon-2.png';
import sIcon3 from '../../images/icons/icon-3.png';
import sIcon4 from '../../images/icons/icon-4.png';
import utils from '../../utils/utils';

const EventsSection = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search')
    console.log('search', search)
    const speakerId = props.props && props.props.speakerId ? props.props.speakerId : ''

    const title = props.props && props.props.title ? props.props.title : 'EVENTFUL'
    const description = props.props && props.props.description ? props.props.description : 'Where Moments Become Memories, and Every Occasion Tell a Unique Story!'



    const query = { speakerId: speakerId, searchText: search }
    const { isLoading: loading, isError, data: eventsData } = useQuery([`GetEvents${search || 'se'}_${speakerId}`], async () => {
        const res = await apiService.product.getAll(query);
        console.log(res)
        return res
    })
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className="leadership-one" id='events'>
            {
                eventsData && eventsData.items && eventsData.items.length > 0 &&
                <div>
                    <div className="leadership-one_icon" style={{ backgroundImage: `url(${sIcon1})` }}></div>
                    <div className="leadership-one_icon-two" style={{ backgroundImage: `url(${sIcon2})` }}></div>
                    <div className="leadership-one_icon-three" style={{ backgroundImage: `url(${sIcon3})` }}></div>
                    <div className="leadership-one_icon-four" style={{ backgroundImage: `url(${sIcon4})` }}></div>
                    <div className="leadership-one_icon-five" style={{ backgroundImage: `url(${sIcon5})` }}></div>
                    <div className="auto-container">
                        <div className="sec-title title-anim centered">
                            <div className="sec-title_title">{title}</div>
                            <h2 className="sec-title_heading">{description}</h2>
                        </div>
                        <div className="leadership-info-tabs">
                            <div className="leadership-tabs tabs-box">
                                <div className="tabs-content">
                                    {
                                        eventsData.items.map((event, eb3) => (
                                            <div className="content" key={eb3}>
                                                <div className="leadership-one_block">
                                                    <div className="leadership-one_block-inner">
                                                        <div className="leadership-one_block-content">
                                                            <div className="leadership-one_block-image">
                                                                <img src={utils.images.getImageUrl(event.images[0])} alt="" />
                                                                {/* <div className="leadership-one_block-icon"><i className={`fi fi flaticon-voice`}></i></div> */}
                                                            </div>
                                                            <div className="leadership-one_block-time">{event.time}</div>
                                                            {
                                                                event.startDateUtc &&
                                                                <div className="leadership-one_block-time">{utils.date.formatToShortDate(event.startDateUtc)}</div>
                                                            }
                                                            {
                                                                event.speaker?.name &&
                                                                <div className="leadership-one_block-name">{event.speaker?.name}</div>
                                                            }
                                                            <h3 className="leadership-one_block-title"><Link onClick={ClickHandler} to={`/event-details/${event.seName}`}>{event.name}</Link></h3>
                                                            <div className="leadership-one_block-text">{event.shortDescription}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
}

export default EventsSection;