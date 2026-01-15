import Image from "next/image";
import Link from "next/link";

import { GET_STARTED } from "../data/static-data";

export default function GetStarted() {
  return (
    <section
      aria-labelledby="get-started-heading"
      className="flex flex-col lg:flex-row min-h-[70dvh]"
    >
      <figure className="flex-1 relative flex items-center justify-center lg:items-end lg:justify-end">
        <div className="absolute inset-0">
          <Image
            src="/bg/get-started.webp"
            alt="Two women embracing during an energy healing session"
            loading="lazy"
            width={100}
            height={100}
            sizes="100vw"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Contrast overlay */}
        <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
        <figcaption className="relative z-10 text-white space-y-2 py-20 px-6 lg:py-25 lg:px-20">
          <h2
            id="get-started-heading"
            className="font-heading font-bold text-3xl lg:text-5xl"
          >
            Get Started!
          </h2>
          <p className="leading-6 lg:text-lg max-w-sm">
            Our Network of Healers™ asks your subconscious the underlying cause
            of the energy imbalance you suffer from, getting to the core now –
            and ending your pain.
          </p>
        </figcaption>
      </figure>

      <div className="flex-1 flex flex-col gap-6 justify-center items-center py-20 px-6">
        <p id="get-started-desc" className="sr-only">
          Three steps to match with an energy healer.
        </p>
        <ol aria-describedby="get-started-desc" className="max-w-md space-y-8">
          {GET_STARTED.map((item, idx) => (
            <li key={idx} className="flex gap-4">
              <Image
                src={item.img}
                alt={item.title}
                aria-hidden="true"
                loading="lazy"
                width={80}
                height={80}
                className="object-cover w-15 h-15 lg:w-20 lg:h-20"
              />
              <div className="space-y-2">
                <h3 className="uppercase text-primary text-lg">
                  {idx + 1}: {item.title}
                </h3>
                <p className="leading-7">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <Link href="#" className="btn--primary">
          Match with an Energy Healer
        </Link>
      </div>
    </section>
  );
}
