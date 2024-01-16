import styles from "@/styles/style";
import Contact from "./ContactForm";

const CTA: React.FC = () => (
    <section id="contact" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow py-10 `}>
        <div className="flex-1 flex flex-col">
            <h2 className={`${styles.heading2} text-center`}>
                Let's try our service now!
            </h2>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
            <Contact />
        </div>

    </section>
)

export default CTA;