"use client";
import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";

import PageBanner from "@/components/molecule/PageBanner";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import FormWrapper from "@/components/Layout/FormWrapper";
import { useTranslations } from "next-intl";
import JobAppForm from "@/components/molecule/Forms/JobAppForm";
import CVPreview from "@/components/organism/EmploymentPageContent/CvPreview";

const JobForm = () => {
  const t = useTranslations("EmploymentSupportPage");
  const cvRef = useRef(null);
  const jobSchema = useFormik({
    initialValues: {
      name: "",
      mail: "",
      gender: "",
      phone: "",
      address: "",
      skills: "",
      workExperience: "",
      EducationLevel: "",
      JpLanguageLevel: "",
      EnglishLanguageTest: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is Required."),
      mail: Yup.string()
        .email("Invalid email format.")
        .required("Email is required."),
      gender: Yup.string().required("Please Select Gender."),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Number must be 10 digits")
        .required("Phone number is required"),
      address: Yup.string().required("Address is required."),
      skills: Yup.string(),
      workExperience: Yup.string(),
      EducationLevel: Yup.string().required(
        "Please Select your passed education level."
      ),
      JpLanguageLevel: Yup.string(),
      EnglishLanguageTest: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      toast.success("Job Application Submission Completed", {
        description: "We will contact you with in 3 business days!",
      });
      resetForm();
    },
  });

  return (
    <main>
      <PageBanner
        title={t("jobApplicationForm")}
        bgUrl="/assets/images/BackGround/Meeting.webp"
        className="bg-center"
      />
      <MaxWidthWrapper isPageContent className=" flex flex-col gap-[30px]">
        <FormWrapper>
          {/* Form */}
          <JobAppForm jobSchema={jobSchema} />
          {/* PDF */}
          <CVPreview formData={jobSchema.values} ref={cvRef} />
        </FormWrapper>
      </MaxWidthWrapper>
    </main>
  );
};

export default JobForm;
