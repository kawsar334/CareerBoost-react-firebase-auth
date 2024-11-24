// src/Contact.js

import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="py-20   ">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
                <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="border border-gray-300 p-2 w-full" type="text" id="name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="border border-gray-300 p-2 w-full" type="email" id="email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea className="border border-gray-300 p-2 w-full" id="message" rows="4" required></textarea>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">
                        Send Message
                    </button>
                </form>
                <div className="flex justify-center mt-8">
                    <a className="mx-4" href="https://github.com/kawsar334" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github text-3xl"></i>
                    </a>
                    <a className="mx-4" href="https://www.linkedin.com/in/kawsar-firoz-a140b9237/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin text-3xl"></i>
                    </a>
                    {/* Add more social links as needed */}
                </div>
            </div>
        </div>
    );
};

export default Contact;
