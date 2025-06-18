import React from "react";
import PageBanner from "@/components/molecule/PageBanner";
import { useTranslations } from "next-intl";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import ContentWrapper from "@/components/Layout/ContentWrapper";

const Contact = () => {
  const t = useTranslations("ContactPage");
  return (
    <div>
      <PageBanner
        title={t("heading")}
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
      </MaxWidthWrapper>
    </div>
  );
};

export default Contact;
