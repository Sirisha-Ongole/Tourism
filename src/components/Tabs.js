// Create a component which shows tabs.
//On component selection, show another component

"use client";
import React from "react";
import Link from "next/link";

export const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div class="border-b border-gray-200 dark:border-gray-700  text-black">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center ">
        {
          // Map through the tabs data
          data.map((tab, index) => (
            <li
              class={`px-1 pb-4 mr-1 cursor-pointer ${
                // if active tab, show underline with animation from left to right
                activeTab === index
                  ? "border-b-2 border-black transition-all duration-500 transform"
                  : ""
              }`}
              key={index}
              onClick={() => setActiveTab(index)}
              onMouseOver={() => setActiveTab(index)}
            >
              {tab.name}
            </li>
          ))
        }
      </ul>
      <div class="py-10">
        {
          // Show the selected tab component
          data[activeTab].component
        }
      </div>
    </div>
  );
};
