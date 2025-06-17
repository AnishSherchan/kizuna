import React from "react";
import Text from "@/components/atom/Text";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";


const HeroSection = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col items-center justify-center h-full text-white gap-[40px]">
      <div className=" flex flex-col items-center justify-center gap-[10px]">
        <Text className=" max-w-[765px] text-center" variant="title">
          {t("hero_title")}
        </Text>

        <Text
          className=" max-w-[765px] font-light text-center"
          variant="subheading"
        >
          {t("hero_description")}
        </Text>
      </div>

      <div className=" flex items-center flex-wrap justify-center gap-[20px]">
        <Button>{t("find_jobs")}</Button>
        <Button variant={"secondary"}>{t("explore_services")}</Button>
      </div>
    </div>
  );
};

export default HeroSection;
