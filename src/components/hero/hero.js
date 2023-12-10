import React from "react";
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from '../../images/main-slider/image-1.jpg'
import ptn from '../../images/main-slider/pattern-2.png'
import ptn2 from '../../images/main-slider/pattern-1.png'

const Hero = () => {

    var settings = {
        dots: false,
        arrows: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
    };


    return (
        <section className="slider-one" id="home">
            <div className="slider-one_pattern-two" style={{ backgroundImage: `url(${ptn})` }}></div>
            <div className="main-slider-carousel">
                <Slider {...settings}>
                    {/*  Slide 01 */}
                    <div className="slider-one_slide">
                        <div className="slider-one_image-layer" style={{ backgroundImage: `url(${hero1})` }}></div>
                        <div className="slider-one_pattern" style={{ backgroundImage: `url(${ptn2})` }}></div>
                        <div className="auto-container">

                            {/*  Content Column */}
                            <div className="slider-one_content">
                                <div className="slider-one_content-inner">
                                    <div className="slider-one_title">North Harond Boston, Canada</div>
                                    <div className="slider-one_date"><span>25</span> March <br /> 2024</div>
                                    <h1 className="slider-one_heading">Creatives <br /> Reunion in Boston</h1>
                                    <div className="slider-one_buttons">
                                        <Link to="/register" className="theme-btn btn-style-one">
                                            <span className="btn-wrap">
                                                <span className="text-one">Registration now</span>
                                                <span className="text-two">Registration now</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/*  End Slide 01 */}

                    {/*  Slide 02 */}
                    <div className="slider-one_slide">
                        <div className="slider-one_image-layer" style={{ backgroundImage: `url(${hero1})` }}></div>
                        <div className="slider-one_pattern" style={{ backgroundImage: `url(${ptn2})` }}></div>
                        <div className="auto-container">

                            {/*  Content Column */}
                            <div className="slider-one_content">
                                <div className="slider-one_content-inner">
                                    <div className="slider-one_title">North Harond Boston, Canada</div>
                                    <div className="slider-one_date"><span>25</span> March <br /> 2024</div>
                                    <h1 className="slider-one_heading">Creatives <br /> Reunion in Boston</h1>
                                    <div className="slider-one_buttons">
                                        <Link to="/register" className="theme-btn btn-style-one">
                                            <span className="btn-wrap">
                                                <span className="text-one">Registration now</span>
                                                <span className="text-two">Registration now</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/*  End Slide 02 */}

                    {/*  Slide 03 */}
                    <div className="slider-one_slide">
                        <div className="slider-one_image-layer" style={{ backgroundImage: `url(${hero1})` }}></div>
                        <div className="slider-one_pattern" style={{ backgroundImage: `url(${ptn2})` }}></div>
                        <div className="auto-container">

                            {/*  Content Column */}
                            <div className="slider-one_content">
                                <div className="slider-one_content-inner">
                                    <div className="slider-one_title">North Harond Boston, Canada</div>
                                    <div className="slider-one_date"><span>25</span> March <br /> 2024</div>
                                    <h1 className="slider-one_heading">Creatives <br /> Reunion in Boston</h1>
                                    <div className="slider-one_buttons">
                                        <Link to="/register" className="theme-btn btn-style-one">
                                            <span className="btn-wrap">
                                                <span className="text-one">Registration now</span>
                                                <span className="text-two">Registration now</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* End Slide 03 */}
                </Slider>

            </div>
        </section>
    )
}



export default Hero;