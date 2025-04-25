"use client";

import "../WebsiteBanerComponent/WebSecBlock.scss";

import Image from "next/image";
import { useMyContext } from "../../context/UseContext";

export const WebSecBlock = () => {
  const { translations, language } = useMyContext();
  return (
    <>
      <div className="Idarelab-Website-section-wrapper">
        <div className="Idarelab-Website-section-inner">
          <div className="Idarelab-Website-section-Numbers">
            <div className="Idarelab-Website-section-Number">01</div>
            <div className="Idarelab-Website-section-Number">02</div>
            <div className="Idarelab-Website-section-Number">03</div>
            <div className="Idarelab-Website-section-Number">04</div>
            <div className="Idarelab-Website-section-Number">05</div>
          </div>
          <div className="Img-Website">
            <Image
              src="/images/timeline.png"
              alt="logo"
              width={150}
              height={50}
            />
          </div>
          <div className="Idarelab-Website-section-Blocks">
            <div className="Idarelab-Website-section-Block">
              <div className="Idarelab-Website-section-Block-Title">
                {translations[language].DraftingABrief}
              </div>
              <div className="Idarelab-Website-section-Block-Opis">
                {translations[language].DefiningProjectGoals}
              </div>
              <div className="Idarelab-Website-section-Block-Number">
                <Image
                  src="/images/01.png"
                  alt="logo"
                  width={150}
                  height={50}
                />
              </div>
            </div>
            <div className="Idarelab-Website-section-Block-red">
              <div className="Idarelab-Website-section-Block-Title">
                {translations[language].MarketingAnalysisAndPrototyping}
              </div>
              <div className="Idarelab-Website-section-Block-Opis">
                {translations[language].AnalyzingTheMarket}
              </div>
              <div className="Idarelab-Website-section-Block-Number">
                <Image
                  src="/images/02.png"
                  alt="logo"
                  width={150}
                  height={50}
                />
              </div>
            </div>
            <div className="Idarelab-Website-section-Block-orange">
              <div className="Idarelab-Website-section-Block-Title">
                {translations[language].WebsiteDesign}
              </div>
              <div className="Idarelab-Website-section-Block-Opis">
                {translations[language].WebsiteLayoutAndDevelopment}
              </div>
              <div className="Idarelab-Website-section-Block-Number">
                <Image
                  src="/images/03.png"
                  alt="logo"
                  width={150}
                  height={50}
                />
              </div>
            </div>
            <div className="Idarelab-Website-section-Block-purple">
              <div className="Idarelab-Website-section-Block-Title">
                {translations[language].WebsiteLayoutAndDevelopment}
              </div>
              <div className="Idarelab-Website-section-Block-Opis">
                {translations[language].CodingAndBuilding}
              </div>
              <div className="Idarelab-Website-section-Block-Number">
                <Image
                  src="/images/04.png"
                  alt="logo"
                  width={150}
                  height={50}
                />
              </div>
            </div>
            <div className="Idarelab-Website-section-Block-black">
              <div className="Idarelab-Website-section-Block-Title">
                {translations[language].LaunchOfTheWebsite}
              </div>
              <div className="Idarelab-Website-section-Block-Opis">
                {translations[language].MakingTheWebsite}
              </div>
              <div className="Idarelab-Website-section-Block-Number">
                <Image
                  src="/images/05.png"
                  alt="logo"
                  width={150}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
