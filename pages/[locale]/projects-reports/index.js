import React from "react";
import Carousel from "../../../components/carousel";
import { TextImgGrid } from "../../../components/TextImgGrid";
import Link from "next/link";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { useTranslation } from "next-i18next";

export default function ProjectReports() {
  let slides = [
    { img: "Mask-Group-10.png" },
    { img: "DSC5576-1-e1624969764398.jpeg" },
    { img: "DSC6832.jpeg" },
  ];

  const { t } = useTranslation("project-reports");

  const pageData = [
    {
      ImagePosition: "left",
      img: "Eco-Tourism.jpg",
      alt: "Eco-Tourism",
      heading: t("text1"),
      p1: t("text2"),
      p2: t("text3"),
    },
    {
      ImagePosition: "right",
      img: "DSC5576-1.jpeg",
      alt: "Project Tiger",
      heading: t("text4"),
      p1: t("text5"),
      p2: t("text6"),
    },
    {
      ImagePosition: "left",
      img: "Tribal-Rehabiliation-1-scaled.jpg",
      alt: "Tribal Rehabilitation",
      heading: t("text7"),
      p1: t("text8"),
      p2: t("text9"),
    },
  ];

  return (
    <div>
      <Carousel slideimages={slides} autoSlide={true} />
      <div className="lg:w-1/2 w-full mx-auto py-3">
        <div className="grid grid-cols-12 lg:gap-0 gap-x-4">
          <div className="col-span-3 lg:w-full">
            <Link
              href="https://online.fliphtml5.com/tuaau/lzgs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#D0AD59] text-white px-5 py-2">
                Birds Brochure
              </button>
            </Link>
          </div>
          <div className="col-span-3 w-full">
            <Link
              href="https://online.fliphtml5.com/tuaau/wquw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#D0AD59] text-white px-5 py-2">
                Butterfly Brochure
              </button>
            </Link>
          </div>
          <div className="col-span-3 w-full">
            <Link
              href="https://online.fliphtml5.com/tuaau/xtcv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#D0AD59] text-white px-5 py-2">
                Mammals Brochure
              </button>
            </Link>
          </div>
          <div className="col-span-3 w-full">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1eRh2X1HwF8dsiNn5fySTu0McOB3L7fWN/view?usp=sharing"
            >
              <button className="bg-[#D0AD59] text-white px-5 lg:py-2 py-5">
                CORE
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid mb-12">
        {pageData.map((data, index) => (
          <>
            <TextImgGrid
              key={index}
              data={data}
              imagePosition={data.ImagePosition}
            />
          </>
        ))}
      </div>
    </div>
  );
}

const getStaticProps = makeStaticProps(["header", "project-reports","footer"]);
export { getStaticPaths, getStaticProps };
