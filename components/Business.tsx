import styles, { layout } from "@/styles/style";
import { features } from "@/constants";
import Button from "./Button";
import Image from "next/image";
import { FeatredCardProps } from "@types";
import icon from "@public/assets/check.svg";
import { check } from "@public/assets";
import {
  send,
  shield,
  star,
} from "@/public/assets";


const FeaturesCard: React.FC<FeatredCardProps> = ({
  icon,
  title,
  content,
  index,
}) => (
  <div
    className={`flex flex-row  p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
    >
      <Image
        src={icon}
        alt="icon"
        className="w-[50%] h-[50%] object-contain"
      />
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

const Business: React.FC<{ businessDetails: any }> = ({ businessDetails }) => {
  // Assuming features array is present in businessDetails
  const features = businessDetails?.features || [];

  const featuresData:any= [
    {
      id: "feature-1",
      title: features[0]?.title,
      content: features[0]?.content,
      icon:star
    },
    {
      id: "feature-2",
      title: features[1]?.title,
      content: features[1]?.content,
      icon:shield
    },
    {
      id: "feature-3",
      title: features[2]?.title,
      content: features[2]?.content,
      icon:send
    }
  ];

  return (
    <section id="features"  className={`${layout.section} `}>
      <div className={`${layout.sectionInfo} items-center justify-center`}>
        <h2 className={`${styles.heading2} text-center underline decoration-wavy decoration-green-300`}>
          {businessDetails.title1}.
          <br className="sm:block hidden " />
          {businessDetails.title2}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center text-justify`}>
          {businessDetails.desc}
        </p>
      </div>

      <div className={`${layout.sectionInfo}  md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
        {featuresData?.map((feature:any, index:any) => (
          <FeaturesCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;