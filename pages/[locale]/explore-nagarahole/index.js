import React from "react";
import Carousel from "../../../components/carousel";
import { TextOverImg } from "../../../components/TextOverImg";
import { useRouter } from "next/router";

import i18nextConfig from "../../../next-i18next.config";
import { exploreData as exploreDataEn } from "../../../public/locales/en/explore";
import { exploreData as exploreDataKn } from "../../../public/locales/kn/explore";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { useTranslation } from "next-i18next";

export default function ExploreTourisum() {
  let slides = [
    { img: "Mask-Group-35@2x-1.png" },
    { img: "DSC0471.jpeg" },
    { img: "Mask-Group-43@2x-2.png" },
  ];

  const { t } = useTranslation("common");
  const router = useRouter();
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

  const pageData = currentLocale === "en" ? exploreDataEn : exploreDataKn;
  return (
    <>
      <Carousel slideimages={slides} autoSlide={true} />
      <div className="grid text-center">
        <div className="text-4xl text-center pt-20">{t("explore")}</div>
      </div>
      <div className="grid gap-3">
        {pageData.map((data, index) => (
          <>
            <TextOverImg
              key={index}
              data={data}
              gridPosition={data.gridPosition}
            />
          </>
        ))}
      </div>
    </>
  );
}

const getStaticProps = makeStaticProps(["header", "common", "footer"]);
export { getStaticPaths, getStaticProps };
