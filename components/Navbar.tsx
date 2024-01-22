"use client"
import { useState } from 'react';
import { close, menu } from "@/public/assets";
import Image from 'next/image';
import Logo from "./Logo";
import Whatsapp from './Whatsapp';
import LanguageList from './LanguageList';




const Navbar: React.FC<any> = ({ navLinks }) => {

  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Logo />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks &&
          navLinks.length > 0 &&
          navLinks.map((nav:any, index:number) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white  ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

        {/* Whatsapp Button */}
        <div className="ml-5">
          <Whatsapp />
        </div>
      </ul>

      {/* Burger Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="object-contain"
          width={28}
          height={28}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? "flex" : "hidden"}
            p-6 bg-black-gradient absolute top-20 ring-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks &&
              navLinks.length > 0 &&
              navLinks.map((nav:any, index:number) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  }`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

            <div className="ml-5 pt-6">
              <Whatsapp />
            </div>
            <div className="ml-5 pt-6">
              <LanguageList />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar