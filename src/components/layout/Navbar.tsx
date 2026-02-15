"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-[#FAFAF5]/95 backdrop-blur-sm border-b border-[#E0D9CE] shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span
              className={`font-serif text-xl font-bold tracking-tight transition-colors ${
                transparent ? "text-white" : "text-[#2C3E50]"
              }`}
            >
              Toits d&apos;Excellence
            </span>
            <span
              className={`text-xs tracking-[0.15em] uppercase transition-colors ${
                transparent ? "text-white/70" : "text-[#B8860B]"
              }`}
            >
              Maître Couvreur · Île-de-France
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[#B8860B] ${
                  pathname === link.href
                    ? "text-[#B8860B]"
                    : transparent
                    ? "text-white/90"
                    : "text-[#2C3E50]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+33145789231"
              className={`hidden sm:flex items-center gap-2 text-sm font-medium transition-colors ${
                transparent
                  ? "text-white/90 hover:text-white"
                  : "text-[#2C3E50] hover:text-[#B8860B]"
              }`}
            >
              <Phone className="w-4 h-4" />
              01 45 78 92 31
            </a>
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center h-9 px-5 text-sm font-medium bg-[#B8860B] text-white hover:bg-[#9a700a] transition-colors"
            >
              Devis gratuit
            </Link>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={`lg:hidden p-2 transition-colors ${
                transparent ? "text-white" : "text-[#2C3E50]"
              }`}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#FAFAF5] border-t border-[#E0D9CE] ${
          mobileOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2.5 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#B8860B] bg-[#F0ECE4]"
                  : "text-[#2C3E50] hover:bg-[#F0ECE4]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-[#E0D9CE] flex flex-col gap-2">
            <a
              href="tel:+33145789231"
              className="flex items-center gap-2 px-3 py-2 text-sm text-[#2C3E50]"
            >
              <Phone className="w-4 h-4 text-[#B8860B]" />
              01 45 78 92 31
            </a>
            <Link
              href="/contact"
              className="mx-3 py-2.5 text-center text-sm font-medium bg-[#B8860B] text-white"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
