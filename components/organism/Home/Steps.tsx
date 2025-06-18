import React from "react";
import { useTranslations } from "next-intl";

import ContentWrapper from "@/components/Layout/ContentWrapper";
import StepsCard from "@/components/molecule/Cards/StepsCard";

const Steps = () => {
  const t = useTranslations("AboutPage");

  return (
    <ContentWrapper
      heading={t("stepsTitle")}
      subHeading={t("spanTitle")}
      headingSpan={t("stepsDescription")}
    >
      <StepsCard />
    </ContentWrapper>
  );
};

export default Steps;
