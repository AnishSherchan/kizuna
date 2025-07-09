"use client";
import PageBanner from "@/components/molecule/PageBanner";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { BsFileEarmarkPdf } from "react-icons/bs";

export default function TermsOfServicePage() {
  const t = useTranslations("terms");

  return (
    <div>
      <PageBanner
        title={t("title")}
        bgUrl="/assets/images/BackGround/Fuji.webp"
      />
      <MaxWidthWrapper className="py-[40px]" isPageContent>
        <div className="text-gray-800 space-y-10">
          <h1 className="text-3xl font-bold text-center text-primary">
            {t("title")}
          </h1>

          <div className="w-full flex py-1">
            <a
              href="/terms.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-blue-600 flex items-center gap-2 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              <BsFileEarmarkPdf className=" w-[20px] h-[20px]" />
              {t("viewDownload")}
            </a>
          </div>

          <div>{t("termsIntro")}</div>

          {/* Sections */}
          <article className=" flex flex-col gap-5">
            {/* eslint-disable */}
            {t.raw("sectionTerms")?.map((article: any, idx: number) => (
              <div key={idx} className=" space-y-2">
                <h2 className="text-[24px] font-semibold">{article.title}</h2>
                <p>{article.desc}</p>
                {article?.list && (
                  <>
                    <ul className=" list-decimal ml-6 pb-4 space-y-2">
                      {article?.list?.map((listItem: any, index: number) => (
                        <li key={index} className=" space-y-2">
                          <h3>{listItem?.title}</h3>
                          <ul className=" list-[lower-roman] list-inside ml-6 space-y-2">
                            {listItem?.points?.map(
                              (pointsTitle: any, i: number) => (
                                <li key={i}>{pointsTitle?.title}</li>
                              )
                            )}
                          </ul>
                        </li>
                      ))}
                    </ul>
                    <Separator />
                  </>
                )}
              </div>
            ))}
          </article>

          <div className="w-full flex justify-end py-1">
            <a
              href="/terms.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-blue-600 flex items-center gap-2 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              <BsFileEarmarkPdf className=" w-[20px] h-[20px]" />
              {t("viewDownload")}
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
