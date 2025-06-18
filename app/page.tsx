import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import HeroSection from "@/components/organism/Home/HeroSection";
import OurServices from "@/components/organism/Home/OurServices";
import About from "@/components/organism/Home/About";
import Steps from "@/components/organism/Home/Steps";
import Faq from "@/components/organism/Home/Faq";

export default function HomePage() {
    return (
        <div className="relative h-full">
            <div className=" h-[38rem] bg-[url('/assets/images/BackgroundImage.png')] bg-cover bg-center">
                <MaxWidthWrapper className="h-full" isPageContent>
                    <HeroSection/>
                </MaxWidthWrapper>
            </div>
            <MaxWidthWrapper className="h-full" isPageContent>
                <OurServices/>
                <About/>
                <Steps/>
                <Faq/>
            </MaxWidthWrapper>
        </div>
    );
}
