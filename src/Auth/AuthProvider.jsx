import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase'; 
import { signInWithPopup } from 'firebase/auth';
import { googleProvider } from './firebase'; 
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
   

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);
    

    const logout = async (navigate) => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            try {
                await signOut(auth);
                navigate('/login');
                toast.success('Logged out successfully'); 
            } catch (error) {
                // console.error('Error logging out:', error.message);
            }
        }
    };
 

    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const googleSignIn = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (error) {
        // console.error('Error signing in with Google: ', error.message);
    }
};

export { AuthProvider, AuthContext };
