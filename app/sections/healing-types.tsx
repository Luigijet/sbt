import Image from "next/image";

import { HEALING_TYPES } from "../data/healing-types";

export default function HealingTypes() {
  return (
    <section className="relative flex flex-col items-center gap-4 py-22 px-6 text-center">
      <h2 className="font-heading font-semibold text-4xl">
        What is Your Pain Costing You?
      </h2>

      <p className="text-xl leading-7 max-w-2xl">
        How much more will you spend doing things the old way? It has cost many
        their relationships, jobs, hope, time, energy and more.
      </p>

      <h3 className="mt-8 mb-4 text-2xl text-primary font-heading font-semibold">
        Our Network of Healers™ helps you try something new:
      </h3>

      <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-3 w-full gap-10">
        {HEALING_TYPES.map((type) => (
          <article
            key={type.title}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={`/icon/${type.title.replace(" ", "-")}.webp`}
              alt={`${type.title} logo`}
              width={160}
              height={160}
              sizes="(max-width: 768px) 100vw, 160px"
              className="h-40 w-40 object-contain"
            />
            <h4 className="uppercase text-primary tracking-widest text-lg">
              {type.title}
            </h4>
            <p className="leading-6 text-primary mt-5">{type.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
