import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Login from './login';
import SignUpPage from './register';
import Footer2 from '../../components/footer2/Footer2';
import Subscribe2 from '../../components/Subscribe2/Subscribe2';

const AuthPage = (props) => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Login / Register'} pagesub={'Account'} pageTitle2={'Account'}/>
            <div className="register-section">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="column col-lg-6 col-md-12 col-sm-12">
                                <div className="styled-form">
                                    <h4>Sign Up</h4>
                                    <SignUpPage />
                                </div>
                            </div>
                            <div className="column col-lg-6 col-md-12 col-sm-12">
                                <div className="styled-form">
                                    <h4>Login here</h4>
                                    <Login />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe2 />
            <Footer2 />
            <Scrollbar />
        </Fragment>
    )
};
export default AuthPage;
