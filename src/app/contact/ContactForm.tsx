"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";
import { CheckCircle, Loader2 } from "lucide-react";

const initialState: ContactFormState = { success: false };

const serviceOptions = [
  { value: "couverture-neuve", label: "Couverture neuve" },
  { value: "renovation", label: "Rénovation toiture" },
  { value: "demoussage", label: "Démoussage & nettoyage" },
  { value: "zinguerie", label: "Zinguerie" },
  { value: "isolation", label: "Isolation combles" },
  { value: "depannage", label: "Dépannage urgent" },
  { value: "autre", label: "Autre / Je ne sais pas encore" },
];

const surfaceOptions = [
  { value: "< 50 m²", label: "Moins de 50 m²" },
  { value: "50–100 m²", label: "50 à 100 m²" },
  { value: "100–200 m²", label: "100 à 200 m²" },
  { value: "> 200 m²", label: "Plus de 200 m²" },
  { value: "Je ne sais pas", label: "Je ne sais pas" },
];

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null;
  return <p className="mt-1 text-xs text-red-600">{errors[0]}</p>;
}

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-[#B8860B]/10 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-[#B8860B]" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-[#2C3E50] mb-3">
          Message envoyé !
        </h2>
        <p className="text-[#6B7A82] max-w-sm">
          Merci pour votre demande. Nous vous recontacterons sous 48h (souvent bien moins en pratique).
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3">
          {state.error}
        </div>
      )}

      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-[#2C3E50] uppercase tracking-wider mb-2">
            Nom complet *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jean Dupont"
            className="w-full h-11 px-4 border border-[#E0D9CE] bg-white text-[#2C3E50] text-sm focus:outline-none focus:border-[#B8860B] transition-colors"
          />
          <FieldError errors={state.fieldErrors?.name} />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-[#2C3E50] uppercase tracking-wider mb-2">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jean@exemple.fr"
            className="w-full h-11 px-4 border border-[#E0D9CE] bg-white text-[#2C3E50] text-sm focus:outline-none focus:border-[#B8860B] transition-colors"
          />
          <FieldError errors={state.fieldErrors?.email} />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-xs font-medium text-[#2C3E50] uppercase tracking-wider mb-2">
          Téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="06 XX XX XX XX"
          className="w-full h-11 px-4 border border-[#E0D9CE] bg-white text-[#2C3E50] text-sm focus:outline-none focus:border-[#B8860B] transition-colors"
        />
      </div>

      {/* Service type + Surface */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="serviceType" className="block text-xs font-medium text-[#2C3E50] uppercase tracking-wider mb-2">
            Type de prestation *
          </label>
          <select
            id="serviceType"
            name="serviceType"
            required
            className="w-full h-11 px-4 border border-[#E0D9CE] bg-white text-[#2C3E50] text-sm focus:outline-none focus:border-[#B8860B] transition-colors"
          >
            <option value="">Sélectionner...</option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <FieldError errors={state.fieldErrors?.serviceType} />
        </div>
        <div>
          <label htmlFor="surface" className="block text-xs font-medium text-[#2C3E50] uppercase tracking-wider mb-2">
            Surface approximative
          </label>
          <select
            id="surface"
            name="surface"
            className="w-full h-11 px-4 border border-[#E0D9CE] bg-white text-[#2C3E50] text-sm focus:outline-none focus:border-[#B8860B] transition-colors"
          >
            <option value="">Sélectionner...</option>
            {surfaceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-[#2C3E50] uppercase tracking-wider mb-2">
          Votre projet *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre projet, l'état de votre toiture, votre adresse... Plus vous nous en dites, plus notre devis sera précis."
          className="w-full px-4 py-3 border border-[#E0D9CE] bg-white text-[#2C3E50] text-sm focus:outline-none focus:border-[#B8860B] transition-colors resize-none"
        />
        <FieldError errors={state.fieldErrors?.message} />
      </div>

      {/* GDPR */}
      <p className="text-xs text-[#6B7A82] leading-relaxed">
        En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour traiter
        votre demande de devis. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès
        et de suppression de vos données.{" "}
        <a href="/politique-confidentialite" className="underline hover:text-[#B8860B]">
          Politique de confidentialité
        </a>
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full h-12 bg-[#B8860B] text-white text-sm font-medium hover:bg-[#9a700a] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer ma demande de devis"
        )}
      </button>
    </form>
  );
}
