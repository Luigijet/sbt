import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { name: "Home", link: "#hero" },
  { name: "Our Healers", link: "#" },
  { name: "Retreats", link: "#" },
  { name: "Free Training Videos", link: "#" },
  { name: "Contact", link: "#" },
  { name: "Practitioner Sign in", link: "#" },
  { name: "Get Certified", link: "#" },
  { name: "Become an Affiliate", link: "#" },
];

export default function Nav() {
  return (
    <nav className="bg-nav flex items-center px-8 fixed w-full top-0 h-20 z-20">
      {/* SBT ICON */}
      <Image
        src="/logo/sbt-app-logo.webp"
        alt="SBT Energy Therapy logo"
        width={180}
        height={180}
      />

      {/* NAV LINKS */}
      <ul className="flex justify-center items-center gap-10 flex-1 font-secondary">
        {LINKS.map((link) => (
          <li key={link.name}>
            <Link
              href={link.link}
              className="text-white hover:text-foreground-subtle leading-10 transition-colors ease-in-out duration-75 font-light font-secondary text-[15px]"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* SHORTCUT BUTTON */}
      <button className="btn--primary">Match with an Energy Healer</button>
    </nav>
  );
}
