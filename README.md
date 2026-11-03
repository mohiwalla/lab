# lab.mohiwalla.com

My experimental projects, listed in one place. Static site built with [Astro](https://astro.build), hosted on Vercel.

## Add an experiment

1. Drop a 1280×800 screenshot and a square icon into `src/assets/projects/`.
2. Import it in `src/data/projects.ts` and add an entry to the `projects` array (newest first).
3. `bun run build` to check it, then commit and push. Vercel deploys `main`.

## Develop

```sh
bun install
bun run dev        # http://localhost:4321, also on the LAN
bun run build      # type-check + static build into dist/
bun run preview    # serve dist/
```

To preview the dev server from anywhere (phone, someone else), open a quick Cloudflare tunnel:

```sh
cloudflared tunnel --url http://localhost:4321
```

## Deploy

Production lives at https://lab.mohiwalla.com. Deploy from this directory with `bunx vercel --prod`.
