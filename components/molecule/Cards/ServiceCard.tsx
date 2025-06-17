import Image, { StaticImageData } from "next/image";
import React from "react";
import service1 from "@/public/assets/images/service1.png";
import Text from "@/components/atom/Text";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const ServiceCard = ({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: StaticImageData;
}) => {
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

        <Link href={"/"}>
          <span className="text-primary flex flex-row gap-[5px] justify-end items-center">
            <Text variant="card_text">View More</Text>
            <FaArrowRight size={13} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
