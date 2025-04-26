"use client";
import Image from "next/image";

import "@/components/Footer/Footer.scss";

import FLogo from "@/public/images/FooterLogo.png";
import WI from "@/public/images/WhiteInst.png";
import Wp from "@/public/images/WhiteWp.png";
import WTT from "@/public/images/WhiteTT.png";

import { useMyContext } from "@/context/UseContext";

export const Footer = () => {
  const { translations, language } = useMyContext();
  return (
    <>
      <div className="IdareLab-Footer-Wrapper">
        <div className="IdareLab-Footer-Inner">
          <div className="IdareLab-Footer-Logo">
            <Image src={FLogo} alt="logo" />
          </div>
          <div className="IdareLab-Footer-Navigation">
            <div className="IdareLab-Footer-Phone">
              +994 50 444 54 14 / +994 50 394 55 68
            </div>
            <div className="IdareLab-Footer-Email">idarelab@gmail.com</div>
            <div className="IdareLab-Footer-Year">2024</div>
          </div>
          <div className="IdareLab-Footer-Social">
            <div className="IdareLab-Footer-Medias">
              <div className="IdareLab-Footer-Media">
                <Image src={WI} alt="logo" />
              </div>
              <div className="IdareLab-Footer-Media">
                <Image src={Wp} alt="logo" />
              </div>
              <div className="IdareLab-Footer-Media">
                <Image src={WTT} alt="logo" />
              </div>
            </div>
            <div className="IdareLab-Footer">
              {translations[language].AllRightsReserved}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
