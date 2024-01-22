"use client";
import styles from "@/styles/style";
import { getDictionary } from "../../getDictionary";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "@/components";
import { useState } from "react";
import { useParams } from "next/navigation";

const Home: React.FC = () => {
  const params: any = useParams();
  const [Cta, setCta] = useState({});

  const [clients, setClients] = useState([]);
  const [cardDeal, setCardDeal] = useState({});
  const [billingDetails, setBillingDetails] = useState({});
  const [businessDetails, setBusinessDetails] = useState({});
  const [stats, setStats] = useState([]);
  const [heroSection, setHeroSection] = useState({});
  const [navLinks, setNavLinks] = useState({});

  const [footerContent, setFooterContent] = useState({});
  const [getStarted, setGetStarted] = useState({});

  (async () => {
    const lang = await getDictionary(params.lang);

    setFooterContent(lang.Home.footer);
    setCta(lang.Home.CTA);
    setClients(lang?.Home?.Client);
    setCardDeal(lang.Home.CardDeal);
    setBillingDetails(lang.Home.BillingDetails);
    setBusinessDetails(lang?.Home?.BusinessDetails);
    setStats(lang?.Home?.Stats);
    setHeroSection(lang.Home.Herosection);
    setNavLinks(lang.Home.NavLinks);
    setGetStarted(lang.Home.GetStarted);
  })();

  return (
    <>
      <div className="bg-primary w-auto overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar navLinks={navLinks} />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero heroSection={heroSection} getStarted={getStarted} />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            {stats && stats.length > 0 && <Stats stats={stats} />}
            <Business businessDetails={businessDetails} />
            <Billing billingDetails={billingDetails} />
            <CardDeal cardDeal={cardDeal} />
            {/* <Testimonials /> */}
            <Clients clients={clients} />
            <CTA Cta={Cta} />
            <Footer footerContent={footerContent} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;