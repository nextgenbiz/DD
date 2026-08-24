import { MapPin } from "lucide-react";

// Replace this query with your real business address or "lat,lng" for accurate placement.
const MAP_QUERY = "123 Construction Street, City";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  MAP_QUERY
)}&output=embed`;
const DIRECTIONS_HREF = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  MAP_QUERY
)}`;

export default function LocationMap() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
      <div className="relative h-[440px] w-full overflow-hidden border border-gray-200">
        <iframe
          title="DD Construction location"
          src={MAP_EMBED_SRC}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Overlay location card */}
        <div className="absolute left-1 top-1 z-10 w-72  bg-white p-6 shadow-lg">
          <div className="flex items-center gap-2 text-navy-950">
            <MapPin size={18} className="text-brand" />
            <h3 className="text-base font-bold">Our Location</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            We are located in the heart of the city, easily accessible and
            always ready to assist you.
          </p>
          <a
            href={DIRECTIONS_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md border border-brand px-4 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Get Directions <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
