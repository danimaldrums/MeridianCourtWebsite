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

Only released story material is on the website: Arcs Ø–IV and the Meridian Chronicle. The unreleased First Circle Chronicle and Arc V development are excluded.

Approved album covers, the Meridian Court logo and profile illustration are used by the public site. CSS geometric illustrations remain as visual fallbacks where applicable.

No unverified streaming links have been invented. See [public-content policy](docs/CONTENT_POLICY.md).

## Approved artwork integration (v0.2)

The public site references six released album covers, the approved Meridian Court logo and the profile illustration in `public/images/`. CSS fallback artwork remains in place where applicable. Exact filenames and safeguards are documented in `public/images/README.md`.

Do not upload unpublished First Circle or Arc V artwork into this public repository.

## Public Codex (v0.4)

The [Meridian Codex](https://danimaldrums.github.io/MeridianCourtWebsite/archive/) now has a searchable index with 54 editorially curated public records: 19 character/location/phenomenon entries and 35 released, canonical narrated Archive scripts. Every record has a dedicated page with optional spoiler-revealing text, and reference entries link to related public records. The archive deliberately does not expose unreleased materials, Suno prompts or private governance files.

The three-mark hidden-record puzzle is published. It leads to **The Unindexed Record — The Shoreless Light**, a creator-approved website-exclusive mystery presented as **unverified in-world testimony**, not Locked Canon. Its notebook-style illustration is published separately from the 19 approved Codex reference portraits and scenes. Also note the Arc I `The First Page` source narration is currently very short and should be cross-checked against released audio.
