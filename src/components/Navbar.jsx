import React from "react";


const Navbar = () => { 
  return (
    <nav className="flex text-white justify-between items-center py-4 px-8">
      <div className="font-bold text-lg">Pm.</div>
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="hover:text-purple-500 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-purple-500 transition">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-purple-500 transition">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
