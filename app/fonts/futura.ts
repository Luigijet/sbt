import localFont from "next/font/local";

export const futuraLT = localFont({
  src: [
    {
      path: "./futura-lt/FuturaLT-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./futura-lt/FuturaLT-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./futura-lt/FuturaLT-Oblique.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./futura-lt/FuturaLT-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./futura-lt/FuturaLT-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-futura",
  display: "swap",
});
