import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/resource/author-1.jpg'
import ts2 from '../../images/resource/author-2.jpg'

import bg from '../../images/background/8.jpg'


const Testimonial = (props) => {

    var settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const testimonial = [
        {
            tsImg: ts1,
            Des: "Petierunt uti sibi concilium totius Galliae in diem certam indicere. Dolor sit amet eiusmod consectetur elit sed tempor incd idunt labore et dolore magna aliqua.",
            Title: 'Monszil Baker',
            Sub: "Development Expert",
        },
        {
            tsImg: ts2,
            Des: "Petierunt uti sibi concilium totius Galliae in diem certam indicere. Dolor sit amet eiusmod consectetur elit sed tempor incd idunt labore et dolore magna aliqua.",
            Title: 'Micheal Wolk',
            Sub: "Marketing Expert",
        },
        {
            tsImg: ts1,
            Des: "Petierunt uti sibi concilium totius Galliae in diem certam indicere. Dolor sit amet eiusmod consectetur elit sed tempor incd idunt labore et dolore magna aliqua.",
            Title: 'Margaret Sunsan',
            Sub: "Developer",
        }

    ]
    return (

        <section className="testimonial-one">
            <div className="testimonial-one_pattern" style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="auto-container">
                <div className="sec-title">
                    <div className="sec-title_title">What They Say</div>
                    <h2 className="sec-title_heading">Why Our Customer <br/> Conat Place</h2>
                </div>
                <div className="two-item-carousel">
                    <Slider {...settings}>
                        {testimonial.map((tesmnl, tsm) => (
                            <div className="testimonial-block_one" key={tsm}>
                                <div className="testimonial-block_one-inner">
                                    <div className="testimonial-block_one-content">
                                        <div className="testimonial-block_one-text">{tesmnl.Des}</div>
                                        <div className="testimonial-block_one-rating">
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <div className="testimonial-block_one-quote fi flaticon-quote"></div>
                                    </div>
                                    <div className="testimonial-block_one-lower">
                                        <div className="testimonial-block_one-author">
                                            <img src={tesmnl.tsImg} alt="" />
                                        </div>
                                        <strong>{tesmnl.Title}</strong>
                                        {tesmnl.Sub}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </section>
    );
}

export default Testimonial;