import { whitney, whitneyCondensed } from "@/app/fonts";
import React from "react";

export const SectionTitle = ({ text, styles, appendStyles = true }) => {
  const defaultStyleClasses = `flex justify-center items-center font-semibold text-4xl mt-16 mb-4 ${whitneyCondensed.className}`;

  return (
    <h2
      className={
        appendStyles
          ? `${defaultStyleClasses} ${styles}`
          : styles
          ? styles
          : defaultStyleClasses
      }
    >
      {text}
    </h2>
  );
};
