# Go Beyond Degree

A Next.js + TypeScript marketing site using the App Router and Tailwind CSS.

## Run locally

Install Node.js 20.19+ or 22.12+, then run:

```bash
corepack enable
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
pnpm run lint
pnpm run build
```

## Deploy to Vercel

1. Commit and push this repository to GitHub.
2. In Vercel, select **Add New → Project** and import the repository.
3. Vercel detects Next.js automatically. Leave the build command as `pnpm run build`.
4. Deploy.

The home page includes SEO metadata through `src/app/layout.tsx`. Add your production domain to the metadata when it is available.
