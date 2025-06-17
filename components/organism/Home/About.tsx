import React from "react";
import ContentWrapper from "@/components/Layout/ContentWrapper";
import { useTranslations } from "next-intl";
import Image from "next/image";

import StreetImage from "@/public/assets/images/StreetImage.png";
import Text from "@/components/atom/Text";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
  const t = useTranslations("AboutPage");
  const common = useTranslations("common");
  return (
    <ContentWrapper
      heading={t("title")}
      subHeading={t("spanTitle")}
      headingSpan={t("description")}
    >
      <div className="flex w-full flex-col gap-[40px] lg:flex-row justify-between items-center">
        {/* Image */}
        <Image
          src={StreetImage}
          className=" max-w-[565px] w-full h-full rounded-[10px]"
          alt="About kizuna"
        />
        {/* Text */}
        <div className=" flex flex-col gap-[50px] max-w-[645px]">
          <div className=" flex flex-col gap-[15px]">
            <Text variant="body" className=" text-justify">
              {t("about_kizuna.paragraph1")}
            </Text>

            <Text variant="body">{t("about_kizuna.paragraph2")}</Text>
          </div>
          <div>
            <Link href={"/about"}>
              <Button>{common("learn_more")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default About;
