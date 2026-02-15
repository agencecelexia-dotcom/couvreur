interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p
          className={`text-xs tracking-[0.25em] uppercase font-medium mb-3 ${
            light ? "text-accent-300" : "text-accent-500"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-primary-900"
        }`}
      >
        {title}
      </h2>
      {centered && (
        <div
          className={`w-16 h-[3px] mx-auto mb-5 ${
            light ? "bg-accent-400" : "bg-accent-500"
          }`}
        />
      )}
      {subtitle && (
        <p
          className={`text-lg leading-relaxed ${
            light ? "text-neutral-200" : "text-neutral-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
