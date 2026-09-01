#!/usr/bin/env bash
# 손 이미지 시퀀스 20장 생성 (gpt-image-bridge 경유, 한 번에 한 장씩)
# 공통 스타일 블록은 전 프레임 동일 — 프레임별 동작 한 문장만 바꾼다.
set -uo pipefail

ROOT="/Users/wildmental/Workspace/grip-it-skill"
OUT="$ROOT/tools/hand-src"
GEN="$HOME/.claude/skills/gpt-image-bridge/bin/gpt-image-2"
LOG="$OUT/gen.log"

STYLE="Photographic minimal studio shot. Two large human hands enter from the left and right edges of the frame, palms and fingers clean, neutral skin, no arms visible beyond the wrists, no faces, no text, no objects. Background is a warm sunlit bright tone, soft ivory-cream, never pure white, evenly lit with soft diffused morning light from the upper left. Camera is fixed: eye-level, straight-on, 35mm lens look, identical framing and identical hand size in every image. Composition is calm and uncluttered with generous empty space in the center."

ACTION=(
  "The two hands are far apart at the extreme left and right edges, only the fingers entering the frame, palms facing the empty center."
  "The two hands have moved slightly inward, fingers fully extended toward the center, still widely separated."
  "The two hands are about two thirds apart, fingers beginning to curl inward."
  "The two hands are about half apart, fingers curling further, clearly reaching toward each other."
  "The two hands are close, about a third apart, fingertips angled toward the center with visible tension."
  "The fingertips of both hands almost touch at the exact center of the frame."
  "The fingers of both hands begin to interlock at the center of the frame."
  "The two hands are closing together into a grip at the center of the frame."
  "The two hands are clasped together at the center, forming a closed grip."
  "The two hands are clasped tightly at the center, a firm and settled grip, knuckles softly defined."
  "The clasped hands hold a warm bright light that begins to burst from between the fingers."
  "The clasped hands are surrounded by a strong warm light burst, rays escaping through the gaps between the fingers, flooding outward."
  "The light around the clasped hands is softening into a warm afterglow."
  "The clasped hands have lowered toward the bottom of the frame, the glow nearly faded, empty warm space filling the upper frame."
  "The hands are lower in the frame and beginning to open from the clasped grip."
  "The hands are near the bottom edge, opening upward, palms starting to turn up."
  "The hands rest at the bottom of the frame, palms mostly open and facing upward."
  "The hands sit at the bottom edge, fully open, palms up, together forming a shallow cradle."
  "The open palms form a steady cradle at the bottom edge, soft light resting on them, the space above them empty."
  "The open palms rest at the bottom edge as a calm, settled cradle under even light, with wide empty space above ready to hold something."
)

echo "=== start $(date '+%F %T') ===" >> "$LOG"
for i in $(seq 1 20); do
  nn=$(printf '%02d' "$i")
  dst="$OUT/hand-$nn.png"
  if [ -s "$dst" ]; then
    echo "skip hand-$nn (exists)" >> "$LOG"
    continue
  fi
  echo "--- hand-$nn start $(date '+%T')" >> "$LOG"
  "$GEN" "$STYLE ${ACTION[$((i-1))]}" "$dst" --size 1536x1024 >> "$LOG" 2>&1
  rc=$?
  if [ $rc -ne 0 ] || [ ! -s "$dst" ]; then
    echo "--- hand-$nn RETRY (rc=$rc)" >> "$LOG"
    "$GEN" "$STYLE ${ACTION[$((i-1))]}" "$dst" --size 1536x1024 >> "$LOG" 2>&1
  fi
  echo "--- hand-$nn done $(date '+%T') $(file -b "$dst" 2>/dev/null | cut -c1-40)" >> "$LOG"
done
echo "=== end $(date '+%F %T') count=$(ls -1 "$OUT"/hand-*.png 2>/dev/null | wc -l | tr -d ' ') ===" >> "$LOG"
