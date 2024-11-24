import React, { useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'
import UseFetch from '../../hooks/UseFetch'
import { Outlet } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';  // Import the AOS styles
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Auth/AuthProvider'



const Layout = () => {

    const { services, loading, error } = UseFetch();
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out', 
        once: true, 
        offset: 50, 
    });
  
 
    useEffect(() => {
        // AOS.init();
        AOS.refresh();
    }, [])

   
  return (
      <div className='bg-gray-50'>
          <Navbar />

         <Outlet/>

          {/* <Newsletter /> */}
          <Footer />

          <ToastContainer/>

   </div>
  )
}

export default Layout