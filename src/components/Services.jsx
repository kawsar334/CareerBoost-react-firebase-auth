import React, { useEffect, useState } from 'react';
import UseFetch from '../hooks/UseFetch';
import { NavLink } from 'react-router-dom';
import Spinner from './loader/Spinner';

const Services = () => {
    const { services, loading, error } = UseFetch();
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [filteredServices, setFilteredServices] = useState([]);
    
    useEffect(() => {
        if (categoryFilter === 'All') {
            setFilteredServices(services?.products || []);
        } else {
            const filtered = services?.products?.filter(service => service.category === categoryFilter);
            setFilteredServices(filtered);
        }
    }, [categoryFilter, services]);

    if (loading) {
       return <Spinner/>
    }

    if (error) {
        return <div className='text-[red]'>Error loading services: {error}</div>;
    }

    return (
        <div className="services-container p-6 bg-gray-100 my-[100px]" id='services'>
            <div className='flex justify-around items-center flex-col md:flex-row'>
                <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>

                <div className="mb-6 text-center flex justify-center items-center gap-2  ">
                    <h2>Filter By category:</h2>
                    <select
                        className="px-4 py-2 border rounded-md cursor-pointer"
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                        <option value="Group">Group</option>
                    </select>
                </div>
            </div>


            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[99%] md:w-[90%] m-auto bg-[red]"> */}
                <div className="flex justify-center items-center flex-wrap gap-6 w-[99%] md:w-[90%] m-auto ">

                {filteredServices.length === 0 ? (
                    <p className="col-span-full text-center text-lg">No services found for the selected category.</p>
                ) : (
                    filteredServices?.slice(0, 6).map((service, index) => (
                        <div key={index} className="service-card bg-white w-full md:w-[40%] lg:w-[30%] p-4 rounded-lg shadow-md relative" data-aos="fade-up" data-aos-offset="200">
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold ">{service?.name}</h3>
                            {service?.category === "Group" && <h3 className=" border-[crimson] border-[1px]  py-0 px-4 rounded-full cursor-pointer font-semibold absolute top-[20px] right-[30px] ">{service?.category}</h3>}


                            <p className={` border w-max py-1  px-2 rounded-full cursor-pointer text-sm text-gray-500 ${service.category === 'Online' ? 'text-gray-400' :
                                service.category === 'Offline' ? 'text-[red]' :
                                    service.category === 'Group' ? 'text-[teal]' :
                                            ''
                                }`}>{service.category}</p>
                            <p className="text-lg font-bold">{service.pricing}</p>
                            <p className="text-sm text-gray-600">Counselor: {service.counselor}</p>
                            <p className="text-sm text-gray-500">Duration: {service.duration}</p>
                            <NavLink
                                to={`/details/${service.id}`}
                                className="cursor-pointer  mt-4 inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md text-center"
                            >
                                Learn More
                            </NavLink>
                        </div>
                    ))
                )}
            </div>
           
        </div>
    );
};

export default Services;


// <div className="right-section bg-gray-100 p-6 rounded-lg shadow-md">
//     <h3 className="text-xl font-semibold mb-4">Latest Promotions</h3>
//     <p className="text-sm text-gray-700 mb-4">Check out our latest promotions and special offers!</p>
//     <ul className="space-y-2">
//         <li className="text-blue-500">Discount on all counseling sessions until the end of the month!</li>
//         <li className="text-blue-500">Free resume review with every career counseling session.</li>
//         <li className="text-blue-500">Refer a friend and get 10% off your next service.</li>
//     </ul>
// </div>
