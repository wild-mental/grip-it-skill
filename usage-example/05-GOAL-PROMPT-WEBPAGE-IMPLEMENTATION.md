/goal

## 1) 작업 핵심 목표 및 범위

- **목표:** `usage-example/04-GRIP-UPDATED-WEBPAGE-PLAN.md`에 확정된 전 항목을 `web/` 폴더의 실제 산출물(HTML 한 장 + 공유 CSS + 언어 전환·손 연출·탭 JS + 손 이미지 시퀀스 20장 + 선도형 SVG 3종 + 한·영 카피 전문)로 구현하고, 아래 §3의 검증 명령이 모두 통과하는 상태로 만든다.
- **시작 지점:** `main`(HEAD `0b5bc52`)에서 분기한 `feat/web-landing` 브랜치. `web/`, `docs/loop/`, `tools/`는 아직 없으므로 새로 만든다.
- **작업 대상:**
  - 신규 생성: `web/index.html` · `web/style.css` · `web/i18n.js` · `web/hero.js` · `web/ui.js` · `web/assets/hand/hand-01.jpg`~`hand-20.jpg` · `web/assets/diagrams/d1.svg`·`d2.svg`·`d3.svg`
  - 보조(배포 대상 아님): `tools/hand-src/`(생성 원본 PNG) · `tools/check-html.py` · `docs/loop/DECISION_LOG.md`
  - 읽기 전용 원천: `usage-example/04-GRIP-UPDATED-WEBPAGE-PLAN.md` · `README.md` · `README.en.md` · `.claude/skills/grip-it/SKILL.md`
- **작업 자율성:** 사용자 확인을 위해 멈추지 않고, §3의 종료 조건에 도달할 때까지 자율적으로 진행한다. 단 원격 푸시·PR 생성·호스팅 연결·도메인 연결은 하지 않는다(사용자 몫).

---

## 2) 작업 세부 규칙

- **세부 요구사항은 `usage-example/04-GRIP-UPDATED-WEBPAGE-PLAN.md`를 읽고 그대로 적용한다.** 이 `/goal` 본문은 그 문서의 규칙을 요약하지 않으며, 충돌 시 04번 문서가 우선한다. 특히 §4-2(S0~S9 단계별 구성), §6(콘텐츠 원칙·언어 범위), §7(비주얼·컬러·타이포·레이아웃·다이어그램·모션·데모·반응형·접근성), §8-1(기준 버전 고정과 고정 어휘)을 구현 기준으로 삼는다.
- **고정 어휘만 쓴다.** 04번 §8-1의 어휘 목록(기록계층/확정계층 · 근거 문서/규범 문서 · 결정 기록부 · 재료 역할 R1~R5 · 3대 핵심 요건 · 종료 사유 4종)을 그대로 쓰고, 04번에 없는 수치·성능 주장은 카피에 넣지 않는다.
- **구현 순서 (6단계, 각 단계가 끝날 때마다 커밋):**
  1. 골격 — `index.html`에 S0~S9 섹션(`id="s0"`~`id="s9"`)과 세 폭(좁은 폭/넓은 폭/전체 폭) 레이아웃, `style.css`에 밝은 테마 토큰(햇볕 톤 바탕 · 딥 네이비 본문 · 밝은 블루 강조)
  2. 카피 — `i18n.js`에 `window.COPY = { ko: {...}, en: {...} }` 형태로 한·영 카피를 같은 키 집합으로 싣는다. 한국어는 04번 §4-2를 근거로 새로 쓰고, 영문은 `README.en.md`에서 옮겨 다듬는다. 마크업은 `data-i18n="<키>"`로만 참조한다
  3. 다이어그램 — D1(그립 상태, S2) · D2(두 계층, S8) · D3(세션 흐름, S6 도입)을 선도형 SVG로 작성. 딥 네이비 선과 밝은 블루 면 두 가지만 쓰고 글자는 SVG 텍스트로 넣는다
  4. 손 이미지 시퀀스 20장 — §5의 규칙을 따른다
  5. 동작 — `hero.js`(스크롤 진행도 → 프레임 매핑, 쥐는 순간 빛 연출), `ui.js`(한·영 전환, S7 도메인 탭, S1 네 장면 순차 등장). 데모 4컷(S6)에는 JS를 붙이지 않는다
  6. 검증 — `tools/check-html.py`(태그 균형 + 필수 `id` 존재 검사)를 작성하고 §3의 명령을 전부 실행한다
- **의사결정 기록:** 04번 문서에 확정되어 있지 않은 추가 결정은 전부 `docs/loop/DECISION_LOG.md`에 기록한다. 각 항목은 CORE(구조·기술 선택·04번 확정 사항과 어긋나는 판단) 또는 MINOR(네이밍·클래스명·여백값·프레임 프롬프트 문구)로 분류하고, 파일 안에 `CORE: N`과 `MINOR: M` 카운터 줄을 각각 별도 줄로 유지한다.
- **브랜치·커밋:** `feat/web-landing`에서만 작업하고 단계마다 커밋한다. `main` 머지·`git push`·PR 생성은 하지 않는다.
- **도구 규칙:** 빌드 도구·번들러·패키지 매니저를 도입하지 않는다(빌드 단계 없음 — 04번 T4). 검증에는 이 환경에 실재하는 `ls`·`grep`·`file`·`wc`·`du`·`sips`·`node`·`python3`·`git`만 쓴다.

---

## 3) 종료 조건 및 종료 방법

- **종료 조건 (아래 중 하나라도 충족되는 순간 루프를 즉시 멈춘다):**
  - 아래 종료 방법 2)의 검증 명령 11개가 모두 기대값과 일치 → STOP REASON: ALL_VERIFIED
  - CORE 카운터가 3에 도달 → STOP REASON: CORE_BUDGET
  - MINOR 카운터가 12에 도달 → STOP REASON: MINOR_BUDGET
  - `gpt-image-2` 호출 누적 26회에 도달 → STOP REASON: IMAGE_BUDGET
  - 평가-진행 라운드(turn = `/goal` 평가자가 진행 상태를 한 번 점검하는 메인 에이전트 응답 사이클)가 누적 45회에 도달 → STOP REASON: TURN_CAP (= or stop after 45 turns)
- **종료 방법:**
  1) `docs/loop/DECISION_LOG.md` 마지막 줄에 `STOP REASON: <원인 코드>` 한 줄을 덧붙인다.
  2) 아래 11개 명령을 순서대로 실행하고 **출력을 대화에 그대로 남긴다.** 기대값은 각 명령 아래 주석에 있다.

     ```bash
     # 1) 손 프레임 20장 — 기대: 20
     ls -1 web/assets/hand/hand-*.jpg | wc -l

     # 2) 프레임이 실제 이미지 — 기대: 두 줄 모두 "JPEG image data"
     file web/assets/hand/hand-01.jpg web/assets/hand/hand-20.jpg

     # 3) 시퀀스 총 용량(KB) — 기대: 6144 이하
     du -sk web/assets/hand | cut -f1

     # 4) 선도형 SVG 3종 — 기대: 3
     ls -1 web/assets/diagrams/d1.svg web/assets/diagrams/d2.svg web/assets/diagrams/d3.svg | wc -l

     # 5) S0~S9 섹션 전부 존재 — 기대: 10
     grep -o 'id="s[0-9]"' web/index.html | sort -u | wc -l

     # 6) 한·영 카피 키 집합 일치 — 기대: exit 0 + "i18n keys match: N" (N >= 30)
     node -e "global.window={};require('./web/i18n.js');const c=window.COPY;const a=Object.keys(c.ko).sort(),b=Object.keys(c.en).sort();if(JSON.stringify(a)!==JSON.stringify(b)){console.error('MISMATCH');process.exit(1)}console.log('i18n keys match:',a.length)"

     # 7) 수미상관 문장(히어로 + 마무리) — 기대: 2 이상
     grep -c '실행은 맡기고, 결정은 쥐' web/i18n.js

     # 8) 계측 스크립트 없음(T13) — 기대: 0
     grep -rniE 'gtag|google-analytics|plausible|umami|mixpanel|hotjar' web/ | wc -l

     # 9) 다크 모드 없음(T7) — 기대: 0
     grep -rn 'prefers-color-scheme' web/ | wc -l

     # 10) 빌드 단계 없음(T4) — 기대: 두 경로 모두 "No such file or directory"
     ls web/package.json web/vite.config.js 2>&1

     # 11) HTML 태그 균형 + 필수 id — 기대: exit 0 + "HTML OK"
     python3 tools/check-html.py web/index.html
     ```

  3) 아래 명령을 실행해 `0`이 출력되는 것을 대화에 남긴다(범위 밖 파일 미변경 증명).

     ```bash
     git diff --name-only main...HEAD | grep -vE '^(web/|docs/|tools/)' | wc -l
     ```
  4) `cat docs/loop/DECISION_LOG.md` 를 실행해 `CORE: N` · `MINOR: M` 카운터 줄과 `STOP REASON:` 줄이 보이는 출력을 대화에 남긴다.
  5) `git log --oneline main..HEAD` 를 실행해 단계별 커밋 목록을 대화에 남긴다.

---

## 4) 기타 제약조건

- `main`에 머지하지 않고, `git push`·PR 생성·호스팅 연결·도메인(`grip-it.work`) 연결을 하지 않는다.
- 다음 파일·디렉터리는 **읽기만 하고 수정하지 않는다:** `README.md` · `README.en.md` · `usage-example/**` · `.claude/**` · `.cursor/**` · `.agents/**` · `LICENSE` · `author/**`.
- `web/` · `docs/loop/` · `tools/` 밖의 파일을 만들거나 고치지 않는다.
- 04번 문서가 배제한 것을 되살리지 않는다: 다크 모드, 분석·계측 스크립트, 빌드 단계, 데모 4컷(S6) 안의 JS, 자동 재생 애니메이션, 기능 나열식 구성, 미측정 수치 주장.
- 외부 CDN·웹폰트 호스트에 의존하는 필수 경로를 만들지 않는다. 웹폰트는 시스템 대체 서체만으로도 레이아웃이 유지되도록 대체 목록을 둔다(코드·기록부 블록의 대체 서체는 고정폭이어야 한다).
- 이미지 생성은 §5에 명시한 `gpt-image-2` 경로로만 하고, 다른 생성 경로나 외부 이미지 다운로드를 쓰지 않는다.

---

## 5) 손 이미지 시퀀스 생성 규칙 (gpt-image)

- **호출 형식** (설치된 스킬 `gpt-image-bridge`, ChatGPT 구독 경유·API 키 불필요):

  ```
  ~/.claude/skills/gpt-image-bridge/bin/gpt-image-2 "<프롬프트>" /Users/wildmental/Workspace/grip-it-skill/tools/hand-src/hand-NN.png --size 1536x1024
  ```

  출력 경로는 반드시 절대경로로 준다. 한 장당 1~6분이 걸리므로 Bash 도구 timeout은 최대치(600000ms)로 두고 한 번에 한 장씩 호출한다.
- **프레임 20장의 단계 배분** (04번 §7-1의 5단계):

  | 프레임 | 단계 |
  |---|---|
  | 01–05 | 양쪽에서 손이 들어와 가운데 내용을 향한다 |
  | 06–10 | 양손이 가운데서 만나 움켜쥔다 |
  | 11–13 | 쥐는 순간 밝은 빛이 터진다 |
  | 14–17 | 양손이 화면 하단으로 내려간다 |
  | 18–20 | 위를 향해 펼쳐진 받침 형태로 정지한다 |

- **일관성 규칙:** 모든 프레임 프롬프트는 동일한 **공통 스타일 블록**(카메라 각도·조명·손 형태·재질·배경 톤을 문장으로 고정한 것)으로 시작하고, 그 뒤에 프레임별 동작 한 문장만 바꿔 붙인다. 공통 스타일 블록의 최종 문구는 `docs/loop/DECISION_LOG.md`에 MINOR 결정으로 한 번 기록하고 이후 20장 내내 같은 문구를 쓴다. 배경은 04번 §7-2의 햇볕 톤 밝은 바탕, 빛 효과는 바탕보다 밝은 난색으로 지시한다.
- **생성 직후 검증:** 매 호출 뒤 `file <경로>`로 PNG인지 확인한다. 실패하거나 PNG가 아니면 같은 프레임을 최대 1회 재시도하고, 그래도 실패하면 그 프레임을 건너뛰지 말고 IMAGE_BUDGET 소진 여부를 확인한 뒤 다음 판단을 한다.
- **웹 최적화 (필수):** 원본 PNG는 장당 1.5MB 이상이라 그대로 배포하지 않는다. 전 프레임 생성 후 다음으로 변환해 `web/assets/hand/`에 둔다.

  ```
  sips -Z 1280 -s format jpeg -s formatOptions 70 tools/hand-src/hand-NN.png --out web/assets/hand/hand-NN.jpg
  ```

  변환 결과 합계가 6MB를 넘으면 `formatOptions`를 낮춰 다시 변환한다. 원본 PNG는 `tools/hand-src/`에 남기고 `web/` 안에 두지 않는다.
- **호출 예산:** `gpt-image-2` 누적 호출 26회(20장 + 재시도 6회)를 넘기지 않는다. 도달하면 STOP REASON: IMAGE_BUDGET으로 종료한다.

---

## 6) 실패 시 회복 절차

- **이미지 생성 실패:** `codex CLI not found` 또는 로그인 만료 메시지가 나오면 재시도하지 말고 즉시 종료 절차로 들어간다(STOP REASON: IMAGE_BUDGET). 빈 파일·플레이스홀더 이미지·다른 출처의 이미지로 대체하지 않는다.
- **검증 명령 실패:** §3의 11개 명령 중 실패한 것이 있으면 해당 산출물을 고치고 그 명령만 다시 실행한다. 명령이나 기대값 자체를 고쳐 통과시키지 않는다.
- **04번 문서와 충돌:** 구현 중 04번 확정 사항을 지킬 수 없는 지점이 나오면 문서를 고치지 말고 `docs/loop/DECISION_LOG.md`에 CORE 결정으로 기록한 뒤 진행한다. CORE 3건에 도달하면 종료한다.
