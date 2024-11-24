

import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import banner from "../../assets/bg-shadow.png";
import UseFetch from '../../hooks/UseFetch';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../Auth/AuthProvider';
import { toast } from 'react-toastify';

const Details = () => {
    const { id } = useParams();
    const { user, logout } = useContext(AuthContext);
    const { services, loading, error } = UseFetch();
    const [serviceDetails, setServicesDetails] = useState({});
    const [comment, setComment] = useState("");
    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        const data = services?.products?.find((item) => Number(item.id) === Number(id));
        setServicesDetails(data);
    }, [id, services?.products]);

    useEffect(() => {
        document.title = serviceDetails?.name;
        AOS.init({ duration: 1000 });
    }, [serviceDetails?.name]);

    const handleCommentSubmit = () => {
        if (comment.trim()) {
            const newComment = {
                text: comment,
                user: "Anonymous",
            };
            toast.success(`${user?.displayName} you  added a comment `);
            setCommentsList([...commentsList, newComment]);
            setComment("");
        }
    };

    return (
        <div className='w-full h-max flex justify-center items-center flex-col'>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <img
                            src={serviceDetails?.image}
                            alt={serviceDetails?.title}
                            className="w-full h-60 object-cover rounded-lg shadow-lg"
                            data-aos="fade-right"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                        <h2 className="text-3xl font-bold text-gray-800" data-aos="fade-left">{serviceDetails?.name}</h2>
                        <p className="mt-4 text-lg text-gray-600" data-aos="fade-left">{serviceDetails?.description}</p>
                        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <div className="text-lg text-gray-700">
                                <p>Pricing: <span className="font-semibold">{serviceDetails?.pricing}</span></p>
                                <p>Duration: <span className="font-semibold">{serviceDetails?.duration}</span></p>
                                <p>Counselor: <span className="font-semibold">{serviceDetails?.counselor}</span></p>
                                <div className="mt-4 sm:mt-0">
                                    <Link to={`/`} className="inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" data-aos="fade-up">
                                        Back to Services
                                    </Link>
                                </div>
                            </div>
                        
                        </div>

                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold text-gray-800" data-aos="fade-up">Leave a Comment / Feedback</h3>
                            <input
                                type="text"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Write your comment here..."
                                className="w-full p-3 border border-gray-300 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                data-aos="fade-up"
                            />
                            <button
                                onClick={handleCommentSubmit}
                                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                data-aos="fade-up"
                            >
                                Submit
                            </button>

                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6  my-3 h-max w-[90%] md:w-[60%] flex justify-center items-center flex-col gap-5 ">
                <h4 className="text-2xl font-semibold text-gray-800" data-aos="fade-up">Comments ({commentsList.length})</h4>
                {commentsList.length === 0 ? (
                    <p className=" mt-2 text-[crimson]">No comments yet. Be the first to comment!</p>
                ) : (
                    <ul className="space-y-4 mt-4 w-full" data-aos="fade-up">
                        {commentsList.map((comment, index) => (
                            <li key={index} className="p-4 border-b   border-gray-300  mt-2 flex justify-start items-center gap-3 w-full ">
                                <p className="font-semibold text-[crimson]  flex justify-center items-center gap-3">
                                    <img
                                        src={user?.photoURL || "https://via.placeholder.com/40"}
                                        alt="User Avatar"
                                        className="w-7 h-7 rounded-full cursor-pointer"
                                    />
                                    <span>{user?.displayName}:</span></p>
                                <p>{comment.text}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Details;



