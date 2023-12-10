import React from 'react';
import ContactForm from '../ContactFrom'
import cImg1 from '../../images/background/5.jpg'


const Contactpage = () => {

    return (
        <div>
            <section className="location-one" id="contact" style={{ backgroundImage: `url(${cImg1})` }}>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="location-one_map-column col-lg-8 col-md-12 col-sm-12">
                            <div className="sec-title title-anim">
                                <div className="sec-title_title">Get in Touch</div>
                                <h2 className="sec-title_heading">If Contact With Us Send Detail</h2>
                            </div>

                            <div className="contact-form">
                                <ContactForm />
                            </div>
                        </div>
                        <div className="location-one_info-column col-lg-4 col-md-12 col-sm-12">
                            <div className="sec-title title-anim">
                                <div className="sec-title_title">Contact </div>
                                <h2 className="sec-title_heading">Information</h2>
                            </div>
                            <div className="location-info_block">
                                <div className="location-info_block-inner">
                                    <div className="location-info_block-content">
                                        <div className="location-info_block-icon flaticon-map"></div>
                                        <strong>ADDRESS</strong>
                                        203 Madison Ave, NY, USA
                                    </div>
                                </div>
                            </div>
                            <div className="location-info_block">
                                <div className="location-info_block-inner">
                                    <div className="location-info_block-content">
                                        <div className="location-info_block-icon flaticon-clock"></div>
                                        <strong>timing</strong>
                                        On Friday 9am - 6pm
                                    </div>
                                </div>
                            </div>
                            <div className="location-info_block">
                                <div className="location-info_block-inner">
                                    <div className="location-info_block-content">
                                        <div className="location-info_block-icon flaticon-email-1"></div>
                                        <strong>MAIL TO US</strong>
                                        khoanguyen@gmail.com
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="map-one">
                <div className="auto-container">
                    <div className="sec-title title-anim centered">
                        <div className="sec-title_title">View on Map</div>
                        <h2 className="sec-title_heading">Direction For The Event Hall</h2>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1574408946759!5m2!1sen!2s" allowFullScreen=""></iframe>

                </div>
            </section>
        </div>
    )

}

export default Contactpage;
