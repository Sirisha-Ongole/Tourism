import React from "react";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { useTranslation } from "next-i18next";

export const DirMessage = () => {
  const { t } = useTranslation("donation");

  return (
    <div className="font-thin text-[#656565] text-lg">
      <p>
        {t("text4")}
        <br />
        {t("text5")}
      </p>
      <br />
      <br />
      <p className="font-semibold">
        {t("text6")}
        <br />
        {t("text7")}
      </p>
    </div>
  );
};

const getStaticProps = makeStaticProps(["header", "donation","footer"]);
export { getStaticPaths, getStaticProps };
