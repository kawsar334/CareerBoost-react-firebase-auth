import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth, googleProvider } from '../../Auth/firebase';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const emailRef = useRef();
 

    useEffect(() => {
        document.title = "Login Page";
        AOS.init();
    }, []);

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            toast.success("Login Successful");
            navigate("/");
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
            toast.success("Login Successful");
        } catch (err) {
            toast.error(err.message);
        }
    };
    const handleForgotPassword = () => {
        navigate(`/forgot-password?email=${encodeURIComponent(email)}`);
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-gray-50"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Enter your Email '
                            ref={emailRef}

                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    <div className="mb-6 relative">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={password}
                            placeholder='Enter your Password '
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <i
                            className={`absolute right-3 top-[40px] cursor-pointer text-gray-600 ${showPassword ? "fa fa-eye-slash" : "fa fa-eye"}`}
                            onClick={() => setShowPassword(!showPassword)}
                        ></i>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-center mb-6">
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full py-3 bg-[#EA4335] text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                        <i className="fab fa-google text-2xl  text-[#4285F4]  mr-2"></i>
                     

                        Login with Google
                    </button>
                </div>

                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-blue-600 hover:underline">
                            Register here
                        </Link>
                    </p>
                    <p className="text-sm text-gray-600 border py-1 px-1 rounded  my-2 bg-green-500 text-white">
                        Forgot password?{' '}
                        <button onClick={handleForgotPassword}  className="text-blue-600 hover:underline">
                            Reset here
                        </button >
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
