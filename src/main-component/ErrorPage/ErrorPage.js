import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Error from '../../components/404/404'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Subscribe2 from '../../components/Subscribe2/Subscribe2';
import Footer2 from '../../components/footer2/Footer2';

const ErrorPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Page Not Found'} pagesub={'404'} pageTitle2={'Error 404'}/> 
            <Error/>
            <Subscribe2 />
            <Footer2 />
            <Scrollbar/>
        </Fragment>
    )
};
export default ErrorPage;

