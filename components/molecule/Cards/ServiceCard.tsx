import Image, { StaticImageData } from "next/image";
import React from "react";
import Text from "@/components/atom/Text";

import { FaArrowRight } from "react-icons/fa";
import {useTranslations} from "next-intl";

const ServiceCard = ({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: StaticImageData;
}) => {
  const t= useTranslations("Commons")
  return (
    <div className="flex flex-col border border-card-border p-[10px] rounded-[15px] gap-[20px] w-[330px] h-[370px] hover:shadow-xl transition-all ease-in-out duration-500">
      <div>
        <Image
          src={image}
          alt=""
          className="w-[310px] h-[190px] rounded-[10px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-[5px] justify-between h-full">
        <div className="flex flex-col gap-[5px]">
          <Text
            variant="card_heading"
            className=""
          >
            {title}
          </Text>
          <Text
            variant="card_text"
            className="line-clamp-3 text-muted-foreground"
          >
            {desc}
          </Text>
        </div>

          <span className="text-primary flex flex-row gap-[5px] justify-end items-center">
            <Text variant="card_text">{t("view_more")}</Text>
            <FaArrowRight size={12} />
          </span>

      </div>
    </div>
  );
};

export default ServiceCard;
