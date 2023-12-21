import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navlinks = <>
    <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-blue-500 underline' : '')}><li className='px-5 font-semibold'>Home</li></NavLink>
  <NavLink to={'/about'} className={({ isActive }) => (isActive ? 'text-blue-500 underline' : '')} ><li className='px-5 font-semibold'>About</li></NavLink>
  <NavLink to={'/project'} className={({ isActive }) => (isActive ? 'text-blue-500 underline' : '')}><li className='px-5 font-semibold'>Project</li></NavLink>
  <NavLink to={'/contact'} className={({ isActive }) => (isActive ? 'text-blue-500 underline' : '')}><li className='px-5 font-semibold'>Contact</li></NavLink></>
    return (
        <div>
            <div class="navbar bg-blue-100">
        <div class="navbar-start">
          
          <a class="btn btn-ghost text-xl">Rifat hossain shuvo</a>
        </div>
        <div class="navbar-end">
          <div class="hidden md:flex">
            <ul class="menu menu-horizontal px-1">
                {navlinks}
              </ul>
          </div>
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-14 h-7 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-100 rounded-box w-52">
              {navlinks}
            </ul>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Navbar;