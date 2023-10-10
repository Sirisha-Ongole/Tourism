import { Tabs } from "@/components/Tabs";
import React from "react";
import { DirMessage } from "./dir-message";

export default function Donations() {
  return (
    <div className="bg-white mx-auto w-3/4 px-12">
      <div>Welcome to Donations</div>
      <Tabs data={donationTabs} />
    </div>
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
