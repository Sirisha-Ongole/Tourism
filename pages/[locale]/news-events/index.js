import Image from "next/image";
import Carousel from "../../../components/carousel";
import { SectionTitle } from "../../../components/SectionTitle";
import { Card } from "../../../components/Card";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { useTranslation } from "next-i18next";

export default function newsEvents() {
  let slides = [
    { img: "DSC2472.jpg" },
    { img: "DSC2948.jpg" },
    { img: "Mask-Group-2.jpg" },
  ];

  const { t } = useTranslation("news-events");

  const data = [
    {
      title: "Wildlife Photography Contest",
      image: "Test.png",
      link: { name: t("text1"), href: "/event/wildlife-photography-contest/" },
    },
    {
      title: "Nagarahole Tiger Conservation Plan",
      image: "cropped-NTRlogo-01.png",
      link: {
        name: t("text1"),
        href: "/event/nagarahole-tiger-conservation-plan/",
      },
    },
    {
      title: "Clean Kabini",
      image: "image-42.png",
      link: { name: t("text1"), href: "/event/clean-kabini" },
    },
    {
      title: "Latest News",
      image: "cropped-NTRlogo-01.png",
      link: { name: t("text1"), href: "/event/latest-news-2" },
    },
    {
      title: "Tender",
      image: "image2.png",
      link: { name: t("text1"), href: "/event/tender" },
    },
    {
      title: "International Tiger Day",
      image: "DSC2472.jpg",
      link: { name: t("text1"), href: "/gallery" },
    },
  ];

  return (
    <>
      <Carousel slideimages={slides} autoSlide={true} />
      <SectionTitle text={t("text2")} />
      <div className="grid grid-cols-3 gap-4 w-3/4 mx-auto my-12">
        {data.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    </>
  );
}

const getStaticProps = makeStaticProps(["header", "news-events", "footer"]);
export { getStaticPaths, getStaticProps };
