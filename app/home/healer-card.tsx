"use client";

import Image from "next/image";
import { useState } from "react";

type HealerCardProps = {
  healer: {
    name: string;
    desc: string;
    group: string;
    img: string;
  };
};

export default function HealerCard({ healer }: HealerCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li>
      <article
        aria-labelledby={`healer-${healer.name}`}
        className="group h-full flex flex-col bg-white border border-transparent rounded-lg overflow-hidden hover:border-primary shadow-md transition-all duration-300"
      >
        <Image
          src={healer.img}
          alt="Portrait of Laura, energy healing practitioner"
          loading="lazy"
          width={200}
          height={200}
          className="h-45 w-full object-cover"
        />

        <div className="flex-1 flex flex-col p-5 md:p-6">
          <h3
            id={`healer-${healer.name}`}
            className="text-lg font-semibold mb-1 text-primary"
          >
            {healer.name}
          </h3>

          <p className="text-sm font-medium mb-4">{healer.group}</p>

          <div className="flex-1 mb-4">
            <div
              id={`healer-desc-${healer.name}`}
              className={`text-sm text-muted-foreground leading-relaxed space-y-4 transition-all duration-300 ${
                expanded ? "" : "line-clamp-3"
              }`}
            >
              {healer.desc
                .trim()
                .split(/\n\s*\n/)
                .map((paragraph: string, i: number) => (
                  <p key={i}>{paragraph}</p>
                ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-label={
              expanded
                ? `Collapse biography of ${healer.name}`
                : `Expand biography of ${healer.name}`
            }
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        </div>
      </article>
    </li>
  );
}
