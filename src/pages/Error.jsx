import React from 'react';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-blue-500">404</h1>
                <p className="text-xl text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
                <p className="text-lg text-gray-500 mt-2">It might have been moved or deleted.</p>
                <a
                    href="/"
                    className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                    Go back to Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
