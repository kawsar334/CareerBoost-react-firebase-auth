import React, { useEffect, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthContext } from './Auth/AuthProvider'; // Assuming your context is in this file
import { auth } from './Auth/firebase'; // Import firebase auth instance

const RedirectIfLoggedIn = ({ children }) => {
    // Use the user from the AuthContext
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            // navigate("/"); 
            <Navigate  to="/"/>
        }
    }, [user, navigate]); 

    return user ? null : <>{children}</>; // If user is logged in, return null (no children rendered)
};

export default RedirectIfLoggedIn;
