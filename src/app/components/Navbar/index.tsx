import React from 'react';
import Navtop from './Navtop';
import Navbottom from './Navbottom';

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Top Rated',
    link: '/#services',
  },
  {
    id: 3,
    name: 'Kids Wear',
    link: '/#',
  },
  {
    id: 3,
    name: 'Mens Wear',
    link: '/#',
  },
  {
    id: 3,
    name: 'Electronics',
    link: '/#',
    submenu: [
      {
        id: 1,
        name: 'Trending Products',
        link: '/#',
      },
      {
        id: 2,
        name: 'Best Selling',
        link: '/#',
      },
      {
        id: 3,
        name: 'Top Rated',
        link: '/#',
      },
    ],
  },
];

const Navbar = () => {
  return (
    <header className="relative shadow-md bg-white dark:bg-gray-900 dark:text-white z-40 duration-200">
      {/* Upper Navbar */}
      <Navtop />

      {/* Lower Navbar */}
      <Navbottom menu={Menu} />
    </header>
  );
};

export default Navbar;
