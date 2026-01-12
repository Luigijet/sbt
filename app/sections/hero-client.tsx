"use client";

import { useEffect, useRef } from "react";

import HeroServer from "./hero-server";

export default function HeroClient() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      bgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.25}px, 0)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <HeroServer bgRef={bgRef} />;
}
