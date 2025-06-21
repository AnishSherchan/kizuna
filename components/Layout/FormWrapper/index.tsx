import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useTranslations } from "next-intl";
import Link from "next/link";

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("ServicesPage");
  return (
    <div className="w-full flex flex-col py-[40px] gap-[30px]">
      <Link href={"/services"} className=" w-min">
        <div className=" flex w-fit flex-row gap-[5px] text-[16px] font-medium text-[#7B7B7B] cursor-pointer items-center">
          <BiArrowBack />
          <p>{t("bannerTitle")}</p>
        </div>
      </Link>
      <div className="flex justify-between gap-[30px] flex-col xl:flex-row w-full">
        {children}
      </div>
    </div>
  );
};

export default FormWrapper;
