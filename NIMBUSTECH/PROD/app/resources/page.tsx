import Link from 'next/link';

import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Browse Nimbus service overviews and credited third-party articles from the original resources area.',
};

const resources = [
  {
    title: 'Managed IT overview',
    copy: 'A high-level view of how reliable technology support fits into day-to-day operations and growth planning.',
    href: '/services/managed-it',
  },
  {
    title: 'Healthcare records guidance',
    copy: 'A practical service lens for records workflows, information management, and operational consistency.',
    href: '/services/ralicare',
  },
  {
    title: 'Real estate coordination',
    copy: 'An overview of property-driven service support that keeps client needs organized and clear.',
    href: '/services/real-estate',
  },
  {
    title: 'Sports and talent focus',
    copy: 'A look at effort, execution, and opportunity across sports and talent-driven business programs.',
    href: '/services/sports-talent',
  },
];

const articles = [
  {
    title: '8 Key Things To Know About Cisco DNA Center',
    credit: 'By Greg LaBrie, as credited on the original Nimbus Resources article',
    note: 'Third-party technical article. Opens the original source; it is not presented as Nimbus-authored.',
    href: 'https://nimbustechllc.com/article-2/',
  },
  {
    title: 'What is zero trust? A model for more effective security',
    credit: 'By Mary K. Pratt, published March 7, 2023; the original page identifies Computerworld reporting',
    note: 'Third-party reporting. Read the original publication page for full attribution and context.',
    href: 'https://nimbustechllc.com/article-3/',
  },
];

export default function ResourcesPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Resources"
        title="A practical overview of Nimbus service areas."
        description="This section is designed to present the company’s key capabilities in a clean, usable, business-focused format without inventing unsupported claims."
        level={1}
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {resources.map((resource) => (
          <Link key={resource.title} href={resource.href} className="surface-card transition hover:border-brand-500">
            <p className="section-kicker">Resource</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{resource.title}</h3>
            <p className="mt-4 text-slate-600">{resource.copy}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
              View details
              <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>

      <section className="mt-16" aria-labelledby="article-heading">
        <p className="section-kicker">From the original Resources area</p>
        <h2 id="article-heading" className="mt-2 text-3xl font-semibold text-slate-950">Articles and further reading</h2>
        <p className="mt-3 max-w-3xl text-slate-600">These links were present on Nimbus’s original website. Third-party pieces are credited here and open at their original Nimbus-hosted pages so authorship and source context remain visible.</p>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {articles.map((article) => (
            <article key={article.title} className="border-l-2 border-brand-700 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-950">{article.title}</h3>
              <p className="mt-3 text-sm font-medium text-slate-700">{article.credit}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{article.note}</p>
              <a href={article.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900">
                Open original article <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-500">The original “File Naming Conventions For Paperless Law Office” post was excluded: its first-person law-office content is unrelated to Nimbus’s service scope, and the page provides no reliable author attribution establishing it as Nimbus content.</p>
      </section>
    </div>
  );
}
