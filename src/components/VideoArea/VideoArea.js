import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import mImg1 from '../../images/background/2.jpg'
import mImg2 from '../../images/background/pattern-11.png'
import mImg3 from '../../images/icons/icon-3.png'
import mImg4 from '../../images/icons/icon-2.png'
import mImg5 from '../../images/icons/icon-1.png'

const VideoArea = (props) => {

    const [isOpen, setOpen] = useState(false)


    return (
        <section className="video-one" style={{ backgroundImage: `url(${mImg1})` }}>
            <div className="video-one_pattern-one" style={{ backgroundImage: `url(${mImg2})` }}></div>
            <div className="video-one_pattern-two" style={{ backgroundImage: `url(${mImg3})` }}></div>
            <div className="video-one_pattern-three" style={{ backgroundImage: `url(${mImg4})` }}></div>
            <div className="video-one_pattern-four" style={{ backgroundImage: `url(${mImg5})` }}></div>
            <div className="auto-container">
                <div className="sec-title title-anim light centered">
                    <div className="sec-title_title">Eventful Ticket Price</div>
                    <h2 className="sec-title_heading">Welcome to Eventful, the ultimate platform for planning and tracking your event with ease and efficiency! Our mission is simple yet powerful: to assist you in not only meticulously planning your event but also in seamlessly tracking its progress every step of the way. At Eventful, we understand the importance of sharing your event's journey with others. That's why we've designed a user-friendly interface that allows you to effortlessly share updates and milestones with friends, family, or colleagues.</h2>
                    {/* <button onClick={() => setOpen(true)} className="lightbox-video video-one_play"><span className="fa fa-play"><i className="ripple"></i></span></button> */}
                </div>
            </div>
            {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="YS3PwmOQ1Fc" onClose={() => setOpen(false)} /> */}
        </section>
    );
}

export default VideoArea;