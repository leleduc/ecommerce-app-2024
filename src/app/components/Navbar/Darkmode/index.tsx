'use client';
import React, { useEffect, useState } from 'react';

import Lightbtn from '../../../assets/website/light-mode-button.png';
import Darkbtn from '../../../assets/website/dark-mode-button.png';
import Image from 'next/image';

const Darkmode = () => {
  const [theme, setTheme] = useState('light');

  //   console.log(element);

  //   useEffect(() => {
  //     if (theme == 'dark') {
  //       element.classList.add('dark');
  //       localStorage.setItem('theme', 'dark');
  //     } else {
  //       element.classList.remove('dark');
  //       localStorage.setItem('theme', 'light');
  //     }
  //   }, [theme]);
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const element = document.documentElement;
    setTheme(theme == 'light' ? 'dark' : 'light');
    if (theme == 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="relative">
      <Image
        className={`absolute right-0 z-10 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer ${
          theme == 'dark' ? ' opacity-0' : ' opacity-100'
        }`}
        width={30}
        height={30}
        alt="Light Mode"
        src={Lightbtn}
        onClick={toggleTheme}
      />
      <Image
        className="drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer"
        width={30}
        height={30}
        alt="Dark Mode"
        src={Darkbtn}
        onClick={toggleTheme}
      />
    </div>
  );
};

export default Darkmode;
