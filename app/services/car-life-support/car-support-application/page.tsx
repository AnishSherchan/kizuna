import FormWrapper from "@/components/Layout/FormWrapper";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import PageBanner from "@/components/molecule/PageBanner";
import Image from "next/image";

import CarSupportForm from "@/components/molecule/Forms/CarSupportForm";
import CarFormImage from "@/public/assets/images/CarFormImage.webp";

const CarSupprotForm = () => {
  return (
    <div>
      <PageBanner
        title={"Car Life Support"}
        bgUrl="/assets/images/BackGround/Trade.webp"
        className=" bg-left-top"
      />
      <MaxWidthWrapper
        isPageContent
        className=" flex flex-col gap-[30px]"
      >
        <FormWrapper>
          {/* main div */}
          <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-between">
            {/* Form div */}
            <div className="w-full flex items-center justify-center">
                <CarSupportForm/>
            </div>

            {/* Image div */}
            <div className="h-full hidden xl:block max-w-[680px] w-full">
                <Image src={CarFormImage} alt="Car Image" className="rounded-[10px]"/>
            </div>
          </div>
        </FormWrapper>
      </MaxWidthWrapper>
    </div>
  );
};

export default CarSupprotForm;
