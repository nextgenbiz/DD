import Image from "next/image";
import Link from "next/link";

export default function CtaBanner({
  title = "Ready to Build\nSomething Great?",
  subtitle = "Let's bring your dream project to life.",
  buttonText = "Get a Free Quote",
  buttonHref = "/contact",
  accentBar = false,
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  /** Adds a short vertical blue line to the left of the heading (used on inner pages) */
  accentBar?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/cta2.png"
          alt=""
          fill
          className="object-cover object-right"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy-950/40" />

        {/* Extra left-side gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-12 lg:flex-row lg:items-center lg:px-10">
        {/* Heading + Subtitle */}
        <div className={accentBar ? "flex gap-4" : ""}>
          {accentBar && (
            <span className="mt-1 w-0.5 shrink-0 bg-brand-light" />
          )}

          <div>
            <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              {title.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <p className="mt-2 text-sm text-white/70">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Button */}
        <Link
          href={buttonHref}
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
        >
          {buttonText}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}