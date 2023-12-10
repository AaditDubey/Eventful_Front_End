import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="main-footer">
            <div className="auto-container">
                <div className="widgets-section">
                    <div className="row clearfix">
                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="footer-column">
                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                    <div className="logo"><Link onClick={ClickHandler} to="/"><img src='logo.png' style={{height: 56}}  alt="" title="" /></Link></div>
                                    <div className="footer-social_list">
                                        <Link onClick={ClickHandler} to="/" className="facebook fa fa-facebook"></Link>
                                        <Link onClick={ClickHandler} to="/" className="youtube fi flaticon-youtube"></Link>
                                        <Link onClick={ClickHandler} to="/" className="twitter fa fa-twitter"></Link>
                                    </div>
                                </div>
                                <div className="footer-text">Empower your moments, create your memories. Event creation made effortless, turning ideas into experiences.</div>
                            </div>
                        </div>
                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="footer-column">
                                <div className="row clearfix">
                                    <div className="footer-info-column col-lg-4 col-md-4 col-sm-12">
                                        <span className="footer-info-icon flaticon-placeholder-1"></span>
                                        <h6 className="footer-info_title">ADDRESS</h6>
                                        <div className="footer-info_text">TBD </div>
                                    </div>
                                    <div className="footer-info-column col-lg-4 col-md-4 col-sm-12">
                                        <span className="footer-info-icon flaticon-message"></span>
                                        <h6 className="footer-info_title">MAIL TO US</h6>
                                        <div className="footer-info_text">TBD </div>
                                    </div>
                                    <div className="footer-info-column col-lg-4 col-md-4 col-sm-12">
                                        <span className="footer-info-icon flaticon-clock"></span>
                                        <h6 className="footer-info_title">TIMING </h6>
                                        <div className="footer-info_text">TBD </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="column col-lg-6 col-md-12 col-sm-12">
                            <div className="copyright">&copy;  Copyright ©2023 khoa_nguyen_teams. All Rights Reserved</div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;