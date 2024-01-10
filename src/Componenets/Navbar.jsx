import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navlinks = <>
    <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-blue-500 underline' : '')}><li className='px-5 font-semibold'>Home</li></NavLink>
  <NavLink to={'/about'} className={({ isActive }) => (isActive ? 'text-blue-500 underline' : '')} ><li className='px-5 font-semibold'>About</li></NavLink>
  <NavLink to={'/contact'} className={({ isActive }) => (isActive ? 'text-blue-500 underline' : '')}><li className='px-5 font-semibold'>Contact</li></NavLink></>
    return (
        <div>
            <div className="navbar bg-blue-100">
        <div className="navbar-start">
          
          <a className="btn btn-ghost text-xl">Rifat hossain shuvo</a>
        </div>
        <div className="navbar-end">
          <div className="hidden md:flex">
            <ul className="menu text-xl menu-horizontal px-1">
                {navlinks}
              </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex="0" role="button" className="btn btn-ghost md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-14 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
            <ul tabIndex="0" className="menu text-xl menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-100 rounded-box w-52">
              {navlinks}
            </ul>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Navbar;