"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-20 lg:py-28 bg-[#2C3E50]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Témoignages clients
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ils nous font confiance
          </h2>
        </div>

        {/* Testimonial */}
        <div
          key={current}
          className="text-center"
          aria-live="polite"
        >
          <Quote className="w-10 h-10 text-[#B8860B] mx-auto mb-8 opacity-60" />

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#B8860B] text-[#B8860B]" />
            ))}
          </div>

          {/* Text */}
          <blockquote className="font-serif text-xl lg:text-2xl text-white/90 leading-relaxed italic mb-10 max-w-3xl mx-auto">
            &ldquo;{t.text}&rdquo;
          </blockquote>

          {/* Author */}
          <div>
            <p className="font-semibold text-white">{t.author}</p>
            <p className="text-sm text-white/50 mt-1">
              {t.role} — {t.location}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#B8860B] hover:text-[#B8860B] transition-colors"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Témoignage ${i + 1}`}
                className={`h-1.5 transition-all duration-300 ${
                  i === current ? "w-8 bg-[#B8860B]" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#B8860B] hover:text-[#B8860B] transition-colors"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
