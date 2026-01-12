import localFont from "next/font/local";

export const avenirLT = localFont({
  src: [
    {
      path: "./avenir-lt/AvenirLTPro-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./avenir-lt/AvenirLTPro-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./avenir-lt/AvenirLTPro-Oblique.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./avenir-lt/AvenirLTPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./avenir-lt/AvenirLTPro-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
  display: "swap",
});
