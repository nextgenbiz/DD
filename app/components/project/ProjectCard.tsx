import Image from "next/image";
import Link from "next/link";
import { Home, Building2, Building, Sofa } from "lucide-react";
import { Project, CATEGORY_LABELS } from "./projects";

const CATEGORY_ICONS = {
  residential: Home,
  commercial: Building2,
  apartment: Building,
  interior: Sofa,
};

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = CATEGORY_ICONS[project.category];

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 transition-shadow hover:shadow-md">
      <div className="relative h-56 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand">
          <Icon size={15} strokeWidth={2} />
          {CATEGORY_LABELS[project.category]}
        </div>
        <h3 className="mt-2 text-lg font-bold text-navy-950">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{project.location}</p>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-light"
        >
          View Details <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
