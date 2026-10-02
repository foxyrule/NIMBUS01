import type { ReactNode } from "react";

type ServiceSectionProps = {
  title: string;
  children?: ReactNode;
};

export function ServiceSection({ title, children }: ServiceSectionProps) {
  return (
    <section aria-labelledby="service-section-title" className="border-t border-emerald-950/10 py-8">
      <h2 className="text-xl font-semibold text-emerald-950" id="service-section-title">
        {title}
      </h2>
      {children ? <div className="mt-4">{children}</div> : null}
    </section>
  );
}