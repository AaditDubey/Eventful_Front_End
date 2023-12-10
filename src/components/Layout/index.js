

import React, { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../footer/Footer';
import Scrollbar from '../scrollbar/scrollbar';

Layout.propTypes = {

};

function Layout({ children }) {
    return (
        <Fragment>
            <Navbar />
            <div>
                {children}
            </div>
            <Subscribe />
            <Footer />
            <Scrollbar/>
        </Fragment>

    );
}

export default Layout;