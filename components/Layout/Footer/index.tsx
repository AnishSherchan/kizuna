import { IconType } from "react-icons";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import {
  AiOutlineInstagram,
  AiOutlineTikTok,
  AiOutlineYoutube,
} from "react-icons/ai";

import { BiLogoFacebookCircle, BiLogoLinkedin } from "react-icons/bi";

import { companyEmail, phoneNumber, services } from "@/app/constants/config";
import { navItems } from "../NavBar/config";

import MaxWidthWrapper from "../MaxWithWrapper";
import FooterLogo from "@/public/assets/logo/Logo.png";
import Text from "@/components/atom/Text";
import Link from "next/link";

interface link {
  Icon?: IconType;
  name: string;
  path: string;
}

const FooterLinks = ({ title, links }: { title: string; links: link[] }) => {
  return (
    <div className=" flex flex-col items-center w-full lg:items-start lg:w-fit text-center lg:text-start gap-[20px]">
      <Text variant="card_heading" className=" font-medium">
        {title}
      </Text>
      <div className=" flex flex-col gap-[15px]">
        {links?.map((link: link) => (
          <div key={`${link.name} ${link.path}`}>
            <Link href={link?.path} className=" flex gap-[5px] items-center">
              {link?.Icon && <link.Icon size={30} />}
              <Text
                variant="nav"
                className=" hover:text-white text-center lg:text-start w-full font-light cursor-pointer"
              >
                {link.name}
              </Text>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const t = useTranslations("nav");
  const a = useTranslations("ServicesPage");

  const socialLinks: link[] = [
    {
      name: "Facebook",
      path: "/",
      Icon: BiLogoFacebookCircle,
    },
    {
      name: "Instagram",
      path: "/",
      Icon: AiOutlineInstagram,
    },
    {
      name: "LinkedIn",
      path: "/",
      Icon: BiLogoLinkedin,
    },
    {
      name: "YouTube",
      path: "/",
      Icon: AiOutlineYoutube,
    },
    {
      name: "TikTok",
      path: "/",
      Icon: AiOutlineTikTok,
    },
  ];

  const serviceLink: link[] = services?.map((service) => ({
    name: a(service?.service),
    path: `/services/${service?.path}`,
  }));

  const navItem: link[] = navItems.map((nav) => ({
    name: t(nav?.label),
    path: nav?.href,
  }));

  return (
    <div className=" bg-primary text-white">
      <MaxWidthWrapper className=" px-[30px] md:px-[60px]">
        <div className=" flex flex-col gap-[50px] pt-[50px] pb-[15px]">
          <section className=" w-full flex flex-col gap-[40px] lg:gap-0 lg:flex-row justify-between items-start">
            {/* Company Detail */}
            <div className=" flex items-center w-full lg:items-start lg:w-fit text-center lg:text-start flex-col gap-[30px]">
              <Image
                src={FooterLogo}
                alt="kizuna"
                className=" h-[80px] w-auto"
              />
              <Text variant="nav" className=" hover:text-white max-w-[225px]">
                {t("company_moto")}
              </Text>
              <div className=" flex w-full  flex-col gap-[10px]">
                <Text variant="nav" className="font-bold hover:text-white">
                  {phoneNumber}
                </Text>
                <Text variant="nav" className=" font-bold hover:text-white">
                  {companyEmail}
                </Text>
              </div>
            </div>

            <FooterLinks title={t("navigation")} links={navItem} />
            <FooterLinks title={t("services")} links={serviceLink} />
            <FooterLinks title={t("socials")} links={socialLinks} />
          </section>
          <section className=" w-full flex flex-col gap-[15px] relative">
            <hr className=" hidden lg:block border-t bg-white ml-[500px]"></hr>
            <Text variant="span" className=" text-center lg:text-right">
              © Designed and developed by Anish™ and Abhaya™
            </Text>
          </section>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
