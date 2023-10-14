import Image from "next/image";
import Carousel from "../../../components/carousel";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";

export default function newsEvents() {
  let slides = [
    { img: "DSC2472.jpg" },
    { img: "DSC2948.jpg" },
    { img: "Mask-Group-2.jpg" },
  ];
  return (
    <>
      <Carousel slideimages={slides} autoSlide={true} />
      <SectionTitle text="Latest News & Updates about Nagarahole" />
      <div className="grid grid-cols-3 gap-4 w-3/4 mx-auto my-12">
        {data.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    </>
  );
}

const data = [
  {
    title: "Wildlife Photography Contest",
    image: "Test.png",
    link: { name: "DISCOVER MORE", href: "/gallery" },
  },
  {
    title: "Nagarahole Tiger Conservation Plan",
    image: "cropped-NTRlogo-01.png",
    link: { name: "DISCOVER MORE", href: "/gallery" },
  },
  {
    title: "Clean Kabini",
    image: "image-42.png",
    link: { name: "DISCOVER MORE", href: "/gallery" },
  },
  {
    title: "Latest News",
    image: "cropped-NTRlogo-01.png",
    link: { name: "DISCOVER MORE", href: "/gallery" },
  },
  {
    title: "Tender",
    image: "image2.png",
    link: { name: "DISCOVER MORE", href: "/gallery" },
  },
  {
    title: "International Tiger Day",
    image: "DSC2472.jpg",
    link: { name: "DISCOVER MORE", href: "/gallery" },
  },
];
