import React from "react";
import PageBanner from "@/components/molecule/PageBanner";
import { useTranslations } from "next-intl";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import ContentWrapper from "@/components/Layout/ContentWrapper";
import Faq from "@/components/organism/Home/Faq";

const EmploymentSupport = () => {
  const t = useTranslations("EmploymentSupportPage");
  return (
    <div>
      <PageBanner
        title={t("bannerTitle")}
        bgUrl="/assets/images/BackGround/Trade.png"
        className=" bg-left-top"
      />
      <MaxWidthWrapper isPageContent>
        <ContentWrapper
          heading={t("title")}
          subHeading={t("spanTitle")}
          headingSpan={t("description")}
        >
          Car Life
        </ContentWrapper>
        <Faq />
      </MaxWidthWrapper>
    </div>
  );
};

export default EmploymentSupport;
