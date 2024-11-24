import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updatedName, setUpdatedName] = useState(user?.displayName || "");
    const [updatedPhotoURL, setUpdatedPhotoURL] = useState(user?.photoURL || "");

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateProfile(user, {
                displayName: updatedName,
                photoURL: updatedPhotoURL,
            });
            setIsModalOpen(false);
            navigate("/")
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    useEffect(() => {
        document.title = `Profile of ${user?.displayName}`;
    }, [user?.displayName]);

    return (
        <div className="max-w-4xl mx-auto my-[100px] p-6 bg-white shadow-lg rounded-lg" data-aos="fade-up">
            <div className="flex items-center space-x-6" data-aos="fade-right">
                <div className="avatar">
                    <div className="w-32 h-32 rounded-full overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src={user?.photoURL}
                            alt="User Avatar"
                        />
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">{user?.displayName}</h2>
                    <p className="text-gray-500 mt-2">{user?.email}</p>
                    <div className="mt-4">
                        <p className="text-gray-700">Location: {user?.location || "Not found"}</p>
                        <p className="text-gray-700">Email: {user?.email}</p>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex justify-between" data-aos="fade-up">
                <button
                    onClick={handleEditClick}
                    className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
                >
                    Edit Profile
                </button>
                <button
                    onClick={logout}
                    className="border py-2 px-6 rounded-md text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                >
                    Logout
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-[black] bg-opacity-50 z-50   " data-aos="fade-in">
                    <div className="bg-white p-6 rounded-lg w-96 shadow-lg border">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Edit Profile</h3>
                        <form onSubmit={handleProfileUpdate}>
                            <div className="mb-4">
                                <label
                                    htmlFor="displayName"
                                    className="block text-sm font-semibold text-gray-700"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="displayName"
                                    value={updatedName}
                                    onChange={(e) => setUpdatedName(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="photoURL"
                                    className="block text-sm font-semibold text-gray-700"
                                >
                                    Profile Picture URL
                                </label>
                                <input
                                    type="text"
                                    id="photoURL"
                                    value={updatedPhotoURL}
                                    onChange={(e) => setUpdatedPhotoURL(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    required
                                />
                            </div>
                            <div className="mt-6 flex justify-between">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="py-2 px-6 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
