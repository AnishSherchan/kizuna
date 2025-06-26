import React from "react";
import ContentWrapper from "@/components/Layout/ContentWrapper";
import Image from "next/image";
import StreetImage from "@/public/assets/images/StreetImage.webp";
import Text from "@/components/atom/Text";
import { useTranslations } from "next-intl";

import { BiCheck } from "react-icons/bi";
import CheckedList from "@/components/molecule/CheckedList";

export const aboutList1 = [
  {
    name: "employment_support",
  },
  {
    name: "legal_procedure",
  },
  {
    name: "car_life",
  },
];
export const aboutList2 = [
  {
    name: "hr_specialist",
  },
  {
    name: "full_support",
  },
  {
    name: "bridge_trust",
  },
  {
    name: "hr_hassle",
  },
  {
    name: "coexist",
  },
  {
    name: "future_together",
  },
];

const AboutContent = () => {
  const t = useTranslations("AboutPage");
  return (
    <ContentWrapper
      heading={t("title")}
      subHeading={t("spanTitle")}
      headingSpan={t("headingSpan")}
    >
      <div
        className={
          "flex w-full flex-col items-center justify-center gap-[50px]"
        }
      >
        <div className="flex w-full flex-col gap-[40px] lg:flex-row justify-between items-center lg:flex-nowrap flex-wrap">
          {/* Image */}
          <Image
            src={StreetImage}
            className="max-w-[565px] w-full h-full rounded-[10px]"
            alt="About kizuna"
          />
          {/* Text */}
          <div className=" flex flex-col gap-[50px] max-w-[645px] flex-wrap">
            <div className=" flex flex-col gap-[15px]">
              <Text variant="body" className=" text-justify  font-normal">
                {t("about_kizuna.paragraph1")}
              </Text>

              <Text variant="body" className=" text-justify  font-normal">
                {t("about_kizuna.paragraph2")}
              </Text>
            </div>
            <div className={"flex flex-col md:flex-row justify-between"}>
              {aboutList1.map((item, i) => (
                <CheckedList title={t(`ticks.${item.name}`)} key={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Second content paragraph*/}
        <div className="flex w-full flex-col gap-[40px] lg:flex-row-reverse justify-between items-center">
          {/* Image */}
          <Image
            src={StreetImage}
            className="max-w-[565px] w-full h-full rounded-[10px]"
            alt="About kizuna"
          />
          {/* Text */}
          <div className="flex flex-col gap-[50px] max-w-[645px]">
            <div>
              <Text className={"text-[28px]"}>
                <span>{t("about_kizuna.mission_text1")}</span>
                <span className={"text-primary"}>
                  {" "}
                  {t("about_kizuna.mission_text2")}
                </span>
              </Text>
            </div>

            <div className=" flex flex-col gap-[15px]">
              <Text variant="body" className=" text-justify  font-normal">
                {t("about_kizuna.paragraph3")}
              </Text>
            </div>
            <div
              className={
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  md:justify-items-start justify-items-start"
              }
            >
              {aboutList2.map((item, i) => (
                <div
                  key={i}
                  className={
                    "flex flex-row items-center md:justify-center justify-center "
                  }
                >
                  <BiCheck size={"34px"} className={"text-primary"} />
                  <Text
                    variant={"subheading"}
                    className={"text-muted-foreground"}
                  >
                    {t(`ticks.${item.name}`)}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default AboutContent;
