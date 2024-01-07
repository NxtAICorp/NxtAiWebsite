import { ShelfStore1, LabelCoverUse } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Button from "./Button";
import Image from "next/image";
const CardDeal: React.FC = () => (
  <section className={layout.section}>

    <div className={`${layout.sectionInfo} items-center`}>
      <h2 className={`${styles.heading2} text-center`}>
        How does it work?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center`}>
        Electronic shelf label systems &#40; ESL &#41; are used to display and automati cally update product pricing shown on shelves. They are typically comprised of three components:
      </p>


      <ul className={`${styles.paragraph} max-w-[470px] mt-5 list-disc pl-8`} >

        <li>Label management software.</li>

        <li>Communication controllers.</li>

        <li>E-paper display modules.</li>

      </ul>

      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center`}>
        The label management software provides an intuitive way for users to easily manage pricing and stock information for every product across their entire network of stores. This information is then sent to the communication controller via Wi-Fi before being transmitted to the e-paper display modules via a private 2.G Wi-Fi signal for ultimate data transfer security. Updates are automatically rolled out across the shop floor instantly.
      </p>

    </div>

    <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
      <Image
        src={LabelCoverUse}
        alt="shelfStore"
        className="w-[80%] h-[40%] absolute z-5  rounded"
      />
      
    </div>

  </section>
);

export default CardDeal;
