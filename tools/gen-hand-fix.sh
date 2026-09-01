#!/usr/bin/env bash
# 08~10 재생성 + 13~20 생성.
# 08~10이 "악수" 장면으로 렌더링돼 문구를 cupping 계열로 고쳤다 (DECISION_LOG M-9).
set -uo pipefail
ROOT="/Users/wildmental/Workspace/grip-it-skill"
OUT="$ROOT/tools/hand-src"
GEN="$HOME/.claude/skills/gpt-image-bridge/bin/gpt-image-2"
LOG="$OUT/gen.log"

STYLE="Photographic minimal studio shot. Two large human hands enter from the left and right edges of the frame, palms and fingers clean, neutral skin, no faces, no text, no objects. The two hands never shake hands and never grip each other; they curve toward each other to cup and hold the empty space between them. Background is a warm sunlit bright tone, soft ivory-cream, never pure white, evenly lit with soft diffused morning light from the upper left. Camera is fixed: eye-level, straight-on, 35mm lens look, identical framing and identical hand size in every image. Composition is calm and uncluttered with generous empty space in the center."

run() {
  nn="$1"; shift
  dst="$OUT/hand-$nn.png"
  echo "--- hand-$nn start $(date '+%T')" >> "$LOG"
  "$GEN" "$STYLE $1" "$dst" --size 1536x1024 >> "$LOG" 2>&1
  echo "--- hand-$nn done $(date '+%T') $(file -b "$dst" 2>/dev/null | cut -c1-30)" >> "$LOG"
}

echo "=== fix run start $(date '+%F %T') ===" >> "$LOG"
run 08 "The two hands curve toward each other and begin to cup the empty center from both sides, palms facing inward, a clear hollow still between them."
run 09 "The two cupped hands nearly enclose the center, fingertips almost meeting, a small hollow held between the palms."
run 10 "The two cupped hands close around the center and hold it steadily, fingers curved inward, the hollow between the palms now small."
run 13 "The light between the cupped hands has softened into a warm afterglow spreading gently outward."
run 14 "The cupped hands have moved lower in the frame, the glow nearly gone, warm empty space filling the upper part of the frame."
run 15 "The hands are lower still and beginning to open from the cupped shape, palms rotating upward."
run 16 "The hands are near the bottom edge, opening further, palms turning up and away from each other."
run 17 "The hands rest low in the frame, palms mostly open and facing upward, side by side."
run 18 "The hands sit at the bottom edge, fully open, palms up, together forming a shallow cradle."
run 19 "The open palms form a steady cradle at the bottom edge, soft light resting on them, wide empty space above."
run 20 "The open palms rest at the bottom edge as a calm settled cradle under even light, with generous empty space above them."
echo "=== fix run end $(date '+%F %T') count=$(ls -1 "$OUT"/hand-*.png 2>/dev/null | wc -l | tr -d ' ') ===" >> "$LOG"
