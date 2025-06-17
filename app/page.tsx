/* eslint-disable */
"use client";

import { useTranslations } from "next-intl";
import { setUserLocale } from "@/services/locale";
import { useTransition } from "react";
import Text from "@/components/atom/Text";
import MaxWidthWrapper from "@/components/MaxWithWrapper";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="relative h-[200vh]">
      <div className=" -mt-[95px] h-[38rem] bg-[url('/assets/images/BackgroundImage.png')] bg-cover bg-center">
        <MaxWidthWrapper className=" h-full">
          <div className="flex flex-col items-center justify-center h-full text-white">
            <h1 className="">{t("title")}</h1>
            <h2 className=" font-bold">{t("description")}</h2>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
