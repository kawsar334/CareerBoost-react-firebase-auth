import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import cc from "../assests/cc.png"
import cc from "../assets/cc.png"
const Slider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const slides = [
    {
      image: cc,
      // image: 'https://remote.com/jobs/_next/image?url=%2Fjobs%2F_next%2Fstatic%2Fmedia%2Fopportunity-image.ee6ec8ef.png&w=1920&q=75',
      title: 'Career Counseling',
      description: 'Get expert advice on career planning and development.',
    },
    {
      image: 'https://html.themewant.com/jobpath/template/assets/img/home-5/about.webp',
      title: 'Resume Review',
      description: 'Get professional feedback on your resume.',
    },
    {
      image: 'https://resources.workable.com/wp-content/uploads/2018/05/prepare-interviews-featured.png',
      title: 'Interview Preparation',
      description: 'Prepare for job interviews with mock sessions and tips.',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpra_t1Mi_YB-3J2WgTkQiyTsThTBUnC6IIg&s',
      title: 'Job Search Assistance',
      description: 'Receive guidance and support in your job search process.',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7CVi4Em_6eEMBtviZY4Gm_l6ChI9qI_v5g&s',
      title: 'Skill Development',
      description: 'Enhance your skills with tailored training programs.',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6rkgfddtf7_66SZgdOx3WuJSQ-Wj5SKZSQ&s',
      title: 'Personal Branding',
      description: 'Build a strong personal brand for career success.',
    },
  ];

  return (
    <div className="overflow-hidden ">
      <div className="w-[100%] mx-auto  overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full mx-auto h-[400px] bg-gray-200 "
                data-aos="zoom-in"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <div
                  className=" absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 rounded-lg"
                  data-aos="fade-up"
                >
                  <div className="text-center text-white">
                    <h2
                      className="font-semibold mb-2 text-4xl"
                      data-aos="fade-right"
                    >
                      {slide.title}
                    </h2>
                    <p className="text-xl" data-aos="fade-left">
                      {slide.description}
                    </p>
                    <p className="mt-4" data-aos="fade-up">
                      <a
                        href="#services"
                        className="bg-white px-4 py-2 rounded-lg text-blue-600"
                      >
                        Learn More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
