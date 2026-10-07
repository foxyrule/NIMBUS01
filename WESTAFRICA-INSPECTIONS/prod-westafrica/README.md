# West Africa Inspection Services Limited

The WAIS website is built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Local development

Install dependencies with npm, then start the development server:

```sh
npm install
npm run dev
```

## Contact form email

The server-side contact endpoint uses Resend. For local or production email delivery, provide these environment variables through the deployment environment or a local `.env.local` file:

```sh
RESEND_API_KEY=
CONTACT_FROM_EMAIL=
```

`CONTACT_FROM_EMAIL` must be a sender address configured for the Resend account. The API key must remain server-side. Until both values are configured, the form reports that sending is temporarily unavailable and the phone and email links remain available.

The contact form limits messages to 400 words. Enquiries are sent to `oyesojio@hotmail.com` and `mail@westafrica-inspections.com`.

## Validation

```sh
npm run lint
npm run build
```
