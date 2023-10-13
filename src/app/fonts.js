import { Inter, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const whitney = localFont({
  src: [
    { path: "./fonts/Whitney-BlackItalic.otf", weight: "900", style: "italic" },
    { path: "./fonts/whitney-bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/whitney-book.otf", weight: "400", style: "normal" },
    { path: "./fonts/whitney-bookitalic.otf", weight: "400", style: "italic" },
    { path: "./fonts/whitney-light.otf", weight: "300", style: "normal" },
    {
      path: "./fonts/whitney-lightitalic.otf",
      weight: "300",
      style: "italic",
    },
    { path: "./fonts/whitney-medium.otf", weight: "500", style: "normal" },
    {
      path: "./fonts/whitney-mediumitalic.otf",
      weight: "500",
      style: "italic",
    },
    { path: "./fonts/whitney-semibold.otf", weight: "600", style: "normal" },
    {
      path: "./fonts/whitney-semibolditalic.otf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-whitney",
});
