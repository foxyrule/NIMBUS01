type ServiceCardProps = {
  title: string;
  description: string;
  tag?: string;
};

export function ServiceCard({ title, description, tag }: ServiceCardProps) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-semibold text-emerald-700">
        {tag ?? "●"}
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
