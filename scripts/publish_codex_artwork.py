#!/usr/bin/env python3
"""Publish pre-approved Codex portraits placed in artwork/inbox/.

This runs in GitHub Actions only after a human chooses to add an image.
It does not create canon, invent images, or fetch from third-party URLs.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
INBOX = ROOT / "artwork" / "inbox"
OUTPUT = ROOT / "public" / "images" / "codex"
MANIFEST = ROOT / "src" / "data" / "codex-artworks.json"
CANONICAL_RECORDS = ROOT / "src" / "data" / "codex.ts"
ALLOWED_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp"}
MAX_INPUT_BYTES = 16 * 1024 * 1024
MAX_IMAGE_PIXELS = 24_000_000
Image.MAX_IMAGE_PIXELS = MAX_IMAGE_PIXELS


def published_reference_slugs() -> set[str]:
    """Whitelist only the 19-or-more editorial, released reference slugs."""
    source = CANONICAL_RECORDS.read_text(encoding="utf-8")
    begin = source.index("export const referenceRecords:")
    end = source.index("export const narrationRecords", begin)
    section = source[begin:end]
    return set(re.findall(r'"slug"\s*:\s*"([a-z0-9-]+)"', section))


def convert(source: Path, target: Path) -> None:
    with Image.open(source) as image:
        image.load()
        if image.width * image.height > MAX_IMAGE_PIXELS:
            raise ValueError(f"{source.name}: image dimensions exceed safety limit")
        image = ImageOps.exif_transpose(image)
        if "A" in image.getbands() or "transparency" in image.info:
            rgba = image.convert("RGBA")
            backdrop = Image.new("RGB", rgba.size, (220, 202, 165))
            backdrop.paste(rgba, mask=rgba.getchannel("A"))
            image = backdrop
        else:
            image = image.convert("RGB")
        image.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
        target.parent.mkdir(parents=True, exist_ok=True)
        image.save(target, format="WEBP", quality=83, method=6)
        print(f"Published {source.name} -> {target.relative_to(ROOT)} ({image.width}x{image.height})")


def main() -> None:
    allowed = published_reference_slugs()
    files = sorted(f for f in INBOX.iterdir() if f.is_file() and f.name != "README.md" and not f.name.startswith("."))
    if not files:
        print("Artwork inbox is empty; nothing to publish.")
        return

    seen: set[str] = set()
    for source in files:
        slug = source.stem
        if source.suffix.lower() not in ALLOWED_EXTENSIONS:
            raise ValueError(f"{source.name}: use PNG, JPG, or WebP")
        if slug not in allowed:
            raise ValueError(f"{source.name}: not a known released Codex entry slug")
        if slug in seen:
            raise ValueError(f"{slug}: upload only one image format for each entry")
        if source.stat().st_size > MAX_INPUT_BYTES:
            raise ValueError(f"{source.name}: image must be at most 16 MB")
        seen.add(slug)

    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    for source in files:
        slug = source.stem
        output = OUTPUT / f"{slug}.webp"
        convert(source, output)
        manifest[slug] = f"images/codex/{slug}.webp"

    MANIFEST.write_text(json.dumps(dict(sorted(manifest.items())), indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    for source in files:
        source.unlink()
    print(f"Updated {len(files)} approved Codex illustration(s).")


if __name__ == "__main__":
    main()
