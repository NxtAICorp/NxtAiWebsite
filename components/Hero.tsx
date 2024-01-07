import styles from "@/styles/style";
import { discount, LabelCoverHero, } from "@/public/assets";
import GetStarted from "./GetStarted";
import Image from "next/image";
import Button from "./Button";





const Hero: React.FC = () => (

  
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 items-center`}
    >
      <div className=" flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">Labels 🏷️</span> are better{" "}
          <span className="text-white">with</span> "AI"
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
        Electronic Shelf Label 
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts use a methodology to identify through artificial intelligence the best solution for your business.
      </p>
      <Button styles="mt-10" />

    </div>
    
    <div className={`${styles.flexCenter } flex-1 flex md:my-0 my-10 relative `}>
      <Image
        src={LabelCoverHero}
        alt="shelfStore"
        className="w-[70%] h-[30%] relative z-[1] bottom-15 rounded bg-indigo-500 shadow-lg shadow-indigo-500/50"
      /> 
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`${styles.flexCenter} ss:hidden`}>
      <GetStarted />
    </div>

  </section>
);

export default Hero;
