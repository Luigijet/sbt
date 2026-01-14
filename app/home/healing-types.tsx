import Image from "next/image";

import { HEALING_TYPES } from "../data/static-data";

export default function HealingTypes() {
  return (
    <section
      aria-labelledby="healing-types-heading"
      className="relative flex flex-col items-center gap-4 py-22 px-6 text-center bg-accent/30"
    >
      <h2
        id="healing-types-heading"
        className="font-heading font-semibold text-2xl lg:text-4xl"
      >
        What is Your Pain Costing You?
      </h2>

      <p className="lg:text-lg leading-7 max-w-2xl">
        How much more will you spend doing things the old way? It has cost many
        their relationships, jobs, hope, time, energy and more.
      </p>

      <h3 className="mt-8 mb-4 text-xl lg:text-2xl text-primary font-heading font-semibold">
        Our Network of Healers™ helps you try something new:
      </h3>

      <p id="healing-types-desc" className="sr-only">
        A list of healing approaches offered by our network of healers.
      </p>

      <ul
        aria-describedby="healing-types"
        className="max-w-4xl grid grid-cols-1 lg:grid-cols-3 w-full gap-10"
      >
        {HEALING_TYPES.map((type) => (
          <li key={type.title}>
            <article
              aria-labelledby={`healing-${type.title.replace(" ", "-")}`}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={`/icon/${type.title.replace(" ", "-")}.webp`}
                alt=""
                aria-hidden="true"
                width={160}
                height={160}
                sizes="(max-width: 768px) 100vw, 160px"
                className="h-30 w-30 lg:h-40 lg:w-40 object-contain"
              />
              <h4
                id={`healing-${type.title.replace(" ", "-")}`}
                className="uppercase text-primary tracking-widest lg:text-lg"
              >
                {type.title}
              </h4>
              <p className="leading-6 text-primary mt-5">{type.desc}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
