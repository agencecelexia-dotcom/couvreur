"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, CATEGORY_LABELS, type ProjectCategory } from "@/data/projects";

const ALL_CATEGORIES = Object.keys(CATEGORY_LABELS) as ProjectCategory[];

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | null>(null);

  const filtered = activeCategory
    ? projects.filter((p) => p.category === activeCategory)
    : projects;

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeCategory === null
              ? "bg-[#2C3E50] text-white"
              : "bg-[#F0ECE4] text-[#6B7A82] hover:bg-[#E0D9CE]"
          }`}
        >
          Tous ({projects.length})
        </button>
        {ALL_CATEGORIES.map((cat) => {
          const count = projects.filter((p) => p.category === cat).length;
          if (count === 0) return null;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-[#2C3E50] text-white"
                  : "bg-[#F0ECE4] text-[#6B7A82] hover:bg-[#E0D9CE]"
              }`}
            >
              {CATEGORY_LABELS[cat]} ({count})
            </button>
          );
        })}
      </div>

      {/* Count */}
      <p className="text-sm text-[#6B7A82] mb-8">
        {filtered.length} réalisation{filtered.length > 1 ? "s" : ""}
        {activeCategory ? ` en ${CATEGORY_LABELS[activeCategory].toLowerCase()}` : ""}
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <Link
            key={project.id}
            href={`/realisations/${project.slug}`}
            className="group block"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="pt-4 pb-2 border-b border-[#E0D9CE]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-[#B8860B] tracking-wider uppercase">
                  {CATEGORY_LABELS[project.category]}
                </span>
                <span className="text-xs text-[#6B7A82]">
                  {project.location} · {project.year}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2C3E50] leading-tight group-hover:text-[#B8860B] transition-colors">
                {project.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
