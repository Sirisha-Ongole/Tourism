import { whitney, whitneyCondensed } from "../../../fonts";
import { Card } from "../../../components/Card";
import { IncrementalNumbers } from "../../../components/IncrementalNumbers";
import { SectionTitle } from "../../../components/SectionTitle";
import Carousel from "../../../components/carousel";
import Link from "../../../components/Link";
import React from "react";
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";

const AboutUs = () => {
  const { t } = useTranslation("about");

  let slides = [
    { img: "DSC2472.jpg" },
    { img: "DSC2948.jpg" },
    { img: "Mask-Group-2.jpg" },
  ];

  const biodiversityData = [
    {
      type: t("text13"),
      subTypes: [
        { count: 182, type: t("text14") },
        { count: 18, type: t("text15") },
      ],
    },
    {
      type: t("text16"),
      subTypes: [
        { count: 32, type: t("text17") },
        { count: 270, type: t("text18") },
        { count: 167, type: t("text19") },
      ],
    },
    {
      type: t("text20"),
      subTypes: [
        { count: 31, type: t("text21") },
        { count: 1, type: t("text22") },
        { count: 1, type: t("text23") },
        { count: 13, type: t("text24") },
        { count: 9, type: t("text25") },
      ],
    },
  ];

  const otherAttractions = [
    {
      image: "Mask-Group-44@2x-768x484.png",
      title: t("text27"),
      text: t("text28"),
      link: { name: t("text29") },
    },
    {
      title: t("text30"),
      image: "Mask-Group-113.png",
      text: t("text31"),
      link: { name: t("text32") },
    },
    {
      title: t("text33"),
      image: "Mask-Group-100.png",
      text: t("text34"),
      link: { name: t("text35") },
    },
  ];

  return (
    <div>
      <Carousel slideimages={slides} autoSlide={true} />
      <SectionTitle text={t("text1")} />
      <div
        className={`${whitney.className} w-4/5 text-base mx-auto text-center `}
      >
        <p className="">
          {t("text2")} <br /> <br /> {t("text3")}
          <br /> <br /> {t("text4")}
        </p>{" "}
        <SectionTitle text={t("text5")} />
        <img
          src="/images/Map-scaled.jpg"
          alt="map"
          className=" mx-auto mr-24 mb-16"
        />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap">
          <img
            src="/images/DS.jpeg"
            alt="map"
            className=" mx-auto lg:col-span-2 col-span-6"
          />
          <div className="lg:col-span-1 col-span-6 lg:ps-20">
            <SectionTitle
              text={t("text6")}
              appendStyles={true}
              styles={"mt-4 lg:text-left text-center"}
            />
            <p className="lg:text-left text-center">{t("text7")}</p>
            <button
              className={`${whitneyCondensed.className} bg-black text-white rounded flex lg:mx-0 px-6 py-2 mt-8 mx-auto `}
            >
              {t("text8")}
            </button>
          </div>
        </div>
        <SectionTitle text={t("text9")} />
        <p className="w-3/4 mx-auto mb-20">{t("text10")}</p>
        <SectionTitle text={t("text11")} />
        <SectionTitle text={t("text12")} styles={"mt-2 mb-12"} />
        {biodiversityData.map((item, index) => (
          <div key={index} className="grid lg:grid-cols-4 grid-cols-3 gap-4">
            <div className="text-2xl lg:col-span-1 col-span-3 font-bold my-auto p-2.5 justify-center">{item.type}</div>
            <div className="col-span-3">
              <div className="grid grid-cols-3 lg:gap-1 gap-7 text-center">
                {item.subTypes.map((subItem, index) => (
                  <div key={index}>
                    <IncrementalNumbers max={subItem.count} />
                    <div className="text-lg font-bold mb-12">
                      {subItem.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <SectionTitle text={t("text26")} />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 ">
          {otherAttractions.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </div>
        <Link href="/explore-nagarahole/">
          <button className="bg-black text-white rounded flex items-start px-6 py-2 mt-8 mx-auto tracking-tighter mb-8">
            {t("text36")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;

const getStaticProps = makeStaticProps(["header", "about", "footer"]);
export { getStaticPaths, getStaticProps };
