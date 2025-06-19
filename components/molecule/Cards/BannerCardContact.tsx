import { useTranslations } from "next-intl";
import { IconType } from "react-icons";

import { companyEmail, phoneNumber } from "@/app/constants/config";
import Text from "@/components/atom/Text";
import { CiMail, CiMapPin } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";

interface BannerData {
  Icon: IconType;
  title: string;
  data: string;
}

const Banner = ({ Icon, title, data }: BannerData) => {
  return (
    <div className=" flex flex-col gap-[10px]">
      <div className=" flex max-w-[220px] items-center gap-[10px]">
        <Icon className=" w-[18px] h-[18px] " />{" "}
        <Text variant="subheading" className=" font-semibold">
          {title}
        </Text>
      </div>
      <Text variant="subheading">{data}</Text>
    </div>
  );
};

const BannerCardContactUs = () => {
  const t = useTranslations("common");

  const BannerData: BannerData[] = [
    {
      Icon: SlPhone,
      title: t("phone"),
      data: phoneNumber,
    },
    {
      Icon: CiMail,
      title: t("email"),
      data: companyEmail,
    },
    {
      Icon: CiMapPin,
      title: t("address"),
      data: t("companyAddress"),
    },
  ];
  return (
    <div className=" hidden lg:flex flex-col gap-[25px] text-[24px] p-[20px] bg-primary rounded-[10px]">
      <h1 className=" text-white font-medium ">{t("contactInformation")}</h1>
      <div className="grid grid-cols-2 max-w-[485px] gap-[20px] text-white ">
        {BannerData?.map((banner, index) => (
          <Banner
            key={`${index} ${banner.title}`}
            title={banner?.title}
            Icon={banner?.Icon}
            data={banner?.data}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCardContactUs;
