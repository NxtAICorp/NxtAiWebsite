import React from "react";
import styles from "@/styles/style";
import Contact from "./ContactForm";

const CTA: React.FC<{ Cta: any }> = ({ Cta }) => {
    (async () => {})();

    return (
        <section
        id="contact"
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow py-10 `}
        >
        <div className="flex-1 flex flex-col">
            <h2 className={`${styles.heading2} text-center text-pink-500/50 hover:underline`}>{Cta.title} </h2>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
            <Contact contactDetails={Cta.contact} />
        </div>
        </section>
    );
};

export default CTA;