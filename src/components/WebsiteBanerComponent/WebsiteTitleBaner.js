"use client";

import "@/components/WebsiteBanerComponent/WebsiteTitleBaner.scss";

import Image from "next/image";
import Layer from "@/public/images/Layer.png";
import { useMyContext } from "@/context/UseContext";

export const WebsiteTitleBaner = () => {
  const { translations, language } = useMyContext();
  return (
    <>
      <div className="Idarelab-title-Website-wrapper">
        <div className="Idarelab-title-Website-inner">
          <div className="Idarelab-title-Website-title">
            <span className="Word">{translations[language].Website}</span>
            <Image src={Layer} alt="logo"  />
            <span className="Word">{translations[language].Developing}</span>
          </div>
          <div className="Idarelab-title-Website-desc">
            {translations[language].WeOffer}
          </div>
        </div>
      </div>
    </>
  );
};
