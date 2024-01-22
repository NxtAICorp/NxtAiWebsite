import React from "react";
import styles, { layout } from "@/styles/style";
import Image from "next/image";
import { labelCover } from "@public/assets";
import MediaCity from "@public/assets/MedicityLogo.svg";

const Clients: React.FC<{ clients: Array<any> }> = ({ clients }: { clients: any }) => {
  return (
    <section id="features" className={`${styles.flexCenter} flex-wrap w-full py-20 `}>
      <div id="clients" className={`${layout.sectionInfo} flex-wrap w-full py-20`}>
        <h2 className={`${styles.heading2} text-center`}>
          {clients?.title}
        </h2>
      </div>

      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients?.clients?.map((client: any) => (
          <div
            key={client?.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-x-[120px]`}
          >
            {/*  <Image src={labelCover} alt="discount" className="h-[20rem] w-[50vw] absolute z-[1] sm:min-w-[192px] min-x-[120px]`" /> */}

            <Image src={labelCover} alt="discount" className="md:h-[30rem] md:w-[60vw] absolute z-[1] sm:h-[10rem] sm:w-[100vw]" />

            <div className="flex items-center">
              <div className="relative overflow-hidden ">
                <div className="marquee-10 w-full">
                  <div className="flex space-x-16 h-64 w-[80vw] sm:h-[20rem] sm:w-[50vw] lg:w-[30vw] 2xl:h-[50rem]">
                  <Image
                    src={MediaCity}
                    alt="Multi e-Labels"
                    className="w-[100%] h-[100%] relative "
                  />
                  <Image
                    src={MediaCity}
                    alt="Multi e-Labels"
                    className="w-[100%] h-[100%] relative "
                  />
                  <Image
                    src={MediaCity}
                    alt="Multi e-Labels"
                    className="w-[100%] h-[100%] relative "
                  />
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;