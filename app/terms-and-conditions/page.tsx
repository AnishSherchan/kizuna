"use client";
import PageBanner from "@/components/molecule/PageBanner";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";

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

          <div className="w-full flex justify-end py-5">
            <a
              href="/terms.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {t("viewDownload")}
            </a>
          </div>

          {Array.from({ length: 11 }, (_, i) => {
            const index = i + 1;

            const sectionTitle = t(`section${index}.title`);
            const sectionList = t.raw(`section${index}.list`);
            const sectionContent = t(`section${index}.content`);

            // Skip if no content at all
            const hasList =
              Array.isArray(sectionList) && sectionList.length > 0;
            const hasContent =
              sectionContent && sectionContent.trim().length > 0;

            if (!hasList && !hasContent) return null;

            return (
              <section key={index} className=" space-y-5">
                <div>
                  <h2 className="text-2xl font-semibold mt-8 mb-2">
                    {sectionTitle}
                  </h2>

                  {hasList ? (
                    <ul className="list-disc pl-6 space-y-1">
                      {sectionList.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : hasContent ? (
                    <p>{sectionContent}</p>
                  ) : null}
                </div>
                <Separator />
              </section>
            );
          })}

          <div className="w-full flex justify-end py-5">
            <a
              href="/terms.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {t("viewDownload")}
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
