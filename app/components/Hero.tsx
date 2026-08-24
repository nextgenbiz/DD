import Image from "next/image";
import Link from "next/link";
import { PlayCircle, Box, Timer, Users, ShieldCheck } from "lucide-react";

const TRUST_ITEMS = [
  { icon: Box, title: "Premium", subtitle: "Quality Materials" },
  { icon: Timer, title: "On Time", subtitle: "Project Delivery" },
  { icon: Users, title: "Skilled", subtitle: "Professional Team" },
  { icon: ShieldCheck, title: "Customer", subtitle: "Satisfaction" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
  {/* Hero */}
  <div className="relative h-[640px] w-full lg:min-h-screen">
    {/* Background image */}
    <Image
      src="/hero.png"
      alt="Modern house exterior at night"
      fill
      priority
      className="object-cover"
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/10 to-transparent" />

    {/* Content */}
    <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl">
          We Build
          <br />
          <span className="text-brand-light">Your Dream</span>
          <br />
          Into Reality
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-white/80">
          Premium construction solutions for Residential, Commercial &amp;
          Interior Spaces built with trust and quality.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2  bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
          >
            Explore Projects <span aria-hidden>→</span>
          </Link>

          <button className="inline-flex items-center gap-2 text-sm font-semibold text-white">
            <PlayCircle size={22} />
            Watch Video
          </button>
        </div>
      </div>
    </div>

    {/* Trust Strip - Glass Effect */}
    <div className="absolute bottom-0 left-0 right-0 z-20">
      <div className="mx-auto  overflow-hidden  border border-white/15 bg-[] backdrop-blur-xl">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {TRUST_ITEMS.map(({ icon: Icon, title, subtitle }, index) => (
            <div
              key={title}
              className={`flex items-center gap-3 px-5 py-5 sm:px-6 ${
                index !== TRUST_ITEMS.length - 1
                  ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                  : ""
              } ${
                index === 1
                  ? "border-r border-white/10"
                  : ""
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10">
                <Icon
                  size={24}
                  className="text-white"
                  strokeWidth={1.5}
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  {title}
                </p>
                <p className="mt-0.5 text-xs text-white/60">
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
