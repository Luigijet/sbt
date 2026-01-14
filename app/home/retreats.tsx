import Image from "next/image";
import Link from "next/link";

export default function Retreats() {
  return (
    <section
      aria-labelledby="retreats-heading"
      className="flex flex-col gap-4 justify-center items-center py-20 px-6"
    >
      <h2
        id="retreats-heading"
        className="text-3xl md:text-4xl font-semibold font-heading"
      >
        Healing Retreats
      </h2>

      <p className="text-lg leading-7 max-w-2xl text-center">
        SBT Energy Therapy® “Show Me How To Become a Healer” retreats are an
        immersive body and soul healing experience uniquely designed for a
        transformational journey to uncover the highest version of yourself.
      </p>

      <p id="retreats-gallery-desc" className="sr-only">
        Photo gallery from SBT Energy Therapy healing retreats.
      </p>

      <div className="max-w-4xl mx-auto space-y-4 text-right">
        <ul className="grid grid-cols-1 lg:grid-cols-7 gap-2 mt-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <li
              key={i}
              className="relative group cursor-pointer focus-within:outline-none"
            >
              <Image
                src="/img/laura-headshot.webp"
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={200}
                height={200}
                className="h-90 w-full object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-accent/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </li>
          ))}
        </ul>

        <Link
          href="#"
          className="btn--secondary"
          aria-label="View additional retreat photos"
        >
          Additional Photos
        </Link>
      </div>
    </section>
  );
}
