#!/usr/bin/env python3
"""Apply the approved Meridian Court portrait border without regenerating it.

Install: python -m pip install Pillow
Example: python scripts/compose_codex_portrait.py portrait.png tavian-rho.webp
"""
from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageOps

SIZE = (1000, 1200)
ROOT = Path(__file__).resolve().parents[1]
DEFAULT_FRAME = ROOT / "artwork/templates/meridian-codex-border-master.png"


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("portrait", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--frame", type=Path, default=DEFAULT_FRAME)
    parser.add_argument("--trim-framed-source", action="store_true")
    args = parser.parse_args()

    if args.output.suffix.lower() != ".webp":
        raise ValueError("The output must have a .webp extension")
    if not args.frame.is_file():
        raise FileNotFoundError(
            "Approved border overlay missing. Place the original approved "
            "meridian-codex-border-master.png in artwork/templates/."
        )
    with Image.open(args.frame) as f:
        frame = f.convert("RGBA")
    if frame.size != SIZE:
        raise ValueError(f"Border artwork must be {SIZE[0]} x {SIZE[1]}")

    with Image.open(args.portrait) as f:
        image = ImageOps.exif_transpose(f).convert("RGB")
    if args.trim_framed_source:
        w, h = image.size
        image = image.crop(
            (round(.055*w), round(.088*h), round(.945*w), round(.965*h))
        )
    image = ImageOps.fit(
        image, SIZE, method=Image.Resampling.LANCZOS, centering=(.5, .5)
    )
    final = Image.alpha_composite(image.convert("RGBA"), frame).convert("RGB")
    args.output.parent.mkdir(parents=True, exist_ok=True)
    final.save(args.output, "WEBP", quality=93, method=6)
    print(f"Created {args.output} at {SIZE[0]}x{SIZE[1]}")


if __name__ == "__main__":
    main()
