import { clients } from "@/constants";
import styles, { layout } from "@/styles/style";
import Image from "next/image";
import { labelCover } from "@public/assets";
const Clients: React.FC = () => (
  <section id="features" className={`${styles.flexCenter} flex-wrap w-full py-20  `}>
    
  <div id="clients" className={`${layout.sectionInfo} flex-wrap w-full py-20`}    >
    <h2 className={`${styles.heading2} text-center `}>
      Our Clients
    </h2>
  </div>

  <div  className={`${styles.flexCenter} flex-wrap w-full`}>
  {clients.map((client) => (
    
    <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-x-[120px]`}>
      <Image src={labelCover} alt="discount" className="sm:w-[350px] w-[60%] absolute" />

      <Image src={client.logo} alt="client" className="sm:w-[150px] w-[30%] object-contain hover:-translate-y-2 cursor-pointer transition-all ease-in-out" />
    </div>

    
  ))}
</div>

</section>
);
export default Clients;
