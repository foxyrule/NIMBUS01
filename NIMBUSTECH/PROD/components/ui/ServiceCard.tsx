import Link from 'next/link';
import Image from 'next/image';

type ServiceCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
};

export function ServiceCard({ eyebrow, title, description, href, image, imageAlt = '' }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-md border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:border-brand-500 hover:shadow-[0_18px_36px_rgba(23,61,122,0.12)]"
    >
      {image ? (
        <div className="relative -mx-6 -mt-6 mb-6 aspect-[16/9] overflow-hidden bg-slate-100">
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
        </div>
      ) : null}
      <div className="mb-5 inline-flex w-fit rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
        {eyebrow}
      </div>
      <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
        Learn more
        <span aria-hidden="true" className="transition group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
