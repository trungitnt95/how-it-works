#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
import subprocess
from pathlib import Path

from PIL import Image, ImageFilter, ImageOps


def run(cmd: list[str]) -> None:
    subprocess.run(cmd, check=True)


def ensure_rendered(pdf_path: Path, render_dir: Path, dpi: int) -> list[Path]:
    render_dir.mkdir(parents=True, exist_ok=True)
    existing = sorted(render_dir.glob("spread-*.png"))
    if existing:
        return existing

    prefix = render_dir / "spread"
    run(
        [
            "pdftoppm",
            "-png",
            "-r",
            str(dpi),
            str(pdf_path),
            str(prefix),
        ]
    )
    return sorted(render_dir.glob("spread-*.png"))


def normalize_for_ocr(image: Image.Image) -> Image.Image:
    gray = ImageOps.grayscale(image)
    boosted = ImageOps.autocontrast(gray)
    sharpened = boosted.filter(ImageFilter.SHARPEN)
    return sharpened


def ocr_image(image_path: Path, lang: str, psm: int = 6) -> str:
    result = subprocess.run(
        [
            "tesseract",
            str(image_path),
            "stdout",
            "-l",
            lang,
            "--psm",
            str(psm),
        ],
        check=True,
        capture_output=True,
        text=True,
    )
    return result.stdout


def detect_book_page(text: str) -> int | None:
    lines = [line.strip() for line in text.splitlines() if line.strip()]
    tail = lines[-8:]
    for line in reversed(tail):
        matches = re.findall(r"\b(\d{1,3})\b", line)
        if not matches:
            continue
        for candidate in matches:
            number = int(candidate)
            if 1 <= number <= 400:
                return number
    return None


def extract_spread(spread_path: Path, crop_dir: Path, lang: str) -> dict:
    image = Image.open(spread_path)
    width, height = image.size

    outer_margin_x = int(width * 0.03)
    outer_margin_y = int(height * 0.03)
    gutter = int(width * 0.025)
    mid = width // 2

    left = image.crop((outer_margin_x, outer_margin_y, mid - gutter, height - outer_margin_y))
    right = image.crop((mid + gutter, outer_margin_y, width - outer_margin_x, height - outer_margin_y))

    crop_dir.mkdir(parents=True, exist_ok=True)
    left_path = crop_dir / f"{spread_path.stem}-left.png"
    right_path = crop_dir / f"{spread_path.stem}-right.png"

    normalize_for_ocr(left).save(left_path)
    normalize_for_ocr(right).save(right_path)

    left_text = ocr_image(left_path, lang)
    right_text = ocr_image(right_path, lang)

    left_page = detect_book_page(left_text)
    right_page = detect_book_page(right_text)

    return {
        "spread": spread_path.name,
        "left": {
            "image": left_path.name,
            "bookPage": left_page,
            "text": left_text.strip(),
        },
        "right": {
            "image": right_path.name,
            "bookPage": right_page,
            "text": right_text.strip(),
        },
    }


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Render and OCR the scanned Mai Lan Huong English grammar PDF into page-level JSON."
    )
    parser.add_argument("pdf_path", type=Path)
    parser.add_argument(
        "--work-dir",
        type=Path,
        default=Path("tmp/grammar-book"),
        help="Directory used for rendered spreads, cropped pages, and JSON output.",
    )
    parser.add_argument("--dpi", type=int, default=150)
    parser.add_argument("--lang", default="vie+eng")
    parser.add_argument("--limit", type=int, default=0, help="Optional number of spreads to OCR.")
    args = parser.parse_args()

    render_dir = args.work_dir / "spreads"
    crop_dir = args.work_dir / "pages"
    output_path = args.work_dir / "ocr-pages.json"

    spreads = ensure_rendered(args.pdf_path, render_dir, args.dpi)
    if args.limit > 0:
        spreads = spreads[: args.limit]

    pages = []
    for spread_path in spreads:
        pages.append(extract_spread(spread_path, crop_dir, args.lang))

    args.work_dir.mkdir(parents=True, exist_ok=True)
    output_path.write_text(
        json.dumps(
            {
                "pdf": str(args.pdf_path),
                "spreads": len(spreads),
                "pages": pages,
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )
    print(output_path)


if __name__ == "__main__":
    main()
