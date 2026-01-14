import Link from "next/link";

export default function Advertise() {
  return (
    <section
      aria-labelledby="advertise-heading"
      className="relative overflow-hidden"
    >
      <div
        className="
            relative
           min-h-[30dvh]
            bg-[url('/bg/grass.webp')]
            bg-cover
            bg-center
            bg-fixed
            flex flex-col items-center justify-center
            gap-2
            p-6
          "
      >
        {/* Contrast overlay */}
        <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
        <h2
          id="advertise-heading"
          className="text-2xl md:text-4xl font-semibold font-heading text-white relative z-10"
        >
          Stay in the Loop
        </h2>

        <p className="lg:text-lg leading-7 max-w-2xl text-center text-white relative z-10">
          Receive updates on upcoming events
        </p>

        <Link href="#" className="btn--secondary text-white mt-4 relative z-10">
          Retreat Interest List
        </Link>
      </div>

      <div className="bg-primary p-6 flex items-center justify-center">
        <Link href="#" className="btn--primary text-lg px-12">
          Be Our Podcast Guest
        </Link>
      </div>
    </section>
  );
}
