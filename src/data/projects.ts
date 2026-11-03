import type { ImageMetadata } from 'astro';
import dinoShot from '../assets/projects/dino-3d.webp';
import dinoMark from '../assets/projects/dino-3d-mark.png';
import ladduShot from '../assets/projects/laddu.webp';
import ladduMark from '../assets/projects/laddu-mark.webp';

export interface Project {
  /** Anchor id, e.g. #dino-3d. */
  slug: string;
  name: string;
  /** One line. */
  hook: string;
  /** A sentence or two, in my own words. */
  description: string;
  /** YYYY-MM */
  date: string;
  live: string;
  source?: string;
  shot: ImageMetadata;
  shotAlt: string;
  /** Square icon next to the name. Set `pixel` for pixel art. */
  mark: ImageMetadata;
  pixel?: boolean;
  /** Invert the screenshot in dark mode (good for black-on-white shots). */
  invertInDark?: boolean;
}

/** Oldest first; the page numbers them in this order. */
export const projects: Project[] = [
  {
    slug: 'dino-3d',
    name: 'Dino 3D',
    hook: 'Voxel runner inspired by the Chrome T-Rex.',
    description:
      '3D version of the runner game using Three.js. Supports gamepads and has three camera angles.',
    date: '2026-10',
    live: 'https://dino.mohiwalla.com',
    source: 'https://github.com/mohiwalla/dino-3d',
    shot: dinoShot,
    shotAlt: 'A voxel T-Rex on a grey track with "Press space to play" under it.',
    mark: dinoMark,
    pixel: true,
    invertInDark: true,
  },
  {
    slug: 'laddu',
    name: 'laddu',
    hook: 'A sweet little helper who lives in your Slack.',
    description:
      'Coding agent for Slack. Reads threads and runs work in a private sandbox.',
    date: '2026-10',
    live: 'https://laddu.wtf',
    source: 'https://github.com/mohiwalla/laddu',
    shot: ladduShot,
    shotAlt: 'The laddu.wtf landing page with a smiling laddoo mascot in a bow tie.',
    mark: ladduMark,
  },
];
