import Image from "next/image";
import { RefObject } from "react";

type Props = {
  bgRef: RefObject<HTMLDivElement | null>;
};

export default function HeroServer({ bgRef }: Props) {
  return (
    <section className="relative min-h-screen 4xl:min-h-[75dvh] overflow-hidden flex items-center justify-center">
      {/* PARALLAX BACKGROUND */}
      <div
        ref={bgRef}
        className="absolute left-0 top-[-15%] w-full h-[130%] will-change-transform"
      >
        <Image
          src="/bg/hero.webp"
          alt="Energy healing background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[#32302f]/70" />

      <div className="relative z-10 flex flex-col items-center gap-3 px-4 text-center max-w-4xl w-full mr-95">
        <Image
          src="/logo/sbt-logo.webp"
          alt="SBT Energy Therapy logo"
          width={200}
          height={200}
        />

        <p className="text-white text-lg tracking-widest">
          - NETWORK OF HEALERS™ -
        </p>

        <h1 className="text-white font-bold font-heading text-4xl">
          Which Healer is Right for You?
        </h1>

        <button className="btn--primary px-8 text-lg mt-6">
          Match with an Energy Healer
        </button>

        <button className="btn--underline mt-2">Pricing?</button>
      </div>
    </section>
  );
}
