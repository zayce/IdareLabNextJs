"use client";

import { useMyContext } from "@/context/UseContext";
import "@/components/InputBanerComponent/InputBaner.scss";

export const InputBaner = () => {
  const { translations, language } = useMyContext();
  return (
    <>
      <div className="IdareLab-Input-Baner-Wrapper">
        <div className="Idarelab-Input-Baner-Inner">
          <div className="IdareLab-Input-Baner-Title">
            <div className="IdareLab-Input-Baner-Title-Name">
              {translations[language].DoYouHaveIdea}
            </div>
            <div className="IdareLab-Input-Baner-Title-Desc">
              {translations[language].LeaveUsA}
            </div>
          </div>
          <div className="IdareLab-Input-Baner-Rigth-Slide">
            <div className="IdareLab-Input-Baner-Rigth-Slide-Input">
              <input placeholder="Your name" className="Input" />
            </div>
            <div className="IdareLab-Input-Baner-Rigth-Slide-Input">
              <input placeholder="Phone number" className="Input" />
            </div>
            <div className="IdareLab-Input-Baner-Rigth-Slide-Check">
              <div className="IdareLab-Input-Baner-Check">
                <img src="Rectangle.png" />
              </div>
              <div className="IdareLab-Input-Baner-Check-Opis">
                {translations[language].IAgreeTo}
              </div>
            </div>
            <button className="IdareLab-Input-Baner-Button">
              <span className="IdareLab-Input-Baner-Button-Word">
                {translations[language].Send}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
