import { SectionHeading } from "@/components/emerald/SectionHeading";
import Image from "next/image";

export const metadata = { title: "IT Partners" };

const partners = [
  {
    name: "Nimbus Technologies and Services LLC",
    url: "https://www.nimbustechllc.com/",
    image: "/images/emerald-original/partners/nimbus-logo.svg",
    description: "Nimbus Technologies and Services LLC is a technology solutions provider that sells IT products and services to business, government, education, and healthcare customers. The company provides cutting edge technology services to corporate, small business, and public, which includes government, education, and healthcare institutions.",
  },
  {
    name: "Dell Technologies",
    url: "https://www.dell.com",
    image: "/images/emerald-original/partners/dell-logo.png",
    description: "Dell designs, develops, and sells a wide range of computer hardware, software, and services. The company provides direct-to-consumer personal computers and also sells high end hardware to Multinational Corporation that serves consumers, businesses, and governments.",
  },
  {
    name: "Microsoft",
    url: "https://www.microsoft.com",
    image: "/images/emerald-original/partners/microsoft-logo.png",
    description: "Microsoft is a multinational conglomerate technology company that provides operating system software, subscription based software such as office suite of applications, AI solutions, cloud computing and a whole list of services to customers globally.",
  },
  {
    name: "Amazon Web Services",
    url: "https://www.aws.amazon.com",
    image: "/images/emerald-original/partners/aws-logo.png",
    description: "Amazon Web Services (AWS) is Amazon's cloud computing platform that provides on-demand IT services like storage, computing power, and databases over the internet to customers globally.",
  },
  {
    name: "3CX",
    url: "https://www.3cx.com",
    image: "/images/emerald-original/partners/3cx.webp",
    description: "3CX provides software-based phone system that acts as a Private Branch Exchange (PBX) for businesses, using the internet to handle calls, video, and messaging. 3CX all-in-one unified communications platform provides features like call routing, live chat, web conferencing, and mobile apps, making it a flexible and cost-effective alternative to traditional phone lines.",
  },
  {
    name: "Cisco",
    url: "https://www.cisco.com",
    image: "/images/emerald-original/partners/cisco.webp",
    description: "Cisco is an American multinational technology company that designs, manufactures, and sells networking hardware, software, and telecommunications equipment. It is a global leader in networking solutions, with a wide range of products for building and managing computer networks, including routers, switches, firewalls, and wireless access points.",
  },
  {
    name: "Ubiquiti",
    url: "https://www.ui.com",
    image: "/images/emerald-original/partners/ubiquiti-logo.svg",
    description: "Ubiquiti is a company that develops high-performance networking technology, with its most well-known product line being UniFi, which offers a wide range of products including routers, switches, and Wi-Fi access points. The UniFi ecosystem is managed by a single application, allowing for centralized control and configuration of an entire network.",
  },
  {
    name: "Bluehost",
    url: "https://www.bluehost.com",
    image: "/images/emerald-original/partners/bluehost.webp",
    description: "Bluehost is a popular web hosting and domain registration company that provides a range of services for creating and managing websites, including shared, WordPress, VPS, and dedicated hosting plans.",
  },
  {
    name: "CrowdStrike",
    url: "https://www.crowdstrike.com",
    image: "/images/emerald-original/partners/crowdstrike.webp",
    description: "Crowdstrike is a global cybersecurity leader that has redefined modern security with the world’s most advanced cloud-native platform for protecting critical areas of enterprise risk – endpoints and cloud workloads, identity, and data.",
  },
  {
    name: "WatchGuard",
    url: "https://www.watchguard.com",
    image: "/images/emerald-original/partners/watchguard.webp",
    description: "WatchGuard® Technologies, Inc. is a global leader in unified cybersecurity. WatchGuard® Technologies Unified Security Platform™ is uniquely designed for managed service providers to deliver world-class security that increases their business scale and velocity while also improving operational efficiency. Trusted by more than 17,000 security resellers and service providers to protect more than 250,000 customers, the company’s award-winning products and services span network security and intelligence, advanced endpoint protection, multi-factor authentication, and secure Wi-Fi. Together, they offer five critical elements of a security platform.",
  },
];

const clients = [
  {
    name: "Adebola College, Ilorin, Nigeria",
    url: "https://www.adebolacollege.org",
    description: "Adebola College, founded in 2005, is a coeducational private school based in Ilorin, Nigeria.",
    logo: "/images/emerald/adebola college.png",
  },
  {
    name: "O G Oyeleke LLP",
    url: "https://www.ogoyelekelaw.com",
    description: "Private law firm based in Lagos, Nigeria.",
    logo: "/images/emerald/Og oyeleke llp.png",
  },
  {
    name: "West Africa Inspection Services Limited",
    url: "https://www.westafrica-inspections.com",
    description: "A leading marine survey and inspection service provider based in Lagos, Nigeria.",
    logo: "/images/emerald/West africa Inspection services limited.png",
  },
  {
    name: "Medvet Hotels",
    url: "https://www.medvethotels.com",
    description: "Hotel and hospitality services.",
    logo: "/images/emerald/Medvet Hotels.png",
  },
  {
    name: "Caraburo Consulting",
    url: "https://www.caraburo.com",
    description: "An IT consulting firm in Minneapolis, Minnesota.",
    logo: "/images/emerald/caraburo it consulting.png",
  },
  {
    name: "Controls West Africa SA Limited",
    url: "https://www.controlswestafrica.com",
    description: "Controls West Africa SA Limited is a private limited liability company based in Lagos, Nigeria.",
    logo: "/images/emerald/controlwestafrica.png",
  },
];

function ClientLogo({ client }: { client: (typeof clients)[number] }) {
  if (!client.logo) {
    return (
      <div className="flex h-28 items-center justify-center border-b border-slate-100 pb-5 text-center text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
        {client.name}
      </div>
    );
  }

  return (
    <div className="flex h-28 items-center justify-center border-b border-slate-100 pb-5">
      <img src={client.logo} alt={`${client.name} logo`} className="max-h-20 w-auto max-w-full object-contain" />
    </div>
  );
}

function PartnerCard({ partner }: { partner: (typeof partners)[number] }) {
  return (
    <article className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
      <a href={partner.url} target="_blank" rel="noreferrer" aria-label={`${partner.name} website`} className="flex h-28 items-center justify-center border-b border-slate-100 pb-5">
        <Image src={partner.image} alt={`${partner.name} logo`} width={480} height={270} className="max-h-20 w-auto max-w-full object-contain" />
      </a>
      <h2 className="mt-5 text-xl font-semibold text-slate-900">{partner.name}</h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{partner.description}</p>
    </article>
  );
}

function ClientCard({ client }: { client: (typeof clients)[number] }) {
  return (
    <article className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
      {client.url ? (
        <a href={client.url} target="_blank" rel="noreferrer" aria-label={`${client.name} website`} className="block">
          <ClientLogo client={client} />
        </a>
      ) : (
        <ClientLogo client={client} />
      )}
      <h2 className="mt-5 text-xl font-semibold text-slate-900">{client.name}</h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{client.description}</p>
    </article>
  );
}

export default function ItPartnersPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
      <SectionHeading
        eyebrow="IT Partners"
        title="Meet With Our IT Partners"
        description="Emerald works with a broad technology ecosystem to help clients access reliable solutions, operational support, and dependable service delivery."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {partners.map((partner) => (
          <PartnerCard key={partner.name} partner={partner} />
        ))}
      </div>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Our Clients"
          title="Client Organizations"
          description="The organizations and institutions we support through practical, reliable technology solutions."
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