import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 text-white bg-black space-x-4 text-xl z-[1] p-2  text-justify   rounded-box w-52">
                         <NavLink to='/statistics'>Statistics</NavLink> 
                         <NavLink to='/appledMyjobs'>Applied Jobs</NavLink>
                         <NavLink to='/bolog'>Blog</NavLink>
                        </ul>
                    </div>
                    <NavLink to='/' className="normal-case cursor-pointer text-xl">CareerHub</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-4 text-xl px-1">
                         <NavLink to='/statistics'>Statistics</NavLink> 
                         <NavLink to='/appledMyjobs '> Applied Jobs</NavLink>
                         <NavLink to='/bolog'>Blog</NavLink>
                         
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className=" p-2 rounded-lg text-xl text-white cursor-pointer bg-purple-600">Star Applying</a>
                </div>
            </div>
        </div>
    );
};

export default Header;