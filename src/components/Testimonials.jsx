


import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Auth/firebase';

const Testimonials = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'users'));
            const userList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUsers(userList);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching users:", error);
            setLoading(false); // Stop loading even if there's an error
        }
    };
    const testimonials = [
        {
            id: 1,
            image: "https://i.ibb.co/Z2bwpmb/user1.jpg",
            name: "John Doe",
            occupation: "Software Engineer",
            rating: 5,
            review: "The career counseling session was incredibly helpful. I got personalized advice that boosted my confidence."
        },
        {
            id: 2,
            image: "https://i.ibb.co/jHvNkvH/user2.jpg",
            name: "Jane Smith",
            occupation: "Marketing Specialist",
            rating: 4,
            review: "The resume review service was excellent. It helped me secure multiple job interviews."
        },
        {
            id: 3,
            image: "https://i.ibb.co/dD8kN9b/user3.jpg",
            name: "Alex Johnson",
            occupation: "Entrepreneur",
            rating: 5,
            review: "Amazing experience! The group counseling session gave me valuable insights into my career path."
        },
        {
            id: 4,
            image: "https://i.ibb.co/Fz5P7gZ/user4.jpg",
            name: "Emily Davis",
            occupation: "Product Manager",
            rating: 5,
            review: "The career guidance I received was spot-on. It helped me make informed decisions about my next steps."
        },
        {
            id: 5,
            image: "https://i.ibb.co/Yk1fNj5/user5.jpg",
            name: "Michael Brown",
            occupation: "Graphic Designer",
            rating: 4,
            review: "The portfolio review session was very detailed. I received actionable feedback that improved my design showcase."
        }
    ];

    return (
        <div className="p-8 bg- my-[80px]">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {loading ? (
                    <div>Loading...</div> // Display a loading message while fetching
                ) : (
                    users?.slice(0, 5).map((user, i) => (
                        <div
                            key={user.id}
                            className="bg-white p-6 rounded-lg shadow-lg"
                            data-aos="fade-up"
                        >
                            <img
                                src={user?.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcazeHuAcZDzv4_61fPLT-S00XnaKXch2YWQ&s"} // 
                                alt={user.name}
                                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border"
                            />
                            <h3 className="text-xl font-semibold text-center">{user?.displayName}</h3>
                            <p className="text-sm text-gray-500 text-center">{testimonials[i]?.occupation}</p>
                            <div className="flex justify-center my-2">
                                {Array.from({ length: testimonials[i]?.rating }, (_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.786 5.518h5.801c.957 0 1.357 1.23.588 1.81l-4.689 3.41 1.786 5.518c.3.921-.755 1.688-1.54 1.11L10 15.347l-4.689 3.41c-.784.578-1.84-.189-1.54-1.11l1.786-5.518-4.689-3.41c-.768-.58-.37-1.81.588-1.81h5.801l1.786-5.518z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm text-center mb-4">"{testimonials[i]?.review}"</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Testimonials;

// import React, { useEffect, useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { collection } from 'firebase/firestore';
// import { db } from '../Auth/firebase';

// const Testimonials = () => {

//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         AOS.init({ duration: 1000 });
//     }, []);

    // const testimonials = [
    //     {
    //         id: 1,
    //         image: "https://i.ibb.co/Z2bwpmb/user1.jpg",
    //         name: "John Doe",
    //         occupation: "Software Engineer",
    //         rating: 5,
    //         review: "The career counseling session was incredibly helpful. I got personalized advice that boosted my confidence."
    //     },
    //     {
    //         id: 2,
    //         image: "https://i.ibb.co/jHvNkvH/user2.jpg",
    //         name: "Jane Smith",
    //         occupation: "Marketing Specialist",
    //         rating: 4,
    //         review: "The resume review service was excellent. It helped me secure multiple job interviews."
    //     },
    //     {
    //         id: 3,
    //         image: "https://i.ibb.co/dD8kN9b/user3.jpg",
    //         name: "Alex Johnson",
    //         occupation: "Entrepreneur",
    //         rating: 5,
    //         review: "Amazing experience! The group counseling session gave me valuable insights into my career path."
    //     },
    //     {
    //         id: 4,
    //         image: "https://i.ibb.co/Fz5P7gZ/user4.jpg",
    //         name: "Emily Davis",
    //         occupation: "Product Manager",
    //         rating: 5,
    //         review: "The career guidance I received was spot-on. It helped me make informed decisions about my next steps."
    //     },
    //     {
    //         id: 5,
    //         image: "https://i.ibb.co/Yk1fNj5/user5.jpg",
    //         name: "Michael Brown",
    //         occupation: "Graphic Designer",
    //         rating: 4,
    //         review: "The portfolio review session was very detailed. I received actionable feedback that improved my design showcase."
    //     }
    // ];




//     // Fetch users from Firestore
//     const fetchUsers = async () => {
//         try {
//             const querySnapshot = await getDocs(collection(db, 'users'));
//             const userList = querySnapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 ...doc.data(),
//             }));
//             console.log(userList)
//             setUsers(userList);
//             setLoading(false);
//         } catch (error) {
//             console.error("Error fetching users:", error);
//         }
//     };



//     return (
//         <div className="p-8 bg-gray-100">
//             <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {testimonials.map((testimonial) => (
//                     <div
//                         key={testimonial.id}
//                         className="bg-white p-6 rounded-lg shadow-lg"
//                         data-aos="fade-up"
//                     >
//                         <img
//                             src={testimonial.image}
//                             alt={testimonial.name}
//                             className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
//                         />
//                         <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
//                         <p className="text-sm text-gray-500 text-center">{testimonial.occupation}</p>
//                         <div className="flex justify-center my-2">
//                             {Array.from({ length: testimonial.rating }, (_, i) => (
//                                 <svg
//                                     key={i}
//                                     className="w-5 h-5 text-yellow-500"
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                 >
//                                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.786 5.518h5.801c.957 0 1.357 1.23.588 1.81l-4.689 3.41 1.786 5.518c.3.921-.755 1.688-1.54 1.11L10 15.347l-4.689 3.41c-.784.578-1.84-.189-1.54-1.11l1.786-5.518-4.689-3.41c-.768-.58-.37-1.81.588-1.81h5.801l1.786-5.518z" />
//                                 </svg>
//                             ))}
//                         </div>
//                         <p className="text-gray-600 text-sm text-center mb-4">"{testimonial.review}"</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Testimonials;
