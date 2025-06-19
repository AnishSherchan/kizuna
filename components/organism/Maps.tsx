import React from 'react';
import ContentWrapper from "@/components/Layout/ContentWrapper";
import {useTranslations} from "next-intl";

const Maps = () => {
    const t=useTranslations("Maps")
    return (
        <div>
            <ContentWrapper
                heading={t('heading')}
                subHeading={t('subHeading')}
                headingSpan={t('headingSpan')}
                className={'mb-[40px]'}
            >
                <div className='w-full p-[15px] lg:max-w-[1030px] h-[450px] lg:h-[415px] mx-auto bg-white rounded-[27px] drop-shadow-lg'>
                    <div className='rounded-[12px] h-full overflow-hidden'>
                        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.192574308859!2d137.12097511187676!3d35.151817758759876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600360ba7bd03997%3A0xcf6ef5dd9bed53f2!2sG%C5%8Dyashiki-90%20Sasabarach%C5%8D%2C%20Toyota%2C%20Aichi%20470-0352%2C%20Japan!5e0!3m2!1sen!2suk!4v1750346424537!5m2!1sen!2suk" loading="lazy" >
                        </iframe>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default Maps;