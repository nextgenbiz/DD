import { Headphones, Phone } from "lucide-react";

export default function AssistanceBanner({
  title = "Need Immediate Assistance?",
  subtitle = "Call us now or drop us an email. We're here to help!",
  phoneNumber = "+91 98765 43210",
  phoneHref = "tel:+919876543210",
}: {
  title?: string;
  subtitle?: string;
  phoneNumber?: string;
  phoneHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-8 sm:flex-row sm:items-center lg:px-10">
        <div className="flex items-center gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand">
            <Headphones size={24} className="text-white" strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-lg font-bold text-white">{title}</p>
            <p className="mt-0.5 text-sm text-white/60">{subtitle}</p>
          </div>
        </div>

        <a
          href={phoneHref}
          className="inline-flex shrink-0 items-center gap-2 rounded-md border border-brand-light/40 px-5 py-3 text-sm transition-colors hover:bg-white/5"
        >
          <span className="font-semibold text-brand-light">Call Now</span>
          <Phone size={15} className="text-white/70" />
          <span className="font-medium text-white">{phoneNumber}</span>
        </a>
      </div>

      {/* Decorative line-art building (inline SVG, low-opacity) */}
      <svg
        viewBox="0 0 400 220"
        className="pointer-events-none absolute -right-10 bottom-0 hidden w-[320px] text-white/10 lg:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="20" y="60" width="90" height="140" />
        <rect x="130" y="20" width="110" height="180" />
        <rect x="260" y="90" width="80" height="110" />
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={i} x={140 + (i % 3) * 30} y={40 + Math.floor(i / 3) * 30} width="18" height="18" />
        ))}
      </svg>
    </section>
  );
}
