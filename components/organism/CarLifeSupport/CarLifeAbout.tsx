import ContentWrapper from "@/components/Layout/ContentWrapper";
import { useTranslations } from "next-intl";

const CarLifeAbout = () => {
  const t = useTranslations("CarLifeSupportPage");
  return (
    <ContentWrapper
      heading={t("title")}
      subHeading={t("spanTitle")}
      headingSpan={t("description")}
    >
      Car Life
    </ContentWrapper>
  );
};

export default CarLifeAbout;
