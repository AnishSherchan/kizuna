"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import { navItems } from "./config";
import Text from "@/components/atom/Text";

const NavLink = () => {
  const pathname = usePathname();
  const t = useTranslations("nav");
  return (
    <div className="flex items-center justify-center gap-10">
      {navItems.map((item) => (
        // <a
        //   key={item.label}
        //   href={item.href}
        //   className="text-white px-4 py-2 hover:bg-primary ease-in-out delay-100 transition-all rounded"
        // >
        //   {item.label}
        // </a>
        <Link
          key={item.label}
          href={item.href}
          className={`${
            pathname === item?.href ||
            (item?.href !== "/" && pathname.startsWith(item?.href))
              ? "font-semibold"
              : ""
          }`}
        >
          <Text
            variant="nav"
            className=" text-white transition-all duration-300 ease-in-out "
          >
            {t(item.label)}
          </Text>
        </Link>
      ))}
    </div>
  );
};

export default NavLink;
