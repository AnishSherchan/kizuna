import React from "react";
import { useTranslations } from "next-intl";
import { BsChevronCompactRight } from "react-icons/bs";

import {
  ReachOutSvg,
  ConsultationSvg,
  SupportSvg,
} from "@/public/assets/icons";
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
      <main className=" w-full flex flex-col gap-6 lg:gap-0 lg:flex-row justify-evenly items-center flex-wrap">
        <StepsCard
          title={t("steps.step1.title")}
          description={t("steps.step1.description")}
          Icon={ReachOutSvg}
        />
        <BsChevronCompactRight className=" rotate-90 lg:rotate-0 text-[#747474] h-[45px] w-[45px]" />
        <StepsCard
          Icon={ConsultationSvg}
          title={t("steps.step2.title")}
          description={t("steps.step2.description")}
        />
        <BsChevronCompactRight className=" rotate-90 lg:rotate-0 text-[#747474] h-[45px] w-[45px]" />
        <StepsCard
          title={t("steps.step3.title")}
          Icon={SupportSvg}
          description={t("steps.step3.description")}
        />
      </main>
    </ContentWrapper>
  );
};

export default Steps;
