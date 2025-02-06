import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CourseCategories from '../components/CourseCategories';
import Testimonial from '../components/Testimonial';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Banner />
      <CourseCategories />
      <Testimonial />
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home; 