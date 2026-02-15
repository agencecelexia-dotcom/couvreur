import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";

export function StatsSection() {
  const featured = getFeaturedProjects();
  const [main, ...rest] = featured;

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-3">
              Portfolio
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#2C3E50] leading-tight">
              Réalisations récentes
            </h2>
          </div>
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2C3E50] hover:text-[#B8860B] transition-colors shrink-0"
          >
            Voir toutes nos réalisations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Layout */}
        {featured.length > 0 && (
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Main large project */}
            {main && (
              <Link
                href={`/realisations/${main.slug}`}
                className="group relative lg:col-span-2 overflow-hidden aspect-[4/3]"
              >
                <Image
                  src={main.images[0]}
                  alt={main.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="inline-block text-xs tracking-wider uppercase text-[#B8860B] mb-2 font-medium">
                    {main.location} · {main.year}
                  </span>
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-white leading-tight group-hover:text-[#F5F5DC] transition-colors">
                    {main.title}
                  </h3>
                </div>
              </Link>
            )}

            {/* Secondary projects */}
            <div className="flex flex-col gap-4">
              {rest.map((project) => (
                <Link
                  key={project.id}
                  href={`/realisations/${project.slug}`}
                  className="group relative overflow-hidden flex-1"
                  style={{ minHeight: "200px" }}
                >
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-xs tracking-wider uppercase text-[#B8860B] font-medium block mb-1">
                      {project.location} · {project.year}
                    </span>
                    <h3 className="font-serif text-base font-bold text-white leading-tight group-hover:text-[#F5F5DC] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
