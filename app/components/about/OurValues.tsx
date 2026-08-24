import { ShieldCheck, BadgeCheck, Users, Lightbulb } from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "We believe in honest, ethical practices and transparent communication.",
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    text: "We never compromise on quality and deliver the best in every project.",
  },
  {
    icon: Users,
    title: "Commitment",
    text: "We are committed to our clients, our work, and each other.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We embrace new technologies and better ways to build a better tomorrow.",
  },
];

export default function OurValues() {
  return (
    <section className="bg-gray-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
          Our Values
        </p>
        <h2 className="mt-3 text-4xl font-extrabold text-navy-950">
          The Principles That Guide Us
        </h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`px-6 py-6 ${
                i > 0 ? "lg:border-l lg:border-gray-200" : ""
              }`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <Icon size={36} className="text-brand" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-base font-bold text-navy-950">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
