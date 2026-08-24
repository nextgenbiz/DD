import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Home, Building2, Building, Sofa } from "lucide-react";
import Navbar from "../../components/Navbar";
import CtaBanner from "../../components/about/CtaBanner";
import Footer from "../../components/Footer";
import { PROJECTS, CATEGORY_LABELS } from "../../components/project/projects";

const CATEGORY_ICONS = {
  residential: Home,
  commercial: Building2,
  apartment: Building,
  interior: Sofa,
};

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return notFound();

  const Icon = CATEGORY_ICONS[project.category];
  const otherProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero image */}
      <section className="relative h-[380px] w-full overflow-hidden bg-navy-950 pt-20 lg:h-[440px]">
        <Image src={project.image} alt={project.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-navy-950/10" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-10 lg:px-10">
          <Link
            href="/projects"
            className="mb-4 inline-flex w-fit items-center gap-2 text-xs font-medium text-white/70 hover:text-white"
          >
            <ArrowLeft size={14} /> Back to Projects
          </Link>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-light">
            <Icon size={15} />
            {CATEGORY_LABELS[project.category]}
          </div>
          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-white/75">
            <MapPin size={14} /> {project.location}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-2xl font-extrabold text-navy-950">
              Project Overview
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              {project.description}
            </p>
          </div>

          {/* Fact sheet */}
          <aside className="h-fit rounded-xl border border-gray-200 p-6">
            <h3 className="text-sm font-bold text-navy-950">Project Details</h3>
            <dl className="mt-4 flex flex-col gap-4 text-sm">
              {[
                ["Client", project.client],
                ["Location", project.location],
                ["Area", project.area],
                ["Duration", project.duration],
                ["Status", project.status],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-gray-100 pb-3">
                  <dt className="text-gray-500">{label}</dt>
                  <dd className="text-right font-semibold text-navy-950">{value}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/contact"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
            >
              Start a Similar Project <span aria-hidden>→</span>
            </Link>
          </aside>
        </div>

        {/* Related projects */}
        {otherProjects.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-extrabold text-navy-950">
              More Projects
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group overflow-hidden rounded-xl border border-gray-200 transition-shadow hover:shadow-md"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-brand">
                      {CATEGORY_LABELS[p.category]}
                    </p>
                    <p className="mt-1 text-sm font-bold text-navy-950">{p.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <CtaBanner
        title="Have A Project In Mind?"
        subtitle="Let's work together to bring your vision to life with our expertise and dedication."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  );
}