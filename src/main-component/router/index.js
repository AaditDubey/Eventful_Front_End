import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import HomePageOnePage from '../HomePageOnePage/HomePageOnePage';
import HomePageOnePage2 from '../HomePageOnePage2/HomePageOnePage2';
import HomePageOnePage3 from '../HomePageOnePage3/HomePageOnePage3';
import AboutPage from '../AboutPage/AboutPage';
import SpeakerSinglePage from '../SpeakerSinglePage/SpeakerSinglePage';
import EventSinglePage from '../EventSinglePage/EventSinglePage';
import PricingPage from '../PricingPage/PricingPage';
import BlogPage from '../BlogPage/BlogPage'
import BlogDetails from '../BlogDetails/BlogDetails';
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogListPage from '../BlogListPage/BlogListPage';
import TermPage from '../TermPage/TermPage';
import PrivacyPage from '../PrivacyPage/PrivacyPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import TestimonialPage from '../TestimonialPage/TestimonialPage';
import AuthPage from '../AuthPage/AuthPage';
import FaqPage from '../FaqPage';
import SchedulePage from '../SchedulePage/SchedulePage';
import GalleryPage from '../GalleryPage/GalleryPage';
import ComingSoon from '../ComingSoon/ComingSoon';
import SpeakerPage from '../SpeakerPage/SpeakerPage';
import EventsPage from '../EventsPage/EventsPage';
import ContactPage from '../ContactPage/ContactPage';
import ContactPage2 from '../ContactPage2/ContactPage2';
import ContactPage3 from '../ContactPage3/ContactPage3';
import BookEventPage from '../BookEvent/BookEventPage';
import SuccessPage from '../Success/SuccessPage';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="book-event/:slug" element={<BookEventPage />} />
          <Route path="success/:slug" element={<SuccessPage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="home-2" element={<HomePage2 />} />
          <Route path="home-3" element={<HomePage3 />} />
          <Route path="home-onepage-1" element={<HomePageOnePage />} />
          <Route path="home-onepage-2" element={<HomePageOnePage2 />} />
          <Route path="home-onepage-3" element={<HomePageOnePage3 />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="event" element={<EventsPage />} />
          <Route path="event-details/:slug" element={<EventSinglePage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path='price' element={<PricingPage />} />
          <Route path='schedule' element={<SchedulePage />} />
          <Route path='gallery' element={<GalleryPage />} />
          <Route path="testimonial" element={<TestimonialPage />} />
          <Route path="coming-soon" element={<ComingSoon />} />
          <Route path="terms" element={<TermPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="speaker" element={<SpeakerPage />} />
          <Route path="speaker-details/:slug" element={<SpeakerSinglePage />} />
          <Route path='register' element={<AuthPage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-classNameic' element={<BlogListPage />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} /> 
          <Route path='not-found' element={<ErrorPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='contact-2' element={<ContactPage2 />} />
          <Route path='contact-3' element={<ContactPage3 />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
