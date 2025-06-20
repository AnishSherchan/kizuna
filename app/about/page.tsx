import React from "react";
import PageBanner from "@/components/molecule/PageBanner";
import { useTranslations } from "next-intl";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import Steps from "@/components/organism/Home/Steps";
import Faq from "@/components/organism/Home/Faq";
import AboutContent from "@/components/organism/AboutUsPageContent/page";

const About = () => {
  const t = useTranslations("AboutPage");
  return (
    <div>
      <PageBanner
        title={t("title")}
        bgUrl="/assets/images/BackGround/Fuji.webp"
      />
      <MaxWidthWrapper isPageContent>
        <AboutContent />
        <Steps />
        <Faq />
      </MaxWidthWrapper>
    </div>
  );
};

export default About;
