import React from "react";
import ContentWrapper from "@/components/Layout/ContentWrapper";
import Image from "next/image";
import employmentService1 from "@/public/assets/images/employmentService1.png";
import StreetMap from "@/public/assets/images/StreetImage.png";
import Text from "@/components/atom/Text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

const EmploymentSupportService = () => {
  const a = useTranslations("EmploymentSupportPage");
  const t = useTranslations("employmentSupport");
  return (
    <ContentWrapper
      heading={a("title")}
      subHeading={a("spanTitle")}
      headingSpan={a("description")}
    >
      <div
        className={
          "flex w-full flex-col items-center justify-center gap-[50px]"
        }
      >
        <div className="flex w-full flex-col gap-[40px] lg:flex-row justify-between items-center lg:flex-nowrap flex-wrap">
          {/* Image */}
          <Image
            src={employmentService1}
            className={"max-w-[565px] w-full h-full rounded-[10px]"}
            alt="About kizuna"
          />
          {/* Text */}
          <div className=" flex flex-col gap-[50px] max-w-[645px] flex-wrap">
            <div className=" flex flex-col gap-[15px]">
              <Text variant="body" className=" text-justify  font-normal">
                {t("para1")}
              </Text>

              <Text variant="body" className=" text-justify  font-normal">
                {t("para2")}
              </Text>
            </div>
            <div
              className={
                "flex flex-col sm:flex-row justify-start gap-6 flex-wrap w-full"
              }
            >
              <Link href={"/services/employment-support/job-form"}>
                <Button>{t("buttons.create")}</Button>
              </Link>
              <Link href={"/contact"}>
                <Button variant={"secondary"}>{t("buttons.contact")}</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-[40px] lg:flex-row-reverse justify-between items-center lg:flex-nowrap flex-wrap">
          {/* Image */}
          <Image
            src={StreetMap}
            className={"max-w-[565px] w-full h-full rounded-[10px]"}
            alt="About kizuna"
          />
          {/* Text */}
          <div className=" flex flex-col gap-[50px] max-w-[645px] flex-wrap">
            <div className=" flex flex-col gap-[15px]">
              <Text variant="body" className=" text-justify  font-normal">
                {t("para3")}
              </Text>

              <Text variant="body" className=" text-justify  font-normal">
                {t("para4")}
              </Text>
            </div>
            <div
              className={
                "flex flex-col sm:flex-row justify-start gap-6 flex-wrap w-full"
              }
            >
              <Link href={"/services/employment-support/job-form"}>
                <Button>{t("buttons.jobForm")}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default EmploymentSupportService;
