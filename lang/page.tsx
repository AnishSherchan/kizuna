/* eslint-disable */
"use client";

import { useTranslations } from "next-intl";
import { setUserLocale } from "@/services/locale";
import { useTransition } from "react";

export default function HomePage() {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("HomePage");

  function onChange(value: string) {
    if (value === "en" || value === "jp") {
      startTransition(() => {
        setUserLocale(value);
      });
    }
  }

  return (
    <div className=" bg-foreground saturate-50 text-center text-foreground">
      <h1>{t("title")}</h1>
      <h2 className=" font-bold">{t("description")}</h2>
      <button
        onClick={() => onChange("en")}
        disabled={isPending}
        className={`cursor-pointer bg-red-400 ${isPending ? "opacity-50" : ""}`}
      >
        EN
      </button>
      <button
        onClick={() => onChange("jp")}
        disabled={isPending}
        className={`cursor-pointer bg-blue-400 ${
          isPending ? "opacity-50" : ""
        }`}
      >
        JP
      </button>
    </div>
  );
}
