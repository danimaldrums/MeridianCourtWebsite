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
