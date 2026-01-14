"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const IMAGES = Array.from({ length: 7 }).map(() => "/img/laura-headshot.webp");

export default function Retreats() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  function navigate(direction: "next" | "prev") {
    if (activeIndex === null) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setActiveIndex((prev) =>
        direction === "next"
          ? (prev! + 1) % IMAGES.length
          : (prev! - 1 + IMAGES.length) % IMAGES.length
      );

      setIsTransitioning(false);
    }, 200);
  }

  return (
    <section
      id="retreats"
      aria-labelledby="retreats-heading"
      className="flex flex-col gap-4 justify-center items-center py-20 px-6"
    >
      <h2
        id="retreats-heading"
        className="text-2xl md:text-4xl font-semibold font-heading"
      >
        Healing Retreats
      </h2>

      <p className="lg:text-lg leading-7 max-w-2xl text-center">
        SBT Energy Therapy® “Show Me How To Become a Healer” retreats are an
        immersive body and soul healing experience uniquely designed for a
        transformational journey to uncover the highest version of yourself.
      </p>

      <p id="retreats-gallery-desc" className="sr-only">
        {" "}
        Photo gallery from SBT Energy Therapy healing retreats.{" "}
      </p>

      <div className="w-full max-w-4xl mx-auto space-y-4 text-right">
        <ul className="grid grid-cols-1 sm:grid-cols-7 gap-2 mt-4">
          {IMAGES.map((src, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="relative group w-full focus:outline-none"
                aria-label="View retreat photo"
              >
                <Image
                  src={src}
                  alt="Healing retreat moment"
                  width={300}
                  height={300}
                  className="w-full h-80 object-cover"
                />

                <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </li>
          ))}
        </ul>

        <Link href="#" className="btn--secondary">
          Additional Photos
        </Link>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-white flex items-center justify-center"
          onClick={() => setActiveIndex(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActiveIndex(null);
            if (e.key === "ArrowRight")
              setActiveIndex((prev) => (prev! + 1) % IMAGES.length);
            if (e.key === "ArrowLeft")
              setActiveIndex(
                (prev) => (prev! - 1 + IMAGES.length) % IMAGES.length
              );
          }}
          tabIndex={0}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-3xl hover:text-primary z-10"
            aria-label="Close image"
            onClick={() => setActiveIndex(null)}
          >
            ✕
          </button>

          {/* Previous */}
          <button
            className="absolute left-4 md:left-8 text-5xl hover:text-primary z-10"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              navigate("prev");
            }}
          >
            ‹
          </button>

          {/* Image */}
          <div
            className={`relative max-w-2xl w-full px-4 transition-opacity duration-200 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={IMAGES[activeIndex]}
              alt="Healing retreat full view"
              width={700}
              height={900}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 text-5xl hover:text-primary z-10"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              navigate("next");
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
