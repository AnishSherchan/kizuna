"use client";
import React from "react";
import { useTranslations } from "next-intl";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { BiSolidChevronRight } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

const Legal_Form = () => {
  const t = useTranslations("form");

  const legalFormSchema = useFormik({
    initialValues: {
      name: "",
      mail: "",
      phone: "",
      address: "",
      nationality: "",
      legalServiceType: "",
      caseDetail: "",
      termsPrivacyAccepted: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is Required."),
      mail: Yup.string()
        .email("Invalid email format.")
        .required("Email is required."),
      phone: Yup.string()
        .matches(/^\+?\d{10,15}$/, "Enter a valid phone number")
        .required("Phone number is required"),
      address: Yup.string().required("Address is required."),
      nationality: Yup.string().required("Nationality is required."),
      legalServiceType: Yup.string().required("Service is required."),
      caseDetail: Yup.string().required("Case Detail is required."),
      termsPrivacyAccepted: Yup.boolean()
        .oneOf([true], "You must accept the terms and privacy policy.")
        .required("You must accept the terms and privacy policy."),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      toast.success(`Legal Application Submission Completed`, {
        description: `${values.name} we will contact you with in 3 business days!`,
      });
      resetForm();
    },
  });

  return (
    <div className=" w-full xl:max-w-[525px] xl:min-w-[525px]  flex flex-col gap-[25px] xl:p-[10px]">
      <div>
        <h3 className=" text-[24px]">
          {t("legalFormTitle")}{" "}
          <span className=" text-primary font-medium">
            {t("legalFormSpan")}
          </span>
        </h3>
      </div>

      {/* Form */}
      <form
        onSubmit={legalFormSchema.handleSubmit}
        className=" flex flex-col gap-[20px]"
      >
        <div className=" flex flex-col gap-[5px]">
          <Label>{t("name")}</Label>
          <Input
            type="text"
            id="name"
            name="name"
            onChange={legalFormSchema.handleChange}
            value={legalFormSchema.values.name}
            onBlur={legalFormSchema.handleBlur}
            placeholder={t("namePlaceholder")}
            className="w-full h-[45px] text-[14px] rounded-[10px]"
          />
          {legalFormSchema.touched.name && legalFormSchema.errors.name && (
            <p className="text-red-500 text-sm ">
              {legalFormSchema.errors.name}
            </p>
          )}
        </div>

        <div className=" flex flex-col gap-[5px]">
          <Label>{t("email")}</Label>
          <Input
            type="email"
            id="mail"
            name="mail"
            onChange={legalFormSchema.handleChange}
            value={legalFormSchema.values.mail}
            onBlur={legalFormSchema.handleBlur}
            placeholder={t("namePlaceholder")}
            className="w-full h-[45px] text-[14px] rounded-[10px]"
          />
          {legalFormSchema.touched.mail && legalFormSchema.errors.mail && (
            <p className="text-red-500 text-sm ">
              {legalFormSchema.errors.mail}
            </p>
          )}
        </div>

        <div className=" flex flex-col gap-[5px]">
          <Label>{t("phone")}</Label>
          <Input
            type="number"
            className="w-full h-[45px] text-[14px] rounded-[10px]"
            placeholder={t("phonePlaceholder")}
            id="phone"
            name="phone"
            onChange={legalFormSchema.handleChange}
            value={legalFormSchema.values.phone}
            onBlur={legalFormSchema.handleBlur}
          />
          {legalFormSchema.touched.phone && legalFormSchema.errors.phone && (
            <p className="text-red-500 text-sm ">
              {legalFormSchema.errors.phone}
            </p>
          )}
        </div>

        <div className=" flex flex-col gap-[5px]">
          <Label>{t("address")}</Label>
          <Input
            id="address"
            name="address"
            onChange={legalFormSchema.handleChange}
            value={legalFormSchema.values.address}
            onBlur={legalFormSchema.handleBlur}
            type="string"
            className="w-full h-[45px] text-[14px] rounded-[10px]"
            placeholder={t("addressPlaceholder")}
          />
          {legalFormSchema.touched.address &&
            legalFormSchema.errors.address && (
              <p className="text-red-500 text-sm ">
                {legalFormSchema.errors.address}
              </p>
            )}
        </div>

        <div className=" flex flex-col gap-[5px]">
          <Label>{t("nationality")}</Label>
          <Input
            id="nationality"
            name="nationality"
            onChange={legalFormSchema.handleChange}
            value={legalFormSchema.values.nationality}
            onBlur={legalFormSchema.handleBlur}
            type="string"
            className="w-full h-[45px] text-[14px] rounded-[10px]"
            placeholder={t("nationalityPlaceholder")}
          />
          {legalFormSchema.touched.nationality &&
            legalFormSchema.errors.nationality && (
              <p className="text-red-500 text-sm ">
                {legalFormSchema.errors.nationality}
              </p>
            )}
        </div>

        <div className=" flex flex-col gap-[15px]">
          <h3 className=" font-semibold">Case Information</h3>
          <div className=" flex flex-col gap-[20px]">
            <div className=" flex flex-col gap-[5px]">
              <Label>{t("legalServiceType")}</Label>
              <Select
                name="EnglishLanguageTest"
                value={legalFormSchema.values.legalServiceType}
                onValueChange={(value) =>
                  legalFormSchema.setFieldValue("legalServiceType", value)
                }
              >
                <SelectTrigger className="w-full h-[45px]">
                  <SelectValue placeholder={t("legalServiceTypePlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{t("legalServiceType")}</SelectLabel>
                    <SelectItem value="visa">{t("visa")}</SelectItem>
                    <SelectItem value="others">{t("others")}</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {legalFormSchema.touched.legalServiceType &&
                legalFormSchema.errors.legalServiceType && (
                  <p className="text-red-500 text-sm ">
                    {legalFormSchema.errors.legalServiceType}
                  </p>
                )}
            </div>

            <div className=" flex flex-col gap-[5px]">
              <Label>{t("caseDetail")}</Label>
              <Textarea
                id="caseDetail"
                name="caseDetail"
                onChange={legalFormSchema.handleChange}
                value={legalFormSchema.values.caseDetail}
                onBlur={legalFormSchema.handleBlur}
                placeholder={t("caseDetailPlaceholder")}
                className="w-full"
              />
              {legalFormSchema.touched.caseDetail &&
                legalFormSchema.errors.caseDetail && (
                  <p className="text-red-500 text-sm ">
                    {legalFormSchema.errors.caseDetail}
                  </p>
                )}
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-[5px]">
          <div className="flex items-start gap-2">
            <Checkbox
              id="termsPrivacyAccepted"
              name="termsPrivacyAccepted"
              checked={legalFormSchema.values.termsPrivacyAccepted}
              onCheckedChange={(checked) =>
                legalFormSchema.setFieldValue("termsPrivacyAccepted", !!checked)
              }
              onBlur={legalFormSchema.handleBlur}
            />
            <Label htmlFor="termsPrivacyAccepted" className="text-sm">
              {t("termsPart1")}{" "}
              <Link
                href="/terms-and-conditions"
                className="underline text-[#0000FF]"
              >
                {t("terms")}
              </Link>{" "}
              {t("termsPart2")}{" "}
              <Link href="/privacy" className="underline text-[#0000FF]">
                {t("privacy")}
              </Link>{" "}
              {t("termsPart3")}
            </Label>
          </div>
          {legalFormSchema.touched.termsPrivacyAccepted &&
            legalFormSchema.errors.termsPrivacyAccepted && (
              <p className="text-red-500 text-sm">
                {legalFormSchema.errors.termsPrivacyAccepted}
              </p>
            )}
        </div>

        {/* Button */}
        <div className=" w-full flex justify-end">
          <Button disabled={legalFormSchema.isSubmitting} type="submit">
            {legalFormSchema.isSubmitting ? "Sending..." : t("submit")}
            {!legalFormSchema.isSubmitting && (
              <BiSolidChevronRight className="text-white h-[12px] w-[12px] items-center" />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Legal_Form;
