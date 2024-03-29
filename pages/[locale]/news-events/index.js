import Image from "next/image";
import Carousel from "../../../components/carousel";
import { SectionTitle } from "../../../components/SectionTitle";
import { Card } from "../../../components/Card";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { useTranslation } from "next-i18next";
import { FaTwitter } from "react-icons/fa";
import LinkComponent from "../../../components/Link";

export default function NewsEvents() {
  let slides = [
    { img: "DSC2129.jpeg" },
    { img: "Mask-Group-5.jpg" },
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
      title: "torisum Tiger Conservation Plan",
      image: "cropped-NTRlogo-01.png",
      link: {
        name: t("text1"),
        href: "/event/torisum-tiger-conservation-plan/",
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
      <LinkComponent
        href="/en/news-events/twitter-feed"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex justify-center w-3/4 mx-auto my-12 text-3xl text-center cursor-pointer">
          <FaTwitter />
          <span className="mx-4 text-xl">torisum Twitter Feed</span>
        </div>
      </LinkComponent>

      <div className="grid lg:grid-cols-3 gap-4 w-3/4 mx-auto my-10">
        {data.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    </>
  );
}

const getStaticProps = makeStaticProps(["header", "news-events", "footer"]);
export { getStaticPaths, getStaticProps };
