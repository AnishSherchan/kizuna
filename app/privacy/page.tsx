"use client";
import PageBanner from "@/components/molecule/PageBanner";
import MaxWidthWrapper from "@/components/Layout/MaxWithWrapper";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacy");

  return (
    <div>
      <PageBanner
        title={t("title")}
        bgUrl="/assets/images/BackGround/Fuji.webp"
      />
      <MaxWidthWrapper className=" py-[40px]" isPageContent>
        <div className=" text-gray-800 space-y-10">
          <h1 className="text-3xl font-bold text-center text-primary">
            {t("title")}
          </h1>
          <div className=" w-full flex justify-end py-5">
            <a
              href="/privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {t("viewDownload")} {/* Add this translation key */}
            </a>
          </div>

          <section className="space-y-4">
            <p>{t("intro1")}</p>
            <p>{t("intro2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-2">
              {t("section1.title")}
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {t.raw("section1.list").map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-2">
              {t("section2.title")}
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {t.raw("section2.list").map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-2">
              {t("section3.title")}
            </h2>
            <p>{t("section3.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-2">
              {t("section4.title")}
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {t.raw("section4.list").map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-2">
              {t("section5.title")}
            </h2>
            <p>{t("section5.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-2">
              {t("section6.title")}
            </h2>
            <p>{t("section6.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-2">
              {t("section7.title")}
            </h2>
            <p>{t("section7.text")}</p>
            <ul className="pl-0 mt-2 text-sm space-y-1">
              {t.raw("section7.address").map((line: string, idx: number) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </section>
          <div className=" w-full flex justify-end py-5">
            <a
              href="/privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {t("viewDownload")} {/* Add this translation key */}
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
