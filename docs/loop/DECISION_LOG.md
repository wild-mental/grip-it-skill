# DECISION LOG — web/ 랜딩 페이지 구현

`usage-example/04-GRIP-UPDATED-WEBPAGE-PLAN.md`에 확정되어 있지 않은 추가 결정만 기록한다.
분류 기준: CORE = 구조·기술 선택 또는 04번 확정 사항과 어긋나는 판단 / MINOR = 네이밍·클래스명·여백값·프레임 프롬프트 문구.

CORE: 2
MINOR: 11

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

- **M-9 08~10 프레임 문구 교정** — 최초 문구의 "closing together into a grip / clasped"가 **악수(handshake)** 장면으로 렌더링되어 "양손이 가운데의 내용을 움켜쥔다"는 은유가 깨졌다(08·09·10 세 장). 공통 스타일 블록에 "두 손은 악수하지 않으며 서로를 쥐지 않는다 — 가운데의 빈 공간을 감싸 쥔다"를 추가하고, 동작 문구를 cupping 계열로 바꿔 세 장을 재생성했다. 같은 이유로 13~20의 "clasped"도 "cupped"로 바꿨다. 01~07·11·12는 의도대로 나와 그대로 쓴다. (`tools/gen-hand-fix.sh`)

- **M-10 손 프레임 원본을 `.git/info/exclude`로 무시** — 원본 PNG 20장(33MB)을 커밋하지 않으려면 무시 규칙이 필요한데, 루트 `.gitignore`는 05번 §4가 정한 수정 허용 범위(`web/`·`docs/loop/`·`tools/`) 밖이다. 저장소 파일을 건드리지 않도록 규칙을 로컬 전용 `.git/info/exclude`에 두고 `.gitignore`는 main 상태로 되돌렸다. 원본을 공유 저장소 차원에서 영구히 무시하려면 사용자가 `.gitignore`에 `tools/hand-src/` 한 줄을 추가하면 된다.

---

## CORE

- **C-1 수미상관 검증 패턴 교정** — 05번 §3 종료 방법 7번은 `grep -c '실행은 맡기고, 결정은 쥐' web/i18n.js` 가 2 이상이기를 기대하지만, 04번 §4-2 S9가 요구하는 수미상관은 히어로 **"실행은 맡기고, 결정은 쥔다"** 와 마무리 **"실행은 맡기고, 결정은 쥐십시오."** 로 어미가 갈린다. 원 패턴은 뒤 문장만 잡아 항상 1이 나온다. 페이지가 아니라 검증 명령의 실측 오류이므로, 문장을 억지로 맞추지 않고 **패턴을 두 어미를 모두 포괄하도록 교정**한다.

  ```bash
  grep -cE '실행은 맡기고, 결정은 쥐|실행은 맡기고, 결정은 쥔' web/i18n.js   # 기대: 2
  ```

  `usage-example/**`는 05번 §4에서 수정 금지이므로 05번 문서 자체는 고치지 않고, 교정 사실을 여기에 남긴다. 통과시키려고 기대값을 낮춘 것이 아니라(여전히 2를 요구한다), 같은 의도를 정확히 재는 패턴으로 바꾼 것이다.

- **C-2 계측 검증 패턴을 도메인 기준으로 좁힘** — 05번 §3 종료 방법 8번의 `plausible` 토큰이 계측 도구(Plausible Analytics)가 아니라 **영문 카피의 형용사 "plausible-looking"** 두 곳에 걸렸다. 해당 문장은 05번 §2가 지정한 영문 원천 `README.en.md` 12행에서 그대로 옮긴 표현이라, 검사를 통과시키려고 카피를 비틀면 원천 충실성이 깎인다. 검사 의도(계측 스크립트 부재)는 그대로 두고 토큰만 도메인 형태로 좁힌다.

  ```bash
  grep -rniE 'gtag|google-analytics|plausible\.io|umami|mixpanel|hotjar' web/ | wc -l   # 기대: 0
  ```

  나머지 벤더 토큰은 손대지 않았고, 별도로 `web/`의 모든 `<script src>`가 로컬 파일 3개뿐임을 함께 확인한다.

- **N-1 범위 밖 항목 1건은 신규 추가** — `git diff --name-only main...HEAD` 의 범위 밖 항목은 `usage-example/05-GOAL-PROMPT-WEBPAGE-IMPLEMENTATION.md` 하나이며, 이는 직전 턴에 사용자 요청으로 작성한 `/goal` 프롬프트 문서 자체가 이 브랜치에서 처음 커밋된 것이다(상태 `A`, 신규 추가). 기존 파일 수정(`M`) 중 범위 밖은 0건이고, README·01~04번 기획 문서·스킬 디렉터리는 무변경이다.

---

- **U-2 main 직접 푸시** — 05번 §4는 `main` 머지·푸시를 금지하고 U-1에서도 브랜치 푸시까지만 허용했으나, 사용자가 "그냥 메인에 푸시해"로 지시를 갱신했다. `feat/web-landing`을 `main`에 fast-forward 병합해 푸시한다.

- **M-11 손 연출을 고정 배경 레이어로 재구성** — 최초 구현은 손 시퀀스를 히어로 블록 안(`#s0 .hero-visual`)에 가둬 히어로를 지나면 사라졌다. 04번 §7-1은 "히어로에서 시작해 **데모 영역까지 이어지는 하나의 연출**"이며 5단계가 "그 손 위에서 S6 4컷 시연"이므로, `main` 밖의 `position: fixed` 레이어(`.hand-stage`)로 빼내 스크롤을 따라오게 했다. 프레임 진행 구간은 페이지 최상단 → S6 데모 직전이고, 데모가 끝나면 배경을 걷어 S7 이후는 평면으로 둔다. 본문 가독성은 `--scrim` 변수로 처리해 히어로에서는 0.12(손이 또렷)에서 산문 구간 0.80까지 스크롤에 따라 짙어진다.

---

STOP REASON: ALL_VERIFIED

