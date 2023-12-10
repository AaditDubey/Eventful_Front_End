import React from "react";
import { Link } from 'react-router-dom'
import pimg1 from '../../images/clients/1.png'
import pimg2 from '../../images/clients/2.png'
import pimg3 from '../../images/clients/3.png'
import pimg4 from '../../images/clients/4.png'
import pimg5 from '../../images/clients/5.png'
import pimg6 from '../../images/clients/6.png'
import pimg7 from '../../images/clients/7.png'
import pimg8 from '../../images/clients/8.png'

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg6,
    },
    {
        pImg: pimg7,
    },
    {
        pImg: pimg8,
    },
]


const PartnerSection = (props) => {

    return (

        <section className="clients-one">
            <div className="auto-container">
                <div className="sec-title title-anim centered">
                    <div className="sec-title_title">Sponsors and Exhibitors</div>
                    <h2 className="sec-title_heading">Appreciate Our Kind Partners</h2>
                </div>
                <div className="row clearfix">
                    {partners.map((partner, pitem) => (
                        <div className="clients-one_column col-lg-3 col-md-4 col-sm-6" key={pitem}>
                            <Link to="/"><img src={partner.pImg} alt="" /></Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;