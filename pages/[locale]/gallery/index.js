
import React, { useEffect } from "react";
import Carousel from "../../../components/carousel";
import { SectionTitle } from "../../../components/SectionTitle";
import { whitneyCondensed } from "../../../fonts";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { useTranslation } from "next-i18next";

export default function Gallery() {
  // Extract unique types from images array
  const types = [...new Set(images.map((image) => image.type))];
  // At index 0, we have "All" type
  types.unshift("All");

  const [selectedType, setSelectedType] = React.useState(types[0]);
  useEffect(() => {
    console.log(types);
  }, []);

  let slides = [
    { img: "DSC2472.jpg" },
    { img: "DSC2948.jpg" },
    { img: "Mask-Group-2.jpg" },
  ];

  const { t } = useTranslation("gallery");

  return (
    <>
      <Carousel slideimages={slides} autoSlide={true} />
      <SectionTitle text="Gallery" />
      <div className="flex justify-center items-center">
        {types.map((type, index) => (
          <button
            key={index}
            className={`hover:bg-[#D0AD59] hover:text-white ${
              selectedType === type
                ? "bg-[#D0AD59] rounded text-white"
                : " text-black bg-transparent"
            }  font-thin uppercase px-6 py-2 mx-2 }`}
            onClick={() => setSelectedType(type)}
          >
            {t(type)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 w-5/6 mx-auto my-12">
        {images.map((item, index) => (
          <div
            key={index}
            className={`${
              selectedType === "All" || selectedType === item.type
                ? "block"
                : "hidden"
            }`}
          >
            <img
              className="w-full h-full object-cover"
              src={`/images/${item.image}`}
              alt="gallery"
            />
          </div>
        ))}
      </div>
    </>
  );
}

const images = [
  {
    image: "Mask-Group-9.png",
    type: "Carnivores",
  },
  {
    image: "Mask-Group-7.png",
    type: "Carnivores",
  },
  {
    image: "PM_6078-1-300x169.png",
    type: "Birds",
  },
  {
    image: "DSC1778-224x300.jpg",
    type: "Birds",
  },
  {
    image: "DSC1499-300x226.jpg",
    type: "Birds",
  },
  {
    image: "PM_5226-1-211x300.png",
    type: "Birds",
  },
  {
    image: "DSC1499-300x226.jpg",
    type: "Birds",
  },
  {
    image: "DSC_6022-300x200.jpg",
    type: "Herbivores",
  },
  {
    image: "DSC7587-300x200.jpg",
    type: "Herbivores",
  },

  {
    image: "DSC3308-300x200.jpeg",
    type: "Birds",
  },
  {
    image: "PM_7222-300x169.png",
    type: "Birds",
  },
  {
    image: "68I6120-250x300.jpg",
    type: "Birds",
  },
  {
    image: "DSC3387-300x200.jpg",
    type: "Carnivores",
  },
  {
    image: "DSC2018-300x200.jpg",
    type: "Carnivores",
  },
  {
    image: "DSC7468-300x214.jpg",
    type: "Carnivores",
  },
  {
    image: "Mask-Group-1-300x128.png",
    type: "Herbivores",
  },
  {
    image: "Mask-Group-2-300x128.jpg",
    type: "Herbivores",
  },
  {
    image: "Mask-Group-10-300x128.png",
    type: "Herbivores",
  },
  {
    image: "T5U6026_HIRES-300x200.jpg",
    type: "Carnivores",
  },
  {
    image: "DSC2472.jpg",
    type: "Carnivores",
  },
  {
    image: "DSC2948.jpg",
    type: "Carnivores",
  },
];

const getStaticProps = makeStaticProps(["header", "gallery","footer"]);
export { getStaticPaths, getStaticProps };
