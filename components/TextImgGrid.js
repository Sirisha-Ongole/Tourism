"use client";
import React from "react";
import LinkComponent from "./Link";
import useWindowDimensions  from "../hooks/useWindowDimensions";
import { useEffect, useState } from "react";

export const defaultStyle = {
    textGrid: {
        holder: "grid lg:col-span-6 col-span-12 p-10 mx-10 gap-2",
    },
    imageGrid: {
        holder: "lg:col-span-6 col-span-12",
    },
};

export const TextImgGrid = ({
  data,
  style = defaultStyle,
  imagePosition,
}) => {

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <>
      {data && (
        <div className="grid grid-cols-12">
          {imagePosition === "left" || windowWidth <= "820" ? (
            <>
              <ImgGrid data={data} style={style.imageGrid} />
              <TextGrid data={data} style={style.textGrid} />
            </>
          ) : (
            <>
              <TextGrid data={data} style={style.textGrid} />
              <ImgGrid data={data} style={style.imageGrid} />
            </>
          )}
        </div>
      )}
    </>
  );
};

const ImgGrid = ({ data, style }) => {
  return (
    <>
      <div className={style.holder}>
        {data && (
          <img
            className="object-cover"
            src={`/images/${data.img}`}
            alt={data.alt}
          />
        )}
      </div>
    </>
  );
};

const TextGrid = ({ data, style }) => {
    return (
    <>
      <div className={style.holder}>
        {data && (
          <>
            <div className="text-2xl">{data.heading}</div>
            <div className="">
              <p className="font-base text-lg">{data.p1}</p><br/>
              <p className="font-base text-lg">{data.p2}</p>
            </div>
            {data.link && (
              <LinkComponent href={data.link.href}>
                <p className="flex text-sm font-bold lg:mb-16 h-full items-end pb-4 lg:ml-4">
                  {data.link.text}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </p>
              </LinkComponent>
            )}
          </>
        )}
      </div>
    </>
  );
};
