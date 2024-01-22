import React from "react";
import { ButtonProps } from "@types";

interface ButtonWithHeroProps extends ButtonProps {
  heroSection:any
}

const Button: React.FC<any> = ({ styles, heroSection }) => {

  
  return (
    <div className="list-none">
      {heroSection?.contact?.map((nav: any, index:number) => (
        <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
            index === heroSection?.contact.length - 1 ? "mr-0" : "mr-10"
          }`}
        >
          <a href={`#${nav.id}`}>
            <button
              type="button"
              className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:translate-x-2 transition-all ease-linear cursor-pointer `}
            >
            {/* Pointer Button */}
            <div className="relative">
              <div className="absolute top-3 right-0 -mr-6 -mt-6 w-4 h-4 rounded-full bg-pink-400 opacity-75 animate-ping"></div>
              <div className="absolute top-3 right-0 -mr-6 -mt-6 w-4 h-4 rounded-full bg-pink-500/80"></div>
            </div>
              {nav.title} 
            </button>
          </a>
        </li>
      ))}
    </div>
  );
};

export default Button;