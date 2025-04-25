"use client";

import { useMyContext } from "@/context/UseContext";
import "@/components/IndividualBanerComponent/IndividualBaner.scss";

export const IndividualBaner = () => {
  const { translations, language } = useMyContext();
  return (
    <>
      <div className="Idarelab-Individual-Baner-Wrapper">
        <div className="Idarelab-Individual-Baner-Inner">
          <div className="Idarelab-Individual-Baner-Title">
            <div className="Idarelab-Individual-Baner-Title-Name">
              {translations[language].individualServiceOptions}
            </div>
            <div className="Idarelab-Individual-Baner-Title-desc">
              {translations[language].WeOfferCustomized}
            </div>
          </div>
          <div className="Idarelab-Individual-Baner-Service-Objects">
            <div className="Idarelab-Individual-Baner-Service-Object">
              <div className="Idarelab-Individual-Baner-Service-Object-Title">
                <div className="Idarelab-Individual-Baner-Service-Object-Title-Name">
                  {translations[language].Reels}
                </div>
                <div className="Idarelab-Individual-Baner-Service-Object-Title-Desc">
                  {translations[language].EngagingShortVideosForSocialMedia}
                </div>
              </div>
              <div className="Idarelab-Individual-Baner-Service-Object-Time">
                1-2 {translations[language].days}
              </div>
            </div>
            <div className="Idarelab-Individual-Baner-Service-Object">
              <div className="Idarelab-Individual-Baner-Service-Object-Title">
                <div className="Idarelab-Individual-Baner-Service-Object-Title-Name">
                  {translations[language].GraphicPosters}
                </div>
                <div className="Idarelab-Individual-Baner-Service-Object-Title-Desc">
                  {translations[language].HighQuality}
                </div>
              </div>
              <div className="Idarelab-Individual-Baner-Service-Object-Time">
                1 {translations[language].days}
              </div>
            </div>
            <div className="Idarelab-Individual-Baner-Service-Object">
              <div className="Idarelab-Individual-Baner-Service-Object-Title">
                <div className="Idarelab-Individual-Baner-Service-Object-Title-Name">
                  {translations[language].MotionPosts}
                </div>
                <div className="Idarelab-Individual-Baner-Service-Object-Title-Desc">
                  {translations[language].AnimatedPostersThaCaptureAttention}
                </div>
              </div>
              <div className="Idarelab-Individual-Baner-Service-Object-Time">
                1-2 {translations[language].days}
              </div>
            </div>
            <div className="Idarelab-Individual-Baner-Service-Object">
              <div className="Idarelab-Individual-Baner-Service-Object-Title">
                <div className="Idarelab-Individual-Baner-Service-Object-Title-Name">
                  {translations[language].VideoEditing}
                </div>
                <div className="Idarelab-Individual-Baner-Service-Object-Title-Desc">
                  {
                    translations[language]
                      .ProfessionalEditingToEnhanceYourFootage
                  }
                </div>
              </div>
              <div className="Idarelab-Individual-Baner-Service-Object-Time">
                2-3 {translations[language].days}
              </div>
            </div>
            <div className="Idarelab-Individual-Baner-Service-Object">
              <div className="Idarelab-Individual-Baner-Service-Object-Title">
                <div className="Idarelab-Individual-Baner-Service-Object-Title-Name">
                  {translations[language].ProfessionalCameraShooting}
                </div>
                <div className="Idarelab-Individual-Baner-Service-Object-Title-Desc">
                  {translations[language].HighQualityVideoPhoto}
                </div>
              </div>
              <div className="Idarelab-Individual-Baner-Service-Object-Time">
                1 {translations[language].days}
              </div>
            </div>
            <div className="Idarelab-Individual-Baner-Service-Object">
              <div className="Idarelab-Individual-Baner-Service-Object-Title">
                <div className="Idarelab-Individual-Baner-Service-Object-Title-Name">
                  {translations[language].TargetedAdSetup}
                </div>
                <div className="Idarelab-Individual-Baner-Service-Object-Title-Desc">
                  {translations[language].Effective}
                </div>
              </div>
              <div className="Idarelab-Individual-Baner-Service-Object-Time">
                1 {translations[language].days}
              </div>
            </div>
            <div className="Idarelab-Individual-Baner-Service-Object">
              <div className="Idarelab-Individual-Baner-Service-Object-Title">
                <div className="Idarelab-Individual-Baner-Service-Object-Title-Name">
                  {translations[language].PresentationCreation}
                </div>
                <div className="Idarelab-Individual-Baner-Service-Object-Title-Desc">
                  {translations[language].VisuallyAppealing}
                </div>
              </div>
              <div className="Idarelab-Individual-Baner-Service-Object-Time">
                3-4 {translations[language].days}
              </div>
            </div>
            <div className="Idarelab-Individual-Baner-Service-Object">
              <div className="Idarelab-Individual-Baner-Service-Object-Title">
                <div className="Idarelab-Individual-Baner-Service-Object-Title-Name">
                  {translations[language].SMM}
                </div>
                <div className="Idarelab-Individual-Baner-Service-Object-Title-Desc">
                  {translations[language].ComprehensiveSocial}
                </div>
              </div>
              <div className="Idarelab-Individual-Baner-Service-Object-Time">
                {translations[language].monthly}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
