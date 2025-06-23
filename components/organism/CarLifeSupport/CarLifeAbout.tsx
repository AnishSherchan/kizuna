import React from "react";
import ContentWrapper from "@/components/Layout/ContentWrapper";
import Image from "next/image";
import CarImage from "@/public/assets/images/carImage.png";
import Text from "@/components/atom/Text";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { BiCheck } from "react-icons/bi";
import Link from "next/link";

const ticks = [
  { name: "tick1" },
  { name: "tick2" },
  { name: "tick3" },
  { name: "tick4" },
  { name: "tick5" },
];

const CarLifeAbout = () => {
  const t = useTranslations("CarLifeSupportPage");
  return (
    <ContentWrapper
      heading={t("title")}
      subHeading={t("spanTitle")}
      headingSpan={t("description")}
    >
      {/*Content div*/}
      <div
        className={
          "flex flex-col items-center justify-center w-full gap-[50px]"
        }
      >
        {/*Upper div*/}
        <div
          className={
            "flex w-full h-full flex-col lg:flex-row justify-between items-center gap-[30px] lg:flex-nowrap flex-wrap"
          }
        >
          {/*    Image div*/}
          <div
            className={"relative max-w-[585px] w-full min-h-[400px] p-[10px]"}
          >
            <Image
              src={CarImage}
              alt={"Car Image"}
              className={"w-full h-full object-cover rounded-[10px]"}
              fill
            />
          </div>

          {/*    Text div*/}
          <div
            className={"flex flex-col gap-[40px] max-w-[645px] text-justify"}
          >
            {/*Text Content*/}
            <div className={"flex flex-col gap-[30px]"}>
              {/*Text tile*/}
              <div>
                <Text variant={"heading"}>{t("para1head")}</Text>
              </div>
              {/*    Text Contents*/}
              <div className={"flex flex-col gap-[15px]"}>
                <Text variant={"card_heading"}>{t("para1content1")}</Text>
                <Text variant={"card_heading"}>{t("para1content2")}</Text>
              </div>
            </div>

            {/*Buttons*/}
            <div
              className={
                "flex flex-col md:flex-row items-center justify-start gap-4"
              }
            >
              <Link href={"/services/car-life-support/car-support-application"}>
                <Button>{t("para1btn1")}</Button>
              </Link>
              <Link href={"/contact"}>
                <Button variant={"secondary"}>{t("para1btn2")}</Button>
              </Link>
            </div>
          </div>
        </div>

        {/*Lower Div*/}
        <div
          className={
            "w-full h-full flex flex-col-reverse md:flex-row items-center justify-between gap-[30px] flex-nowrap"
          }
        >
          {/*        tick marks*/}
          <div
            className={
              "w-full flex flex-col items-start justify-center gap-[10px] max-w-[645px]"
            }
          >
            {ticks.map((tick, i) => (
              <div
                key={i}
                className={
                  "flex flex-row items-center justify-center gap-[10px]"
                }
              >
                <BiCheck size={20} className={"text-primary"} />
                <Text variant={"subheading"}>{t(`ticks.${tick.name}`)}</Text>
              </div>
            ))}
          </div>
          {/*    Text content lower div*/}
          <div
            className={
              "max-w-[645px] w-full flex flex-col items-center justify-between gap-[40px] text-justify"
            }
          >
            <div>
              <Text variant={"card_heading"}>{t("para2")}</Text>
            </div>
            <div className={"w-full flex justify-center md:justify-start"}>
              <Link href={"/services/car-life-support/car-support-application"}>
                <Button>{t("para2btn")}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default CarLifeAbout;
