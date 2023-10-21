import React from "react";
import { whitney } from "../../fonts";
import Link from "../../components/Link";
import { SectionTitle } from "../../components/SectionTitle";
import { Card } from "../../components/Card";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { TextImgGrid } from "../../components/TextImgGrid";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("index");

  const textImgGridData = {
    img: "Mask-Group-36@2x-1536x958.png",
    heading: t("text12"),
    p1: t("text13"),
    link: {
      text: t("text14"),
      href: "/projects-reports",
    },
  };

  return (
    <div className={`${whitney.className} `}>
      <div className="overflow-hidden">
        <div className="relative h-0 pb-[37.8571%]">
          <video
            className="w-full  object-initial -mb-24"
            autoPlay
            loop
            playsInline
            controlsList="nodownload"
            src="/videos/New-Medium-Length-July-14.mp4"
          ></video>
        </div>
      </div>
      <div className="items-center bg-white pb-1">
        <p className="flex justify-center items-center text-2xl font-medium p-4">
          {t("text0")}
        </p>
        <button
          href="https://tickets.nagaraholetigerreserve.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center bg-black text-white rounded px-6 py-2 mx-auto mb-8 font-thin uppercase"
        >
          <Link
            href="https://tickets.nagaraholetigerreserve.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("text1")}
          </Link>
        </button>
      </div>

      <div className="">
        <SectionTitle text={t("text2")} />

        {/* Grid with two columns and center border */}
        <div className="grid grid-cols-2 gap-4 text-lg font-extralight text-center leading-8 mb-16">
          <p className="flex justify-center items-center border-r border-black p-14 ">
            {t("text3")}
          </p>
          <p className="flex justify-center items-center p-14 ">{t("text4")}</p>
        </div>
      </div>
      <div className="">
        <SectionTitle text={t("text5")} />

        <p className="flex justify-center items-center w-5/6 mx-auto text-center text-lg">
          {t("text6")} <br />
          <br />
          {t("text7")} <br />
          <br />
          {t("text8")} <br />
          <br />
          {t("text9")}
          <br />
          <br />
          {t("text10")}
          <br />
          <br />
        </p>

        <Link href="/about-us">
          <p className="flex justify-center items-center mx-auto text-sm font-bold mb-16">
            {t("text11")}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </p>
        </Link>
      </div>
      <div className="w-4/5 mx-auto mb-4">
        <TextImgGrid
          data={textImgGridData}
          imagePosition={"left"}
          style={{
            textGrid: {
              holder: "grid col-span-4  mx-5 gap-2",
            },
            imageGrid: {
              holder: "col-span-8",
            },
          }}
        />
      </div>
      <div className="grid grid-cols-6 gap-4 w-4/5 mx-auto h-[500px] mb-20">
        {/* <div className="bg-[url('/images/Mask-Group-37@2x-1.png')]  object-cover"></div>
          <div className="bg-[url('/images/Mask-Group-38@2x-1024x639.png')]"></div> */}
        {/* Convert above two to <img>> */}
        <img
          src="/images/Mask-Group-37@2x-1.png"
          className=" col-span-2 h-[500px]"
        />
        <img
          src="/images/Mask-Group-38@2x-1024x639.png"
          className=" col-span-4  h-[500px]"
        />
      </div>
      <div className="font-thin w-3/4 mx-auto mb-16">
        <SectionTitle text={t("text15")} />
        <p className="">{t("text16")}</p>
        <br />
        <p>{t("text17")}</p>
        <br />
        <p>{t("text18")}</p>
        <br />
        <p>{t("text19")}</p>
      </div>
      <SectionTitle text={t("text20")} />
      <div className="grid grid-cols-3 gap-4 w-5/6 mx-auto mb-16">
        {[
          {
            title: t("text21"),
            image: "Mask-Group-44@2x-768x484.png",
            link: { name: t("text24"), href: "/gallery" },
          },
          {
            title: t("text22"),
            image: "Mask-Group-113.png",
            link: { name: t("text24"), href: "/gallery" },
          },
          {
            title: t("text23"),
            image: "Mask-Group-100.png",
            link: { name: t("text24"), href: "/gallery" },
          },
        ].map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    </div>
  );
}

const Textbold = ({ text }) => {
  return <span className="font-semibold">{text}</span>;
};

const getStaticProps = makeStaticProps(["header", "index"]);
export { getStaticPaths, getStaticProps };
