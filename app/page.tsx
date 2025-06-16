/* eslint-disable */
"use client";

import { useTranslations } from "next-intl";
import { setUserLocale } from "@/services/locale";
import { useTransition } from "react";
import Text from "@/components/atom/Text";
import MaxWidthWrapper from "@/components/MaxWithWrapper";

export default function HomePage() {
  // const [isPending, startTransition] = useTransition();
  const t = useTranslations("HomePage");

  // function onChange(value: string) {
  //   if (value === "en" || value === "jp") {
  //     startTransition(() => {
  //       setUserLocale(value);
  //     });
  //   }
  // }

  return (
    <div className=" -mt-[95px] h-[32rem] bg-[url('/assets/images/BackgroundImage.png')] bg-cover bg-center">
      <MaxWidthWrapper className=" h-full">
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h1 className="">{t("title")}</h1>
          <h2 className=" font-bold">{t("description")}</h2>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
