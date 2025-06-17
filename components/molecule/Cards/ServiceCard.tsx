"use client";
import Text from "@/components/atom/Text";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({
  title,
  desc,
  image,
  path,
}: {
  title: string;
  desc: string;
  image: StaticImageData;
  path: string;
}) => {
  const t = useTranslations("common");
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/services/${path}`)}
      className="flex cursor-pointer flex-col border border-card-border p-[10px] rounded-[15px] gap-[20px] w-[330px] h-[370px] hover:shadow-xl transition-all ease-in-out duration-500"
    >
      <div>
        <Image
          src={image}
          alt=""
          className="w-[310px] h-[190px] rounded-[10px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-[5px] justify-between h-full">
        <div className="flex flex-col gap-[5px]">
          <Text variant="card_heading" className="">
            {title}
          </Text>
          <Text
            variant="card_text"
            className="line-clamp-3 text-muted-foreground"
          >
            {desc}
          </Text>
        </div>

        <Link href={"/"}>
          <span className="text-primary flex flex-row gap-[5px] justify-end items-center">
            <Text variant="card_text" className=" font-medium">
              {t("view_more")}
            </Text>
            <FaArrowRight size={13} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
