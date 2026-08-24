import { ShieldCheck, Building2, Users, GraduationCap } from "lucide-react";

const STATS = [
  { icon: ShieldCheck, value: "10+", label: "Years of Experience" },
  { icon: Building2, value: "150+", label: "Projects Completed" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: GraduationCap, value: "20+", label: "Expert Engineers" },
];

export default function Stats() {
  return (
    <section className="bg-brand">
      <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4 px-6 lg:px-10">
        {STATS.map(({ icon: Icon, value, label }, index) => (
          <div
            key={label}
            className={`
              flex items-center justify-center gap-3 py-7
              sm:justify-center sm:gap-4
              ${
                index !== STATS.length - 1
                  ? "border-white/15 sm:border-r"
                  : ""
              }
              ${
                index < 2
                  ? "border-b sm:border-b-0"
                  : ""
              }
            `}
          >
            {/* Icon */}
            <Icon
              size={34}
              strokeWidth={1.5}
              className="shrink-0 text-white"
            />

            {/* Number + Label */}
            <div className="text-left">
              <p className="text-2xl font-extrabold leading-none text-white sm:text-3xl">
                {value}
              </p>

              <p className="mt-1 text-[11px] leading-tight text-white/75 sm:text-xs">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}