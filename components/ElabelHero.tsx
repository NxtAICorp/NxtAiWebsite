import React from "react";
import styles from "@/styles/style";
import elabel from "@/public/assets/elabel1.png";
import Image from "next/image";

const LabelHero = () => {
    return (
        <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
            <Image
                src={elabel}
                alt="elabel"
                className="w-[100%] h-[100%] relative z-[5]"
            />
        </div>
    );
};

export default LabelHero