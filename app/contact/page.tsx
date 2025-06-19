import React from "react";
import PageBanner from "@/components/molecule/PageBanner";
import { useTranslations } from "next-intl";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import ContentWrapper from "@/components/Layout/ContentWrapper";
import BannerCardContactUs from "@/components/molecule/Cards/BannerCardContact";
import ContactFormCard from "@/components/molecule/Cards/ContactFormCard";

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
          <div className="flex w-full lg:flex-row flex-col flex-auto gap-[40px] justify-center items-center">
            <BannerCardContactUs />
            <ContactFormCard title={t("contactFormTitle")} />
          </div>
        </ContentWrapper>
      </MaxWidthWrapper>
    </div>
  );
};

export default Contact;
