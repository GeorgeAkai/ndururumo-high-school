# Ndururumo High School website

The official website of **Ndururumo High School**, Nyahururu, Kenya, built and donated by an alumnus.

Built with [Next.js](https://nextjs.org) (App Router), Tailwind CSS and [Sanity](https://www.sanity.io) as the headless CMS. The site is designed to be deployed on [Vercel](https://vercel.com).

## Pages

| Route | Content |
| --- | --- |
| `/` | Home: hero, key facts, principal's welcome, latest news and events |
| `/about` | Motto, mission, vision, history timeline, core values, principal's message, leadership |
| `/academics` | CBC senior school pathways, departments, co-curricular activities |
| `/admissions` | Admission steps, what to bring, fees and enquiries |
| `/news`, `/news/[slug]` | News and announcements *(CMS)* |
| `/events` | Upcoming events *(CMS)* |
| `/gallery` | Photo gallery *(CMS)* |
| `/alumni` | Ways for alumni to reconnect and give back |
| `/contact` | Email and city |
| `/studio` | Sanity Studio, where school staff edit content |

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

The site works **without** any CMS setup: until Sanity is connected it shows the built-in content in `src/lib/fallback.ts`.

## Deploying to Vercel

1. Go to https://vercel.com/new and import this GitHub repository. Vercel detects Next.js automatically.
2. Add the environment variables from `.env.example` (you can add the Sanity ones later).
3. Click **Deploy**.

## Connecting the CMS (Sanity)

1. Create a free account and project at https://www.sanity.io/manage (dataset name: `production`).
2. In the project's **API → CORS origins**, add your site URLs with **Allow credentials** ticked, e.g. `http://localhost:3000` and `https://your-site.vercel.app`.
3. Set these environment variables in Vercel (and in a local `.env.local`):
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app
   ```
4. Redeploy, then open `https://your-site.vercel.app/studio` and sign in.
5. Invite school staff under **Members** in sanity.io/manage so they can edit content.

In the Studio, staff can manage:

- **Site settings**: school name, motto, email, city, principal's name, photo and message, number of students, homepage photo
- **News**: articles with cover photos
- **Events**: the school calendar (past events hide automatically)
- **Gallery**: photos with captions and categories
- **Leadership**: staff names, roles and photos

Published changes appear on the site within about a minute. If a section has no CMS content yet, the built-in content is shown instead.

## Customising

- **School colours**: edit the `--color-brand-*` and `--color-gold-*` tokens in `src/app/globals.css`.
- **Crest/logo**: replace the placeholder in `src/components/Crest.tsx` and `src/app/icon.svg` with the official badge.
- **Static page text** (academics, admissions, history): edit the page files under `src/app/(site)/`.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
