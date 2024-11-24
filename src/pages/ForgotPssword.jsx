import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { auth } from '../Auth/firebase';
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';
const ForgotPassword = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const emailFromQuery = queryParams.get('email') || '';
    const [email, setEmail] = useState(emailFromQuery);
    const [emailLink , setEmailLink] = useState(false);
    const [showRedirectButton, setShowRedirectButton] = useState(false);

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if(!email === ""){
            toast.error('Please enter an email address');
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success(`A password reset email has been sent to ${email}`);
            setShowRedirectButton(true);
            setTimeout(() => {
                setShowRedirectButton(false);

            }, 10000);
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };


    useEffect(() => {
        document.title = 'Forgot Password';
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Forgot Password</h2>
                {showRedirectButton && (
                    <div className='fixed top-[100px] left-[50%] transform translate-x-[-50%]  shadow p-4 w-full md:w-max'>
                        <p>A password reset message sent to {email} <span>go to Gmail</span>  </p>
                        <div  className='flex justify-center items-center gap-3'>

                            <button
                                onClick={() => window.open('https://mail.google.com/', '_blank')}
                                className="w-full mt-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                            >
                               Click here Go to Gmail
                            </button>
                        </div>
                        {/* <button className='my-1 border rounded border-[crimson] text-[crimson] cursor-pointer w-full' onClick={() => setShowRedirectButton(!showRedirectButton)}>Close</button> */}
                 
                        </div>
                )}
                <form onSubmit={handleResetPassword}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <button
                        type="submit"

                        className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;

