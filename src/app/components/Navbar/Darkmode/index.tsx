'use client';
import React, { useEffect, useState } from 'react';

import Lightbtn from '../../../assets/website/light-mode-button.png';
import Darkbtn from '../../../assets/website/dark-mode-button.png';
import Image from 'next/image';

type ToggleThemeProps = {
  initialTheme?: 'light' | 'dark';
};
const Darkmode: React.FC<ToggleThemeProps> = ({ initialTheme = 'light' }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialTheme === 'dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme === 'dark');
    console.log(isDarkMode);

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="relative">
      <Image
        className={`absolute right-0 z-10 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer ${
          isDarkMode ? ' opacity-0' : ' opacity-100'
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
