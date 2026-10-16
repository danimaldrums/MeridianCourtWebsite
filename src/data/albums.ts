// Publicly released material only. Do not automatically export private archive data.
export interface Album {
  slug: string;
  arc: string;
  phase: string;
  title: string;
  tagline: string;
  summary: string;
  tone: string;
  cover: string;
}
export const arcs: Album[] = [
  {
    slug: 'the-last-architect', arc: 'ARC Ø', phase: 'ORIGIN',
    title: 'The Last Architect',
    tagline: 'Before the Court. Before Meridian. One man remained.',
    summary: 'When reality begins to collapse, Aurex Valen accepts a responsibility that will outlive his civilisation.',
    tone: 'ember',
    cover: 'images/arc-0-the-last-architect.webp'
  },
  {
    slug: 'the-path-within', arc: 'ARC I', phase: 'AWAKENING',
    title: 'The Path Within', tagline: 'Every ending begins.',
    summary: 'An unexplained calling leads the Seeker towards the Meridian and a truth beyond any destination.',
    tone: 'gold',
    cover: 'images/arc-1-the-path-within.webp'
  },
  {
    slug: 'beyond-the-veil', arc: 'ARC II', phase: 'ASCENSION',
    title: 'Beyond the Veil',
    tagline: 'To see beyond the Veil is to inherit eternity.',
    summary: 'Beyond the Meridian, the Seeker discovers the Court and the responsibility of carrying tomorrow.',
    tone: 'verdigris',
    cover: 'images/arc-2-beyond-the-veil.webp'
  },
  {
    slug: 'the-shattered-horizon', arc: 'ARC III', phase: 'FRACTURE',
    title: 'The Shattered Horizon', tagline: 'Reality is remembering.',
    summary: 'History and memory no longer agree. The Fractures threaten everything the Court believed was certain.',
    tone: 'violet',
    cover: 'images/arc-3-the-shattered-horizon.webp'
  },
  {
    slug: 'the-unwritten-dawn', arc: 'ARC IV', phase: 'CONTINUANCE',
    title: 'The Unwritten Dawn', tagline: 'The future belongs to nobody yet.',
    summary: 'A world survives beneath a broken horizon. When the past cannot be restored, what deserves to continue?',
    tone: 'dawn',
    cover: 'images/arc-4-the-unwritten-dawn.webp'
  }
];
export const chronicles: Album[] = [
  {
    slug: 'all-that-might-have-been', arc: 'CHRONICLES · MERIDIAN', phase: 'AN EARLIER STORY',
    title: 'All That Might Have Been',
    tagline: 'Protect possibility. Honour choice. Live with consequence.',
    summary: 'Before she is known as Meridian, Asteris must confront loss, possibility and the consequences of choice.',
    tone: 'twilight',
    cover: 'images/chronicles-meridian-all-that-might-have-been.webp'
  }
];
