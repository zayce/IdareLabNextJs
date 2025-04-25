"use client";

import "../SmmPaketsComponent/SmmPakets.scss";
import { useMyContext } from "../../context/UseContext";

export const SmmPakets = () => {
  const { translations, language } = useMyContext();

  return (
    <>
      <div className="IdareLab-Smm-Packages-wrapper">
        <div className="IdareLab-Smm-Packages-inner">
          <div className="IdareLab-Smm-Packages-Left-Sides">
            <div className="IdareLab-Smm-Packages-Left-Sides-Title">
              {translations[language].SMMPackages}
            </div>
            <div className="IdareLab-Smm-Packages-Left-Sides-Desc">
              {translations[language].SmmText}
            </div>
            <div className="IdareLab-Smm-Packages-comment">
              {translations[language].SmmComments1}
            </div>
            <div className="IdareLab-Smm-Packages-comment">
              {translations[language].SmmComments2}
            </div>
          </div>
          <div className="IdareLab-Smm-Packages-Right-Sides">
            <div className="IdareLab-Smm-Packages-Right-Sides-Pack">
              <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Opis">
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Name">
                  {translations[language].StarterPackage}
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Posts">
                  <span className="Posts">
                    {translations[language].GraphicPosts}
                  </span>
                  <span className="Count">8</span>
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Reeals">
                  <span className="Reels">{translations[language].Reels}</span>
                  <span className="Count">7</span>
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-time">
                  <span className="SMM">{translations[language].SMM}</span>
                  <span className="Count">
                    {translations[language].monthly}
                  </span>
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Target">
                  <span className="Target">
                    {translations[language].Target}
                  </span>
                  <span className="Count">1</span>
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Motion">
                  <span className="Motion-grey">
                    {translations[language].MotionPosts}
                  </span>
                  <span className="count-grey">0</span>
                </div>
              </div>
              <button className="Button-Choose">
                <span className="word-button">
                  {translations[language].Choose}
                </span>
              </button>
            </div>
            <div className="IdareLab-Smm-Packages-Right-Sides-Pack">
              <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Opis">
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Name">
                  {translations[language].GrowthPackage}
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Posts">
                  <span className="Posts">
                    {translations[language].GraphicPosts}
                  </span>
                  <span className="Count">10</span>
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Reeals">
                  <span className="Reels">{translations[language].Reels}</span>
                  <span className="Count">10</span>
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-time">
                  <span className="SMM">{translations[language].SMM}</span>
                  <span className="Count">
                    {translations[language].monthly}
                  </span>
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Target">
                  <span className="Target">
                    {translations[language].Target}
                  </span>
                  <span className="Count">1</span>
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Motion">
                  <span className="Motion">
                    {translations[language].MotionPosts}
                  </span>
                  <span className="count">1</span>
                </div>
              </div>
              <button className="Button-Choose">
                <span className="word-button">
                  {translations[language].Choose}
                </span>
              </button>
            </div>

            <div className="IdareLab-Smm-Packages-Right-Sides-Pack">
              <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Opis">
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Name">
                  {translations[language].ProPackage}
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Posts">
                  <span className="Posts">
                    {translations[language].GraphicPosts}
                  </span>
                  <span className="Count">16</span>
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Reeals">
                  <span className="Reels">{translations[language].Reels}</span>
                  <span className="Count">12</span>
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-time">
                  <span className="SMM">{translations[language].SMM}</span>
                  <span className="Count">
                    {translations[language].monthly}
                  </span>
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Target">
                  <span className="Target">
                    {translations[language].Target}
                  </span>
                  <span className="Count">3</span>
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Motion">
                  <span className="Motion">
                    {translations[language].MotionPosts}
                  </span>
                  <span className="count">3</span>
                </div>
              </div>
              <button className="Button-Choose">
                <span className="word-button">
                  {translations[language].Choose}
                </span>
              </button>
            </div>

            <div className="IdareLab-Smm-Packages-Right-Sides-Pack">
              <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Opis">
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Name">
                  {translations[language].ElitePackage}
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Posts">
                  <span className="Posts">
                    {translations[language].GraphicPosts}
                  </span>
                  <span className="Count">20</span>
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Reeals">
                  <span className="Reels">{translations[language].Reels}</span>
                  <span className="Count">14</span>
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-time">
                  <span className="SMM">{translations[language].SMM}</span>
                  <span className="Count">
                    {translations[language].monthly}
                  </span>
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Target">
                  <span className="Target">
                    {translations[language].Target}
                  </span>
                  <span className="Count">5</span>
                </div>
                <div className="IdareLab-Smm-Packages-Right-Sides-Pack-Motion">
                  <span className="Motion">
                    {translations[language].MotionPosts}
                  </span>
                  <span className="count">6</span>
                </div>
              </div>

              <button className="Button-Choose">
                <span className="word-button">
                  {translations[language].Choose}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
