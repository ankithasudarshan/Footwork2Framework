# Hosting this site from your own GitHub account

This is a re-host of the Footwork2Framework project page, originally in a
collaborator's repo (`t2025/Footwork2Framework`, served at
`https://t2025.github.io/Footwork2Framework/`). The code here is an **exact mirror**
of that project except:

- the collaborator's git history was removed (fresh history starts here);
- `client/src/videos/*.mp4` (~285 MB, tracked in Git LFS) were **removed** — they
  are not referenced anywhere in the site. Every video on the page streams from an
  external S3 bucket (`bharatnatyambucket.s3.us-east-1.amazonaws.com`), which is
  unchanged and outside this repo.

## Backend / `/api/*` endpoints — resolved

The site is a Vite/React SPA that in the original also had an Express backend serving
`/api/timeline`, `/api/cultural`, `/api/poses`. GitHub Pages has no backend, so those
calls always 404ed.

What was actually on the page: `home.tsx` renders About, F2F Dataset, F2F 3D,
Pipeline, AI Co-Dance, Pose Library, Other Use Cases, Data Access, Footer. It does
**not** render `TimelineSection` or `CulturalElementGrid` (imported but unused), so
those two never mattered. The two rendered components that *did* make doomed fetches
were `AboutSection` (fetched `/api/cultural` but never used the result) and
`PoseLibrary` (fetched `/api/poses`, already had a local fallback).

All four components were switched to inline static data (from `server/storage.ts`
seed data) and the `useQuery`/`/api/*` calls removed. The rendered page now has **no
backend dependency**. `server/` is left in the repo (the build's `esbuild` step still
bundles it) but nothing on Pages uses it.

Still external: the demo videos and diagram images, which stream from the S3 bucket
`bharatnatyambucket.s3.us-east-1.amazonaws.com` (owned by a collaborator). Rehosting
those is the remaining task — see "Media rehost" below.

## One-time setup

1. **Create a new PUBLIC repo** on GitHub named exactly **`Footwork2Framework`**
   (the name matters — `vite.config.ts` has `base: "/Footwork2Framework/"`, and the
   Pages URL becomes `https://<you>.github.io/Footwork2Framework/`). Do not add a
   README/.gitignore/license in the GitHub UI — keep it empty.
   - It must be public: GitHub Pages does not serve from private repos without a
     paid plan.
   - If you want a different repo name, change `base` in `vite.config.ts` to
     `"/<new-name>/"` first.

2. **Push this folder** (commands below).

3. **Enable Pages via Actions:** repo → Settings → Pages → "Build and deployment" →
   Source → **GitHub Actions**. (No branch selection needed.)

4. The included workflow `.github/workflows/deploy.yml` runs on every push to
   `main`: it runs `npm ci`, `npm run build`, and deploys `dist/` to Pages. Watch
   the first run under the repo's **Actions** tab. When it goes green, the site is
   live at `https://<you>.github.io/Footwork2Framework/`.

## Push commands

From this directory (`D:\ClaudeCodeProject\Footwork2Framework`):

```bash
git remote add origin https://github.com/<your-username>/Footwork2Framework.git
git branch -M main
git push -u origin main
```

## Media rehost (remaining task)

The 37 video/image files the page loads from the collaborator's S3 bucket are
downloaded and size-verified in `_media_staging/` (gitignored, ~376 MB). Plan:

1. Upload them to a free host with no egress fees — **Cloudflare R2** (10 GB free,
   $0 egress) is the pick; GitHub Releases on this repo also works.
2. Find-and-replace `https://bharatnatyambucket.s3.us-east-1.amazonaws.com/` with the
   new base URL across `client/src` (and the one occurrence in
   `client/src/components/timeline-section.tsx`'s static data).
3. Commit and push; the workflow redeploys.

Keep the URL-encoded object keys as-is (`chunk%3D000-...`, `Arun+1.mp4`) — R2 decodes
percent-encoding the same way S3 does.
