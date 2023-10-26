import React from "react";
import Carousel from "../../../components/carousel";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { useTranslation } from "next-i18next";

export default function DoandDonts() {
  const { t } = useTranslation("dos-and-donts");
  let slides = [
    { img: "Mask-Group-35@2x-1.png" },
    { img: "DSC0471.jpeg" },
    { img: "Mask-Group-43@2x-2.png" },
  ];
  const liStyle = {
    style:
      "list-decimal flex flex-col space-y-2 text-md tracking-wide leading-loose text-gray-800 font-sans font-thin",
  };

  return (
    <div div className="bg-white">
      <Carousel slideimages={slides} autoSlide={true} />
      <div className="bg-white py-10 grid place-items-center w-3/4 mx-auto">
        <div className="text-3xl text-gray-800 py-10 font-semibold">{t("text1")}</div>
        <div className="grid grid-cols-12 justify-center px-20 gap-7">
          <div className="col-span-7">
            <div className="text-2xl text-gray-800 pb-5">{t("text2")}:</div>
            <div>
              <ul key={"12"} className={`${liStyle.style}`}>
                <li key={"1"}>{t("text3")}</li>
                <li key={"2"}>{t("text4")}</li>
                <li key={"3"}>{t("text5")}</li>
                <li key={"4"}>{t("text6")}</li>
                <li key={"5"}>{t("text7")}</li>
              </ul>
            </div>
          </div>
          <div className="col-span-5">
            <div className="text-2xl text-gray-800 pb-5">{t("text8")}:</div>
            <div>
              <ul key={"13"} className={`${liStyle.style}`}>
                <li key={"6"}>{t("text9")}</li>
                <li key={"7"}>{t("text10")}</li>
                <li key={"8"}>{t("text11")}</li>
                <li key={"9"}>{t("text12")}</li>
                <li key={"10"}>{t("text13")}</li>
                <li key={"11"}>{t("text14")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const getStaticProps = makeStaticProps(["header", "footer", "dos-and-donts"]);
export { getStaticPaths, getStaticProps };
