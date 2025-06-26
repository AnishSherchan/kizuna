"use client";
import dynamic from "next/dynamic";

import FormWrapper from "@/components/Layout/FormWrapper";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import PageBanner from "@/components/molecule/PageBanner";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

function FormSkeleton() {
  return (
    <div className="w-full space-y-4">
      <Skeleton className="h-full w-1/2" />
      {[...Array(14)].map((_, i) => (
        <Skeleton key={i} className="h-[45px] w-[90%]" />
      ))}
      <Skeleton className="h-10 w-1/3 float-right" />
    </div>
  );
}

const CarSupportForm = dynamic(
  () => import("@/components/molecule/Forms/CarSupportForm"),
  { ssr: false, loading: () => <FormSkeleton /> }
);

import CarFormImage from "@/public/assets/images/CarFormImage.webp";

const CarSupprotForm = () => {
  const t = useTranslations("CarLifeSupportPage");
  return (
    <div>
      <PageBanner
        title={t("bannerTitle")}
        bgUrl="/assets/images/BackGround/Trade.webp"
        className=" bg-left-top"
      />
      <MaxWidthWrapper isPageContent className=" flex flex-col gap-[30px]">
        <FormWrapper>
          {/* main div */}
          <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-between">
            {/* Form div */}
            <div className=" w-full xl:max-w-[525px] xl:min-w-[525px] flex items-center justify-center">
              <CarSupportForm />
            </div>

            {/* Image div */}
            <div className="h-full hidden xl:block max-w-[680px] w-full">
              <Image
                src={CarFormImage}
                alt="Car Image"
                className="rounded-[10px]"
              />
            </div>
          </div>
        </FormWrapper>
      </MaxWidthWrapper>
    </div>
  );
};

export default CarSupprotForm;
