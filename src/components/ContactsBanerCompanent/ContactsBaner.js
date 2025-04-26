"use client";

import Image from "next/image";

import { useMyContext } from "@/context/UseContext";
import "@/components/ContactsBanerCompanent/ContactsBaner.scss";

import Inst from "@/public/images/Inst.png";
import Logo from "@/public/images/LogoContacts.png";
import TT from "@/public/images/TT.png";
import Wp from "@/public/images/Wp.png";

export const ContactBaner = () => {
  const { translations, language } = useMyContext();
  return (
    <>
      <div className="Idarelab-Contacts-Baner-Wrapper">
        <div className="Idarelab-Contacts-Baner-Inner">
          <div className="Idarelab-Contacts-Baner">
            <div className="Idarelab-Contacts-Baner-Name">
              {translations[language].Contacts}
            </div>
            <div className="Idarelab-Contacts-Baner-Name-Phone">
              <div className="Idarelab-Contacts-Baner-Phone">
                {translations[language].Contacts}
              </div>
              <div className="Idarelab-Contacts-Baner-Number">
                +994 50 444 54 14 / +994 50 394 55 68
              </div>
            </div>
            <div className="Idarelab-Contacts-Baner-Email-Account">
              <div className="Idarelab-Contacts-Baner-Email">
                {translations[language].EMail}
              </div>
              <div className="Idarelab-Contacts-Baner-Account">
                idarelab@gmail.com
              </div>
            </div>
            <div className="Idarelab-Contacts-Baner-Foto-Social-Media">
              <div className="Idarelab-Contacts-Baner-foto-Name">
                {translations[language].WeInSocialNetworks}
              </div>
              <div className="Idarelab-Contacts-Baner-SocialMedia">
                <div className="Idarelab-Contacts-Baner-Media">
                <Image src={Inst} alt="logo"  />
                </div>
                <div className="Idarelab-Contacts-Baner-Media">
                <Image src={TT} alt="logo"  />
                </div>
                <div className="Idarelab-Contacts-Baner-Media">
                <Image src={Wp} alt="logo"  />
                </div>
              </div>
            </div>
          </div>
          <div className="IdareLab-Create-Baner-Logo">
          <Image src={Logo} alt="logo"  />
          </div>
        </div>
      </div>
    </>
  );
};
