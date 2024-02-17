'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Logo from '../../../assets/logo.png';
import { GoSearch } from 'react-icons/go';
import { FaCartShopping } from 'react-icons/fa6';
import Darkmode from '../Darkmode';

const Navtop = () => {
  return (
    <div className="bg-primary/40 py-2">
      <div className="container flex justify-between items-center ">
        {/* Site Logo */}
        <div>
          <Link
            href={''}
            className="flex items-center gap-2 font-bold text-2xl sm:text-3xl"
          >
            <Image src={Logo} width={40} height={40} alt="logo"></Image>
            Shoppig
          </Link>
        </div>

        {/* Search and Order button */}
        <div className="flex justify-between items-center gap-4">
          {/* Search */}
          <div className="hidden sm:block relative group">
            <input
              type="text"
              className="w-[200px] sm:w-[200px] group-hover:w-[300px] text-sm px-2 py-1 border border-gray-300 focus:outline-none focus:border-1 focus:border-primary rounded-full transition-all duration-200"
              placeholder="Search"
            />
            <GoSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 group-hover:text-primary transition-all duration-200" />
          </div>

          {/* Order button */}
          <button
            className="flex items-center gap-3 bg-gradient-to-r from-primary to-secondary py-1 px-4  text-white rounded-full transition-all duration-200 group"
            onClick={() => alert('this feature not avaiable yet!')}
          >
            <span className="hidden group-hover:block text-sm transition-all duration-200">
              Order
            </span>
            <FaCartShopping className="block text-xl drop-shadow-sm cursor-pointer" />
          </button>

          {/* Dark mode switch */}
          <Darkmode />
        </div>
      </div>
    </div>
  );
};

export default Navtop;
