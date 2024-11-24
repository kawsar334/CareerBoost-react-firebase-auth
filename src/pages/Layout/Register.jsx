import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from 'firebase/auth';
import { auth, db, googleProvider } from '../../Auth/firebase';
import { collection, addDoc } from 'firebase/firestore';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasMinLength = password.length >= 6;
        return hasUppercase && hasLowercase && hasMinLength;
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/");
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validatePassword(password)) {
            setError("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
            toast.error("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.", { position: "top-center" });
            return;
        }

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const docRef = await addDoc(collection(db, 'users'), {
            uid: user.uid,
            displayName: name,
            email: user.email,
            photoURL: photoURL,
            createdAt: new Date(),
        });
        
        toast.success("User registered successfully", { position: "top-center" });
        navigate("/");
        // toast.success("Registration succesfully")

        await updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
        });

        setError("");
    };

    useEffect(() => {
        document.title = "Register page";
        AOS.init(); // Initialize AOS
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div
                className="bg-white p-8 rounded-lg shadow-lg md:w-[600px] w-full"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6" data-aos="zoom-in">
                    Register
                </h2>

                {error && (
                    <p className="text-red-600 text-center mb-4" data-aos="fade-left">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit} data-aos="fade-right" data-aos-delay="300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder='Enter username'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder='Enter your email'
                                className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label htmlFor="photoURL" className="block text-sm font-semibold text-gray-700">Photo URL (Optional)</label>
                            <input
                                type="url"
                                id="photoURL"
                                value={photoURL}
                                placeholder='Enter photo URL'
                                onChange={(e) => setPhotoURL(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                placeholder='Enter password'
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <i
                                className={`absolute right-4 top-[50px] transform -translate-y-1/2 cursor-pointer ${showPassword ? "fas fa-eye-slash" : "fas fa-eye"}`}
                                onClick={() => setShowPassword(!showPassword)}
                            ></i>
                            <p className="text-sm text-gray-500 mt-1">Must include uppercase, lowercase, and be at least 6 characters.</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            data-aos="flip-left"
                        >
                            Register
                        </button>
                    </div>

                    <div className="flex items-center justify-center mb-6">
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                            data-aos="fade-up"
                        >
                            <i className="fab fa-google text-2xl  text-[#4285F4]  mr-2"></i>
                            Register with Google
                        </button>
                    </div>
                </form>

                <div className="text-center" data-aos="fade-in">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-600 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
