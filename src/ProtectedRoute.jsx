import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "./Auth/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth/AuthProvider";

const ProtectedRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [auth]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {

        navigate('/login');
        return null;
    }

    // return <>{children}</>;

    return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
    
};

export default ProtectedRoute;
