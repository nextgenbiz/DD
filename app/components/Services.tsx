import Image from "next/image";
import Link from "next/link";

const SERVICE_CARDS = [
  {
    title: "Residential",
    subtitle: "Modern Living Spaces",
    img: "/R.jpg",
  },
  {
    title: "Commercial",
    subtitle: "Functional & Smart Spaces",
    img: "/C.jpg",
  },
  {
    title: "Interior",
    subtitle: "Beautiful Interior Designs",
    img: "/I.jpg",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-center">
        {/* Text */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            What We Do
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight text-navy-950">
            Building Excellence In Every Project
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-gray-500">
            At DD Construction, we deliver superior construction solutions
            with quality, transparency, and timely delivery.
          </p>
          <Link
            href="/services"
            className="mt-7 inline-flex items-center gap-2  bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
          >
            Learn More <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {SERVICE_CARDS.map(({ title, subtitle, img }) => (
            <div
              key={title}
              className="group relative h-[320px] overflow-hidden"
            >
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-lg font-bold">{title}</p>
                <p className="text-xs text-white/80">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
