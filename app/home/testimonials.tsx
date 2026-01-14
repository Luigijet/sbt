"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { TESTIMONIALS } from "../data/static-data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  // Auto fade
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 6000);

    return () => clearInterval(timer);
  }, [total]);

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="flex flex-col gap-4 justify-center items-center py-20 px-6 bg-accent"
    >
      <Image
        src="/logo/sbt-black.webp"
        alt=""
        aria-hidden="true"
        width={80}
        height={80}
        className="object-contain w-12 h-12"
      />
      <h2
        id="testimonials-heading"
        className="text-3xl md:text-4xl font-semibold font-heading"
      >
        What Clients Say:
      </h2>

      <p id="testimonials-desc" className="sr-only">
        A rotating carousel of client testimonials. Use the navigation buttons
        to change testimonials.
      </p>

      <div
        role="region"
        aria-roledescription="carousel"
        aria-describedby="testimonials-desc"
        className="max-w-3xl text-center w-full"
      >
        {/* Fade container */}
        <div aria-live="polite" className="relative min-h-55">
          {TESTIMONIALS.map((item, i) => (
            <article
              key={i}
              aria-hidden={i !== index}
              aria-roledescription="slide"
              aria-label={`Testimonial ${i + 1} of ${total}`}
              className={`absolute inset-0 px-6 transition-opacity duration-700 ease-in-out ${
                index === i
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <blockquote className="p-6">
                <p className="italic text-lg leading-relaxed">“{item.quote}”</p>
                <footer className="mt-4 font-medium font-heading">
                  — {item.author}
                </footer>
              </blockquote>
            </article>
          ))}
        </div>

        {/* Navigation dots (SEO + UX safe) */}
        <div className="flex justify-center gap-3 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={index === i}
              className={`w-1.5 h-1.5 rounded-full transition border-2  ${
                index === i
                  ? "bg-white border-foreground"
                  : "bg-foreground border-transparent "
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
