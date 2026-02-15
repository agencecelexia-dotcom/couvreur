import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAF5] px-4 text-center">
      <div className="w-20 h-20 bg-[#B8860B]/10 flex items-center justify-center mb-8">
        <Home className="w-8 h-8 text-[#B8860B]" />
      </div>

      <p className="text-[#B8860B] text-xs tracking-[0.3em] uppercase font-medium mb-4">
        Erreur 404
      </p>

      <h1 className="font-serif text-6xl lg:text-8xl font-bold text-[#2C3E50] mb-4">
        404
      </h1>

      <h2 className="font-serif text-2xl font-bold text-[#2C3E50] mb-4">
        Page introuvable
      </h2>

      <p className="text-[#6B7A82] max-w-md mb-10 leading-relaxed">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
        Revenez à l&apos;accueil pour découvrir nos services de couverture.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 h-11 px-8 text-sm font-medium bg-[#B8860B] text-white hover:bg-[#9a700a] transition-colors"
      >
        <Home className="w-4 h-4" />
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
