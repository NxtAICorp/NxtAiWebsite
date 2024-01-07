import { MultiLabels } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Image from "next/image";
import { billings } from "@constants"
import { FeatredCardProps } from "@types";



const BillingsCard: React.FC<FeatredCardProps> = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${index !== billings.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
    >
      <Image src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px]">
        {title}
      </h4>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Billing: React.FC = () => (
  <section id="product" className={layout.sectionReverse}>

<div className={layout.sectionImgReverse}>
      <Image
        src={MultiLabels}
        alt="Multi e-Labels"
        className="w-[90%] h-[60%] relative"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient " />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>


    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-center`}>
        Why E-Labels?
      </h2>

      <div className={`${layout.sectionImg}`}>
      {billings.map((billing, index) => (
        <BillingsCard key={billing.id} {...billing} index={index} />
      ))}
      </div>
    </div>


    
  </section>
);

export default Billing;
