import { whitneyCondensed } from "../fonts";
import React from "react";

export const SectionTitle = ({ text, styles, appendStyles = true }) => {
  const defaultStyleClasses = `flex justify-center items-center font-semibold lg:text-4xl text-2xl mt-16 mb-4 ${whitneyCondensed.className}`;

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
