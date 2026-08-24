import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHeader({
  eyebrow,
  titleLines,
  description,
  breadcrumbs,
  bgImage,
}: {
  eyebrow: string;
  /** Each line rendered separately; set `highlight: true` to color it brand-light */
  titleLines: { text: string; highlight?: boolean }[];
  description: string;
  breadcrumbs: Crumb[];
  bgImage: string;
}) {
  return (
    <section className="relative h-[420px] w-full overflow-hidden bg-navy-950 lg:h-[480px]">
      <Image src={bgImage} alt="" fill priority className="object-cover" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-16 lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">
          {eyebrow}
        </p>

        <h1 className="mt-3 max-w-xl text-4xl font-extrabold leading-tight sm:text-5xl">
          {titleLines.map((line, i) => (
            <span
              key={i}
              className={`block ${line.highlight ? "text-brand-light" : "text-white"}`}
            >
              {line.text}
            </span>
          ))}
        </h1>

        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75">
          {description}
        </p>

        <span className="mt-6 h-0.5 w-10 bg-brand-light" />

        <nav className="mt-6 flex items-center gap-2 text-xs text-white/60">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
              {i < breadcrumbs.length - 1 && <span>›</span>}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
