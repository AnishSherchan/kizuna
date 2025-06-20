import React from "react";
import PageBanner from "@/components/molecule/PageBanner";
import {useTranslations} from "next-intl";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import Faq from "@/components/organism/Home/Faq";
import EmploymentSupportService from "@/components/organism/EmploymentPageContent/EmploymentSupportService";

const EmploymentSupport = () => {
    const t = useTranslations("EmploymentSupportPage");
    return (
        <div>
            <PageBanner
                title={t("bannerTitle")}
                bgUrl="/assets/images/BackGround/Trade.webp"
                className=" bg-left-top"
            />
            <MaxWidthWrapper isPageContent>
                <EmploymentSupportService/>
                <Faq/>
            </MaxWidthWrapper>
        </div>
    );
};

export default EmploymentSupport;
