"use client";
import React from "react";
import LinkComponent from "./Link";

export const defaultStyle = {
    textGrid: {
        holder: "grid col-span-6 p-10 mx-10 gap-2",
    },
    imageGrid: {
        holder: "col-span-6",
    },
};

export const TextImgGrid = ({
  data,
  style = defaultStyle,
  imagePosition,
}) => {
  return (
    <>
      {data && (
        <div className="grid grid-cols-12">
          {imagePosition === "left" ? (
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
              <p className="font-base text-lg">{data.p1}</p>
              <p className="font-base text-lg">{data.p2}</p>
            </div>
            {data.link && (
              <LinkComponent href={data.link.href}>
                <p className="flex text-sm font-bold mb-16 h-full items-end pb-4 ml-4">
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
