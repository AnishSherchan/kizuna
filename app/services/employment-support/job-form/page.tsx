"use client";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";

import PageBanner from "@/components/molecule/PageBanner";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import FormWrapper from "@/components/Layout/FormWrapper";
import { useTranslations } from "next-intl";
import { Skeleton } from "@/components/ui/skeleton";

function FormSkeleton() {
  return (
    <div className="w-full space-y-4">
      <Skeleton className="h-full w-1/2" />
      {[...Array(16)].map((_, i) => (
        <Skeleton key={i} className="h-[45px] w-[100%]" />
      ))}
      <Skeleton className="h-10 w-1/3 float-right" />
    </div>
  );
}

const JobAppForm = dynamic(
  () => import("@/components/molecule/Forms/JobAppForm"),
  { ssr: false, loading: () => <FormSkeleton /> }
);

const CVPreview = dynamic(
  () => import("@/components/organism/EmploymentPageContent/CvPreview"),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col gap-[30px]">
        <div className=" flex justify-between">
          <Skeleton className=" w-[160px] h-[40px]" />
          <Skeleton className=" w-[160px] h-[40px]" />
        </div>
        <Skeleton className=" w-full h-[800px]" />
      </div>
    ),
  }
);

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
      termsPrivacyAccepted: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is Required."),
      mail: Yup.string()
        .email("Invalid email format.")
        .required("Email is required."),
      gender: Yup.string().required("Please Select Gender."),
      phone: Yup.string()
        .matches(/^\+?\d{10,15}$/, "Enter a valid phone number")
        .required("Phone number is required"),
      address: Yup.string().required("Address is required."),
      skills: Yup.string(),
      workExperience: Yup.string(),
      EducationLevel: Yup.string().required(
        "Please Select your passed education level."
      ),
      JpLanguageLevel: Yup.string(),
      EnglishLanguageTest: Yup.string(),
      termsPrivacyAccepted: Yup.boolean()
        .oneOf([true], "You must accept the terms and privacy policy.")
        .required("You must accept the terms and privacy policy."),
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
          <div className="w-full flex items-center justify-center">
            <JobAppForm jobSchema={jobSchema} />
          </div>
          {/* PDF */}
          <div className=" h-full w-full">
            <CVPreview formData={jobSchema.values} ref={cvRef} />
          </div>
        </FormWrapper>
      </MaxWidthWrapper>
    </main>
  );
};

export default JobForm;
