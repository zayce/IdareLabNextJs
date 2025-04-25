"use client";
import "../HeaderComponent/HeaderComponent.scss";
import Image from "next/image";
import { useMyContext } from "../../context/UseContext";

export const Header = () => {
  const { handleLanguageChange, translations, language } = useMyContext();

  return (
    <div className="IdareLab-header-wrapper">
      <div className="IdareLab-header-inner">
        <div className="IdareLab-header-logo">
          {/* Указываем ширину и высоту для оптимизации */}
          <Image src="/logo.png" alt="logo" width={150} height={50} />
        </div>
        <ul className="IdareLab-header-langueges-items">
          <li
            className="IdareLab-header-langueges-item"
            onClick={() => handleLanguageChange("en")}
          >
            eng
          </li>
          <li
            className="IdareLab-header-langueges-item"
            onClick={() => handleLanguageChange("ru")}
          >
            ru
          </li>
          <li
            className="IdareLab-header-langueges-item"
            onClick={() => handleLanguageChange("az")}
          >
            az
          </li>
          <li className="IdareLab-header-langueges-item">
            <Image src="/lang.png" alt="Lang" width={30} height={30} />
          </li>
        </ul>
        <div className="IdareLab-header-Info">
          <ul className="IdareLab-header-Info-Items">
            <li className="IdareLab-header-Info-Item">
              {translations[language].services}
            </li>
            <li className="IdareLab-header-Info-Item">
              {translations[language].aboutUs}
            </li>
            <li className="IdareLab-header-Info-Item">
              {translations[language].Blog}
            </li>
            <li className="IdareLab-header-Info-Item">
              {translations[language].Contacts}
            </li>
          </ul>
          <button className="IdareLab-header-Info-Button">
            <span className="button-words">
              {translations[language].OrderAProject}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
