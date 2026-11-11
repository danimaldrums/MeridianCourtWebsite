# Meridian Court — Official Website

The public home of **Meridian Court**, a cinematic metal music and story universe.

Built with Astro and deployed through GitHub Pages. The private `MeridianCourtArchive` remains the canonical source of truth.

## Development

Node.js 22+:

~~~sh
npm install
npm run dev
npm run build
~~~

## Publish

In **Settings → Pages** select **GitHub Actions** as the publishing source. Commits to `main` deploy to:

https://danimaldrums.github.io/MeridianCourtWebsite/

## Publishing boundary

Only released story material is on the website: Arcs Ø–IV, Chronicles · Meridian and Chronicles · The First Circle (released on Suno on 11 November 2026). The unreleased Arc V development is excluded.

Approved album covers, the Meridian Court logo and profile illustration are used by the public site. CSS geometric illustrations remain as visual fallbacks where applicable.

No unverified streaming links have been invented. See [public-content policy](docs/CONTENT_POLICY.md).

## Approved artwork integration (v0.2)

The public site references seven released album covers, the approved Meridian Court logo and the profile illustration in `public/images/`. CSS fallback artwork remains in place where applicable. Exact filenames and safeguards are documented in `public/images/README.md`.

The First Circle is released and its creator-approved cover is published as an optimised public WebP; Arc V artwork remains unpublished. The original cover is preserved in the private archive.

## Public Codex (v0.4)

The [Meridian Codex](https://danimaldrums.github.io/MeridianCourtWebsite/archive/) now has a searchable index with 68 editorially curated public records: 28 character, place, phenomenon and historical-reference entries and 40 released narrated Archive scripts. Every record has a dedicated page with optional spoiler-revealing text, and reference entries link to related public records. The archive deliberately does not expose unreleased materials, Suno prompts or private governance files.

The three-mark hidden-record puzzle is published. It leads to **The Unindexed Record — The Shoreless Light**, a creator-approved website-exclusive mystery presented as **unverified in-world testimony**, not Locked Canon. Its notebook-style illustration is published separately from the 19 approved Codex reference portraits and scenes. Also note the Arc I `The First Page` source narration is currently very short and should be cross-checked against released audio.

## First Circle release (11 November 2026)

*What Tomorrow Costs* is now a public, Locked Canon Chronicle. The album listing, spoiler-aware written story, historical chronology and five public Codex narrations have been updated. The creator-approved cover is published as `public/images/chronicles-first-circle-what-tomorrow-costs.webp`, and is used for the album catalogue, story page and narrated Archives. No unverified Suno album URL is published. Arc V remains unreleased.

## First Circle character, world and history Codex (11 November 2026)

Nine new public Codex references were added for Seren Vale, Cael Ordan, Elara Vey, Tavian Rho, Ilyra Sen, the two unnamed worlds, the original First Circle and Adaptation. Each includes an editorial overview, detailed chapters, linked published records and a deliberately unillustrated typography panel. They are available through the existing Codex, the new **History & decisions** chapter, Threads of History, Atlas (worlds), and the album's story page.

To publish a creator-approved illustration later, upload it to `artwork/inbox/` using the subject's exact slug as the file stem; the artwork publisher now validates these new names alongside the existing references. Its completion triggers the Pages workflow. No unapproved character or place illustrations have been created.
