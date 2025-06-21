import React from "react";
import ContentWrapper from "@/components/Layout/ContentWrapper";
import Image from "next/image";
import legal from "@/public/assets/images/legal.png";
import { Button } from "@/components/ui/button";
import Text from "@/components/atom/Text";
import Link from "next/link";
import { useTranslations } from "next-intl";

const LegalContent = () => {
  const t = useTranslations("legalPage");
  return (
    <ContentWrapper
      heading={t("heading")}
      subHeading={t("subHeading")}
      headingSpan={t("headingSpan")}
    >
      <div
        className={
          "flex w-full h-full flex-col gap-[40px] lg:flex-row justify-between items-center lg:items-stretch lg:flex-nowrap flex-wrap"
        }
      >
        {/*Image*/}
        <div className={"relative max-w-[560px] w-full min-h-[400px]"}>
          <Image
            className={"w-full h-full object-cover rounded-[10px]"}
            src={legal}
            alt={"Legal Solution"}
            fill
          />
        </div>

        {/*Text*/}
        <div
          className={
            "w-full flex flex-col gap-[40px] max-w-[645px] text-justify flex-wrap md:flex-nowrap"
          }
        >
          <div className={"flex flex-col gap-[15px]"}>
            <Text variant={"body"}>{t("para1")}</Text>
            <Text variant={"body"}>{t("para2")}</Text>
            <Text variant={"body"}>{t("para3")}</Text>
            <Text variant={"body"}>{t("para4")}</Text>
          </div>

          <div
            className={
              "flex flex-col sm:flex-row justify-start gap-6 flex-wrap w-full"
            }
          >
            <Link href={"/services/legal-support/legal-form"}>
              <Button>{t("btn1")}</Button>
            </Link>
            <Link href={"/contact"}>
              <Button variant={"secondary"}>{t("btn2")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default LegalContent;
