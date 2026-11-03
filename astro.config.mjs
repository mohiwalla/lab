// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lab.mohiwalla.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Lets the dev server answer through a Cloudflare quick tunnel.
  vite: { server: { allowedHosts: ['.trycloudflare.com'] } },
});
