import { Star } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    author: "M. & Mme de Villeneuve",
    role: "Propriétaires, Paris 16ème",
    text: "Toits d'Excellence a su comprendre les exigences de notre demeure classée. Le résultat est à la hauteur de nos espérances : une toiture magnifique, fidèle à l'esprit architectural de la maison.",
    rating: 5,
    project: "Toiture ardoise naturelle",
  },
  {
    author: "Isabelle Marchand",
    role: "Architecte DPLG, Versailles",
    text: "J'ai confié ce chantier exigeant à Toits d'Excellence après avoir vu leur travail. Leur maîtrise du zinc à joint debout est remarquable. Je les recommande sans hésitation à tous mes clients.",
    rating: 5,
    project: "Couverture zinc à joint debout",
  },
  {
    author: "Famille Rousseau",
    role: "Propriétaires, Rambouillet",
    text: "Notre maison de famille méritait le meilleur. L'équipe a traité notre bien avec respect et professionnalisme. La toiture est superbe et les délais ont été parfaitement respectés.",
    rating: 5,
    project: "Rénovation tuiles mécaniques",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-accent-500 fill-accent-500" : "text-neutral-300"}`}
        />
      ))}
    </div>
  );
}

export function TestimonialsCarousel() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <SectionHeading
            eyebrow="Témoignages"
            title="Ce que disent nos clients"
            subtitle="Leur confiance est notre meilleure récompense."
            centered
          />
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.author} delay={i * 0.1}>
              <div
                className="flex flex-col p-7 bg-neutral-50 border border-neutral-200 h-full hover:-translate-y-1 transition-transform duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <StarRating rating={t.rating} />

                <blockquote className="text-sm text-neutral-700 leading-relaxed italic flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-bold font-serif">
                      {t.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-900">{t.author}</p>
                    <p className="text-xs text-neutral-500">{t.role}</p>
                    <p className="text-xs text-accent-500 font-medium mt-0.5">{t.project}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
