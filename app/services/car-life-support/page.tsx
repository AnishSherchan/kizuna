import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import PageBanner from "@/components/molecule/PageBanner";
import CarLifeAbout from "@/components/organism/CarLifeSupport/CarLifeAbout";
import Faq from "@/components/organism/Home/Faq";
import { useTranslations } from "next-intl";

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
