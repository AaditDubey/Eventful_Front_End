import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalVideo from 'react-modal-video'
import abimg from '../../images/background/pattern-1.png'
import abimg2 from '../../images/background/pattern-2.png'
import abimg3 from '../../images/background/pattern-3.png'
import abimg4 from '../../images/background/about-pattern.png'
import abimg5 from '../..//images/resource/about.jpg'
import { Roll } from "react-awesome-reveal";

const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [isOpen, setOpen] = useState(false)

    return (
        <section className="about-one" id="about">
            <div className="about-one_pattern-one" style={{ backgroundImage: `url(${abimg})` }}></div>
            <div className="about-one_pattern-two" style={{ backgroundImage: `url(${abimg3})` }}></div>
            <div className="about-one_pattern-three" style={{ backgroundImage: `url(${abimg2})` }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="about-one_image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="about-one_image-inner">
                            <div className="about-one_pattern-four" style={{ backgroundImage: `url(${abimg4})` }}></div>
                            <Roll left triggerOnce={'false'}>
                                <div className="about-one_image">
                                    <img src={abimg5} alt="" />
                                </div>
                            </Roll>
                            <button onClick={() => setOpen(true)} className="lightbox-video slider-one_play"><span className="fa fa-play"><i className="ripple"></i></span></button>
                        </div>
                    </div>
                    <div className="about-one_content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="about-one_content-inner">
                            <div className="sec-title title-anim">
                                <div className="sec-title_title">About Event</div>
                                <h2 className="sec-title_heading">An Evening For Creator & Art Lover Meet Together</h2>
                            </div>
                            <div className="about-one_bold-text">Grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures together</div>
                            <div className="about-one_text">We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures together, this time both</div>
                            <div className="row clearfix">
                                <div className="about-one_block col-lg-6 col-md-6 col-sm-12">
                                    <div className="about-one_block-inner">
                                        <span className="about-one_block-icon flaticon-map"></span>
                                        <strong>Where</strong>
                                        North Harond, Canada
                                    </div>
                                </div>
                                <div className="about-one_block col-lg-6 col-md-6 col-sm-12">
                                    <div className="about-one_block-inner">
                                        <span className="about-one_block-icon flaticon-calendar-2"></span>
                                        <strong>When</strong>
                                        March 25 to 29, 2024
                                    </div>
                                </div>
                            </div>
                            <div className="about-one_button">
                                <Link to="/register" onClick={ClickHandler} className="theme-btn btn-style-one">
                                    <span className="btn-wrap">
                                        <span className="text-one">Buy Ticket</span>
                                        <span className="text-two">Buy Ticket</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="cR_D3vBhh6U" onClose={() => setOpen(false)} />
        </section>
    )
}

export default About;