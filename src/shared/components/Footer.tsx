import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#18181C] text-white py-6 mt-10">
            <div className="max-w-[98%] lg:max-w-[90%] mx-auto px-4">
                <div className="flex flex-wrap justify-between gap-6">
                    <div className="w-full md:w-1/3">
                        <h2 className="text-xl font-bold mb-3">About</h2>
                        <p className="text-sm text-gray-400 tracking-wide">
                            Epic Games is a leading interactive entertainment company known
                            for creating cutting-edge games and digital experiences. We are
                            committed to pushing the boundaries of technology and creativity.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h2 className="text-xl font-bold mb-3">Quick Links</h2>
                        <ul className="text-sm flex flex-col gap-2">
                            <li><Link to='/' className="text-gray-400 hover:text-white font-medium tracking-wide duration-300">Discover</Link></li>
                            <li><Link to='/browse' className="text-gray-400 hover:text-white font-medium tracking-wide duration-300">Browse</Link></li>
                            <li><Link to='/news' className="text-gray-400 hover:text-white font-medium tracking-wide duration-300">News</Link></li>
                            <li><Link to='/wishlist' className="text-gray-400 hover:text-white font-medium tracking-wide duration-300">Wishlist</Link></li>
                            <li><Link to='/cart' className="text-gray-400 hover:text-white font-medium tracking-wide duration-300">Cart</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3"> 
                        <h2 className="text-xl font-bold mb-3">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/epicgames" target="_blank" className="text-gray-400 hover:text-white duration-300">
                                <FaFacebookF size={22} />
                            </a>
                            <a href="https://x.com/epicgames" target="_blank" className="text-gray-400 hover:text-white duration-300">
                                <RiTwitterXLine size={24} />
                            </a>
                            <a href="https://www.youtube.com/channel/UC5Qk8mWBwtMyEj7iQQYRk1A" target="_blank" className="text-gray-400 hover:text-white duration-300">
                                <FaYoutube size={25} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Epic Games, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
