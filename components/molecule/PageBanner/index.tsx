import React from "react";
import Text from "@/components/atom/Text";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";

const Index = ({
  title,
  bgUrl,
  className,
}: {
  title: string;
  bgUrl: string;
  className?: string;
}) => {
  return (
    <div
      className={`h-[24rem] bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <MaxWidthWrapper className="h-full" isPageContent>
        <div className="flex flex-col items-center justify-center h-full text-white gap-[40px]">
          <div className="flex flex-col items-center justify-center gap-[10px]">
            <Text className="max-w-[765px] text-center" variant="title">
              {title}
            </Text>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Index;
