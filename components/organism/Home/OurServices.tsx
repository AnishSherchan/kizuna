import React from "react";
import {useTranslations} from "next-intl";
import {services} from "@/app/constants/config";

import ContentWrapper from "@/components/Layout/ContentWrapper";
import ServiceCard from "@/components/molecule/Cards/ServiceCard";
import Link from "next/link";

const OurServices = () => {
    const t = useTranslations("ServicesPage");
    return (
        <ContentWrapper
            heading={t("title")}
            subHeading={t("spanTitle")}
            headingSpan={t("description")}
        >
            <div className="flex flex-row gap-[60px] flex-wrap justify-center ">
                {services.map((service, i) => (
                    <li key={i} className="list-none">
                        <Link href={`/services/${service.path}`}>
                            <ServiceCard title={t(service.service)} desc={t(service.shortDescription)}
                                         image={service.image}/>
                        </Link>
                    </li>
                ))}
            </div>
        </ContentWrapper>
    );
};

export default OurServices;
