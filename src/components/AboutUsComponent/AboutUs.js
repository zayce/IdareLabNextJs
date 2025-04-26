"use client";

import { useMyContext } from "@/context/UseContext";
import "@/components/AboutUsComponent/AboutUs.scss";

import Image from "next/image";

import Log from "@/public/images/Log.png";

export const AboutUs = () => {
  const { translations, language } = useMyContext();

  return (
    <>
      <div className="IdareLab-AboutUs-Baner-wrapper">
        <div className="IdareLab-AboutUs-Baner-inner">
          <div className="IdareLab-AboutUs-Baner-Title">
            <div className="IdareLab-AboutUs-Baner-Title-Name">
              <div className="IdareLab-AboutUs-Baner-Name">
                {translations[language].aboutUs}
              </div>
              <div className="IdareLab-AboutUs-Baner-Title-Img">
                <Image src={Log} alt="logo" />
              </div>
            </div>
            <div className="IdareLab-AboutUs-Baner-Desc">
              {translations[language].WithABlend}
            </div>
          </div>
          <div className="IdareLab-AboutUs-Baner-Objects">
            <div className="IdareLab-AboutUs-Baner-Object">
              <div className="IdareLab-AboutUs-Baner-Object-Name">
                {translations[language].WhoWeAre}
              </div>
              <div className="IdareLab-AboutUs-Baner-Object-Desc">
                {translations[language].AYoungMarketing}
              </div>
            </div>
            <div className="IdareLab-AboutUs-Baner-Object">
              <div className="IdareLab-AboutUs-Baner-Object-Name">
                {translations[language].OurApproach}
              </div>
              <div className="IdareLab-AboutUs-Baner-Object-Desc">
                {translations[language].WeStay}
              </div>
            </div>

            <div className="IdareLab-AboutUs-Baner-Object">
              <div className="IdareLab-AboutUs-Baner-Object-Name">
                {translations[language].OurGoal}
              </div>
              <div className="IdareLab-AboutUs-Baner-Object-Desc">
                {translations[language].ToHelp}
              </div>
            </div>
            <div className="IdareLab-AboutUs-Baner-Object">
              <div className="IdareLab-AboutUs-Baner-Object-Name">
                {translations[language].OurValues}
              </div>
              <ul className="IdareLab-AboutUs-Baner-Object-Menu-Items">
                <li className="IdareLab-AboutUs-Baner-Object-Menu-Item">
                  <span className="IdareLab-AboutUs-Baner-Object-Menu-Item-bond">
                    {translations[language].OurValues1}
                  </span>
                  <span className="IdareLab-AboutUs-Baner-Object-Menu-Item-normal">
                    {translations[language].OurValues4}
                  </span>
                </li>
                <li className="IdareLab-AboutUs-Baner-Object-Menu-Item">
                  <span className="IdareLab-AboutUs-Baner-Object-Menu-Item-bond">
                    {translations[language].OurValues2}
                  </span>
                  <span className="IdareLab-AboutUs-Baner-Object-Menu-Item-normal">
                    {translations[language].OurValues5}
                  </span>
                </li>
                <li className="IdareLab-AboutUs-Baner-Object-Menu-Item">
                  <span className="IdareLab-AboutUs-Baner-Object-Menu-Item-bond">
                    {translations[language].OurValues3}
                  </span>
                  <span className="IdareLab-AboutUs-Baner-Object-Menu-Item-normal">
                    {translations[language].OurValues6}
                  </span>
                </li>
              </ul>
            </div>

            <div className="IdareLab-AboutUs-Baner-Object">
              <div className="IdareLab-AboutUs-Baner-Object-Name">
                {translations[language].WhatWeDo}
              </div>
              <ul className="IdareLab-AboutUs-Baner-Object-Menu-Items">
                <li className="IdareLab-AboutUs-Baner-Object-Menu-Item">
                  <span className="IdareLab-AboutUs-Baner-Object-Menu-Item-normal">
                    {translations[language].BrandCreationAndDevelopment}
                  </span>
                </li>
                <li className="IdareLab-AboutUs-Baner-Object-Menu-Item">
                  <span className="IdareLab-AboutUs-Baner-Object-Menu-Item-normal">
                    {translations[language].SocialMediaManagement}
                  </span>
                </li>
                <li className="IdareLab-AboutUs-Baner-Object-Menu-Item">
                  <span className="IdareLab-AboutUs-Baner-Object-Menu-Item-normal">
                    {translations[language].PhotoAndVideoContentProduction}
                  </span>
                </li>
                <li className="IdareLab-AboutUs-Baner-Object-Menu-Item">
                  <span className="IdareLab-AboutUs-Baner-Object-Menu-Item-normal">
                    {translations[language].CreativeAndAdvertisingPostDesign}
                  </span>
                </li>
              </ul>
            </div>
            <div className="IdareLab-AboutUs-Baner-Object">
              <div className="IdareLab-AboutUs-Baner-Object-Name">
                {translations[language].OurPlans}
              </div>
              <div className="IdareLab-AboutUs-Baner-Object-Desc">
                {translations[language].WeAre}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
