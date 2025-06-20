import React from "react";
import Text from "@/components/atom/Text";
import NotFoundLottie from "@/components/molecule/404Lottie";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/molecule/PageBanner";
import Link from "next/link";
import { useTranslations } from "next-intl";

const NotFound = () => {
  const t = useTranslations("404Page");
  return (
    <>
      <PageBanner title={"404"} bgUrl={"/assets/images/BackGround/Fuji.webp"} />
      <main className="max-w-[1440px] mx-auto px-[20px] md:px-[60px] flex flex-col-reverse md:flex-row items-center justify-center w-full py-[100px]">
        <section className="md:max-w-1/2 max-w-[90%]">
          <div className={"flex flex-col gap-[15px] max-sm:justify-center"}>
            <Text variant="heading" className=" text-primary">
              {t("heading")}, <span className="italic">404!</span>
            </Text>
            <Text variant="subheading">
              <span className=" text-black font-semibold">
                {t("secondary_text1")}
              </span>{" "}
              {t("secondary_text2")}
            </Text>
            <Text
              className=" text-secondary_foreground font-light text-left max-md:text-left"
              variant="body"
            >
              {t("content")}
            </Text>
            <Link href="/" className={"w-full"}>
              <Button>{t("button_text")}</Button>
            </Link>
          </div>
        </section>
        <section>
          <NotFoundLottie />
        </section>
      </main>
    </>
  );
};

export default NotFound;
