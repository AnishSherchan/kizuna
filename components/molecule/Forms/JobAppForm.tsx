"use client";
import React from "react";

import { BiSolidChevronRight } from "react-icons/bi";

import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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

import { useTranslations } from "next-intl";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

// eslint-disable-next-line
const JobAppForm = ({ jobSchema }: { jobSchema: any }) => {
  const t = useTranslations("form");

  return (
    <div className=" w-full xl:max-w-[525px] xl:min-w-[525px]  flex flex-col gap-[25px] xl:p-[10px]">
      <div>
        <h3 className=" text-[24px]">
          {t("jobFormTitle")}{" "}
          <span className=" text-primary font-medium">{t("jobFormSpan")}</span>
        </h3>
      </div>

      {/* Form */}
      <form
        onSubmit={jobSchema.handleSubmit}
        className=" flex flex-col gap-[20px]"
      >
        <div className=" flex flex-col gap-[5px]">
          <Label>{t("name")}</Label>
          <Input
            type="text"
            id="name"
            name="name"
            onChange={jobSchema.handleChange}
            value={jobSchema.values.name}
            onBlur={jobSchema.handleBlur}
            placeholder={t("namePlaceholder")}
            className="w-full h-[45px] text-[14px] rounded-[10px]"
          />
          {jobSchema.touched.name && jobSchema.errors.name && (
            <p className="text-red-500 text-sm ">{jobSchema.errors.name}</p>
          )}
        </div>

        <div className=" flex flex-col gap-[5px]">
          <Label>{t("email")}</Label>
          <Input
            type="email"
            id="mail"
            name="mail"
            onChange={jobSchema.handleChange}
            value={jobSchema.values.mail}
            onBlur={jobSchema.handleBlur}
            placeholder={t("namePlaceholder")}
            className="w-full h-[45px] text-[14px] rounded-[10px]"
          />
          {jobSchema.touched.mail && jobSchema.errors.mail && (
            <p className="text-red-500 text-sm ">{jobSchema.errors.mail}</p>
          )}
        </div>

        <div className=" flex flex-col gap-[5px]">
          <Label>{t("gender")}</Label>
          <RadioGroup
            name="gender"
            id="gender"
            onValueChange={(value) => jobSchema.setFieldValue("gender", value)}
            defaultValue={jobSchema.values.gender}
            value={jobSchema.values.gender}
            className="flex flex-row gap-[20px]"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">{t("male")}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">{t("female")}</Label>
            </div>
          </RadioGroup>
          {jobSchema.touched.gender && jobSchema.errors.gender && (
            <p className="text-red-500 text-sm ">{jobSchema.errors.gender}</p>
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
            onChange={jobSchema.handleChange}
            value={jobSchema.values.phone}
            onBlur={jobSchema.handleBlur}
          />
          {jobSchema.touched.phone && jobSchema.errors.phone && (
            <p className="text-red-500 text-sm ">{jobSchema.errors.phone}</p>
          )}
        </div>

        {/* Address */}
        <div className=" flex flex-col gap-[5px]">
          <Label>{t("address")}</Label>
          <Input
            id="address"
            name="address"
            onChange={jobSchema.handleChange}
            value={jobSchema.values.address}
            onBlur={jobSchema.handleBlur}
            type="string"
            className="w-full h-[45px] text-[14px] rounded-[10px]"
            placeholder={t("addressPlaceholder")}
          />
          {jobSchema.touched.address && jobSchema.errors.address && (
            <p className="text-red-500 text-sm ">{jobSchema.errors.address}</p>
          )}
        </div>

        {/* Skills */}
        <div className=" flex flex-col gap-[5px]">
          <Label>{t("skills")}</Label>
          <Input
            id="skills"
            name="skills"
            onChange={jobSchema.handleChange}
            value={jobSchema.values.skills}
            onBlur={jobSchema.handleBlur}
            type="string"
            className="w-full h-[45px] text-[14px] rounded-[10px]"
            placeholder={t("skillsPlaceholder")}
          />
          {jobSchema.touched.skills && jobSchema.errors.skills && (
            <p className="text-red-500 text-sm ">{jobSchema.errors.skills}</p>
          )}
        </div>

        <div className=" flex flex-col gap-[5px]">
          <Label>{t("workExperience")}</Label>
          <Textarea
            id="workExperience"
            name="workExperience"
            onChange={jobSchema.handleChange}
            value={jobSchema.values.workExperience}
            onBlur={jobSchema.handleBlur}
            placeholder={t("workExperiencePlaceholder")}
            className="w-full"
          />
          {jobSchema.touched.workExperience &&
            jobSchema.errors.workExperience && (
              <p className="text-red-500 text-sm ">
                {jobSchema.errors.workExperience}
              </p>
            )}
        </div>

        <div className=" flex flex-col gap-[5px]">
          <Label>{t("educationLevel")}</Label>
          <Select
            name="service"
            value={jobSchema.values.EducationLevel}
            onValueChange={(value) =>
              jobSchema.setFieldValue("EducationLevel", value)
            }
          >
            <SelectTrigger className="w-full h-[45px]">
              <SelectValue placeholder={t("educationLevelPlaceholder")} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{t("educationLevel")}</SelectLabel>
                <SelectItem value="School Level">School Level</SelectItem>
                <SelectItem value="High School">High School</SelectItem>
                <SelectItem value="Bachelors">Bachelors</SelectItem>
                <SelectItem value="Masters">Masters</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {jobSchema.touched.EducationLevel &&
            jobSchema.errors.EducationLevel && (
              <p className="text-red-500 text-sm ">
                {jobSchema.errors.EducationLevel}
              </p>
            )}
        </div>

        <div className=" flex flex-col gap-[5px]">
          <Label>{t("JpLevel")}</Label>
          <Select
            name="JpLanguageLevel"
            value={jobSchema.values.JpLanguageLevel}
            onValueChange={(value) =>
              jobSchema.setFieldValue("JpLanguageLevel", value)
            }
          >
            <SelectTrigger className="w-full h-[45px]">
              <SelectValue placeholder={t("JpLevelPlaceholder")} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{t("JpLevel")}</SelectLabel>
                <SelectItem value="N1-JPL">N1</SelectItem>
                <SelectItem value="N2-JPL">N2</SelectItem>
                <SelectItem value="N3-JPL">N3</SelectItem>
                <SelectItem value="N4-JPL">N4</SelectItem>
                <SelectItem value="N5-JPL">N5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {jobSchema.touched.JpLanguageLevel &&
            jobSchema.errors.JpLanguageLevel && (
              <p className="text-red-500 text-sm ">
                {jobSchema.errors.JpLanguageLevel}
              </p>
            )}
        </div>

        <div className=" flex flex-col gap-[5px]">
          <Label>{t("enLangTest")}</Label>
          <Select
            name="EnglishLanguageTest"
            value={jobSchema.values.EnglishLanguageTest}
            onValueChange={(value) =>
              jobSchema.setFieldValue("EnglishLanguageTest", value)
            }
          >
            <SelectTrigger className="w-full h-[45px]">
              <SelectValue placeholder={t("enLangTestPlaceholder")} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{t("enLangTest")}</SelectLabel>
                <SelectItem value="TOEIC">TOEIC</SelectItem>
                <SelectItem value="IELTS">IELTS</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {jobSchema.touched.EnglishLanguageTest &&
            jobSchema.errors.EnglishLanguageTest && (
              <p className="text-red-500 text-sm ">
                {jobSchema.errors.EnglishLanguageTest}
              </p>
            )}
        </div>

        <div className=" flex flex-col gap-[5px]">
          <div className="flex items-start gap-2">
            <Checkbox
              id="termsPrivacyAccepted"
              name="termsPrivacyAccepted"
              checked={jobSchema.values.termsPrivacyAccepted}
              onCheckedChange={(checked) =>
                jobSchema.setFieldValue("termsPrivacyAccepted", !!checked)
              }
              onBlur={jobSchema.handleBlur}
            />
            <Label htmlFor="termsPrivacyAccepted" className="text-sm">
              {t("termsPart1")}{" "}
              <Link
                href="/terms-and-conditions"
                className="underline text-[#0000FF]"
                target={'_blank'}
              >
                {t("terms")}
              </Link>{" "}
              {t("termsPart2")}{" "}
              <Link href="/privacy" className="underline text-[#0000FF]" target={'_blank'}>
                {t("privacy")}
              </Link>{" "}
              {t("termsPart3")}
            </Label>
          </div>
          {jobSchema.touched.termsPrivacyAccepted &&
            jobSchema.errors.termsPrivacyAccepted && (
              <p className="text-red-500 text-sm">
                {jobSchema.errors.termsPrivacyAccepted}
              </p>
            )}
        </div>

        {/* Button */}
        <div className=" w-full flex justify-end">
          <Button disabled={jobSchema.isSubmitting} type="submit">
            {jobSchema.isSubmitting ? "Sending..." : t("submit")}
            {!jobSchema.isSubmitting && (
              <BiSolidChevronRight className="text-white h-[12px] w-[12px] items-center" />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default JobAppForm;
