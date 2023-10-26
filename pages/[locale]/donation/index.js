import { Tabs } from "../../../components/Tabs";
import React from "react";
import DirMessage from "./dir-message";
import Carousel from "../../../components/carousel";
import HowDonate  from "./how-donate";
import Donors  from "./donors";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { useTranslation } from "next-i18next";

export default function Donations() {
  const { t } = useTranslation("donation");

  let slides = [
    { img: "DSC2472.jpg" },
    { img: "DSC2948.jpg" },
    { img: "Mask-Group-2.jpg" },
  ];

  const donationTabs = [
    {
      name: t('text1'),
      component: <DirMessage />,
    },
    {
      name: t('text2'),
      component: <HowDonate />,
    },
    {
      name: t('text3'),
      component: <Donors />,
    },
  ];

  return (
    <>
      <Carousel slideimages={slides} autoSlide={true} />
      <div className="bg-white mx-auto lg:w-3/4 w-full px-12 mt-6 bg-[#2424240D] ">
        <Tabs data={donationTabs} />
      </div>
    </>
  );
}

const getStaticProps = makeStaticProps(["header", "donation","footer"]);
export { getStaticPaths, getStaticProps };
