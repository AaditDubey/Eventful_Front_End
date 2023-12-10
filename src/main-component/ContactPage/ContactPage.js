import React from 'react';
import Contactpage from '../../components/Contactpage/Contactpage';
import Layout from '../../components/Layout';
import PageTitle from '../../components/pagetitle/PageTitle';

const ContactPage =() => {
    return(
        <Layout>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} pageTitle2={'Contact Us'}/> 
            <Contactpage/>
        </Layout>
    )
};
export default ContactPage;

