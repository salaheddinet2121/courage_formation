#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RAW_DIR="$ROOT/tmp/blog-covers/raw"
FINAL_DIR="$ROOT/public/images/blog"
WORK_DIR="$ROOT/tmp/blog-covers/work"
mkdir -p "$FINAL_DIR" "$WORK_DIR"

render_cover() {
  local slug="$1"
  local source="$RAW_DIR/$slug.png"
  local output="$FINAL_DIR/$slug.webp"
  local canvas="$WORK_DIR/${slug}-canvas.png"

  convert "$source" \
    -resize 1200x675^ \
    -gravity center \
    -extent 1200x675 \
    -quality 92 "$output"
}

render_cover "post-1"
render_cover "post-2"
render_cover "post-3"
render_cover "post-4"
render_cover "post-5"
render_cover "post-6"
render_cover "7-criteres-32-indicateurs-qualiopi"
render_cover "acces-cpf-qualiopi-guide"
render_cover "creer-organisme-formation-etapes"
render_cover "qualiopi-audit-comment-se-preparer"
render_cover "qualiopi-couts-financement"
render_cover "qualiopi-datadock-differences"
render_cover "qualiopi-guide-complet"
render_cover "qualiopi-independant-formateur"
render_cover "qualiopi-rncp-cpf-differences"
render_cover "veille-reglementaire-qualiopi"
