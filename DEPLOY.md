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

## Known limitations carried over from the original

The site is a Vite/React SPA with an Express backend. GitHub Pages only serves the
static front-end, so these sections fetch from `/api/...` endpoints that do not
exist on Pages (this is already the case on the collaborator's live site):

- Timeline section (`/api/timeline`)
- About / Cultural elements (`/api/cultural`)
- Pose Library (`/api/poses`)

They will render empty or in a loading state. Fixing this (baking the data in as
static JSON) is the planned follow-up — see "Fix later" below.

Working sections: hero, F2F dataset, F2F 3D, pipeline, AI co-dance, other use cases,
data access, footer, and all S3-hosted demo videos.

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

## Fix later (make it fully self-contained)

Convert the three `/api/*` endpoints (their data is hard-coded in
`server/storage.ts` — timeline events, dance poses, cultural elements) into static
JSON files under `client/public/api/`, and repoint the four `useQuery` calls in
`client/src/components/{about-section,cultural-components,pose-library,timeline-section}.tsx`
at those files using `import.meta.env.BASE_URL`. Also fix the `./src/images/...`
`imageUrl` values in the seed data so they resolve in the build. After that the
backend and the S3 dependency for the page's own images go away (demo videos still
come from S3).
