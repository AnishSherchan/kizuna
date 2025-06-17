"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import { navItems } from "./config";
import Text from "@/components/atom/Text";

const NavLink = ({
  className,
  showBackground,
}: {
  className?: string;
  showBackground: boolean;
}) => {
  const pathname = usePathname();
  const t = useTranslations("nav");
  return (
    <nav
      className={`flex items-center w-fit justify-center gap-10 ${className} `}
    >
      {navItems.map((item) => (
        <Link key={item.label} href={item.href} className={``}>
          <Text
            variant="nav"
            className={`${
              showBackground ? "text-black" : "text-white"
            } transition-all duration-300 ease-in-out ${
              pathname === item?.href ||
              (item?.href !== "/" && pathname.startsWith(item?.href))
                ? "font-semibold text-primary"
                : ""
            }`}
          >
            {t(item.label)}
          </Text>
        </Link>
      ))}
    </nav>
  );
};

export default NavLink;
