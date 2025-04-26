"use client";

import "@/components/RainbowBanerComponent/RainbowBaner.scss";

import Image from "next/image";

import First from "@/public/images/First.png";
import Second from "@/public/images/Second.png";
import Third from "@/public/images/Third.png";
import { useMyContext } from "@/context/UseContext";

export const RainbowBaner = () => {
  const { translations, language } = useMyContext();
  return (
    <>
      <div className="IdareLab-Rainbow-Baner-wrapper">
        <div className="IdareLab-Rainbow-Baner-Inner">
          <div className="IdareLab-Rainbow-Baner-FirstBLock">
            <div className="IdareLab-Rainbow-Baner-FirstBLock-Opis">
              <div className="IdareLab-Rainbow-Baner-FirstBLock-Opis-Name">
                {translations[language].ExperiencedTeamProfessionals}
              </div>
              <div className="IdareLab-Rainbow-Baner-FirstBLock-Opis-Desc">
                {translations[language].Ourteamconsists}
              </div>
            </div>
            <div className="IdareLab-Rainbow-Baner-FirstBLock-Opis-Img">
              <Image src={First} alt="logo" />
            </div>
          </div>
          <div className="IdareLab-Rainbow-Baner-SecondBLock">
            <div className="IdareLab-Rainbow-Baner-SecondBLock-Opis">
              <div className="IdareLab-Rainbow-Baner-SecondBLock-Opis-Name">
                {translations[language].ClientOriented}
              </div>
              <div className="IdareLab-Rainbow-Baner-SecondBLock-Opis-Desc">
                {translations[language].WePrioritizeYourNeedsVision}
              </div>
            </div>
            <div className="IdareLab-Rainbow-Baner-SecondBLock-Opis-Img">
              <Image src={Second} alt="logo" />
            </div>
          </div>
          <div className="IdareLab-Rainbow-Baner-ThirdBLock">
            <div className="IdareLab-Rainbow-Baner-ThirdBLock-Opis">
              <div className="IdareLab-Rainbow-Baner-ThirdBLock-Opis-Name">
                {translations[language].ProvenQualityAndReliability}
              </div>
              <div className="IdareLab-Rainbow-Baner-ThirdBLock-Opis-Desc">
                {translations[language].WithAStrong}
              </div>
            </div>
            <div className="IdareLab-Rainbow-Baner-ThirdBLock-Opis-Img">
              <Image src={Third} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
