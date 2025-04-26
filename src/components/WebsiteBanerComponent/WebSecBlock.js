"use client";

import "@/components/WebsiteBanerComponent/WebSecBlock.scss";

import Image from "next/image";
import timeLine from "@/public/images/timeline.png";
import First from "@/public/images/01.png";
import Second from "@/public/images/02.png";
import Third from "@/public/images/03.png";
import Four from "@/public/images/04.png";
import Five from "@/public/images/05.png";

import { useMyContext } from "@/context/UseContext";

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
            <Image src={timeLine} alt="logo"  />
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
                <Image src={First} alt="logo"  />
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
                <Image src={Second} alt="logo" />
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
                <Image src={Third} alt="logo"  />
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
                <Image src={Four} alt="logo"/>
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
                <Image src={Five} alt="logo"  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
