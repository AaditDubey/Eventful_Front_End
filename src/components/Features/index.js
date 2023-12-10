import React from 'react'
import { Link } from 'react-router-dom'
import sIcon from '../../images/background/pattern-7.png'
import sIcon2 from '../../images/background/pattern-8.png'
import sIcon3 from '../../images/background/pattern-9.png'

const Features = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const featres = [
        {
            fIcon: 'flaticon-policy',
            title: 'Best Certified Speaker',
        },
        {
            fIcon: 'flaticon-digital-learning',
            title: 'Brand Digital Ideas',
        },
        {
            fIcon: 'flaticon-conversation-1',
            title: 'Communicate People',
        },
        {
            fIcon: 'flaticon-inspiration',
            title: 'Well Inspiring Keynotes',
        },

    ]


    return (
        <section className="feature-one">
            <div className="feature-one_pattern" style={{ backgroundImage: `url(${sIcon})` }}></div>
            <div className="feature-one_pattern-two" style={{ backgroundImage: `url(${sIcon2})` }}></div>
            <div className="feature-one_pattern-three" style={{ backgroundImage: `url(${sIcon3})` }}></div>
            <div className="auto-container">
                <div className="sec-title title-anim">
                    <div className="sec-title_title">Our Features</div>
                    <h2 className="sec-title_heading">Features For Client</h2>
                </div>
                <div className="row clearfix">
                    {featres.map((featres, fitem) => (
                        <div className="feature-block_one col-lg-3 col-md-6 col-sm-12" key={fitem}>
                            <div className="feature-block_one-inner">
                                <div className="feature-block_one-icon"><i className={`fi ${featres.fIcon}`}></i></div>
                                <h4 className="feature-block_one-title"><Link onClick={ClickHandler} to="/event">{featres.title}</Link></h4>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Features;