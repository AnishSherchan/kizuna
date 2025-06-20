import React from 'react';
import ContentWrapper from "@/components/Layout/ContentWrapper";
import Image from "next/image";
import legal from "@/public/assets/images/legal.png"
import {Button} from "@/components/ui/button";
import Text from "@/components/atom/Text";
import Link from "next/link";

const para1 = "Kizuna Co., Ltd. and our partner team provide services to help Nepalese people in Japan\n" +
    "resolve visa and work related legal issues with peace of mind. Our goal is to provide early and\n" +
    "affordable support before the issues become serious."

const para2 = "Offering help with visa renewals, status changes, visa applications, and labor concerns. Our\n" +
    "team prepares legal documents, and supports communication throughout the process. With multilingual support in Nepali, English, and Japanese, we ensure clients feel understood\n" +
    "and respected. Many of our staff are Nepali or deeply familiar with the culture, allowing us to\n" +
    "work with compassion and cultural sensitivity."

const para3 = "Kizuna also engages in community outreach through social media, free legal Q&A events, and\n" +
    "partnerships with local social workers and social events. We aim to build legal awareness and\n" +
    "trust where it’s needed most."

const para4 = "We do not just help you solve your legal problems, but we want to be your trusted partner,\n" +
    "walking alongside you and helping to build a community where everyone has the support they\n" +
    "need, has access to new opportunities, and is respected as a person."


const LegalContent = () => {
    return (
        <ContentWrapper heading={"Legal Solution"} subHeading={"Service"}
                        headingSpan={"Tailored solution for your success, Elevate your experience with Our Exceptional Services Today"}>
            <div
                className={'flex w-full h-full flex-col gap-[40px] lg:flex-row justify-between items-center lg:flex-nowrap flex-wrap'}>
                {/*Image*/}
                <div className={'relative w-full max-h-[660px]'}>
                    <Image
                        className={'w-auto lg:h-[660px] object-cover rounded-[10px]'}
                        src={legal}
                        alt={"Legal Solution"}
                    />
                </div>

                {/*Text*/}
                <div className={'w-full flex flex-col gap-[40px] max-w-[645px] text-justify flex-wrap md:flex-nowrap'}>
                    <div className={'flex flex-col gap-[15px]'}>
                        <Text variant={"body"}>{para1}</Text>
                        <Text variant={"body"}>{para2}</Text>
                        <Text variant={"body"}>{para3}</Text>
                        <Text variant={"body"}>{para4}</Text>
                    </div>

                    <div
                        className={'flex flex-col sm:flex-row justify-start gap-6 flex-wrap w-full'}>
                        <Link href={'/'}>
                            <Button>Get Your Legal Solution Form</Button>
                        </Link>
                        <Link href={'/'}>
                            <Button variant={'secondary'}>Contact Us For Your Application</Button>
                        </Link>
                    </div>

                </div>
            </div>
        </ContentWrapper>
    );
};

export default LegalContent;