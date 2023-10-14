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
  src: [{ path: "./fonts/Whitney-Light.woff" }],
  variable: "--font-whitney",
});

export const whitneyCondensed = localFont({
  src: [
    // { path: "./fonts/WhitneyCondensed-Black.otf", fontWeight: "900" },
    // { path: "./fonts/WhitneyCondensed-Book.otf", fontWeight: "700" },
    { path: "./fonts/WhitneyCondensed-Light.otf" },
    // { path: "./fonts/WhitneyCondensed-Medium.otf", fontWeight: "400" },
    // { path: "./fonts/WhitneyCondensed-Semibold.otf", fontWeight: "600" },
  ],

  variable: "--font-whitney-condensed",
});
