import { Header } from "@/components/HeaderComponent/HeaderComponent";
import { ServiceSection } from "@/components/ServiceSectionComponent/ServiceSectionComponent";
import { SmmPakets } from "@/components/SmmPaketsComponent/SmmPakets";
import { WebsiteTitleBaner } from "@/components/WebsiteBanerComponent/WebsiteTitleBaner";
import { WebSecBlock } from "@/components/WebsiteBanerComponent/WebSecBlock";
import { CreateBaner } from "@/components/CreateBanerComponent/CreateBaner";
import { IndividualBaner } from "@/components/IndividualBanerComponent/IndividualBaner";
import { AboutUs } from "@/components/AboutUsComponent/AboutUs";
import { RainbowBaner } from "@/components/RainbowBanerComponent/RainbowBaner";

import "@/app/globals.css";

export default function Home() {
  return (
    <>
      <Header />
      <ServiceSection />
      <SmmPakets />
      <WebsiteTitleBaner />
      <WebSecBlock />
      <CreateBaner />
      <IndividualBaner />
      <AboutUs />
      <RainbowBaner />
    </>
  );
}
