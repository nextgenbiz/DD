import Image from "next/image";
import { Building2, Users, HardHat, Ruler } from "lucide-react";
import DotPattern from "./DotPattern";

const STATS = [
  { icon: Building2, value: "150+", label: "Projects Completed" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: HardHat, value: "20+", label: "Expert Engineers" },
  { icon: Ruler, value: "10M+", label: "Sq. Ft. Delivered" },
];

export default function OurApproach() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-10 pb-20 lg:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Image with decoration */}
        <div className="relative">
          <DotPattern className="absolute -bottom-4 -left-3 z-0 hidden text-brand/30 sm:block" />
          <div className="relative z-10 h-[380px] w-full overflow-hidden rounded shadow-xl">
            <Image
              src="https://picsum.photos/seed/dd-approach-house/1200/1400"
              alt="Modern house exterior at dusk"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text + stats */}
        <div className="pt-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Our Approach
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight text-navy-950">
            Focused On People,
            <br />
            Driven By Results
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-500">
            We follow a client-centric approach from consultation to
            completion. Our team ensures every project is delivered on time,
            within budget, and beyond expectations.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
            {STATS.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={`flex items-start gap-3 pb-6 ${
                  i < 2 ? "border-b border-gray-200" : ""
                } ${i % 2 === 0 ? "sm:border-r sm:border-gray-200 sm:pr-8" : ""}`}
              >
                <Icon size={26} className="mt-0.5 shrink-0 text-brand" strokeWidth={1.5} />
                <div>
                  <p className="text-2xl font-extrabold text-navy-950">
                    {value}
                  </p>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
