"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { LucideLanguages } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { forwardRef } from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import { BsFileEarmarkPdf } from "react-icons/bs";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlinePhone,
} from "react-icons/md";

type CvPreviewProps = {
  formData: {
    name?: string;
    mail?: string;
    phone?: string;
    address?: string;
    gender?: string;
    skills?: string;
    workExperience?: string;
    EducationLevel?: string;
    JpLanguageLevel?: string;
    EnglishLanguageTest?: string;
  };
};

const CVPreview = forwardRef<HTMLDivElement, CvPreviewProps>(
  ({ formData }, ref) => {
    const t = useTranslations("CvPreview");
    const displayValue = (value?: string) => (value !== "" ? value : "NA");
    const handleDownload = async () => {
      if (!ref || typeof ref !== "object" || !ref.current) return;

      // Clone the node into a new clean DOM
      const element = ref.current;
      const clone = element.cloneNode(true) as HTMLElement;

      // Apply inline safe styles
      clone.style.backgroundColor = "#ffffff";
      clone.style.color = "#000000";

      document.body.appendChild(clone);

      const canvas = await html2canvas(clone, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
      });

      document.body.removeChild(clone); // Clean up

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save(`${formData.name || "cv"}.pdf`);
    };

    return (
      <div className=" hidden max-w-[765px] w-full h-full xl:flex flex-col gap-[20px] ">
        <div className=" flex  items-center justify-between">
          <div className=" flex items-center gap-[15px]">
            <h2 className=" text-[20px] font-medium">{t("preview")}</h2>
            <div className=" text-[#747474] bg-[#F1F1F1] flex gap-[5px] items-center p-[8px] rounded-[10px]">
              <BsFileEarmarkPdf className=" w-[16px] h-[16px]" />
              <p>PDF</p>
            </div>
          </div>
          <div>
            <Button onClick={handleDownload}>
              {t("downloadPdf")} <BiSolidChevronDown />
            </Button>
          </div>
        </div>
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="cv-pdf-view w-full rounded-[10px] border bg-white text-black flex flex-col gap-[20px] p-[40px]"
        >
          <div className=" flex flex-col gap-[10px]">
            <h2 className="text-[20px] font-medium text-center text-[#747474]">
              Kizuna Corporation
            </h2>
            <h2 className="text-[24px] font-bold text-center text-[#000000]">
              {displayValue(formData.name)}
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <div className=" flex items-center gap-1 text-[#747474]">
              <MdOutlineEmail className=" w-[15px] h-[15px]" />{" "}
              <p className=" text-[14px] font-medium">
                {displayValue(formData.mail)}
              </p>
            </div>

            <div className=" flex items-center gap-1 text-[#747474]">
              <MdOutlinePhone className=" w-[15px] h-[15px]" />{" "}
              <p className=" text-[14px] font-medium">
                {displayValue(formData.phone)}
              </p>
            </div>

            <div className=" flex items-center gap-1 text-[#747474]">
              <LucideLanguages className=" w-[15px] h-[15px]" />{" "}
              <p className=" text-[14px] font-medium">
                {displayValue(formData.JpLanguageLevel)}
              </p>
            </div>

            <div className=" flex items-center gap-1 text-[#747474]">
              <MdOutlineLocationOn className=" w-[15px] h-[15px]" />{" "}
              <p className=" text-[14px] font-medium">
                {displayValue(formData.address)}
              </p>
            </div>
          </div>
          <Separator />

          <div className=" flex flex-col gap-[20px]">
            <h1 className=" text-[18px] font-semibold">Profile</h1>
            <div className=" flex flex-col gap-[15px]">
              <p>
                <strong className=" text-[#747474]"># Name:</strong>{" "}
                {displayValue(formData.name)}
              </p>
              <p>
                <strong className=" text-[#747474]"># Email:</strong>{" "}
                {displayValue(formData.mail)}
              </p>
              <p>
                <strong className=" text-[#747474]"># Phone:</strong>{" "}
                {displayValue(formData.phone)}
              </p>
              <p>
                <strong className=" text-[#747474]"># Gender:</strong>{" "}
                {displayValue(formData.gender)}
              </p>
              <p>
                <strong className=" text-[#747474]"># Address:</strong>{" "}
                {displayValue(formData.address)}
              </p>
            </div>
          </div>

          <Separator />

          <div className=" flex flex-col gap-[20px]">
            <h1 className=" text-[18px] font-semibold">
              Professional Qualification
            </h1>
            <div className=" flex flex-col gap-[15px]">
              <p>
                <strong className=" text-[#747474]"># Skills:</strong>{" "}
                {displayValue(formData.skills)}
              </p>
              <p>
                <strong className=" text-[#747474]"># Work Experience:</strong>{" "}
                {displayValue(formData.workExperience)}
              </p>
              <p>
                <strong className=" text-[#747474]"># Education:</strong>{" "}
                {displayValue(formData.EducationLevel)}
              </p>
              <p>
                <strong className=" text-[#747474]">
                  # JP Language Level:
                </strong>{" "}
                {displayValue(formData.JpLanguageLevel)}
              </p>

              <p>
                <strong className=" text-[#747474]"># English Test:</strong>{" "}
                {displayValue(formData.EnglishLanguageTest)}
              </p>
            </div>
          </div>

          <Separator />
          <p className=" text-center text-[#747474] font-normal text-[15px]">
            Generated by Kizuna Job Application Form
          </p>
        </div>
      </div>
    );
  }
);

CVPreview.displayName = "CVPreview";

export default CVPreview;
