import React from "react";

import Text from "@/components/atom/Text";

const StepsCard = ({
  title = "Reach out",
  description = "Contact us via phone, email or our website",
  Icon,
}: {
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}) => {
  return (
    <div className=" max-w-[266px] px-[30px] flex flex-col gap-[40px]">
      <Icon />
      {/* Texts */}
      <div>
        <h2 className=" text-[24px] font-normal text-center">{title}</h2>
        <Text variant="card_text" className=" text-[#747474] text-center">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default StepsCard;
