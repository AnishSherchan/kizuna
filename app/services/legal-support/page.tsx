import React from "react";
import PageBanner from "@/components/molecule/PageBanner";
import { useTranslations } from "next-intl";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import Faq from "@/components/organism/Home/Faq";
import LegalContent from "@/components/organism/LegalSolutionContent/LegalContent";

const LegalSupport = () => {
  const t = useTranslations("legalSupportPage");
  return (
    <div>
      <PageBanner
        title={t("bannerTitle")}
        bgUrl="/assets/images/BackGround/Trade.webp"
        className=" bg-no-repeat bg-bottom bg-contain"
      />
      <MaxWidthWrapper isPageContent>
        <LegalContent/>
        <Faq />
      </MaxWidthWrapper>
    </div>
  );
};

export default LegalSupport;
