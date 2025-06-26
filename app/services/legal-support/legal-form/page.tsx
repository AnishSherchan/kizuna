"use client";
import dynamic from "next/dynamic";
import FormWrapper from "@/components/Layout/FormWrapper";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import PageBanner from "@/components/molecule/PageBanner";
import Temple from "@/public/assets/images/Temple.webp";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

function FormSkeleton() {
  return (
    <div className="w-full space-y-4">
      <Skeleton className="h-full w-1/2" />
      {[...Array(11)].map((_, i) => (
        <Skeleton key={i} className="h-[45px] w-full" />
      ))}
      <Skeleton className="h-10 w-1/3 float-right" />
    </div>
  );
}

const Legal_Form = dynamic(
  () => import("@/components/molecule/Forms/LegalForm"),
  { ssr: false, loading: () => <FormSkeleton /> }
);

const LegalForm = () => {
  const t = useTranslations("legalSupportPage");
  return (
    <div>
      <PageBanner
        title={t("bannerTitle")}
        bgUrl="/assets/images/BackGround/Trade.webp"
        className=" bg-no-repeat bg-bottom bg-contain"
      />
      <MaxWidthWrapper isPageContent>
        <FormWrapper>
          {/* Form */}
          <div className=" w-full xl:max-w-[525px] xl:min-w-[525px]  flex items-center justify-center">
            <Legal_Form />
          </div>
          <Image
            src={Temple}
            alt="Temple"
            className=" h-full hidden xl:block max-w-[680px] w-full"
          />
        </FormWrapper>
      </MaxWidthWrapper>
    </div>
  );
};

export default LegalForm;
