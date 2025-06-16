"use client";
import React, { useTransition } from "react";
import { useTranslations } from "next-intl";
import { setUserLocale } from "@/services/locale";
// import Text from "@/components/atom/Text";

import { Button } from "@/components/ui/button";
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
  const [isPending, startTransition] = useTransition();
  const onChange = (value: string) => {
    if (value === "en" || value === "jp") {
      startTransition(() => {
        setUserLocale(value);
      });
    }
  };

  return (
    <div className=" flex items-center gap-4">
      <Button className="cursor-pointer">{t("getStarted")}</Button>
      <DropdownMenu>
        <DropdownMenuTrigger className=" bg-white p-2 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
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
    </div>
  );
};

export default CtaButtons;
