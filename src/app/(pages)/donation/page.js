import { Tabs } from "@/components/Tabs";
import React from "react";
import { DirMessage } from "./dir-message";
import Carousel from "@/components/carousel";

export default function Donations() {
  let slides = [
    { img: "DSC2472.jpg" },
    { img: "DSC2948.jpg" },
    { img: "Mask-Group-2.jpg" },
  ];
  return (
    <>
      <Carousel slideimages={slides} autoSlide={true} />
      <div className="bg-white mx-auto w-3/4 px-12 mt-6">
        <Tabs data={donationTabs} />
      </div>
    </>
  );
}

// JSON object with donation tab name and a component to be rendered
export const donationTabs = [
  {
    name: "Field Director's Message",
    component: <DirMessage />,
  },
  {
    name: "How to Donate ?",
    component: <div>How to Donate</div>,
  },
  {
    name: "List of Donors",
    component: <div>List of Donors</div>,
  },
];
