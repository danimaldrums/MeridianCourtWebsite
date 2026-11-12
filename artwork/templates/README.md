# Approved Meridian Court Codex portrait border

The final **1000 × 1200 pixel (5:6)** border is a reusable transparent
asset extracted from the approved Elara Vey Codex artwork.

**Important:** The exact master overlay binary is
`meridian-codex-border-master.png`. Do not regenerate it from a text prompt,
re-create another border, or extract border pixels from an unapproved image.

The master is distributed in `MeridianCourt_Codex_Border_Template.zip`,
alongside a standalone script and instructions. Once the creator uploads
`meridian-codex-border-master.png` **to this folder**, the repository's
`scripts/compose_codex_portrait.py` will work without further changes.

## Repeatable workflow

1. Generate/select a subject-specific portrait **without borders or text**.
2. Preserve the selected face, clothing and personality.
3. Install Pillow: `python -m pip install Pillow`.
4. Run `python scripts/compose_codex_portrait.py portrait.png character-slug.webp`.
5. For a selected image with its own AI-generated frame, add
   `--trim-framed-source`. Review that the face remains framed correctly.
6. Have the creator approve the output. When all portraits are approved,
   batch-upload the `character-slug.webp` files to `artwork/inbox/`.
   The established publisher updates `src/data/codex-artworks.json`.

The fixed frame uses distressed black/gold, worn parchment edges, a
celestial/compass rose at upper-left, sweeping fine gold arcs, and moon phases
on the right. It does not contain a name or title.

## Preservation

The approved master image is required to ensure pixel-identical framing;
the script alone cannot rebuild it. Store and back up the PNG in this folder
before further use. The master must not be passed through the published
Codex artwork inbox, which accepts only approved **character** image slugs.

Portraits are 1000 × 1200 WebP files using the exact record slug, for example
`seren-vale.webp`, `elara-vey.webp`, `cael-ordan.webp`,
`tavian-rho.webp` and `ilyra-sen.webp`.
