import Image from "next/image";
import Link from "next/link";
import DotPattern from "./DotPattern";

export default function OurStory() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Our Story
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight text-navy-950">
            Building Excellence
            <br />
            Since Day One
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-gray-500">
            DD Construction was founded with a simple vision – to deliver
            high-quality construction services with integrity, transparency,
            and a strong focus on client satisfaction.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Over the years, we have successfully completed a wide range of
            residential, commercial, and interior projects, earning the trust
            of our clients through our dedication and expertise.
          </p>
          <Link
            href="/about#journey"
            className="mt-7 inline-flex items-center gap-2 bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
          >
            Our Journey <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Image with decorations */}
        <div className="relative">
          <DotPattern className="absolute -left-3 -top-3 z-0 hidden text-brand/30 sm:block" />

          <div className="relative z-10 h-[300px] w-full overflow-hidden rounded shadow-xl lg:h-[340px]">
            <Image
              src="/ourstory.jpeg"
              alt="Building under construction with a tower crane"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating stat badge */}
          <div className="absolute -bottom-6 -right-4 z-20 rounded bg-brand px-7 py-5 text-white shadow-lg sm:right-4">
            <p className="text-3xl font-extrabold">10+</p>
            <p className="mt-1 text-xs leading-snug text-white/85">
              Years of
              <br />
              Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
