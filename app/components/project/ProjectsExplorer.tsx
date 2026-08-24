"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Project, ProjectCategory, CATEGORY_LABELS } from "./projects";
import ProjectCard from "./ProjectCard";
import Pagination from "./Pagination";

const TABS: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: CATEGORY_LABELS.residential },
  { id: "commercial", label: CATEGORY_LABELS.commercial },
  { id: "apartment", label: CATEGORY_LABELS.apartment },
  { id: "interior", label: CATEGORY_LABELS.interior },
];

const PAGE_SIZE = 6;

export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [activeTab, setActiveTab] = useState<ProjectCategory | "all">("all");
  const [sortBy, setSortBy] = useState<"latest" | "name">("latest");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const list =
      activeTab === "all"
        ? projects
        : projects.filter((p) => p.category === activeTab);

    if (sortBy === "name") {
      return [...list].sort((a, b) => a.title.localeCompare(b.title));
    }
    return list; // "latest" — array order is already newest-first in lib/projects.ts
  }, [projects, activeTab, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleTabChange(tab: ProjectCategory | "all") {
    setActiveTab(tab);
    setPage(1);
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      {/* Tabs + sort */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-3">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
                activeTab === tab.id
                  ? "bg-brand text-white"
                  : "border border-gray-200 text-gray-600 hover:border-brand hover:text-brand"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sort stays a real dropdown */}
        <div className="relative w-fit">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "latest" | "name")}
            className="appearance-none rounded-md border border-gray-200 py-2.5 pl-4 pr-9 text-sm font-medium text-navy-950 focus:outline-none focus:ring-2 focus:ring-brand/30"
          >
            <option value="latest">Sort By: Latest</option>
            <option value="name">Sort By: Name (A–Z)</option>
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      {/* Grid */}
      {paginated.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginated.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-sm text-gray-500">
          No projects found in this category yet.
        </p>
      )}

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </section>
  );
}
