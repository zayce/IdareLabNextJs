"use client";

import { useMyContext } from "@/context/UseContext";
import "@/components/CreateBanerComponent/CreateBaner.scss";

export const CreateBaner = () => {
  const { translations, language } = useMyContext();
  return (
    <>
      <div className="IdareLab-Create-Baner-Wrapper">
        <div className="IdareLab-Create-Baner-Inner">
          <div className="IdareLab-Create-Baner-Left-Sides">
            <div className="IdareLab-Create-Baner-Left-Sides-Name">
              {translations[language].CreatingOfPrintMaterials}
            </div>
            <div className="IdareLab-Create-Baner-Left-Sides-Comment">
              {translations[language].WeSpecialize}
            </div>
            <div className="IdareLab-Create-Baner-Left-Sides-Comment">
              {translations[language].WeSpecializeText}
            </div>
            <button className="IdareLab-Create-Baner-Left-Sides-Button">
              <span className="IdareLab-Create-Baner-Left-Sides-Word">
                {translations[language].OrderAProject}
              </span>
            </button>
          </div>
          <div className="IdareLab-Create-Baner-Right-Sides">
            <div className="IdareLab-Create-Baner-Right-Sides-Column">
              <ul className="IdareLab-Create-Baner-Right-Sides-Column-Items">
                <li className="Bond">{translations[language].B}</li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Banners}
                </li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Billboards}
                </li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Booklets}
                </li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Brochures}
                </li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].BusinessCards}
                </li>
              </ul>
              <ul className="IdareLab-Create-Baner-Right-Sides-Column-Items">
                <li className="Bond">{translations[language].C}</li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Calendars}
                </li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Catalogs}
                </li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Certificates}
                </li>
              </ul>
              <ul className="IdareLab-Create-Baner-Right-Sides-Column-Items">
                <li className="Bond">{translations[language].E}</li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Envelopes}
                </li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].EventTickets}
                </li>
              </ul>
            </div>
            <div className="IdareLab-Create-Baner-Right-Sides-Column">
              <ul className="IdareLab-Create-Baner-Right-Sides-Column-Items">
                <li className="Bond">{translations[language].F}</li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Flyers}
                </li>
              </ul>
              <ul className="IdareLab-Create-Baner-Right-Sides-Column-Items">
                <li className="Bond">{translations[language].I}</li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Invitations}
                </li>
              </ul>
              <ul className="IdareLab-Create-Baner-Right-Sides-Column-Items">
                <li className="Bond">{translations[language].L}</li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Labels}
                </li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Letterheads}
                </li>
              </ul>
              <ul className="IdareLab-Create-Baner-Right-Sides-Column-Items">
                <li className="Bond">{translations[language].N}</li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Notepads}
                </li>
              </ul>
            </div>
            <div className="IdareLab-Create-Baner-Right-Sides-Column">
              <ul className="IdareLab-Create-Baner-Right-Sides-Column-Items">
                <li className="Bond">{translations[language].P}</li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].PackagingDesign}
                </li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Postcards}
                </li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Posters}
                </li>
              </ul>
              <ul className="IdareLab-Create-Baner-Right-Sides-Column-Items">
                <li className="Bond">{translations[language].M}</li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Magazines}
                </li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Menu}
                </li>
              </ul>
              <ul className="IdareLab-Create-Baner-Right-Sides-Column-Items">
                <li className="Bond">{translations[language].S}</li>
                <li className="IdareLab-Create-Baner-Right-Sides-Column-Item">
                  {translations[language].Stickers}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
