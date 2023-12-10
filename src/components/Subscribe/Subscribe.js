import React from 'react'
// import Sub1 from '../../images/background/pattern-14.png'
import Sub2 from '../../images/background/pattern-12.png'
import Sub3 from '../../images/background/pattern-13.png'
import { useState } from 'react'
import { toast } from "react-toastify";
import apiService from '../../apis';

const Subscribe = (props) => {
    const [email, setEmail] = useState('')
    const SubmitHandler = async (e) => {
        e.preventDefault()
        const result = await apiService.contact.subscribe({email: email})
        if (result) {
            toast.success('Thank you for your subscribed.');
            setEmail('')
        }
        else
            toast.success('Some thing went wrongs. Try again please!');
    }

    return (
        <section className="subscribe-one">
            {/* <div className="subscribe-one_pattern-three" style={{ backgroundImage: `url(${Sub1})` }}></div> */}
            <div className="auto-container">
                <div className="inner-container">
                    <div className="subscribe-one_pattern" style={{ backgroundImage: `url(${Sub2})` }}></div>
                    <div className="subscribe-one_pattern-two" style={{ backgroundImage: `url(${Sub3})` }}></div>
                    <div className="row clearfix">
                        <div className="subscribe-one_title-column col-lg-6 col-md-12 col-sm-12">
                            <div className="subscribe-one_title">Get The Latest Updates</div>
                            <h3 className="subscribe-one_heading">Signup For Newsletter</h3>
                        </div>

                        <div className="form-column col-lg-6 col-md-12 col-sm-12">
                            <div className="subscribe-box">
                                <form onSubmit={SubmitHandler}>
                                    <div className="form-group">
                                        <input type="email" name="search-field" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email Address ........" required />
                                        <button type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;