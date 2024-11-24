import { useState, useEffect } from 'react';

const UseFetch = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setServices(data);
                setTimeout(() => {
                    setLoading(false);
                }, 2000); 
            })
            .catch((err) => {
                setError('Failed to load services');
                setLoading(false);
            });
    }, []);

    return { services, loading, error };
};

export default UseFetch;

