import { SectionHeading } from "@/components/emerald/SectionHeading";
import Image from "next/image";

export const metadata = { title: "IT Partners" };

const partners = [
  {
    name: "Nimbus Technologies and Services LLC",
    url: "http://www.nimbustechllc.com",
    image: "/images/emerald-original/partners/nimbus-logo.svg",
    description: "Nimbus Technologies and Services LLC is a strategic technology partner supporting practical, reliable business operations and digital transformation.",
  },
  {
    name: "Dell Technologies",
    url: "http://www.dell.com",
    image: "/images/emerald-original/partners/dell-logo.png",
    description: "Dell designs, develops, and sells a wide range of computer hardware, software, and services. The company provides direct-to-consumer personal computers and also sells high end hardware to multinational corporations that serve consumers, businesses, and governments.",
  },
  {
    name: "Microsoft",
    url: "http://www.microsoft.com",
    image: "/images/emerald-original/partners/microsoft-logo.png",
    description: "Microsoft is a multinational conglomerate technology company that provides operating system software, subscription-based software such as the Office suite of applications, AI solutions, cloud computing and a whole list of services to customers globally.",
  },
  {
    name: "Amazon Web Services",
    url: "http://www.aws.amazon.com",
    image: "/images/emerald-original/partners/aws-logo.png",
    description: "Amazon Web Services (AWS) is Amazon’s cloud computing platform that provides on-demand IT services like storage, computing power, and databases over the internet to customers globally.",
  },
  {
    name: "3CX",
    url: "http://www.3cx.com",
    image: "/images/emerald-original/partners/3cx.webp",
    description: "3CX provides a software-based phone system that acts as a Private Branch Exchange (PBX) for businesses, using the internet to handle calls, video, and messaging. 3CX all-in-one unified communications platform provides features like call routing, live chat, web conferencing, and mobile apps, making it a flexible and cost-effective alternative to traditional phone lines.",
  },
  {
    name: "Cisco",
    url: "http://www.cisco.com",
    image: "/images/emerald-original/partners/cisco.webp",
    description: "Cisco is an American multinational technology company that designs, manufactures, and sells networking hardware, software, and telecommunications equipment. It is a global leader in networking solutions, with a wide range of products for building and managing computer networks, including routers, switches, firewalls, and wireless access points.",
  },
  {
    name: "Ubiquiti",
    url: "http://www.ui.com",
    image: "/images/emerald-original/partners/ubiquiti-logo.svg",
    description: "Ubiquiti is a company that develops high-performance networking technology, with its most well-known product line being UniFi, which offers a wide range of products including routers, switches, and Wi-Fi access points. The UniFi ecosystem is managed by a single application, allowing for centralized control and configuration of an entire network.",
  },
  {
    name: "Bluehost",
    url: "http://www.bluehost.com",
    image: "/images/emerald-original/partners/bluehost.webp",
    description: "Bluehost is a popular web hosting and domain registration company that provides a range of services for creating and managing websites, including shared, WordPress, VPS, and dedicated hosting plans.",
  },
  {
    name: "Crowdstrike",
    url: "http://www.crowdstrike.com",
    image: "/images/emerald-original/partners/crowdstrike.webp",
    description: "CrowdStrike is a global cybersecurity leader that has redefined modern security with the world’s most advanced cloud-native platform for protecting critical areas of enterprise risk – endpoints and cloud workloads, identity, and data.",
  },
  {
    name: "Watchguard",
    url: "http://www.watchguard.com",
    image: "/images/emerald-original/partners/watchguard.webp",
    description: "WatchGuard Technologies, Inc. is a global leader in unified cybersecurity. WatchGuard’s Unified Security Platform is designed for managed service providers to deliver world-class security that increases business scale and velocity while improving operational efficiency.",
  },
];

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
          <div key={partner.name} className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
            <a href={partner.url} target="_blank" rel="noreferrer" aria-label={`${partner.name} website`} className="flex h-28 items-center justify-center border-b border-slate-100 pb-5">
              <Image src={partner.image} alt={`${partner.name} logo`} width={480} height={270} className="max-h-20 w-auto max-w-full object-contain" />
            </a>
            <h2 className="mt-5 text-xl font-semibold text-slate-900">{partner.name}</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}