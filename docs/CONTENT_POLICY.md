# Website design and publishing policy

## Canon boundary

The private MeridianCourtArchive is the source of truth for canon, artworks, release approvals and ongoing development. This public site is a curated publication, not a mirror of the archive.

Before publishing:
1. Verify material against the authoritative archive.
2. Confirm its specific public release approval.
3. Prefer spoiler-light descriptions and label future deep-dive spoilers.
4. Exclude prompts, drafts, private decisions and unreleased stories.
5. Never infer canon from symbolic imagery or fill unknown periods of history.
6. Verify official listening links; do not invent them.

## Included (released)

- Arc Ø — The Last Architect
- Arc I — The Path Within
- Arc II — Beyond the Veil
- Arc III — The Shattered Horizon
- Arc IV — The Unwritten Dawn
- Chronicles · Meridian — All That Might Have Been

## Excluded

- Chronicles · The First Circle — What Tomorrow Costs (unreleased Working Canon)
- Arc V / Resonance Cycle development
- Internal governance, experiments and novel drafts

## Visual continuity

Use rich blacks, warm gold and restrained ivory alongside the secondary colours of individual released albums.

The abstract CSS graphics and temporary compass-like site icon are **not** the canonical album covers or approved master logo. Replace them with approved exports in the public repository in the next phase. Never hotlink the private archive.

## Next passes

Approved logo and covers, verified music links, individual album pages, responsive/accessibility review and public lore expansion.

## Public Codex / Archive readers (2026-10-20)

The public Archive is now a curated search index of released character, location and phenomenon summaries plus 35 original spoken Archive narrations from Arc Ø–IV and the released Meridian Chronicle. Narrative transcripts were extracted only from each Locked Canon file's **Official Narration**, **Final Script**, **Lyrics**, **Narration** or **Archive Script** section, not from Suno prompts, creative notes or unreleased documents.

Readers must actively open spoiler-aware record panels. The reference entries are editorial summaries of released source, not independent canon. They must be corrected against the canonical source if it changes. All 35 narrations should receive a human cross-check against released audio before claiming word-for-word audio equivalence; notably the Locked Canon file for **Arc I — The First Page** contains only a very short script.

**Secret material:** New hidden-fiction material may be prototyped only at the creator's explicit request; until reviewed it is presented as unverified in-world testimony, not promoted to Locked Canon. A concealed client-side message is discoverable in publicly hosted HTML/JavaScript and is never confidential.


## Website-only Unindexed Record prototype (2026-10-20)

The creator requested an original **new** hidden mystery, plus a parchment-and-black-gold Codex inspired by two **old, non-authoritative visual references**. The images' former character descriptions, law names and implied events are NOT canonical sources.

The hidden three-mark route is seeded into the published Seeker character page, Hall of Architects location page and Arc I Archive I reading page; collecting all three browser-local marks makes an unlisted route readable. Mark progress is stored only in this browser, without account services or tracking. Browser source can be inspected; this is a discoverable story puzzle, **not** a security boundary.

**The Unindexed Record — The Shoreless Light** is new, original website-exclusive story material written for this experiment. Its supposed testimony is **unverified within the fiction** and is not presented as a discovered fact about any established Court era, institution, place, character or system. It is not automatically Locked Canon. The creator may approve, revise or decline its future narrative consequences. No unreleased Arc, Chronicle, lyrics or novel text is reproduced in it.

## Court registry labels and transcript identifiers (20 October 2026)

The public site presents the reader with a fictional **Initiate / Clearance I** designation and sealed higher-clearance annex. This is a purely in-universe interface: not an actual membership system, not a new established Court hierarchy and not proof that unpublished files exist. The actual release boundaries above remain in force.

Display precise spoken identifiers when the narrator announces an entry number: Arc II uses 11903–11908; Arc III uses 8174, 11902, 431, 9201, 0900 and 0001 (preserve the leading zeros); Arc IV uses 1–5. Arc Ø narrations do not speak numbers, but six Locked Canon source headings explicitly list 001, 014, 274,119, 618,442, 1,482,903, 1,482,904; the seventh is an unnumbered recovered Archive. Arc I and the released Meridian Chronicle do not announce record IDs, so use their canonical ordinal sequence in Roman numerals. See `src/data/archive-identifiers.ts` for identifiers and their evidence classification.

The external-facing remarks about publication status, working canon and production restrictions were replaced with fictional registry language. Keep those safeguards in private development and policy documents, not rendered as part of the fictional records.

## Volume II companion-book presentation (20 October 2026)

The Archive entry point is now an aged parchment, two-leaf **book contents and index** instead of a card grid. Chapter tabs select people, places, phenomena, narrated Archives or the full register. Search and volume filtering sit within the illustrated facing page. Entry-number matching and in-world Initiate / Clearance I framing remain unchanged. A short decorative cover-opening animation plays when opening the Archive from elsewhere; it is skipped on reduced-motion devices and when returning to a chosen chapter. iPhone stacks the two leaves vertically without hiding content.

Nineteen unique **first-pass archival illustration plates** live under `public/images/codex/`, one for each of the eight characters, nine places and two phenomena. These are custom SVG interpretive concept illustrations (not approved photorealistic canon portraits or verified historical depictions), rather than repeated album covers. Spoken Archive pages continue to display the relevant approved album artwork. The original official logo/covers are unchanged. Final painterly character likenesses and environmental paintings require creator review before being considered canonical visual references.

The hidden Seeker / Hall of Architects / first Arc I narration marginalia, browser-local puzzle state, and Unindexed Record remain accessible. In-world clearance notices have **no security or authorisation function**; unreleased chapters and sensitive information stay outside this public repository.

## Approved portrait intake workflow (2026-10-20)

The source of truth for *which artwork is approved* remains the creator's explicit review; never upload an unapproved character image simply because it exists. The `artwork/inbox/` folder is a publication intake only. The GitHub Actions `publish-codex-artwork.yml` processor validates a Codex slug, prepares a WebP, updates `src/data/codex-artworks.json` and removes the inbox image. Only reference profiles can receive this override: narrated Archives still use official approved album covers. The master logo and released covers are untouched.

The inbox is part of a **public GitHub repository**; no unreleased projects, private images or secrets may be placed there. User upload and workflow authorisation are necessary; the current assistant cannot write local generated binary images using the GitHub connector, although it can create and edit repository text, metadata and automation. Conversion via Pillow removes original EXIF metadata from output. Normal Git history retains prior submitted binaries. The creator-approved Meridian Asteris image has been prepared for this process but is **not published to the website until uploaded to the inbox**.

## Meridian Asteris image publication (20 October 2026)

The approved Meridian portrait was uploaded to the GitHub artwork inbox on 20 October 2026 and the automatic upload was initially rejected solely because the local filename did not match the canonical Codex slug. The actual uploaded binary was renamed to `meridian-asteris.webp` without modifying its content; the subsequent **Publish approved Codex artwork** workflow completed successfully and wrote `public/images/codex/meridian-asteris.webp` plus its `src/data/codex-artworks.json` mapping. The temporary inbox is now empty. This approved image is a creator-approved visual interpretation, not additional story canon. To ensure the generated image is deployed, this documentation change triggers a fresh website deployment after the bot's publishing commit; workflow commits made using the GitHub Actions token do not necessarily re-trigger the Pages deployment.

## Current public artwork and hidden-record status (28 October 2026)

The approved released-album covers, site logo and profile artwork are now referenced by the website; earlier 'next phase' statements above are historical notes, not current publication status. All 19 Codex character/place/phenomenon artwork overrides are recorded in `src/data/codex-artworks.json`. The hidden three-mark route and **The Unindexed Record — The Shoreless Light** are published, including the separate notebook-style sketch at `public/images/codex/the-unindexed-record.webp`. The creator approved this as a website-exclusive mystery, **not** as confirmed historical testimony or Locked Canon. The secret sketch must not be added to the 19-reference Codex artwork manifest.

The released catalogue remains Arcs Ø–IV and Chronicles · Meridian. Arc V and the First Circle Chronicle remain excluded until the creator confirms public release. Official listening links must be verified before publication. The artwork publishing workflow and Pages deployment workflow are separate; verify that both complete and that the deployed asset is refreshed before declaring publication successful.
