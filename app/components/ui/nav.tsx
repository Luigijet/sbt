"use client";

import { useState } from "react";
import Image from "next/image";

const LINKS = [
  { name: "Home", link: "#hero" },
  { name: "What is SBT Energy Therapy", link: "#about" },
  { name: "Our Healers", link: "#healers" },
  { name: "Retreats", link: "#retreats" },
  { name: "Free Training Videos", link: "#videos" },
  { name: "Contact", link: "#footer" },
  { name: "Practitioner Sign in", link: "#" },
  { name: "Get Certified", link: "#" },
  { name: "Become an Affiliate", link: "#" },
  { name: "My Account", link: "#" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAV BAR */}
      <nav className="bg-nav fixed top-0 w-full h-20 z-30 px-8 flex items-center gap-7">
        {/* Logo */}
        <Image
          src="/logo/sbt-app-logo.webp"
          alt="SBT Energy Therapy logo"
          width={160}
          height={160}
        />

        {/* Desktop Links */}
        <ul className="hidden lg:flex flex-1 justify-center gap-4 2xl:gap-8 ">
          {LINKS.map((link) => {
            if (
              link.name === "My Account" ||
              link.name === "What is SBT Energy Therapy"
            )
              return;

            return (
              <li key={link.name}>
                <a
                  href={`/${link.link}`}
                  className="text-white hover:text-foreground-subtle text-[15px] font-light transition-colors font-secondary"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <button className="hidden 2xl:block btn--primary">
          Match with an Energy Healer
        </button>

        {/* Mobile Hamburger */}
        <button
          className="ml-auto lg:hidden text-primary text-3xl"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-[#5c5a57] flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-[#d6c48f] text-3xl"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {/* Links */}
          <ul className="flex flex-col items-center justify-center gap-6 h-full text-[#d6c48f] font-heading text-lg">
            {LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={`/${link.link}`}
                  onClick={() => setOpen(false)}
                  className="hover:opacity-80 transition-opacity"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
