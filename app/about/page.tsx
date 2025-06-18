import React from "react";
import PageBanner from "@/components/molecule/PageBanner";
import { useTranslations } from "next-intl";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import ContentWrapper from "@/components/Layout/ContentWrapper";
import Steps from "@/components/organism/Home/Steps";
import Faq from "@/components/organism/Home/Faq";

const About = () => {
  const t = useTranslations("AboutPage");
  return (
    <div>
      <PageBanner
        title={t("title")}
        bgUrl="/assets/images/BackGround/Fuji.png"
      />
      <MaxWidthWrapper isPageContent>
        <ContentWrapper
          heading={t("title")}
          subHeading={t("spanTitle")}
          headingSpan={t("description")}
        >
          About Content Here
        </ContentWrapper>
        <Steps />
        <Faq />
      </MaxWidthWrapper>
    </div>
  );
};

export default About;
