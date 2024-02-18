'use client';
import Link from 'next/link';
import React from 'react';
import { FaCaretDown } from 'react-icons/fa6';

interface Submenu {
  id: number;
  name: string;
  link: string;
}

interface MenuItem {
  id: number;
  name: string;
  link: string;
  submenu?: Submenu[];
}

interface NavbarProps {
  menu: MenuItem[];
}

const Navbottom: React.FC<NavbarProps> = ({ menu }) => {
  //   console.log(menu);
  return (
    <div className="flex justify-center">
      <ul className="hidden sm:flex items-center gap-4 shadow-md">
        {menu.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.submenu ? (
              <div className="relative group">
                <Link
                  className="flex items-center gap-[2px] px-4  hover:text-primary duration-200"
                  href={menuItem.link}
                >
                  {menuItem.name}
                  <span>
                    <FaCaretDown className="group-hover:rotate-180 transition-all duration-200" />
                  </span>
                </Link>
                <ul className="absolute hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black">
                  {menuItem.submenu.map((submenuItem) => (
                    <li key={submenuItem.id}>
                      <Link
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        href={submenuItem.link}
                      >
                        {submenuItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                className="inline-block px-4 hover:text-primary duration-200"
                href={menuItem.link}
              >
                {menuItem.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbottom;
