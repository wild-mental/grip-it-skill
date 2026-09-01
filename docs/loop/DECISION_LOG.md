# DECISION LOG — web/ 랜딩 페이지 구현

`usage-example/04-GRIP-UPDATED-WEBPAGE-PLAN.md`에 확정되어 있지 않은 추가 결정만 기록한다.
분류 기준: CORE = 구조·기술 선택 또는 04번 확정 사항과 어긋나는 판단 / MINOR = 네이밍·클래스명·여백값·프레임 프롬프트 문구.

CORE: 0
MINOR: 8

---

## 제약 갱신 (카운터 미포함)

- **U-1 원격 푸시 허용** — 05번 `/goal` §4는 `git push`를 금지했으나, 작업 도중 사용자가 "작업이 완료되면 커밋하고 푸시까지 수행"을 지시했다. `feat/web-landing` 브랜치 푸시만 수행하고 `main` 머지·PR 생성은 하지 않는다. 에이전트의 판단이 아니라 사용자 지시에 의한 제약 변경이므로 CORE 카운터에 넣지 않는다.

---

## MINOR

- **M-1 손 시퀀스 공통 스타일 블록 문구 확정** — 20장 전체에 동일하게 앞에 붙일 문구를 아래로 고정한다. 프레임별로는 동작 한 문장만 바꾼다. (`tools/gen-hand-frames.sh`의 `STYLE` 변수)

  ```
  Photographic minimal studio shot. Two large human hands enter from the left and right edges of
  the frame, palms and fingers clean, neutral skin, no arms visible beyond the wrists, no faces,
  no text, no objects. Background is a warm sunlit bright tone, soft ivory-cream, never pure white,
  evenly lit with soft diffused morning light from the upper left. Camera is fixed: eye-level,
  straight-on, 35mm lens look, identical framing and identical hand size in every image.
  Composition is calm and uncluttered with generous empty space in the center.
  ```

- **M-2 이미지 생성을 다른 단계와 병행** — 05번 §2의 구현 순서는 이미지 생성이 4단계이나, 장당 1~6분이 걸려 순차로 하면 대기 시간이 길다. 생성은 백그라운드 스크립트로 1단계와 동시에 시작하고, 결과물은 5단계(동작 구현) 전에 합류시킨다. "한 번에 한 장씩" 규칙은 스크립트 내부 순차 루프로 지킨다.

- **M-3 파일 구성** — `index.html` / `style.css` / `i18n.js`(카피 사전) / `hero.js`(손 시퀀스·빛) / `ui.js`(언어 전환·도메인 탭·S1 순차 등장). 05번 §1의 파일 목록을 그대로 따르되 역할 경계를 위와 같이 나눈다.

- **M-4 데모 4컷의 인용 출처** — S6 4컷은 `.claude/skills/grip-it/SKILL.md`의 「출력 형식(per-turn)」 세 블록과 「예시 2 — 연구·리서치」의 토픽 원장을 그대로 인용한다. 재현이 아니라 인용이라는 04번 §4-2 S6 규칙을 따른다.

- **M-5 데모 코드블록은 언어 전환 대상에서 제외** — 4컷은 스킬의 실제 출력(한국어)을 인용한 것이라 영문 모드에서도 원문 그대로 둔다. 대신 영문 모드에서 "실제 세션 출력을 원문(한국어) 그대로 인용" 이라는 주석 한 줄을 붙인다. 카피만 두 벌로 만든다는 04번 §6 원칙과 충돌하지 않는다.

- **M-6 손 프레임 배포 포맷** — 원본 PNG(1536×1024, 장당 1.5MB 이상)는 `tools/hand-src/`에 두고, 배포본은 `sips`로 가로 1280px·JPEG 품질 70으로 변환해 `web/assets/hand/hand-NN.jpg`로 둔다. 05번 §5의 6MB 상한을 지키기 위한 조치다.

- **M-7 S7 도메인 표에 소프트웨어 열 추가** — 04번 §7은 "다섯 도메인"을 요구하나 README의 R1~R5 표에는 네 도메인만 있다. 소프트웨어 열은 README §6의 소프트웨어 행(PRD·SRS·ADR, `CLAUDE.md`·`AGENTS.md`)을 R 역할로 옮겨 채웠다. 새로운 주장이 아니라 기존 표기의 재배치다.

- **M-8 SVG 라벨을 한·영 병기로** — 다이어그램은 `<img>`로 싣기 때문에 언어 전환 JS가 내부 텍스트에 닿지 않는다. 시각 자산은 한 벌만 만든다는 04번 §6 원칙을 지키면서 두 언어 독자 모두 읽히도록, 라벨을 "실행 · Doing"처럼 짧은 병기 형태로 넣었다. `alt` 텍스트는 언어별로 교체된다.

---

## CORE

(없음)
