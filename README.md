![AI Skills for Everyone](author/wildmental-bjpark.png)

# grip-it
> Skill for Cursor, Claude, Codex agents

**Language / 언어:** [한국어](README.md) · [English](README.en.md)

모든 종류의 AI 에이전트 작업에 대해 우리는 더 확실한 이해를 원하고, 더 명시적인 의사결정을 원하고, 이를 통해 궁극적으로 더 확실한 작업 소유권을 확보하기를 원하곤 합니다. 다시 말해 우리는 AI 에이전트에게 과업을 지시할 때, 업무의 실행에 대해서는 Hands off 를 추구하지만, 작업에 대한 이해와 방향 설정, 의사결정에 대해서는 더 확실한 장악력, 즉 단단한 그립을 확보하고자 합니다.

**Grip It 은 이러한 사용자의 니즈를 가장 AI-Native하게 해결하기 위해서 만들어진 Skill입니다. 본격적인 작업을 시작하기 전에 프로젝트의 미흡한 세부 결정 사항들을 탐지하여 사용자를 인터뷰함으로써, 흩어져 있던 결정을 하나씩 사용자의 손에 쥐여 줍니다. 소프트웨어에 한정하지 않고 일반 사무·사업기획·서비스기획·연구 리서치까지 같은 절차로 적용합니다. 결정형 질문은 선택형 UI로 띄우고, 친절한 설명적 대화체로 묻고, 해소되는 즉시 문서와 구속면에 반영합니다. Cursor, Claude Code, Codex 모두 지원합니다.**

그립이 풀리는 지점은 대체로 정해져 있습니다. 근거가 부족해도 AI가 그럴듯한 항목을 지어내고, 뜻을 모르는 용어가 섞인 제안을 그대로 승인하게 되고, AI가 내놓은 보기 안에서만 고르게 되고, 정한 내용이 대화에 흩어져 다음 세션의 AI가 또 제멋대로 정합니다. 결정은 분명 내 것이었는데, 결과물은 내 것이 아니게 됩니다.

`grip-it`은 그 지점들을 하나씩 막습니다. 에이전트는 판단에 필요한 **재료를 먼저 점검**하고, 앞으로 정할 것을 **전부 펼쳐 보이고**, 선택지마다 **권장안과 근거**를 붙이고, 어려운 **용어를 풀어 설명**합니다. **결정은 사용자가 합니다.** 그리고 그 결정은 문서와 구속면에 고정되어 **이후 AI 작업을 구속**합니다.

이 스킬이 지키려는 것은 속도가 아니라 **작업 오너십**입니다.

## 작업 오너십을 지키는 방식

| 오너십이 새는 지점 | `grip-it`의 장치 |
|---|---|
| 근거가 부족해도 그럴듯한 항목을 지어낸다 | **재료 점검 게이트** — 기준선이 없으면 토픽을 뽑지 않습니다 |
| 전체 판을 모른 채 질문에 끌려간다 | **토픽 전체 선(先)가시화** — 몇 번 문답할지 처음부터 압니다 |
| 뜻을 모르는 제안을 그대로 승인한다 | **`[용어]` 해설 + 설명적 대화체** — 이해한 것만 결정합니다 |
| AI가 제시한 보기 안에서만 고른다 | **기타(직접 입력) 상시 옵션** — 내 방식으로 답할 수 있습니다 |
| 정한 내용이 대화에 흩어진다 | **Grip Ledger + 기록면** — 무엇을 왜 정했는지 남습니다 |
| 다음 세션의 AI가 다시 제멋대로 정한다 | **구속면 고정** — 한 번 정한 것은 다시 협상되지 않습니다 |

---

## 이 스킬이 해결하는 것

### 1. 다루는 대상은 "나"가 아니라 "문제"다

추궁·시험 톤을 버리고, "이 **문제**의 이 지점이 아직 정해지지 않았습니다"처럼 문제를 주어로 다룹니다. 모든 질문에는 **권장안 + 근거**가 붙어, 사용자는 매번 답을 새로 생성하지 않고 **확인·교정**만 하면 됩니다.

### 2. 착수 전 "재료"부터 점검한다 — 지어낸 토픽을 막는 게이트

질문을 시작하기 전에, 참조 자료가 토픽을 뽑을 **기준선**을 갖췄는지 확인합니다. 기준선 없이 뽑은 토픽은 추출이 아니라 **발명**이고, 지어낸 항목이 원장에 들어가면 원장 전체를 믿을 수 없게 됩니다.

| | 재료 역할 | 등급 |
|---|---|---|
| **R1** | 목적 · 성공 기준 | 필수 · **추출 기준선** |
| **R2** | 대상 · 수요자 · 이해관계자 | 필수 · 판단 근거 |
| **R3** | 범위 · 산출물 정의 | 필수 · **추출 기준선** |
| **R4** | 제약조건 (예산·일정·규정·윤리) | 권장 · 판단 근거 |
| **R5** | 현재 진척 · 기결정 사항 | 권장 |

R1·R3가 비면 게이트가 열리고 **두 갈래만** 제시합니다 — **A) 자료를 보강한 뒤 재호출** 또는 **B) 지금 대화로 앵커를 세우고 이어서 시작.** "결손을 감수하고 그냥 시작"하는 경로는 두지 않습니다. R2·R4 결손은 게이트를 열지 않고 **첫 CORE 토픽으로 흡수**해 정상 진행합니다.

### 3. 도메인 문서 무엇이든 재료가 된다

문서 이름이 아니라 **역할**로 판단하므로, PRD/SRS가 없어도 됩니다.

| 역할 | 사업기획 | 서비스기획 | 연구·리서치 | 일반 사무 |
|---|---|---|---|---|
| R1 | 사업목표·KPI | 서비스 컨셉·목표 지표 | 연구질문·가설 | 과업지시서 목적 |
| R2 | 타깃 고객·경쟁 분석 | 고객 세그먼트·JTBD | 모집단·표본 정의 | 수신처·결재선 |
| R3 | 사업 범위·BM 캔버스 | 서비스 범위·기능 목록 | 연구 범위·측정 구성 | 과업 범위(RFP/SOW) |
| R4 | 예산·법규 | 운영 역량·정책 | 연구윤리·데이터 접근권 | 예산·내부 규정 |
| R5 | 경과보고·의사결정 로그 | 릴리즈 노트 | 선행연구·연구노트 | 회의록·결재 이력 |

### 4. 착수 전 "토픽 전체"를 먼저 보여준다

무작정 질문하지 않습니다. 범위 안의 미해소 토픽을 전부 추출해 **개수·분류(CORE/MINOR)·의존 순서**와 함께 제시합니다. 사용자는 처음부터 "앞으로 몇 번 문답하는지"를 압니다.

```
RESOLVED: 0 / DROPPED: 0 / TOTAL: 3
- [ ] T1 | CORE  | 표본 정의와 모집 방식       | depends:-  | status:UNRESOLVED
- [ ] T2 | CORE  | 주요 변수 측정 도구 선택    | depends:T1 | status:UNRESOLVED
- [ ] T3 | MINOR | 코딩북 라벨 명명 규칙       | depends:T2 | status:UNRESOLVED
```

### 5. 되돌리기 비용으로 CORE/MINOR를 가른다

분류 기준이 도메인 사례 목록이 아니라 판정 기준입니다. 목록 밖 결정이 나와도 분류가 멈추지 않습니다.

```
CORE  = 되돌리기 비용이 크거나, 다른 결정을 구속하는 결정
MINOR = 되돌리기 쉽고, 다른 결정을 구속하지 않는 결정
```

### 6. 기록만 하지 않고 "구속면"에 고정한다

결정을 문서 어딘가에 적어두기만 하면 다음 회의에서 다시 논쟁거리가 됩니다. `grip-it`은 산출물을 두 면으로 나눕니다.

| 면 | 기능 | 예 |
|---|---|---|
| **기록면** | 결정의 내용과 근거가 남는 자리 | 기획서 · 사업계획서 · 연구계획서 · 회의록 |
| **구속면** | 이후 작업이 자동으로 참조·준수하는 자리 | 팀 규칙 · 승인 기준 · 운영 정책 · **사전등록(preregistration)** · `CLAUDE.md`·rules·hooks |

연구의 사전등록은 에이전트 하네스의 정확한 유비입니다. 한 번 고정하면 이후 행동을 구속하고, 이탈하려면 명시적 사유가 필요합니다.

### 7. 친절한 설명적 대화체로 묻는다

"확인·교정만 하면 된다"는 약속은 질문을 **한 번에 이해할 수 있을 때만** 성립합니다.

| 속성 | 규칙 |
|---|---|
| 완결 문장 | 개조식 체언 종결("범위 미정. 확인 요망.")을 쓰지 않습니다 |
| 경어 기조 | `~합니다`를 기본으로, 질문은 `~할까요?`로 맺습니다 |
| 설명 선행 | 질문 앞에 "왜 지금 이것을 묻는지" 한 문장을 붙입니다 |
| 안내형 | `~하세요` 대신 `~하시면 됩니다`를 씁니다 |
| 감정 절제 | 과장·감탄·칭찬을 쓰지 않습니다 |
| 분량 상한 | 배경 1문장 + 질문 1문장 |

단, **Grip Ledger·카운터·표 같은 구조 블록은 개조식을 유지**합니다. 원장은 `grep` 대상이라 문장화하면 재개·집계가 깨집니다.

### 8. 영문 용어는 원문 그대로, 괄호에 해설을 붙인다

원어를 지우면 사용자가 검색하거나 원문 자료와 대조할 수 없고, 번역어는 분야마다 표준이 달라 오히려 혼란을 만듭니다.

```
preregistration(분석 계획을 데이터 수집 전에 공개 등록하는 절차)
idempotency(같은 요청을 여러 번 보내도 결과가 한 번과 같은 성질)
```

음차 표기는 **정착 여부**로 판정하고(데이터·리포트는 유지, 커버리지 → 적용 범위(coverage)), 번역어는 **다의어 오역**을 점검합니다(`significant` → 통계 맥락에서는 "중요한"이 아니라 **유의미한**).

표기 우선순위는 **참조 문서의 기존 표기 > 분야 표준 역어 > 임의 번역**입니다. 프로젝트 내부 표기를 임의로 바꾸면 기존 문서와 새 기록 사이에 어휘가 어긋납니다.

### 9. 질문 하단에 용어를 해설한다

이해하지 못한 채 승인된 결정은 원장을 오염시키고 구속면까지 반영됩니다. 용어 해설은 친절이 아니라 **원장 정확성의 방어 장치**입니다.

세 부류를 해설합니다 — ① 도메인 전문용어 ② 분야 관용어·축약 ③ **프로젝트 고유 조어**(출처 표기 필수). 참조 범위에서 정의를 못 찾은 조어는 `정의되지 않음`으로 표기하고 **정의 자체를 MINOR 토픽 후보로 올립니다.**

분량은 통제합니다 — 이번 턴에 실제 등장한 용어만, 세션 내 1회, 턴당 최대 4개, 항목당 1줄, 없으면 블록째 생략.

### 10. 보기의 마지막은 언제나 "기타(직접 입력)"

닫힌 보기만 주면 결정의 공동 소유가 승인 요청으로 축소되고, 실제 의중과 다른 보기를 억지로 고르면 **실재하지 않는 결정이 RESOLVED로 기록**됩니다.

```
1번째    권장안 (근거 한 줄)
2~n번째  나머지 실질 선택지 (각 trade-off 한 줄)
마지막   기타 — 직접 입력
```

옵션 개수는 **실질 선택지 2~4개 + 기타 1개**이며, 기타는 상한에 포함하지 않습니다. 일부 질문 UI가 자유 입력을 자동 제공하더라도 보기 자체에 명시해, 3벤더 어디서든 동작이 같아지게 합니다.

기타 응답은 **사용자 표현 그대로** 원장에 기록합니다. 응답이 토픽 전제를 뒤집으면 `DROPPED`로 표시하되 **분모는 줄이지 않습니다**(줄이면 진척률이 왜곡됩니다).

### 11. 언제든 멈추고 재개할 수 있다

진척이 Grip Ledger에 남으므로, 세션을 중간에 끝내도 다음에 첫 `UNRESOLVED` 토픽부터 이어갑니다. 재료 보강 대기 상태(`MATERIAL_PENDING`)도 스텁으로 보존되어, 무엇을 가져와야 하는지 목록이 남습니다.

---

## Three Pillars (필수 통과 기준)

```
Boundedness   — 참조 범위·관심 방향이 명시되고, 재료가 추출 기준선을 갖췄으며, 탐색이 그 범위로 한정되는가?
Visibility    — 착수 전 미해소 토픽 전체가 추출·제시되고, 매 턴 진척(해소/제외/잔여)이 보이는가?
Persistence   — 각 토픽이 해소되는 즉시 기록면 + 구속면에 반영되고 Grip Ledger에 기록되는가?
```

세 기둥을 동시에 만족하지 못하면 다음 단계로 진행하지 않습니다.

---

## 빠른 시작

### 사전 요구사항

- Cursor, Claude Code, 또는 Codex
- **참조로 삼을 자료**(R1~R5 중 최소한 R1·R3를 채우는 것)와 **관심 방향**

### 스킬 설치

스킬은 **개인** 또는 **프로젝트** 범위 중 하나를 골라 설치합니다. 두 범위 모두 `curl`로 `SKILL.md`만 받습니다. **이 저장소 전체를 작업 repo에 clone하지 마세요.**

| | 개인 스킬 | 프로젝트 스킬 |
|---|----------|--------------|
| **적용 범위** | 내가 여는 모든 프로젝트 | 현재 repo에서만 |
| **Git 영향** | 작업 repo에 파일 추가 없음 | repo에 스킬 파일 commit 가능 (팀 공유) |

#### 개인 스킬 (권장 — Git repo 무변경)

```bash
# Cursor
mkdir -p ~/.cursor/skills/grip-it
curl -fsSL https://raw.githubusercontent.com/wild-mental/grip-it-skill/main/.cursor/skills/grip-it/SKILL.md \
  -o ~/.cursor/skills/grip-it/SKILL.md

# Claude Code
mkdir -p ~/.claude/skills/grip-it
curl -fsSL https://raw.githubusercontent.com/wild-mental/grip-it-skill/main/.claude/skills/grip-it/SKILL.md \
  -o ~/.claude/skills/grip-it/SKILL.md

# Codex
mkdir -p ~/.agents/skills/grip-it
curl -fsSL https://raw.githubusercontent.com/wild-mental/grip-it-skill/main/.agents/skills/grip-it/SKILL.md \
  -o ~/.agents/skills/grip-it/SKILL.md
```

#### 프로젝트 스킬

```bash
# Cursor
mkdir -p .cursor/skills/grip-it
curl -fsSL https://raw.githubusercontent.com/wild-mental/grip-it-skill/main/.cursor/skills/grip-it/SKILL.md \
  -o .cursor/skills/grip-it/SKILL.md

# Claude Code
mkdir -p .claude/skills/grip-it
curl -fsSL https://raw.githubusercontent.com/wild-mental/grip-it-skill/main/.claude/skills/grip-it/SKILL.md \
  -o .claude/skills/grip-it/SKILL.md

# Codex
mkdir -p .agents/skills/grip-it
curl -fsSL https://raw.githubusercontent.com/wild-mental/grip-it-skill/main/.agents/skills/grip-it/SKILL.md \
  -o .agents/skills/grip-it/SKILL.md
```

#### 설치 후

- **Cursor**: **Reload Window** 한 번
- **Claude Code**: 스킬 수정은 세션 중 live 반영; 세션 시작 후 새 top-level `.claude/skills/`는 재시작 필요할 수 있음
- **Codex**: 스킬이 안 보이면 Codex 재시작

### 사용 방법

참조할 자료와 관심 방향을 알려주고 "착수 전에 안 정해진 것들 같이 정리하자"라고 요청하면 Agent가 스킬을 자동으로 적용합니다.

| 도구 | 수동 호출 |
|------|-----------|
| Cursor | `/grip-it` |
| Claude Code | `/grip-it` |
| Codex | `/skills` 또는 `$grip-it` |

**적용되는 요청 예시:**

- "사업계획서랑 시장분석 기준으로, 착수 전에 안 정해진 사업 범위·가격 관련 결정 같이 정하자"
- "연구계획서 기준으로 측정·분석 설계에서 미결인 것들 뽑아서 하나씩 정하고, 결정은 사전등록 초안에 반영해줘"
- "서비스 기획서랑 고객 세그먼트 자료로 회원·환불 정책 미결 사항 정리해줘"
- "과업지시서 기준으로 산출물 정의랑 검수 기준 확정하자"
- "지난번 하다 멈췄는데 남은 토픽부터 이어서 하자"

---

## OUTPUT: 무엇이 남는가

| 산출물 | 내용 |
|--------|------|
| **Grip Ledger** | 결정 토픽의 단일 진척 원장 (`docs/grip/GRIP_LEDGER.md`). 상단에 grep 가능한 `RESOLVED / DROPPED / TOTAL` 카운터. 토픽별 결정·반영 결과 기록 → 재개의 근거 |
| **기록면 반영** | 기획서·사업계획서·연구계획서·회의록 등 관련 문서를 결정대로 수정 |
| **구속면 반영** | 팀 규칙·승인 기준·운영 정책·사전등록·에이전트 하네스 등, 이후 작업을 구속하는 지점에 CORE 결정을 수립·갱신 |

---

## Workflow

| 단계 | 내용 |
|------|------|
| Step 0 — Intake & Scope Lock | 참조 범위(A)·관심 방향(B)·완료 조건(C)·OUTPUT 대상(D) 확인. A·B 없으면 먼저 질문 |
| **Step 0.5 — Material Check** | 범위 안만 읽어 R1~R5 충족 판정. 기준선(R1·R3) 결손 시 게이트 발동 → **A/B 2지선다**. 판단근거(R2·R4) 결손은 첫 CORE 토픽으로 흡수 |
| Step 1 — Topic Extraction | 범위 안만 읽어 미해소 토픽 전부 추출 → CORE/MINOR·의존 순서로 원장 제시 (토픽 0개면 종료) |
| Step 2 — Grip the Topic | 첫 UNRESOLVED 토픽 1개: 선택지 + 권장안 + **`[용어]` 블록** + **기타 옵션** + 단일 질문 |
| Step 3 — Resolve & Persist | 결정 확정 시 다음 토픽 전에 기록면·구속면 수정 + 원장 기록 + `[반영 완료]` |
| Step 4 — Advance or Stop | 다음 토픽 또는 종료 (ALL_RESOLVED / USER_PAUSED / **MATERIAL_PENDING** / BUDGET) |
| Step 5 — Resume | 재호출 시 원장을 읽어 재료 점검 또는 첫 UNRESOLVED부터 재개 |
| Step 6 — Closeout | 카운터·STOP 사유 + 이번 세션 변경 목록 요약 |

---

## Intake 4블록 (착수 입력)

```
A. 참조 범위        — 근거로 삼을 자료 (R1~R5 역할로 판단, 형식·도메인 무관)
B. 핵심 관심 방향   — 무엇의 모호함을 정리하는가
C. 작업 범위·완료조건 — 어디까지 (기본: 관심 방향 미해소 토픽 전부 RESOLVED)
D. 작업 결과 OUTPUT — 어디에 반영 (기본: 기록면 + 구속면)
```

A·B는 사용자 의도이므로 대체할 수 없습니다. 없으면 먼저 묻습니다. 재료(R1~R5)는 내용이므로 문답으로 채울 수 있어, 기준선(R1·R3) 결손만 게이트로 처리하고 R2·R4 결손은 첫 CORE 토픽으로 흡수합니다.

---

## 이런 분께 추천합니다

- 소프트웨어가 아닌 **사업·서비스·연구·일반 과업**의 착수 전 결정을 정리하고 싶은 분
- 자료가 부족한 상태로 시작해 **AI가 없는 항목을 지어내는 일**을 겪어본 분
- 착수 전에 **몇 번 문답해야 하는지** 처음부터 알고 싶은 분
- 문답 결과가 대화에 흩어지지 않고 **문서와 규칙에 바로 남기를** 원하는 분
- 질문에 나오는 **전문용어를 해설과 함께** 보고 싶은 분
- 주어진 보기 말고 **자기 방식으로 답할 여지**를 원하는 분
- 결정 과정을 **중간에 멈췄다가 다음에 이어서** 하고 싶은 분

---

## 참고

- Cursor Agent Skills: [Creating Skills](https://docs.cursor.com)
- Claude Code Skills: [Extend Claude with skills](https://docs.anthropic.com/en/docs/claude-code/skills)
- Codex Agent Skills: [Agent Skills](https://developers.openai.com/codex/skills/)

---

## For LLMs

<!-- install-only; operational rules live in SKILL.md — load skill after install -->

```
skill=grip-it
repo=https://github.com/wild-mental/grip-it-skill
install.method=curl-only  # never clone this repo into user's project

flow:
  1. ask scope: "개인 스킬(~/, 모든 프로젝트) vs 프로젝트 스킬(./, 현재 repo만) 중 어디에 설치할까요?"
  2. ask tools: "Cursor / Claude Code / Codex 중 어떤 도구에 설치할까요?" (복수 선택 가능)
  3. run matching curl commands below; do not install both scopes unless user asks
  4. post_install steps; then load SKILL.md — do not infer rules from README

scope.user.paths:
  cursor=~/.cursor/skills/grip-it/SKILL.md
  claude=~/.claude/skills/grip-it/SKILL.md
  codex=~/.agents/skills/grip-it/SKILL.md

scope.project.paths:
  cursor=.cursor/skills/grip-it/SKILL.md
  claude=.claude/skills/grip-it/SKILL.md
  codex=.agents/skills/grip-it/SKILL.md

install.user.cursor=mkdir -p ~/.cursor/skills/grip-it && curl -fsSL https://raw.githubusercontent.com/wild-mental/grip-it-skill/main/.cursor/skills/grip-it/SKILL.md -o ~/.cursor/skills/grip-it/SKILL.md
install.user.claude=mkdir -p ~/.claude/skills/grip-it && curl -fsSL https://raw.githubusercontent.com/wild-mental/grip-it-skill/main/.claude/skills/grip-it/SKILL.md -o ~/.claude/skills/grip-it/SKILL.md
install.user.codex=mkdir -p ~/.agents/skills/grip-it && curl -fsSL https://raw.githubusercontent.com/wild-mental/grip-it-skill/main/.agents/skills/grip-it/SKILL.md -o ~/.agents/skills/grip-it/SKILL.md

install.project.cursor=mkdir -p .cursor/skills/grip-it && curl -fsSL https://raw.githubusercontent.com/wild-mental/grip-it-skill/main/.cursor/skills/grip-it/SKILL.md -o .cursor/skills/grip-it/SKILL.md
install.project.claude=mkdir -p .claude/skills/grip-it && curl -fsSL https://raw.githubusercontent.com/wild-mental/grip-it-skill/main/.claude/skills/grip-it/SKILL.md -o .claude/skills/grip-it/SKILL.md
install.project.codex=mkdir -p .agents/skills/grip-it && curl -fsSL https://raw.githubusercontent.com/wild-mental/grip-it-skill/main/.agents/skills/grip-it/SKILL.md -o .agents/skills/grip-it/SKILL.md

install.project.note=run from repo root; adds tracked files — confirm user chose project scope

invoke.cursor=/grip-it
invoke.claude=/grip-it
invoke.codex=/skills|$grip-it

post_install.cursor=Reload Window
post_install.claude=live reload; restart if new top-level .claude/skills/ after session start
post_install.codex=restart if skill not detected

contract:
  reframe=grip the PROBLEM with the user, never interrogate the user
  domain=general knowledge work (office, business planning, service planning, research, software)
  purpose=secure the user's ownership of decisions in AI-assisted work
  intake_required=[reference_scope (A), direction_of_interest (B)]
  intake_default=[completion=all in-scope unresolved topics RESOLVED (C), output=record surface + binding surface (D)]
  refuse_until_present=[A, B]
  must_not_scan_outside_scope=true
  pillars=[Boundedness (scoped reference + extraction baseline present + bounded exploration), Visibility (extract full topic list up front + show progress each turn), Persistence (apply each decision to record + binding surface immediately, before next topic)]
  material_roles=[R1 purpose/success-criteria (baseline), R2 audience/stakeholders (judgment), R3 scope/deliverable (baseline), R4 constraints (judgment), R5 current-progress]
  material_gate=trigger only on R1/R3 deficit; options are exactly [A: add reference material and re-invoke -> STOP MATERIAL_PENDING, B: build anchor in-session then proceed]; never offer "proceed anyway"
  material_gate_recommend=[B when zero refs or both R1+R3 missing, else A]
  r2_r4_deficit=absorb as first CORE topic, do not trigger gate
  step1_extract_before_questions=true
  one_topic_at_a_time=true
  each_question_includes_recommended_answer=true
  question_ui_options=[recommended first, 2-4 real choices, ALWAYS "기타/other free-text" last, one-line tradeoff each]
  other_option_always_present=true
  other_response=[record user's own wording verbatim in decision:, re-confirm at most once, DROPPED if premise overturned (keep TOTAL), update depends: if it affects other topics]
  term_gloss_block=[classes: domain-term, field-idiom, project-coinage(cite source); max 4 per turn; 1 line each; once per session; omit block if none]
  language_tone=[polite explanatory conversational Korean, complete sentences, 1 info per sentence, explain-before-ask, guiding not imperative, no emoji/slang/banmal, cap = 1 context sentence + 1 question sentence]
  language_tone_exception=structure blocks (ledger rows, counters, tables) stay terse for grep/resume
  term_notation=[keep English technical terms + short parenthetical gloss; transliteration only if established, else Korean + original in parens; check polysemous mistranslations; priority = existing project notation > field standard > agent's own translation]
  decision_class=[CORE = irreversible or constrains other decisions -> record+binding required, MINOR -> ledger + one-line doc]
  ledger_file=docs/grip/GRIP_LEDGER.md  # counter "RESOLVED: n / DROPPED: d / TOTAL: m", resumable
  ledger_stub_on_material_pending=true
  stop_reasons=[ALL_RESOLVED, USER_PAUSED, MATERIAL_PENDING, BUDGET]
  output_separates_areas_with=horizontal rules (---) per turn
```

---

## 라이선스

[MIT License](LICENSE)
