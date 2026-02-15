import { CountUp } from "@/components/animations/CountUp";
import { FadeUp } from "@/components/animations/FadeUp";

const stats = [
  { to: 35,   suffix: "+", label: "ans d'expertise" },
  { to: 1200, suffix: "+", label: "toitures réalisées" },
  { to: 98,   suffix: "%", label: "clients satisfaits" },
  { to: 12,   suffix: "",  label: "artisans qualifiés" },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-serif text-5xl lg:text-6xl font-bold text-accent-500 mb-2">
                  <CountUp to={stat.to} suffix={stat.suffix} duration={2000} />
                </p>
                <p className="text-neutral-400 text-sm tracking-wide">{stat.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
