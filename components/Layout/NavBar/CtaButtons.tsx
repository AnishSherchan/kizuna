"use client";
import React, { useTransition, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { setUserLocale } from "@/services/locale";
// import Text from "@/components/atom/Text";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import { navItems } from "./config";

import { Button } from "@/components/ui/button";
import Text from "@/components/atom/Text";
import { usePathname } from "next/navigation";
import { MdOutlineTranslate } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CtaButtons = () => {
  const t = useTranslations("nav");
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
    if (isNavOpen) {
      document.body.style.overflow = "auto"; // Enable scrolling
    } else {
      document.body.style.overflow = "hidden"; // Disable scrolling
    }
  };

  const onChange = (value: string) => {
    if (value === "en" || value === "jp") {
      startTransition(() => {
        setUserLocale(value);
      });
    }
  };

  return (
    <div className=" flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger className=" bg-white outline-0 p-2 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
          <MdOutlineTranslate className=" text-[20px] text-[#475569]" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Choose Language</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled={isPending} onClick={() => onChange("en")}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem disabled={isPending} onClick={() => onChange("jp")}>
            Japanese
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant={"outline"}
        onClick={toggleNav}
        className=" lg:hidden cursor-pointer"
      >
        {isNavOpen ? (
          <IoCloseOutline className=" text-[30px] text-[#000000]" />
        ) : (
          <RxHamburgerMenu className=" text-[30px] text-[#000000]" />
        )}
      </Button>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden border w-[60%] border-border_color transition-all duration-700 ease-in-out fixed z-10 top-0 flex flex-col pt-[50px] px-[20px] gap-[15px] bg-white h-full ${
          isNavOpen ? "left-0" : "fixed left-[-100%] ease-in-out duration-700"
        }`}
      >
        <nav className="relative w-full flex flex-col gap-[15px] justify-center items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => toggleNav()}
              className={`${
                pathname === item?.href ||
                (item?.href !== "/" && pathname.startsWith(item?.href))
                  ? "font-semibold text-primary"
                  : "text-foreground"
              }`}
            >
              <Text
                variant="nav"
                className="   transition-all duration-300 ease-in-out "
              >
                {t(item.label)}
              </Text>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CtaButtons;
