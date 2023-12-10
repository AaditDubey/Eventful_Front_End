import React from 'react';
import { Link } from 'react-router-dom'
import bg from '../../images/background/pattern-4.png'
import rv1 from '../../images/background/price-1.png'
import rv2 from '../../images/background/price-1-1.png'
import mv1 from '../../images/background/price-2.png'
import mv2 from '../../images/background/price-2-1.png'
import lv1 from '../../images/background/price-3.png'
import lv2 from '../../images/background/price-3-1.png'



const pricing = [
    {
        li1: 'Full Conference',
        li2: '(Includes workshop, coffee etc)',
        li3: 'Live Videos',
        li4: '(Can access online free)',
        li5: 'Meet Speaker',
        li6: '(Ask questions privately)',
        title: 'Standard Pass',
        price: '120',
        shape: rv1,
        shape2: rv2,
        day:'1',
    },
    {
        li1: 'Full Conference',
        li2: '(Includes workshop, coffee etc)',
        li3: 'Live Videos',
        li4: '(Can access online free)',
        li5: 'Meet Speaker',
        li6: '(Ask questions privately)',
        title: 'Flexible Pass',
        price: '220',
        active: 'active',
        shape: mv1,
        shape2: mv2,
        day:'2',
    },
    {
        li1: 'Full Conference',
        li2: '(Includes workshop, coffee etc)',
        li3: 'Live Videos',
        li4: '(Can access online free)',
        li5: 'Meet Speaker',
        li6: '(Ask questions privately)',
        title: 'Business Pass',
        price: '320',
        shape: lv1,
        shape2: lv2,
        day:'3',
    },


]


const Pricing = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="price-one">
            <div className="price-one_pattern" style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="auto-container">
                <div className="sec-title title-anim centered">
                    <div className="sec-title_title">Conference Ticket Price</div>
                    <h2 className="sec-title_heading">Conference Tickets Now </h2>
                </div>
                <div className="row clearfix">
                    {pricing.map((pricing, ptem) => (
                        <div className="price-block_one col-lg-4 col-md-6 col-sm-12" key={ptem}>
                            <div className="price-block_one-inner">
                                <div className="price-block_one-pattern" style={{ backgroundImage: `url(${pricing.shape})` }}></div>
                                <div className="price-block_one-pattern-two" style={{ backgroundImage: `url(${pricing.shape2})` }}></div>
                                <div className="price-block_one-title">{pricing.title}</div>
                                <div className="price-block_one-price">${pricing.price} <span>{pricing.day} DAY</span></div>
                                <ul className="price-block_one-options">
                                    <li><strong>{pricing.li1}</strong>{pricing.li2}</li>
                                    <li className="light"><strong>{pricing.li3}</strong>{pricing.li4}</li>
                                    <li className="light"><strong>{pricing.li5}</strong>{pricing.li6}</li>
                                </ul>
                                <div className="price-block_one-button">
                                    <Link onClick={ClickHandler} to="/price" className="theme-btn btn-style-two">
                                        <span className="btn-wrap">
                                            <span className="text-one">Buy Ticket</span>
                                            <span className="text-two">Buy Ticket</span>
                                        </span>
                                    </Link>
                                </div>
                                <div className="price-block_one-charges">Our prices includes 10% charges</div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Pricing;