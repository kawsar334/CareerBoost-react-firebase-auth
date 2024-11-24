import { useContext } from "react";
import logo from "../assets/logo.png";
import { AuthContext } from "../Auth/AuthProvider";

const Footer = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <footer className="bg-[#06091A] text-base-content py-10  h-max">
            <div className="w-full md:w-[80%] m-auto  h-max">
                <div className="flex justify-start  md:justify-center my-10">
                    { user?.photoURL && <img
                        src={user?.photoURL || "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"}
                        
                        alt="Logo"
                        className="w-[70px]  h-[70px] rounded-full  my-10 ml-6 md:ml-0"
                    />}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left md:text-left px-4">
                    <div className="text-left">
                        <h2 className="font-bold text-lg mb-4 text-[white]">Who We Are</h2>
                        <p className="w-[80%] md:w-[90%] text-[gray]">
                            We are a dedicated team providing expert advice and services to help individuals achieve their career goals.
                        </p>
                    </div>

                    <div className=" ">
                        <h2 className="font-bold text-lg mb-4 text-[white]">Quick Links</h2>
                        <ul className="space-y-2 text-[gray]">
                            <li><a href="#home" className="link link-hover">Home</a></li>
                            <li><a href="#services" className="link link-hover">Our Services</a></li>
                            <li><a href="#contact" className="link link-hover">Get in Touch</a></li>
                            <li><a to="/dashboard" className="link link-hover">Dashboard</a></li>

                        </ul>
                    </div>

                    <div className="">
                        <h2 className="font-bold text-lg mb-4 text-[white]">Stay Updated</h2>
                        <p className="mb-4 text-[gray]">Join our mailing list to receive the latest updates.</p>
                        <div className="flex justify-center md:justify-start">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <button className="btn btn-[#ff5733] ml-2 bg-gradient-to-r from-[yellow] via-[#ff5733]">Sign Up</button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="mt-10 border-t border-base-300 text-center pt-4 text-[gray]  m-auto">
                    <p className="text-sm">&copy; 2024 Your Career Solutions. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
