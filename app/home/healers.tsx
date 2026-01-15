import { HEALERS } from "../data/static-data";
import slugifyId from "../utils/slugify";

import HealerCard from "./healer-card";

export default function Healers() {
  return (
    <section
      id="healers"
      aria-labelledby="healers-heading"
      className="flex flex-col gap-4 items-center py-20 px-6 bg-accent"
    >
      <h2
        id="healers-heading"
        className="text-2xl md:text-4xl font-semibold font-heading"
      >
        Meet the Healers
      </h2>

      <p className="lg:text-lg leading-7 max-w-2xl text-center">
        No more guessing which practitioner is right for you.
      </p>

      <p id="healers-description" className="sr-only">
        A list of energy healing practitioners. Each card includes a short
        biography that can be expanded.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-4">
        {HEALERS.map((healer) => {
          return (
            <HealerCard key={`${slugifyId(healer.name)}`} healer={healer} />
          );
        })}
      </ul>
    </section>
  );
}
