import Image from "next/image";
import Link from "next/link";

export default function Background() {
  return (
    <section
      aria-labelledby="background-heading"
      className="flex min-h-[70dvh]"
    >
      <figure className="flex-1 relative flex flex-col gap-4 items-center justify-center bg-secondary">
        <Image
          src="/img/laura-healing.webp"
          alt="Energy healer guiding a client during a one-on-one healing session in a calm indoor setting"
          loading="lazy"
          width={400}
          height={400}
          className="object-cover w-105 h-105 rounded-sm"
        />
        <Link href="#" className="btn--secondary  text-center w-105">
          Meet Laura, Founder of the Network of Healers™
        </Link>
      </figure>

      <div className="flex-1 flex justify-center items-center">
        <div
          className="flex flex-col gap-4 max-w-md"
          role="region"
          aria-labelledby="background-heading"
        >
          <h2
            id="background-heading"
            className="font-heading font-semibold text-4xl"
          >
            What is SBT Energy Therapy®?
          </h2>

          <p className="leading-7 max-w-2xl">
            Subtle Body Transmutation Energy Therapy™ is the process of tapping
            into your subconscious mind and Subtle Energy Body, to identify
            energy blocks or imbalances causing you pain or suffering. Once we
            identify the low vibrational frequency (mistaken beliefs, negative
            emotions, or stagnant energy) we can transmute or release it. This
            brings your body back into a state of homeostasis so you can heal
            and fulfill your greatest potential.
          </p>

          <Link
            href="#"
            className="btn--primary  max-w-fit mt-2"
            aria-label="Match with an energy healer"
          >
            Match with an Energy Healer
          </Link>
        </div>
      </div>
    </section>
  );
}
