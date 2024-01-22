import React from "react";
import Image from "next/image";
import Button from "./Button";
import GetStarted from "./GetStarted";
import styles from "@/styles/style";
import { discount, LabelCoverHero } from "@/public/assets";

const Hero: React.FC<any> = ({ heroSection, getStarted }) => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 items-center`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">{heroSection.label1} 🏷️</span>{" "}
            {heroSection.label2}{" "}
            <span className="text-white">{heroSection.label3}</span>{" "}
            {heroSection.label4}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] text-center ">
            {heroSection.t1}
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient "> {heroSection.t2}</span>{" "}
          </h1>
         {/*  <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted getStarted={getStarted} />
          </div> */}
        </div>
        <h1 className="w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] text-center ">
          {heroSection.t3}
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center text-justify`}>
          {heroSection.desc}
        </p>
        <Button styles="mt-10" heroSection={heroSection} />
      </div>

      <div
        className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative `}
      >
        <Image
          src={LabelCoverHero}
          alt="shelfStore"
          className="w-[60%] h-[30%] relative z-[1] bottom-15 rounded bg-indigo-500 shadow-lg shadow-indigo-500/50"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted getStarted={getStarted} />
      </div>
    </section>
  );
};

export default Hero;