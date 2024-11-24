import React, { useEffect, useState } from 'react';
import AboutUs from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Hero from '../components/Hero';


const Home = () => {
    useEffect(()=>{
        document.title = "CareerBoost"
    },[])

    return (
        <div className='bg-gray-100'>
            <Hero/>
            <Services />
            <Testimonials />
            <AboutUs />
        </div>
    );
};

export default Home;
