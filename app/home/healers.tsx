import { HEALERS } from "../data/static-data";

import HealerCard from "./healer-card";

export default function Healers() {
  return (
    <section className="flex flex-col gap-4 items-center py-20 px-6 bg-accent">
      <h2 className="text-3xl md:text-4xl font-semibold font-heading">
        Meet the Healers
      </h2>

      <p className="text-lg leading-7 max-w-2xl text-center">
        No more guessing which practitioner is right for you.
      </p>

      <ul
        className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12"
        role="list"
      >
        {Array.from({ length: 8 }).map((_, i) => {
          const healer = HEALERS[i % HEALERS.length];
          return <HealerCard key={`${healer.name}-${i}`} healer={healer} />;
        })}
      </ul>
    </section>
  );
}
