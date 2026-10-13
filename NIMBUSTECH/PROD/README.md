# Nimbus Technologies & Services

The Nimbus website is a responsive corporate site for Nimbus Technologies & Services LLC. It presents the company's business areas: Managed IT Services, RALICARE healthcare records management, Real Estate Services, Fantasy Sports, and Talent Scouting.

## Technology

- **Next.js 16.3.7** provides the React framework, App Router, page routing, static generation, redirects, and production server.
- **React 19.1.0** renders the interface. Most pages are server-rendered React components; the rotating homepage banner and mobile menu are client components because they manage browser interaction and state.
- **TypeScript 5.9.2** checks application code and component contracts.
- **Tailwind CSS 3.4.17** supplies utility-first styling and the shared Nimbus color palette. `postcss` and `autoprefixer` process the styles.
- **ESLint 9.30.1** and `eslint-config-next` provide code-quality checks using the flat configuration in `eslint.config.mjs`.
- **Node.js and npm** install dependencies and run the project scripts. Use a current Node.js version compatible with Next.js 16.

The site includes a server-side contact endpoint. Contact messages are validated and sent to the configured Nimbus recipients through the Resend API. The Resources page links to original Nimbus-hosted pages for the credited third-party articles.

## Run Locally

Open a terminal in this directory (`NIMBUSTECH/PROD`) and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL printed by Next.js, usually `http://localhost:3000`.

To enable contact-form delivery, copy `.env.example` to `.env.local` and set these server-side environment variables:

```env
RESEND_API_KEY=re_your_resend_api_key
CONTACT_FROM_EMAIL=Nimbus Website <website@your-verified-domain.com>
CONTACT_TO_FOXY=foxyrule@gmail.com
CONTACT_TO_NIMBUS=contactus@nimbustechllc.com
```

`RESEND_API_KEY` is the secret API key from Resend. `CONTACT_FROM_EMAIL` must be an address (optionally with a display name) verified with Resend. `CONTACT_TO_FOXY` and `CONTACT_TO_NIMBUS` configure the two required recipients. Add all four values in the Nimbus Vercel project's server-side Environment Variables for each environment that should send contact mail. Do not use `NEXT_PUBLIC_` prefixes or commit `.env.local` or real credentials.

Nimbus currently sends mail through Resend's HTTPS API; it does not use Nodemailer or SMTP, so SMTP environment variables are not required. If any required configuration is missing or invalid, or if Resend rejects the request, the API returns an error instead of reporting success. A successful response means Resend accepted the message for processing; it does not guarantee final inbox delivery.

Available verification and production commands:

```bash
npx tsc --noEmit
npm run lint
npm run build
npm start
```

`npm start` serves the previously generated production build, so run `npm run build` first. If port 3000 is already occupied, Next.js can use another available port.

## Routes

| URL | Purpose |
| --- | --- |
| `/` | Homepage with a five-slide service highlight rotator and business-area links. |
| `/about` | Company overview and operating principles. |
| `/services` | Overview of Nimbus service lines. |
| `/services/managed-it` | Managed IT overview and seven service areas, including Microsoft 365, document management, support, planning, maintenance, cyber risk mitigation, and cloud solutions. |
| `/services/ralicare` | RALICARE and healthcare records management. |
| `/services/real-estate` | Real estate services. |
| `/services/sports-talent` | Fantasy sports and talent scouting. |
| `/resources` | Service resources and attributed original article links. |
| `/contact` | Contact form with a 400-character message limit and email contact link. |
| `/contact-us` | Permanent redirect to `/contact`, retaining compatibility with the original Nimbus URL. |

## How the App Is Organized

Next.js App Router maps folders under `app/` to public routes. A `page.tsx` file renders each page. `app/layout.tsx` supplies the shared document metadata and wraps routes with the site header, mobile navigation, and footer. `app/globals.css` defines global styles and shared layout utilities.

Reusable UI and layout components live in `components/`:

- `components/layout/Header.tsx` renders the desktop header, brand symbol, primary links, and contact CTA.
- `components/layout/MobileNavigation.tsx` provides the collapsible small-screen navigation.
- `components/layout/Footer.tsx` renders company details and site navigation.
- `components/ui/HeroRotator.tsx` rotates among five service highlights, with timed progression, manual controls, and links to the corresponding service pages.
- `components/ui/ServiceCard.tsx` and `SectionHeading.tsx` keep common page elements consistent.

`components/ui/ContactForm.tsx` provides browser validation, the live character counter, duplicate-submit protection, and submission feedback. `app/api/contact/route.ts` validates submissions on the server and sends them to the configured recipients through Resend.

`lib/site.ts` is the shared source for the approved company email and primary navigation. The retired phone number and street address are not used by the site.

## Brand and Image Assets

- `public/brand/nimbus-symbol.svg` is the primary standalone symbol.
- `public/brand/nimbus-symbol-mono.svg` is the monochrome version for one-color applications.
- `public/brand/nimbus-symbol-white.svg` is intended for dark backgrounds.
- `public/brand/nimbus-symbol-presentation.svg` places the symbol on a neutral background for convenient review and presentation.
- `public/brand/favicon.svg` is the browser icon, registered in `app/layout.tsx` metadata.
- `public/images/original/` contains the Nimbus service photographs and graphics used by the homepage, service pages, and footer.

Files in `public/` are served from the website root. For example, `public/brand/nimbus-symbol.svg` is referenced as `/brand/nimbus-symbol.svg`. The symbol SVGs use a 128-by-128 viewBox, allowing them to scale cleanly; the standalone transparent variants are suitable starting points for SVG and raster exports.

## Configuration

- `next.config.mjs` enables React strict mode and redirects the legacy `/contact-us` path to `/contact`.
- `tailwind.config.ts` defines the source files Tailwind scans and the Nimbus brand colors.
- `postcss.config.mjs` enables Tailwind and Autoprefixer.
- `eslint.config.mjs` configures Next.js linting.
- `tsconfig.json` configures TypeScript and the `@/` import alias.

When adding a route, create its directory and `page.tsx` under `app/`. Reuse shared components and `lib/site.ts` where appropriate. Keep verified company details accurate and clearly attribute any third-party resource content.