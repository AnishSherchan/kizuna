import React from "react";
import PageBanner from "@/components/molecule/PageBanner";
import { useTranslations } from "next-intl";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import FormWrapper from "@/components/Layout/FormWrapper";
import Temple from "@/public/assets/images/Temple.webp";
import Image from "next/image";
import Legal_Form from "@/components/molecule/Forms/LegalForm";

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
          <Legal_Form />
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
