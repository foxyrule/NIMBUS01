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

Required environment variables:

```env
CONTACT_TO_FOXY=foxyrule@gmail.com
CONTACT_TO_SSWFO=sswfo0410@gmail.com
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
```

If SMTP variables are not configured in the local environment, the API still validates submissions correctly but will not deliver email until the server-side mail configuration is provided.

## Production notes

- Address is configured centrally in `lib/site.ts`
- Contact recipients are configured via environment variables
- The form validates required fields, email format, and maximum message length
- The site keeps all business logic server-side to avoid exposing credentials in browser code

## Important scope note

This workspace contains multiple projects. Only changes inside the Emerald project are intended for this website.
