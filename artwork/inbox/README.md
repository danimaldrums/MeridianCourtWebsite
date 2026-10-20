# Approved Codex artwork inbox

Upload **only approved, public-safe** artwork here. Do not place unreleased album illustrations, private documents or artwork requiring additional permissions in the public website repository.

Use the **exact Codex record slug** as the filename. Examples:

- `meridian-asteris.webp` — Meridian / Asteris
- `the-seeker.png` — The Seeker
- `aurex-valen.jpg` — Aurex Valen
- `the-celestial-engine.webp` — Celestial Engine
- `hall-of-architects.png` — Hall of Architects
- `the-fractures.png` — The Fractures

On GitHub, navigate to this folder and use **Add file → Upload files**. Committing the file to `main` starts **Publish approved Codex artwork** automatically. The workflow:

1. Checks that the slug belongs to an existing Codex reference record;
2. Converts the image to a resized, compressed WebP with stripped metadata;
3. Writes it to `public/images/codex/<slug>.webp`;
4. Updates `src/data/codex-artworks.json` so the reference page automatically displays it;
5. Removes the original from this inbox and commits the changes; the usual Pages deployment then publishes the result.

No changes to source code are required when replacing the same subject's portrait later: simply upload a new file with the same slug. While the action runs, the existing image stays available. The original Git history retains uploaded source files even after removal; never add confidential files.

**If a workflow fails:** check the Actions tab for the validation message. The input image will remain in the inbox so it can be fixed. For manual runs: Actions → Publish approved Codex artwork → Run workflow.

This is an upload-and-publish pipeline, not image generation. ChatGPT can prepare an optimised image file, but the current GitHub connector cannot ingest a generated image directly from ChatGPT's local file storage. One human upload bridges that gap. 
