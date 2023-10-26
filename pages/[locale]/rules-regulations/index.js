import React from "react";
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";

export default function RefundandCacellation() {
  const { t } = useTranslation("refund-and-cancellation");

  const liStyle = {
    style : "list-disc flex flex-col space-y-2 text-md tracking-wide  text-gray-800 font-sans font-thin"
  }

  return (
    <div className="bg-white p-10">
      <div className="lg:w-1/2 w-full mx-auto">
        <div className="text-3xl font-bold mx-auto text-center mb-10">
          {t("text1")}
        </div>
        <ul className={`${liStyle.style}`}>
          <li>{t("text2")}</li>
          <li>{t("text3")}</li>
          <li>{t("text4")}</li>
          <li>{t("text5")}</li>
          <li>{t("text6")}</li>
          <li>{t("text7")}</li>
          <li>{t("text8")}</li>
          <li>{t("text9")}</li>
          <li>{t("text10")}</li>
          <li>{t("text11")}</li>
          <li>{t("text12")}</li>
          <li>{t("text13")}</li>
        </ul>
      </div>
    </div>
  );
}

const getStaticProps = makeStaticProps([
  "header",
  "footer",
  "refund-and-cancellation",
]);
export { getStaticPaths, getStaticProps };
