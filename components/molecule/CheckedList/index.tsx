import React from "react";
import { BiCheck } from "react-icons/bi";
import Text from "@/components/atom/Text";

const CheckedList = ({ title }: { title: string }) => {
  return (
    <div className={"flex flex-row gap-[3px] items-center justify-start"}>
      <BiCheck size={"34px"} className={"text-primary"} />
      <Text variant={"subheading"} className={"text-muted-foreground"}>
        {title}
      </Text>
    </div>
  );
};

export default CheckedList;
