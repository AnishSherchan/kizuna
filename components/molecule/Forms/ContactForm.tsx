"use client";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import * as Yup from "yup";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { BiSolidChevronRight } from "react-icons/bi";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const contactSchema = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      address: "",
      knewAboutUs: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required."),
      email: Yup.string()
        .email("Invalid Email Address.")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Number must be 10 digits")
        .required("Phone number is required"),
      service: Yup.string().required("Choose one Service."),
      address: Yup.string().required("Address is required."),
      knewAboutUs: Yup.string().required("Choose one Platform."),
      message: Yup.string().required("Message is required."),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const newPromise = async () =>
        await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.promise(newPromise, {
        loading: "Please wait while your application is being submitted.",
        success: "Your Application has been Submitted",
        description: "It may take up to 3 business day to reach you out.",
        error: "Submission Failed. Please try again!",
      });
      resetForm();
    },
  });

  const t = useTranslations("form");
  const service = useTranslations("ServicesPage");
  return (
    <form
      onSubmit={contactSchema.handleSubmit}
      className="flex flex-col gap-[25px]"
    >
      {/* Name */}
      <div className=" flex flex-col gap-[5px]">
        <Label>{t("name")}</Label>
        <Input
          type="text"
          id="name"
          name="name"
          onChange={contactSchema.handleChange}
          value={contactSchema.values.name}
          onBlur={contactSchema.handleBlur}
          placeholder={t("namePlaceholder")}
          className="w-full h-[45px] text-[14px] rounded-[10px]"
        />
        {contactSchema.touched.name && contactSchema.errors.name && (
          <p className="text-red-500 text-sm ">{contactSchema.errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className=" flex flex-col gap-[5px]">
        <Label>{t("email")}</Label>
        <Input
          type="email"
          className="w-full h-[45px] text-[14px] rounded-[10px]"
          placeholder={t("emailPlaceholder")}
          id="email"
          name="email"
          onChange={contactSchema.handleChange}
          value={contactSchema.values.email}
          onBlur={contactSchema.handleBlur}
        />
        {contactSchema.touched.email && contactSchema.errors.email && (
          <p className="text-red-500 text-sm ">{contactSchema.errors.email}</p>
        )}
      </div>

      {/* Number */}
      <div className=" flex flex-col gap-[5px]">
        <Label>{t("phone")}</Label>
        <Input
          type="number"
          className="w-full h-[45px] text-[14px] rounded-[10px]"
          placeholder={t("phonePlaceholder")}
          id="phone"
          name="phone"
          onChange={contactSchema.handleChange}
          value={contactSchema.values.phone}
          onBlur={contactSchema.handleBlur}
        />
        {contactSchema.touched.phone && contactSchema.errors.phone && (
          <p className="text-red-500 text-sm ">{contactSchema.errors.phone}</p>
        )}
      </div>

      {/* Service */}
      <div className=" flex flex-col gap-[5px]">
        <Label>{t("service")}</Label>
        <Select
          name="service"
          value={contactSchema.values.service}
          onValueChange={(value) =>
            contactSchema.setFieldValue("service", value)
          }
        >
          <SelectTrigger className="w-full h-[45px]">
            <SelectValue placeholder={t("servicePlaceholder")} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{service("bannerTitle")}</SelectLabel>
              <SelectItem value="Employment Support Service">
                {service("service1_title")}
              </SelectItem>
              <SelectItem value="Car Life Support">
                {service("service2_title")}
              </SelectItem>
              <SelectItem value="Legal Solution">
                {service("service3_title")}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {contactSchema.touched.service && contactSchema.errors.service && (
          <p className="text-red-500 text-sm ">
            {contactSchema.errors.service}
          </p>
        )}
      </div>

      {/* Address */}
      <div className=" flex flex-col gap-[5px]">
        <Label>{t("address")}</Label>
        <Input
          id="address"
          name="address"
          onChange={contactSchema.handleChange}
          value={contactSchema.values.address}
          onBlur={contactSchema.handleBlur}
          type="string"
          className="w-full h-[45px] text-[14px] rounded-[10px]"
          placeholder={t("addressPlaceholder")}
        />
        {contactSchema.touched.address && contactSchema.errors.address && (
          <p className="text-red-500 text-sm ">
            {contactSchema.errors.address}
          </p>
        )}
      </div>

      {/* How Did you knew about us */}
      <div className=" flex flex-col gap-[5px]">
        <Label>{t("knowAboutUs")}</Label>
        <Select
          name="knewAboutUs"
          value={contactSchema.values.knewAboutUs}
          onValueChange={(value) =>
            contactSchema.setFieldValue("knewAboutUs", value)
          }
        >
          <SelectTrigger className="w-full h-[45px]">
            <SelectValue placeholder={t("knowAboutUsPlaceholder")} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{t("knowAboutUs")}</SelectLabel>
              <SelectItem value="FaceBook">FaceBook</SelectItem>
              <SelectItem value="Instagram">Instagram</SelectItem>
              <SelectItem value="TikTok">TikTok</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {contactSchema.touched.knewAboutUs &&
          contactSchema.errors.knewAboutUs && (
            <p className="text-red-500 text-sm ">
              {contactSchema.errors.knewAboutUs}
            </p>
          )}
      </div>

      {/* Message */}
      <div className=" flex flex-col gap-[5px]">
        <Label>{t("message")}</Label>
        <Textarea
          id="message"
          name="message"
          onChange={contactSchema.handleChange}
          value={contactSchema.values.message}
          onBlur={contactSchema.handleBlur}
          placeholder={t("messagePlaceholder")}
          className="w-full"
        />
        {contactSchema.touched.message && contactSchema.errors.message && (
          <p className="text-red-500 text-sm ">
            {contactSchema.errors.message}
          </p>
        )}
      </div>

      {/* Button */}
      <div className=" w-full flex justify-end">
        <Button disabled={contactSchema.isSubmitting} type="submit">
          {contactSchema.isSubmitting ? "Sending..." : t("send")}
          {!contactSchema.isSubmitting && (
            <BiSolidChevronRight className="text-white h-[12px] w-[12px] items-center" />
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
