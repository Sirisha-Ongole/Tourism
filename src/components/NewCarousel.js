"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import '../../public/css/carousel.css';

export const NewCarousel = ({ slides }) => {
  return (
    <Carousel height={200}>
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            <img src={`/images/${slide.img}`} />
          </div>
        );
      })}
    </Carousel>
  );
};
