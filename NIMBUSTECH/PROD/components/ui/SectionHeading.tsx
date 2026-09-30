type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  level?: 1 | 2;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  level = 2,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';
  const eyebrowClass = dark ? 'text-brand-100' : 'text-brand-700';
  const titleClass = dark ? 'text-white' : 'text-slate-950';
  const descriptionClass = dark ? 'text-slate-300' : 'text-slate-600';
  const Heading = level === 1 ? 'h1' : 'h2';

  return (
    <div className={alignment}>
      <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowClass}`}>{eyebrow}</p>
      <Heading className={`mt-3 text-3xl font-semibold sm:text-4xl ${titleClass}`}>{title}</Heading>
      {description ? <p className={`mt-4 max-w-2xl text-lg ${descriptionClass}`}>{description}</p> : null}
    </div>
  );
}
