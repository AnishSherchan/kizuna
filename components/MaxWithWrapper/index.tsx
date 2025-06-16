import React from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={` max-w-[1440px] mx-auto ${className}`}>{children}</div>
  );
};

export default MaxWidthWrapper;
