import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import HeroSection from "@/components/organism/Home/HeroSection";

export default function HomePage() {
  return (
    <div className="relative">
      <div className=" h-[38rem] bg-[url('/assets/images/BackgroundImage.png')] bg-cover bg-center">
        <MaxWidthWrapper className=" h-full" isPageContent>
          {/* Hero Section */}
          <HeroSection />
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
