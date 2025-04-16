import React, { useState } from "react";
import { FaTimes, FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/favicon.png';
import { LuGlobe } from "react-icons/lu";
import { FaBarsStaggered } from "react-icons/fa6";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="w-full bg-[#121216] text-white px-4 py-4 shadow-md">
            <div className="max-w-[98%] lg:max-w-[90%] mx-auto flex items-center justify-between gap-4 flex-wrap lg:flex-nowrap">
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <Link to='/' className="text-xl font-bold">
                        <img width={35} src={logo} alt="logo" />
                    </Link>
                    <div className="flex items-center gap-4 lg:hidden">
                        <div className="relative group">
                            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-1 text-white hover:text-gray-400 duration-300 cursor-pointer">
                                <LuGlobe size={23} />
                            </button>
                            {dropdownOpen && (
                                <ul className="absolute right-0 bg-[#2d2d30b3] border border-[#ffffff1a] text-sm rounded-2xl shadow-lg mt-1 z-50 w-40">
                                    <li onClick={() => setDropdownOpen(false)} className="px-4 py-2 hover:bg-[#4e5660] cursor-pointer rounded-t-2xl">English</li>
                                    <li onClick={() => setDropdownOpen(false)} className="px-4 py-2 hover:bg-[#4e5660] cursor-pointer">Azərbaycan</li>
                                    <li onClick={() => setDropdownOpen(false)} className="px-4 py-2 hover:bg-[#4e5660] cursor-pointer">Русский</li>
                                    <li onClick={() => setDropdownOpen(false)} className="px-4 py-2 hover:bg-[#4e5660] cursor-pointer rounded-b-2xl">Türkçe</li>
                                </ul>
                            )}
                        </div>
                        <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <FaTimes size={20} /> : <FaBarsStaggered size={25} />}
                        </button>
                    </div>
                </div>
                <div className={`w-full lg:flex items-center justify-between gap-4 ${menuOpen ? "flex" : "hidden"} lg:flex-row flex-col mt-3 lg:mt-0`}>
                    <div className={`flex ${menuOpen && 'flex-col'} items-center gap-3 w-full lg:w-auto`}>
                        <div className="relative flex items-center bg-[#242426] hover:bg-[#404044] rounded-full px-5 py-2.5 w-full md:w-auto">
                            <input type="text" placeholder="Search store" className="w-full md:w-auto text-sm pl-6 outline-0" />
                            <FaSearch size={15} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                        </div>
                        <nav className="flex flex-col lg:flex-row gap-3 text-sm text-center lg:text-left">
                            <NavLink to="/" className={({ isActive }) => `font-medium tracking-wide duration-300 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                                Discover
                            </NavLink>
                            <NavLink to="/browse" className={({ isActive }) => `font-medium tracking-wide duration-300 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                                Browse
                            </NavLink>
                            <NavLink to="/news" className={({ isActive }) => `font-medium tracking-wide duration-300 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                                News
                            </NavLink>
                        </nav>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:mt-0">
                        <NavLink to="/wishlist" className={({ isActive }) => `text-[14px] font-medium tracking-wide duration-300 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                            Wishlist
                        </NavLink>
                        <NavLink to="/cart" className={({ isActive }) => `text-[14px] font-medium tracking-wide duration-300 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                            Cart
                        </NavLink>
                        {!menuOpen && (
                            <div className="relative group">
                                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-1 hover:text-gray-500 duration-300 cursor-pointer">
                                    <LuGlobe size={20} />
                                </button>
                                {dropdownOpen && (
                                    <ul className="absolute left-1/2 transform -translate-x-1/2 lg:right-0 bg-[#2d2d30b3] border border-[#ffffff1a] text-sm rounded-2xl shadow-lg mt-1 z-50 w-40">
                                        <li onClick={() => setDropdownOpen(false)} className="px-4 py-2 hover:bg-[#4e5660] cursor-pointer rounded-t-2xl">English</li>
                                        <li onClick={() => setDropdownOpen(false)} className="px-4 py-2 hover:bg-[#4e5660] cursor-pointer">Azərbaycan</li>
                                        <li onClick={() => setDropdownOpen(false)} className="px-4 py-2 hover:bg-[#4e5660] cursor-pointer">Русский</li>
                                        <li onClick={() => setDropdownOpen(false)} className="px-4 py-2 hover:bg-[#4e5660] cursor-pointer rounded-b-2xl">Türkçe</li>
                                    </ul>
                                )}
                            </div>
                        )}
                        <Link to='/account' className="flex items-center gap-2">
                            <span className="w-[20px] h-[20px] flex items-center justify-center bg-[#353539] p-4 rounded-full text-sm uppercase">
                                r
                            </span>
                            <span>ramazanismayilovh</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
