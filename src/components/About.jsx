import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import myphoto from "../assets/mee.png"

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="about-us-container p-8 mt-[120px] bg-blue-500">
            <div className="hero-section text-center mb-12" data-aos="fade-up">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-gray-700">
                    Welcome to our Career Counseling Platform, where we guide you towards a successful and fulfilling career path.
                </p>
            </div>

            <div className="mission-vision-section grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div className="mission bg-white p-6 rounded-lg shadow-lg" data-aos="fade-right">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-600">
                        Our mission is to provide professional guidance and support to help individuals achieve their career goals. We empower you with the right tools and knowledge to make informed decisions about your future.
                    </p>
                </div>

                <div className="vision bg-white p-6 rounded-lg shadow-lg" data-aos="fade-left">
                    <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                    <p className="text-gray-600">
                        We envision a world where everyone has access to high-quality career counseling and resources to thrive in their chosen fields. Our vision is to be a trusted partner in your career journey.
                    </p>
                </div>
            </div>

            <div className="team-section mb-12">
                <h2 className="text-3xl font-bold text-center mb-8" data-aos="zoom-in">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="team-member bg-white p-6 rounded-lg shadow-lg text-center" data-aos="flip-left">
                        <img
                            src={myphoto}
                            alt="John Doe"
                            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold">kawsar firoz</h3>
                        <p className="text-sm text-gray-500">Career Counselor</p>
                        <p className="text-gray-600">John has 10+ years of experience in guiding individuals to make successful career transitions.</p>
                    </div>

                    <div className="team-member bg-white p-6 rounded-lg shadow-lg text-center" data-aos="flip-up">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM0kWH8fP06eZyTbtdX2GKh2Vgk8A2lSLc9g&s"
                            alt="Jane Smith"
                            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold">Jane Smith</h3>
                        <p className="text-sm text-gray-500">Resume Expert</p>
                        <p className="text-gray-600">Jane specializes in crafting impactful resumes that help clients stand out to potential employers.</p>
                    </div>

                    <div className="team-member bg-white p-6 rounded-lg shadow-lg text-center" data-aos="flip-right">
                        <img
                            src="https://yt3.googleusercontent.com/ytc/AIdro_nvenlxPwDz5eKfKt0RlIqmEytYPaSL8gsX7OBCvZhTjWI=s900-c-k-c0x00ffffff-no-rj"
                            alt="Alex Johnson"
                            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold">Alex Johnson</h3>
                        <p className="text-sm text-gray-500">Career Strategist</p>
                        <p className="text-gray-600">Alex provides personalized career strategies and plans tailored to each individual’s strengths and goals.</p>
                    </div>
                </div>
            </div>

            <div className="cta-section text-center" data-aos="fade-up">
                <h2 className="text-2xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
                <p className="text-gray-700 mb-6">
                    Get in touch with us today to schedule a consultation and take the first step towards a brighter future.
                </p>
                <NavLink
                    to="/"
                    className="inline-block px-8  text-white  py-1 border   rounded-full"
                >
                    Contact Us
                </NavLink>
            </div>
        </div>
    );
};

export default AboutUs;
