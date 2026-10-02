type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={['text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl', titleClassName].filter(Boolean).join(' ')}>{title}</h2>
      {description ? (
        <p className={['mt-4 text-base leading-7 text-slate-600 sm:text-lg', descriptionClassName].filter(Boolean).join(' ')}>{description}</p>
      ) : null}
    </div>
  );
}
