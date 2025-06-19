import React from "react";
import ContactUsForm from "@/components/molecule/Forms/ContactForm";

const ContactFormCard = ({ title }: { title: string }) => {
  return (
    <div className="p-[30px] md:p-[45px] grow w-full flex-1 border border-border_color rounded-[20px]">
      <h2 className=" text-[24px] font-normal pb-[25px]">{title}</h2>
      <ContactUsForm />
    </div>
  );
};

export default ContactFormCard;
