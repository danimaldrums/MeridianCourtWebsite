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

The CSS geometric illustrations are **temporary**, not official album covers or the approved Meridian Court logo. The next phase will copy approved, optimised public assets into this repository.

No unverified streaming links have been invented. See [public-content policy](docs/CONTENT_POLICY.md).

## Approved artwork integration (v0.2)

The site is ready for eight web-optimised, user-approved public assets in `public/images/`: six released covers, the official Meridian Court logo, and the Meridian Court profile illustration.

Until the images are uploaded, CSS placeholder art remains as a fallback. Upload the files individually; GitHub does not unpack a ZIP automatically. Exact filenames and safeguards are documented in `public/images/README.md`.

Do not upload unpublished First Circle or Arc V artwork into this public repository.

## Public Codex (v0.4)

The [Meridian Codex](https://danimaldrums.github.io/MeridianCourtWebsite/archive/) now has a searchable index with 54 editorially curated public records: 19 character/location/phenomenon entries and 35 released, canonical narrated Archive scripts. Every record has a dedicated page with optional spoiler-revealing text, and reference entries link to related public records. The archive deliberately does not expose unreleased materials, Suno prompts or private governance files.

The hidden-record puzzle and any entirely new story revelation are **not yet published**; both the reveal's exact wording and its canon status require creator approval. Also note the Arc I `The First Page` source narration is currently very short and should be cross-checked against released audio.
