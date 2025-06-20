import React from "react";
import PageBanner from "@/components/molecule/PageBanner";
import { useTranslations } from "next-intl";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import Faq from "@/components/organism/Home/Faq";
import CarLifeAbout from "@/components/organism/CarLifeSupport/CarLifeAbout";

const CarLifeSupport = () => {
  const t = useTranslations("CarLifeSupportPage");
  return (
    <div>
      <PageBanner
        title={t("bannerTitle")}
        bgUrl="/assets/images/BackGround/Trade.webp"
        className=" bg-left-top"
      />
      <MaxWidthWrapper isPageContent>
        <CarLifeAbout />
        <Faq />
      </MaxWidthWrapper>
    </div>
  );
};

export default CarLifeSupport;
