import Image from "next/image";
import Link from "next/link";
import { Lightbulb, Target, BadgeCheck } from "lucide-react";

const VALUE_CARDS = [
  {
    icon: Lightbulb,
    title: "Our Vision",
    text: "To be a leader in the construction industry by delivering innovative and sustainable solutions.",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "To provide high-quality construction services that exceed expectations every time.",
  },
  {
    icon: BadgeCheck,
    title: "Our Values",
    text: "Integrity, transparency, quality, and commitment in everything we do.",
  },
];

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Who We Are
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight text-navy-950">
            Building Future, Restoring Past
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-gray-500">
            DD Construction is a pioneer construction company delivering
            world-class residential, commercial, and interior solutions with
            a focus on quality, reliability, and timeless craftsmanship.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            With a team of experienced professionals, we turn ideas into
            reality and build spaces that last a lifetime.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2  bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
          >
            Learn More <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Image */}
        <div className="relative h-[340px] w-full overflow-hidden  shadow-xl lg:h-[400px]">
          <Image
            src="/About2.jpg"
            alt="Modern residential building exterior"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Vision / Mission / Values */}
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {VALUE_CARDS.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded border border-gray-200 p-6 transition-shadow hover:shadow-md"
          >
            <Icon size={28} className="text-brand" strokeWidth={1.5} />
            <h3 className="mt-4 text-base font-bold text-navy-950">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
