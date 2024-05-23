import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">TextUtils</h1>
      <ul className="flex space-x-4">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-blue-500"} 
          >Home</NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-blue-500"} 
          >About</NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-blue-500"} 
          >Contact</NavLink>
        </li>
      </ul>
      <button onClick={toggleDarkMode} className="text-xl">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
