import React from "react";
import PageBanner from "@/components/molecule/PageBanner";
import { useTranslations } from "next-intl";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import OurServices from "@/components/organism/Home/OurServices";

const Page = () => {
  const t = useTranslations("ServicesPage");
  return (
    <div>
      <PageBanner
        title={t("bannerTitle")}
        bgUrl="/assets/images/BackGround/Fuji.png"
      />
      <MaxWidthWrapper>
        <OurServices />
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
