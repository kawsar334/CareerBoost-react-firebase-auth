import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { db } from '../../Auth/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch users from Firestore
    const fetchUsers = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'users'));
            const userList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            // console.log(userList)
            setUsers(userList);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };


    useEffect(() => {
        document.title = "Admin Dashboard!";
        fetchUsers()
        AOS.init();
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto bg-white p-6 shadow-md rounded-lg" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-gray-800">Welcome to your Dashboard!</h2>
                <p className="mt-4 text-lg text-gray-600">Here you can view your personal information and manage your services.</p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out" data-aos="zoom-in" data-aos-delay="200">
                        <h3 className="text-2xl font-semibold">Manage Services</h3>
                        <p className="mt-2">View, update, and manage the services offered to your clients.</p>
                        <Link to="/services" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            Go to Services
                        </Link>
                    </div>
                    <div className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out" data-aos="zoom-in" data-aos-delay="400">
                        <h3 className="text-2xl font-semibold">User Profile</h3>
                        <p className="mt-2">Manage your account information and settings.</p>
                        <Link to="/profile" className="mt-4 inline-block px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                            View Profile
                        </Link>
                    </div>
                    <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out" data-aos="zoom-in" data-aos-delay="600">
                        <h3 className="text-2xl font-semibold">Analytics</h3>
                        <p className="mt-2">Monitor your services and user interactions through real-time analytics.</p>
                        <Link to="/analytics" className="mt-4 inline-block px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
                            View Analytics
                        </Link>
                    </div>
                </div>

                <div className="mt-12 bg-gray-200 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="800">
                    <h3 className="text-xl font-semibold text-gray-800">User List </h3>
                    <p className="mt-2 text-gray-600">Here the User List with they are information.</p>

                    <div className="mt-6 space-y-4">
                        {users?.map((item) => (
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="text-gray-700  flex flex-col md:flex-row justify-between items-start  gap-3 flex-wrap my-1 cursor-pointer">
                                    <div className='flex justify-center items-start gap-3'>
                                        <img src={item?.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcazeHuAcZDzv4_61fPLT-S00XnaKXch2YWQ&s"} alt="" className='avatar w-[40px] h-[40px] rounded-full border ml-2 object-fill' />
                                        <span>{item?.displayName}</span>
                                    </div>
                                    <span>{item?.email}</span>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
