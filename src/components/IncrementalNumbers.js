"use client";
import React, { useState, useEffect } from "react";

export const IncrementalNumbers = ({
  max = 100,
  styles = "text-6xl text-[#D0AD59]",
}) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => {
        if (prev === max) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return <div className={styles}>{number}</div>;
};
