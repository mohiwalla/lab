import type { ImageMetadata } from 'astro';
import dinoShot from '../assets/projects/dino-3d.webp';
import dinoMark from '../assets/projects/dino-3d-mark.png';
import ladduShot from '../assets/projects/laddu.webp';
import ladduShotDark from '../assets/projects/laddu-dark.webp';
import ladduMark from '../assets/projects/laddu-mark.webp';
import fishprShot from '../assets/projects/fishpr.webp';
import fishprShotDark from '../assets/projects/fishpr-dark.webp';
import fishprMark from '../assets/projects/fishpr-mark.webp';
import memesShot from '../assets/projects/memes.webp';
import memesShotDark from '../assets/projects/memes-dark.webp';
import memesMark from '../assets/projects/memes-mark.webp';
import matherShot from '../assets/projects/mather.webp';
import matherShotDark from '../assets/projects/mather-dark.webp';
import matherMark from '../assets/projects/mather-mark.webp';
import resumeShot from '../assets/projects/resume.webp';
import resumeMark from '../assets/projects/resume-mark.webp';
import teamsShot from '../assets/projects/teams-transcript.webp';
import teamsMark from '../assets/projects/teams-transcript-mark.webp';

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
  /** The live thing, if there is one. */
  live?: string;
  source?: string;
  shot: ImageMetadata;
  shotAlt: string;
  /** Optional dark-mode screenshot, shown instead of `shot` in dark mode. */
  shotDark?: ImageMetadata;
  /** Square icon next to the name. Set `pixel` for pixel art. */
  mark: ImageMetadata;
  pixel?: boolean;
  /** Invert the screenshot in dark mode (good for black-on-white shots). */
  invertInDark?: boolean;
}

/** Oldest first here; the page reverses it so the newest is 01. */
export const projects: Project[] = [
  {
    slug: 'mather',
    name: 'Mather',
    hook: 'Quick mental math practice against a timer.',
    description: 'Practice arithmetic with custom difficulty levels. Built with React to test speed and accuracy.',
    date: '2025-06',
    live: 'https://math.mohiwalla.com',
    source: 'https://github.com/mohiwalla/math-game-react',
    shot: matherShot,
    shotDark: matherShotDark,
    shotAlt: 'Mather asking 40 + 77 with an answer field and a timer.',
    mark: matherMark,
  },
  {
    slug: 'agentic-resume',
    name: 'Agentic Resume',
    hook: 'AI agent that tailors resumes for job descriptions.',
    description: 'Modifies Reactive Resume data to match specific requirements. Renders the final PDF locally using Docker.',
    date: '2026-04',
    source: 'https://github.com/mohiwalla/agentic-reactive-resume',
    shot: resumeShot,
    shotAlt: 'Banner showing resume JSON going through AI tailoring into a finished PDF.',
    mark: resumeMark,
  },
  {
    slug: 'teams-transcript',
    name: 'Teams Transcript Extractor',
    hook: 'Extract transcripts from Microsoft Teams meeting pages.',
    description: 'Browser extension to save meeting transcripts as text or JSON. Works directly from the Teams web interface.',
    date: '2026-05',
    source: 'https://github.com/mohiwalla/teams-transcript-extractor',
    shot: teamsShot,
    shotAlt: 'The extension popup open on a Stream meeting page, after downloading 132 transcript entries.',
    mark: teamsMark,
  },
  {
    slug: 'meme-stash',
    name: 'Meme Stash',
    hook: 'A hand-picked collection of good meme GIFs.',
    description: 'Search and copy memes with keyboard shortcuts. Open source collection with community contributions on GitHub.',
    date: '2026-04',
    live: 'https://memes.mohiwalla.com',
    source: 'https://github.com/mohiwalla/memes',
    shot: memesShot,
    shotDark: memesShotDark,
    shotAlt: 'Meme Stash: a grid of meme GIF cards under a search bar.',
    mark: memesMark,
  },
  {
    slug: 'fishpr',
    name: 'fishpr',
    hook: 'Push-to-talk dictation for KDE Plasma on Wayland.',
    description: 'Dictate text into any app using Rust. Streams audio for instant results and keeps a history of transcriptions.',
    date: '2026-08',
    live: 'https://fishpr.mohiwalla.com',
    source: 'https://github.com/srafis/fishpr',
    shot: fishprShot,
    shotDark: fishprShotDark,
    shotAlt: 'fishpr site: "Hold Ctrl + Space and talk" above a text editor and a shark mascot.',
    mark: fishprMark,
  },
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
    shotDark: ladduShotDark,
    shotAlt: 'The laddu.wtf landing page with a smiling laddoo mascot in a bow tie.',
    mark: ladduMark,
  },
];
