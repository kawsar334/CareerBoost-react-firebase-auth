import banner from "../assets/bg-shadow.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Newsletter = () => {
    return (
        <div
            className="flex justify-center items-center flex-col w-full  h-[400px] relative bg-cover bg-center"
            data-aos="fade-up"
        >
            <div className="flex flex-col items-center justify-center w-[95%] md:w-[70%] p-3 border-[2px] bg-[rgba(255,255,255,0.4)] border-white rounded-[10px]  bottom-[-70px] z-5">
                <div className="flex flex-col items-center justify-center w-[100%] p-6 border-[3px] rounded-[10px] relative bg-[white]" >
                    {/* <img src={banner} alt="" className="absolute w-full h-full " /> */}
                    <h2 className="text-3xl font-bold mb-4 text-center">Subscribe to our Newsletter</h2>

                    <p className="text-lg mb-6 text-center">
                        Get the latest updates and news right in your inbox!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 z-10">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full sm:w-72"
                        />
                        <button className="btn btn-[#ff5733] ml-2 bg-gradient-to-r from-[yellow] via-[#ff5733] w-full sm:w-auto">Subscribe</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
