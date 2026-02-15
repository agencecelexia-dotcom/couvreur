import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, ArrowLeft, Star, ChevronRight } from "lucide-react";
import { projects, getProjectBySlug, CATEGORY_LABELS } from "@/data/projects";
import { CtaBand } from "@/components/home/cta-band";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: `${CATEGORY_LABELS[project.category]} — ${project.location}, ${project.year}. ${project.description.slice(0, 120)}...`,
    openGraph: {
      title: project.title,
      description: project.description.slice(0, 160),
      images: [project.images[0]],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      {/* Hero image */}
      <div className="relative h-[55vh] lg:h-[65vh]">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Toutes les réalisations
            </Link>
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-xs tracking-wider uppercase text-[#B8860B] font-medium mb-2">
              {CATEGORY_LABELS[project.category]}
            </span>
            <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-[#FAFAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="text-[#6B7A82] leading-relaxed text-lg mb-8">
                {project.description}
              </p>

              {project.challenges && (
                <div className="bg-[#F0ECE4] border-l-4 border-[#B8860B] p-6 mb-8">
                  <p className="font-semibold text-[#2C3E50] mb-2">Défis du chantier</p>
                  <p className="text-[#6B7A82] text-sm leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}

              {/* Gallery */}
              {project.images.length > 1 && (
                <div className="grid grid-cols-2 gap-3 mb-10">
                  {project.images.slice(1).map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={img}
                        alt={`${project.title} — photo ${i + 2}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Client testimonial */}
              {project.clientTestimonial && (
                <div className="bg-[#2C3E50] p-8">
                  <Star className="w-5 h-5 text-[#B8860B] mb-4" />
                  <blockquote className="font-serif text-lg text-white/90 italic leading-relaxed mb-4">
                    &ldquo;{project.clientTestimonial.text}&rdquo;
                  </blockquote>
                  <p className="text-sm text-[#B8860B] font-medium">
                    {project.clientTestimonial.author}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Project details */}
                <div className="bg-white border border-[#E0D9CE] p-6">
                  <h2 className="font-serif text-lg font-bold text-[#2C3E50] mb-5">
                    Détails du chantier
                  </h2>
                  <ul className="space-y-4">
                    {[
                      { label: "Localisation", value: project.location },
                      { label: "Année", value: String(project.year) },
                      { label: "Durée", value: project.duration },
                      { label: "Surface", value: project.surface },
                      { label: "Matériau", value: project.material },
                      { label: "Type de travaux", value: CATEGORY_LABELS[project.category] },
                    ].map((item) => (
                      <li key={item.label} className="flex items-start gap-3 border-b border-[#E0D9CE] pb-3 last:border-0 last:pb-0">
                        <span className="text-xs text-[#6B7A82] uppercase tracking-wider font-medium mt-0.5 w-24 shrink-0">
                          {item.label}
                        </span>
                        <span className="text-sm text-[#2C3E50] font-medium">
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-[#B8860B] p-6 text-white">
                  <p className="font-serif text-lg font-bold mb-2">
                    Un projet similaire ?
                  </p>
                  <p className="text-sm text-white/80 mb-5">
                    Demandez votre devis gratuit. Réponse sous 48h.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center py-3 px-4 bg-white text-[#B8860B] text-sm font-medium hover:bg-[#F5F5DC] transition-colors"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other projects */}
      {others.length > 0 && (
        <section className="py-16 bg-[#F0ECE4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl font-bold text-[#2C3E50]">
                Autres réalisations
              </h2>
              <Link
                href="/realisations"
                className="flex items-center gap-1 text-sm text-[#B8860B] hover:text-[#9a700a] transition-colors"
              >
                Tout voir <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {others.map((p) => (
                <Link key={p.id} href={`/realisations/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-3">
                    <Image
                      src={p.images[0]}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <span className="text-xs text-[#B8860B] uppercase tracking-wider font-medium">
                    {CATEGORY_LABELS[p.category]}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#2C3E50] group-hover:text-[#B8860B] transition-colors leading-tight mt-1">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
