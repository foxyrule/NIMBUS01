# Emerald Technologies and Services Limited

This project contains the Emerald website built with Next.js, React, and TypeScript.

## Project purpose

The site presents Emerald Technologies and Services Limited as a technology consulting and managed services company, with pages for:

- Home
- About
- Services
- IT Partners
- Contact

## Local development

From the project root:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Contact configuration

The contact form is configured for production use with environment variables. The app reads these values server-side and does not expose SMTP credentials in frontend code.

Required server-side environment variables:

```env
CONTACT_TO_FOXY=foxyrule@gmail.com
CONTACT_TO_SSWFO=sswfo0410@gmail.com
CONTACT_TO_EMERALD=contactus@emeraldtechsvcs.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
SMTP_FROM=do-not-reply@emeraldtechsvcs.com
```

`CONTACT_TO_FOXY`, `CONTACT_TO_SSWFO`, and `CONTACT_TO_EMERALD` are all required recipients. `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASS` must be supplied by the SMTP provider. `SMTP_PORT` defaults to `587`; use port `465` for implicit TLS. `SMTP_FROM` is optional and defaults to `do-not-reply@emeraldtechsvcs.com`.

Set these variables in the local, untracked `.env.local` file and in the Vercel project's server-side Environment Variables for every deployed environment that should send contact email. Do not use `NEXT_PUBLIC_` prefixes or commit SMTP credentials. If the recipient or SMTP configuration is missing or invalid, the API returns an error instead of reporting success. A successful response means the SMTP service accepted the message for the configured recipients; it cannot guarantee final inbox delivery.

## Production notes

- Address is configured centrally in `lib/site.ts`
- Contact recipients are configured via environment variables
- The form validates required fields, email format, and maximum message length
- The site keeps all business logic server-side to avoid exposing credentials in browser code

## Important scope note

This workspace contains multiple projects. Only changes inside the Emerald project are intended for this website.
