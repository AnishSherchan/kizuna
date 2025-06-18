import React from 'react';
import ContentWrapper from "@/components/Layout/ContentWrapper";
import {faqQuestions} from "@/app/constants/config";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Text from "@/components/atom/Text";
import {useTranslations} from "next-intl";

const Faq = () => {
    const t= useTranslations("FAQPage")
    return (
        <ContentWrapper heading={t("heading")} headingSpan={t("headingSpan")} subHeading={t('subHeading')}>
            <div className={'w-full '}>
                <Accordion type="multiple">
                    <div className={'space-y-[20px] '}>
                        {faqQuestions.map((q, i) => (
                            <div className={'bg-[#F1F1F1] rounded-[20px] p-[20px]'} key={i}>
                                <AccordionItem value={t(q.question)}>
                                    <AccordionTrigger><Text variant={'card_heading'}
                                                            className={'font-medium cursor-pointer'}>{t(q.question)}</Text></AccordionTrigger>
                                    <AccordionContent>
                                        <Text variant={'nav'}>{t(q.answer)}</Text>
                                    </AccordionContent>
                                </AccordionItem>
                            </div>
                        ))}

                    </div>
                </Accordion>
            </div>
        </ContentWrapper>
    );
};

export default Faq;