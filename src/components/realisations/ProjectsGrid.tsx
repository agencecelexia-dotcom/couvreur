"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
              ? "bg-primary-900 text-white"
              : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
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
                  ? "bg-primary-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {CATEGORY_LABELS[cat]} ({count})
            </button>
          );
        })}
      </div>

      {/* Count */}
      <p className="text-sm text-neutral-500 mb-8">
        {filtered.length} réalisation{filtered.length > 1 ? "s" : ""}
        {activeCategory ? ` en ${CATEGORY_LABELS[activeCategory].toLowerCase()}` : ""}
      </p>

      {/* Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/realisations/${project.slug}`} className="group block">
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

                <div className="pt-4 pb-2 border-b border-neutral-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-accent-600 tracking-wider uppercase">
                      {CATEGORY_LABELS[project.category]}
                    </span>
                    <span className="text-xs text-neutral-500">
                      {project.location} · {project.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary-900 leading-tight group-hover:text-accent-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
