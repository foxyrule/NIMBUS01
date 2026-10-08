import type { Metadata } from 'next';
import Image from 'next/image';

import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'IT Partners & Clients',
  description: 'Explore Nimbus technology partners and the client organizations the company supports.',
};

const partners = [
  {
    name: 'Emerald Technologies and Services Limited',
    url: 'https://emeraldtechsvcs.com/',
    logo: '/images/partners/emerald-logo.png',
    description:
      'Emerald Technologies and Services Limited is a technology and business services company focused on delivering practical solutions that support operational growth, service continuity, and dependable execution across multiple sectors.',
  },
  {
    name: 'Dell Technologies',
    url: 'https://www.dell.com',
    logo: '/images/partners/dell-logo.png',
    description:
      'Dell designs, develops, and sells a wide range of computer hardware, software, and services. The company provides direct-to-consumer personal computers and also sells high end hardware to multinational corporations that serve consumers, businesses, and governments.',
  },
  {
    name: 'Microsoft',
    url: 'https://www.microsoft.com',
    logo: '/images/partners/microsoft-logo.png',
    description:
      'Microsoft is a multinational conglomerate technology company that provides operating system software, subscription-based software such as the Office suite of applications, AI solutions, cloud computing, and a whole list of services to customers globally.',
  },
  {
    name: 'Amazon Web Services',
    url: 'https://www.aws.amazon.com',
    logo: '/images/partners/aws-logo.png',
    description:
      'Amazon Web Services (AWS) is Amazon\'s cloud computing platform that provides on-demand IT services like storage, computing power, and databases over the internet to customers globally.',
  },
  {
    name: '3CX',
    url: 'https://www.3cx.com',
    logo: '/images/partners/3cx.webp',
    description:
      '3CX provides software-based phone systems that act as a Private Branch Exchange (PBX) for businesses, using the internet to handle calls, video, and messaging. The 3CX all-in-one unified communications platform provides features like call routing, live chat, web conferencing, and mobile apps, making it a flexible and cost-effective alternative to traditional phone lines.',
  },
  {
    name: 'Cisco',
    url: 'https://www.cisco.com',
    logo: '/images/partners/cisco.webp',
    description:
      'Cisco is an American multinational technology company that designs, manufactures, and sells networking hardware, software, and telecommunications equipment. It is a global leader in networking solutions, with a wide range of products for building and managing computer networks, including routers, switches, firewalls, and wireless access points.',
  },
  {
    name: 'Ubiquiti',
    url: 'https://www.ui.com',
    logo: '/images/partners/ubiquiti-logo.svg',
    description:
      'Ubiquiti is a company that develops high-performance networking technology, with its most well-known product line being UniFi, which offers a wide range of products including routers, switches, and Wi-Fi access points. The UniFi ecosystem is managed by a single application, allowing for centralized control and configuration of an entire network.',
  },
  {
    name: 'Bluehost',
    url: 'https://www.bluehost.com',
    logo: '/images/partners/bluehost.webp',
    description:
      'Bluehost is a popular web hosting and domain registration company that provides a range of services for creating and managing websites, including shared, WordPress, VPS, and dedicated hosting plans.',
  },
  {
    name: 'CrowdStrike',
    url: 'https://www.crowdstrike.com',
    logo: '/images/partners/crowdstrike.webp',
    description:
      'CrowdStrike is a global cybersecurity leader that has redefined modern security with the world\'s most advanced cloud-native platform for protecting critical areas of enterprise risk, including endpoints, cloud workloads, identity, and data.',
  },
  {
    name: 'WatchGuard',
    url: 'https://www.watchguard.com',
    logo: '/images/partners/watchguard.webp',
    description:
      'WatchGuard Technologies, Inc. is a global leader in unified cybersecurity. Its Unified Security Platform is uniquely designed for managed service providers to deliver world-class security that increases business scale and velocity while also improving operational efficiency. Trusted by more than 17,000 security resellers and service providers to protect more than 250,000 customers, the company\'s award-winning products and services span network security and intelligence, advanced endpoint protection, multi-factor authentication, and secure Wi-Fi.',
  },
];

const clients = [
  {
    name: 'Adebola College, Ilorin, Nigeria',
    url: 'https://www.adebolacollege.org',
    logo: '/images/partners/adebola-college.png',
    description: 'Adebola College, founded in 2005, is a coeducational private school based in Ilorin, Nigeria.',
  },
  {
    name: 'O G Oyeleke LLP',
    url: 'https://www.ogoyelekelaw.com',
    logo: '/images/partners/og-oyeleke-llp.png',
    description: 'Private law firm based in Lagos, Nigeria.',
  },
  {
    name: 'West Africa Inspection Services Limited',
    url: 'https://www.westafrica-inspections.com',
    logo: '/images/partners/wais.png',
    description: 'A leading marine survey and inspection service provider based in Lagos, Nigeria.',
  },
  {
    name: 'Medvet Hotels',
    url: 'https://www.medvethotels.com',
    logo: '/images/partners/medvet-hotels.png',
    description: 'Hotel and hospitality services.',
  },
  {
    name: 'Caraburo Consulting',
    url: 'https://www.caraburo.com',
    logo: '/images/partners/caraburo-consulting.png',
    description: 'An IT consulting firm in Minneapolis, Minnesota.',
  },
  {
    name: 'Controls West Africa SA Limited',
    url: 'https://www.controlswestafrica.com',
    logo: '/images/partners/controls-west-africa.png',
    description: 'Controls West Africa SA Limited is a private limited liability company based in Lagos, Nigeria.',
  },
  {
    name: 'Moniger Account Payable/Receivable',
    url: 'https://www.moniger.net',
    logo: '/images/partners/moniger.png',
    description:
      'www.moniger.net is a business-to-business (B2B) digital payments platform designed to help small- and medium-sized businesses manage their accounts payable and receivable.',
  },
];

function PartnerCard({ partner }: { partner: (typeof partners)[number] }) {
  return (
    <article className="surface-card flex h-full flex-col">
      <a href={partner.url} target="_blank" rel="noreferrer" aria-label={`${partner.name} website`} className="relative mb-5 block h-28 overflow-hidden border-b border-slate-200 px-4 pb-5">
        <Image src={partner.logo} alt={`${partner.name} logo`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
      </a>
      <h2 className="text-xl font-semibold text-slate-950">{partner.name}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{partner.description}</p>
    </article>
  );
}

function ClientCard({ client }: { client: (typeof clients)[number] }) {
  return (
    <article className="surface-card flex h-full flex-col">
      {client.logo ? (
        <a href={client.url} target="_blank" rel="noreferrer" aria-label={`${client.name} website`} className="relative mb-5 block h-28 overflow-hidden border-b border-slate-200 px-4 pb-5">
          <Image src={client.logo} alt={`${client.name} logo`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
        </a>
      ) : null}
      <h2 className="text-xl font-semibold text-slate-950">{client.name}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{client.description}</p>
      {!client.logo ? (
        <a href={client.url} target="_blank" rel="noreferrer" className="mt-4 text-sm font-semibold text-brand-700 hover:text-brand-900 hover:underline underline-offset-4">
          Visit website <span aria-hidden="true">↗</span>
        </a>
      ) : null}
    </article>
  );
}

export default function ItPartnersPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="IT Partners"
        title="Strategic partners that support how Nimbus operates and delivers value."
        description="Nimbus works alongside trusted technology and service partners to help organizations access dependable solutions, practical service support, and a stronger operational foundation."
        level={1}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {partners.map((partner) => (
          <PartnerCard key={partner.name} partner={partner} />
        ))}
      </div>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Our Clients"
          title="Organizations we support and serve."
          description="The client relationships represented here reflect the business environments and sectors where Nimbus brings practical, reliable support."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {clients.map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
        </div>
      </section>
    </div>
  );
}
