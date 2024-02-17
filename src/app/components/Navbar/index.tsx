import React from 'react';
import Navtop from './Navtop';

const Navbar = () => {
  return (
    <header className="relative shadow-md bg-white dark:bg-gray-900 dark:text-white z-40 duration-200">
      {/* Upper Navbar */}
      <Navtop />
      Navbar
      {/* Lower Navbar */}
      <div></div>
    </header>
  );
};

export default Navbar;
