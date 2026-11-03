// Renders public/og.png (1200x630) from the home page of a running dev or preview server.
// Usage: bun run dev (or preview) in another terminal, then: bun run og [http://localhost:4321]
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const base = process.argv[2] ?? 'http://localhost:4321';
const out = resolve('public/og.png');
const chrome = process.env.CHROME ?? '/usr/bin/google-chrome-stable';
const r = spawnSync(chrome, [
  '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
  '--force-device-scale-factor=1', '--window-size=1200,630', '--virtual-time-budget=4000',
  `--screenshot=${out}`, `${base}/?light`,
], { stdio: 'inherit' });
if (r.status !== 0) process.exit(r.status ?? 1);
console.log(`wrote ${out}`);
