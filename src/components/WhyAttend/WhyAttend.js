import React from 'react'
import bg from '../../images/main-slider/image-2.jpg'
import { Link } from 'react-router-dom'

const WhyAttend = (props) => {

    const Event = [
        {
            title: 'Person Networking',
            icon: 'flaticon-training'
        },
        {
            title: 'Boost Creativity',
            icon: 'flaticon-mic'
        },
        {
            title: 'After Party Events',
            icon: 'flaticon-poinsettia'
        },
        {
            title: 'Great Speaker',
            icon: 'flaticon-thumbs-up'
        },
        {
            title: 'Spark Creatiity',
            icon: 'flaticon-creative-mind'
        },
        {
            title: 'Potential Clients',
            icon: 'flaticon-arrows'
        },


    ]

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="event-two" style={{ backgroundImage: `url(${bg})` }}>
            <div className="auto-container">
                <div className="sec-title light centered title-anim">
                    <div className="sec-title_title">Join Our Event</div>
                    <h2 className="sec-title_heading">Why Attend Our Event?</h2>
                    <div className="sec-title_text">Morbi tincidunt ipsum nec tristique mollis nulla libero <br /> fermentum id ligula diam arcu.</div>
                </div>
                <div className="clearfix">
                    {Event.map((event, eitem) => (
                        <div className="event-block_two" key={eitem}>
                            <div className="event-block_two-inner">
                                <div className={`event-block_two-icon fi ${event.icon}`}></div>
                                <h5 className="event-block_two-title"><Link onClick={ClickHandler} to="/event-details/Registration-For-Opening-Workshop">{event.title}</Link></h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default WhyAttend;