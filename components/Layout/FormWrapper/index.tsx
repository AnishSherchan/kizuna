import React from "react";

import { BiArrowBack } from "react-icons/bi";
import { useTranslations } from "next-intl";
import Link from "next/link";

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("ServicesPage");
  return (
    <div className=" w-full flex flex-col py-[40px] gap-[30px]">
      <div className=" w-fit text-[16px] font-medium text-[#7B7B7B] cursor-pointer">
        <Link
          className=" flex flex-row gap-[5px] items-center"
          href={"/services"}
        >
          <BiArrowBack />
          <p>{t("bannerTitle")}</p>
        </Link>
      </div>
      <div className=" flex justify-between gap-[30px] flex-col xl:flex-row w-full">
        {children}
      </div>
    </div>
  );
};

export default FormWrapper;
