type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';
  const eyebrowClass = dark ? 'text-brand-100' : 'text-brand-700';
  const titleClass = dark ? 'text-white' : 'text-slate-950';
  const descriptionClass = dark ? 'text-slate-300' : 'text-slate-600';

  return (
    <div className={alignment}>
      <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowClass}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${titleClass}`}>{title}</h2>
      {description ? <p className={`mt-4 max-w-2xl text-lg ${descriptionClass}`}>{description}</p> : null}
    </div>
  );
}
