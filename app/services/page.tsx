import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import PageBanner from "@/components/molecule/PageBanner";
import OurServices from "@/components/organism/Home/OurServices";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("ServicesPage");
  return (
    <div>
      <PageBanner
        title={t("bannerTitle")}
        bgUrl="/assets/images/BackGround/Fuji.webp"
      />
      <MaxWidthWrapper isPageContent>
        <OurServices />
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
