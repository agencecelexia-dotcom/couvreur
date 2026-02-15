"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const services = [
  { label: "Couverture Neuve",       href: "/services#couverture-neuve" },
  { label: "Rénovation Toiture",     href: "/services#renovation" },
  { label: "Démoussage & Nettoyage", href: "/services#demoussage" },
  { label: "Zinguerie",              href: "/services#zinguerie" },
  { label: "Isolation Combles",      href: "/services#isolation" },
  { label: "Dépannage Urgent",       href: "/services#depannage" },
];

const navLinks = [
  { href: "/",             label: "Accueil",      hasDropdown: false },
  { href: "/services",     label: "Services",     hasDropdown: true  },
  { href: "/realisations", label: "Réalisations", hasDropdown: false },
  { href: "/a-propos",     label: "À propos",     hasDropdown: false },
  { href: "/contact",      label: "Contact",      hasDropdown: false },
];

export function Navbar() {
  const [scrolled, setScrolled]             = useState(false);
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [servicesOpen, setServicesOpen]     = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname    = usePathname();
  const isHome      = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [pathname]);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setServicesOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const transparent = isHome && !scrolled;
  const textColor   = transparent ? "text-white/90" : "text-primary-900";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent" : "bg-neutral-50/95 backdrop-blur-sm border-b border-neutral-200"
      }`}
      style={scrolled ? { boxShadow: "var(--shadow-header)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none shrink-0">
            <span className={`font-serif text-xl font-bold tracking-tight transition-colors ${transparent ? "text-white" : "text-primary-900"}`}>
              Toits d&apos;Excellence
            </span>
            <span className={`text-[10px] tracking-[0.2em] uppercase transition-colors ${transparent ? "text-white/60" : "text-accent-500"}`}>
              Maître Couvreur · Île-de-France
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-accent-500 ${
                      pathname.startsWith("/services") ? "text-accent-500" : textColor
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.16 }}
                        className="absolute top-full left-0 mt-1 w-58 bg-neutral-50 border border-neutral-200 py-1 min-w-[220px]"
                        style={{ boxShadow: "var(--shadow-card)" }}
                      >
                        <Link
                          href="/services"
                          className="block px-4 py-2.5 text-sm font-semibold text-primary-900 hover:text-accent-500 border-b border-neutral-200 mb-1 transition-colors"
                        >
                          Tous nos services →
                        </Link>
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-accent-500 transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-accent-500 ${
                    pathname === link.href ? "text-accent-500" : textColor
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + phone + mobile toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+33145789231"
              className={`hidden sm:flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent-500 ${transparent ? "text-white/80" : "text-primary-900"}`}
            >
              <Phone className="w-3.5 h-3.5" />
              01 45 78 92 31
            </a>
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center h-9 px-5 text-sm font-medium bg-accent-500 text-white hover:bg-accent-600 transition-colors"
            >
              Devis gratuit
            </Link>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={`lg:hidden p-2 transition-colors ${transparent ? "text-white" : "text-primary-900"}`}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-neutral-50 border-t border-neutral-200"
          >
            <nav className="px-4 py-3 flex flex-col gap-0.5">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-primary-900 hover:bg-neutral-100"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.18 }}
                          className="overflow-hidden pl-4"
                        >
                          {services.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className="block px-3 py-2 text-sm text-neutral-600 hover:text-accent-500"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2.5 text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "text-accent-500 bg-accent-50"
                        : "text-primary-900 hover:bg-neutral-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="mt-3 pt-3 border-t border-neutral-200 flex flex-col gap-2">
                <a href="tel:+33145789231" className="flex items-center gap-2 px-3 py-2 text-sm text-primary-900">
                  <Phone className="w-4 h-4 text-accent-500" />
                  01 45 78 92 31
                </a>
                <Link href="/contact" className="mx-3 py-2.5 text-center text-sm font-medium bg-accent-500 text-white">
                  Demander un devis gratuit
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
