import Image from "next/image";
import Link from "next/link";

export default function HomeCtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      {/* CTA Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/cta.png"
          alt=""
          fill
          className="object-cover"
        />

        {/* Dark overlay */}
        {/* <div className="absolute inset-0 bg-navy-950/60" /> */}

        {/* Left-to-right fade for text readability */}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-10">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Ready to Build
            <br />
            Something Great?
          </h2>

          <p className="mt-3 text-sm text-white/70">
            Let&apos;s bring your dream project to life.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
          >
            Get a Free Quote
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}