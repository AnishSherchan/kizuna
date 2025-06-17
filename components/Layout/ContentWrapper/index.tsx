import React from "react";
import Text from "@/components/atom/Text";

const ContentWrapper = ({
  children,
  className,
  heading,
  subHeading,
  headingSpan,
}: {
  children: React.ReactNode;
  className?: string;
  heading: string;
  subHeading?: string;
  headingSpan?: string;
}) => {
  return (
    <div
      className={`py-[40px] flex flex-col gap-[50px] justify-center items-center ${className}`}
    >
      <div className={"flex flex-col gap-[5px] text-center max-w-[510px] "}>
        <Text variant={"heading"}>
          {heading}
          <span className={"text-primary font-medium"}> {subHeading}</span>
        </Text>
        <Text variant={"subheading"} className={"text-muted-foreground"}>
          {headingSpan}
        </Text>
      </div>
      {children}
    </div>
  );
};

export default ContentWrapper;
