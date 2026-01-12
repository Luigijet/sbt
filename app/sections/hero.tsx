import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[75dvh] flex flex-col gap-3 items-center justify-center text-center bg-[url('/bg/hero.webp')] bg-fixed bg-cover">
      <div className="absolute inset-0 bg-[#32302f]/70" />
      <div className="relative z-10 flex flex-col items-start gap-2 lg:max-w-4xl w-full">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/logo/sbt-logo.webp"
            alt="SBT Energy Therapy logo"
            width={200}
            height={200}
            priority
            className="h-50 w-50 object-contain"
          />
          <h6 className="text-white text-lg tracking-widest">
            - NETWORK OF HEALERS™ -
          </h6>
          <h2 className="text-white font-bold font-heading text-4xl">
            Which Healer is Right for You?
          </h2>
          <button type="button" className="btn--primary px-8 text-lg mt-10">
            Match with an Energy Healer
          </button>
          <button className="btn--underline mt-2">Pricing?</button>
        </div>
      </div>
    </section>
  );
}
