import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import HeroSection from "@/components/organism/Home/HeroSection";
import OurServices from "@/components/organism/Home/OurServices";
import About from "@/components/organism/Home/About";

export default function HomePage() {
    return (
        <div className="relative h-[200vh]">
            <div className=" h-[38rem] bg-[url('/assets/images/BackgroundImage.png')] bg-cover bg-center">
                <MaxWidthWrapper className=" h-full" isPageContent>
                    {/* Hero Section */}
                    <HeroSection/>
                    <OurServices/>
                    <About/>
                </MaxWidthWrapper>
            </div>
        </div>
    );
}
