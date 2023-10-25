"use client";
import React, { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(() => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  });

  useEffect(() => {
    setWindowDimensions(() => {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height,
      };
    });

    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
