import React from "react";

const MaxWidthWrapper = ({
  children,
  className,
  isPageContent,
}: {
  children: React.ReactNode;
  className?: string;
  isPageContent?: boolean;
}) => {
  return (
    <div
      className={` max-w-[1440px] mx-auto ${className} ${
        isPageContent ? "px-[30px] md:px-[60px]" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
