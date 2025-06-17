import React from "react";
import { useTranslations } from "next-intl";

import ContentWrapper from "@/components/Layout/ContentWrapper";

const OurServices = () => {
  const t = useTranslations("ServicesPage");
  return (
    <ContentWrapper
      heading={t("title")}
      subHeading={t("spanTitle")}
      headingSpan={t("description")}
    >
      Testing
    </ContentWrapper>
  );
};

export default OurServices;
