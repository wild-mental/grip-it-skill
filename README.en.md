![AI Skills for Everyone](author/wildmental-bjpark.png)

# grip-it
> Skill for Cursor, Claude, Codex agents

**Language / 언어:** [한국어](README.md) · [English](README.en.md)

Across every kind of AI agent work, we want a firmer understanding, more explicit decisions, and — through those — a firmer claim that the work is genuinely ours. Put differently: when we hand a task to an AI agent, we want to be hands-off about carrying it out, while keeping a much surer hold on understanding it, setting its direction, and making its decisions. A firm grip.

**Grip It is a Skill built to serve exactly that need, in the most AI-native way available. Before the real work begins, it detects the project's still-unsettled details and interviews you about them, putting scattered decisions back into your hands one at a time. It is not limited to software — the same procedure applies to general office work, business planning, service planning, and research. Decision-type questions are presented through a selectable UI, asked in a kind and explanatory conversational register, and reflected into your documents and binding surfaces the moment they are resolved. It supports Cursor, Claude Code, and Codex alike.**

Where the grip slips is fairly predictable. The AI invents plausible-looking items even when the material is too thin; you approve proposals containing terms you do not actually know; you end up choosing only from the options the AI put in front of you; and what you decided scatters through a chat log, so the next session's AI decides it all over again on its own. The decisions were yours, and yet the result is not.

`grip-it` closes those gaps one by one. The agent **checks the material first**, **lays out everything still to be decided**, attaches a **recommendation and rationale** to every set of options, and **glosses the difficult terms**. **You make the decisions.** And those decisions are fixed into your documents and binding surfaces, where they **constrain later AI work**.

What this skill protects is not speed. It is **ownership of the work**.

## How ownership is protected

| Where ownership leaks | What `grip-it` does |
|---|---|
| Plausible items get invented when material is thin | **Material check gate** — no topics are extracted without a baseline |
| You are pulled through questions without seeing the whole board | **Full topic list up front** — you know the number of rounds from the start |
| You approve proposals you do not fully understand | **`[terms]` glosses + explanatory register** — you decide only what you understood |
| You choose only from what the AI offered | **An always-present "Other" free-text option** — you can answer in your own way |
| What you decided scatters through the chat | **Grip Ledger + record surface** — what was decided, and why, remains |
| The next session's AI decides it all again | **Binding surface** — what was settled once is not renegotiated |

---

## What this skill solves

### 1. What gets handled is the "problem," not "you"

Many existing reverse-interview techniques lean on relentless, grilling questioning that simply wears the user down. Pressing someone for answers may extract information, but it also leaves them too tired to answer carefully — or ready to abandon the session altogether.

Grip It drops that approach and moves the subject of the questioning from the person to the **problem**: "this point of this **problem** has not been decided yet." Every question comes with a **recommended option + rationale**, so you only need to **confirm or correct** rather than generate an answer from scratch.

### 2. It checks the material first — a gate against invented topics

Before asking anything, it verifies that your reference material provides the **baseline** needed to extract topics. Topics pulled without that baseline are not extraction but **invention**, and once invented items enter the ledger, the whole ledger becomes untrustworthy.

| | Material role | Grade |
|---|---|---|
| **R1** | Purpose · success criteria | Required · **extraction baseline** |
| **R2** | Audience · stakeholders | Required · judgment basis |
| **R3** | Scope · deliverable definition | Required · **extraction baseline** |
| **R4** | Constraints (budget, schedule, regulation, ethics) | Recommended · judgment basis |
| **R5** | Current progress · decisions already made | Recommended |

If R1 or R3 is missing, the gate opens and offers **exactly two paths** — **A) add material and re-invoke**, or **B) build the anchor in this conversation and continue.** There is deliberately no "proceed anyway" path. A missing R2 or R4 does not open the gate; it is **absorbed as the first CORE topic** and the session proceeds normally.

### 3. Any domain document can serve as material

Judgment is by **role**, not by document name, so no PRD/SRS is required.

| Role | Business planning | Service planning | Research | General office |
|---|---|---|---|---|
| R1 | Business goals · KPIs | Service concept · target metrics | Research question · hypotheses | Statement-of-work purpose |
| R2 | Target customers · competitive analysis | Customer segments · JTBD | Population · sample definition | Recipients · approval chain |
| R3 | Business scope · BM canvas | Service scope · feature list | Research scope · measurement structure | Task scope (RFP/SOW) |
| R4 | Budget · regulation | Operating capacity · policy | Research ethics · data access | Budget · internal rules |
| R5 | Progress reports · decision log | Release notes | Prior work · research notes | Minutes · approval history |

### 4. It shows the full topic list before it starts asking

It does not start asking blindly. It extracts every unresolved topic in scope and presents them with **count, class (CORE/MINOR), and dependency order**. You know from the outset how many rounds of Q&A lie ahead.

```
RESOLVED: 0 / DROPPED: 0 / TOTAL: 3
- [ ] T1 | CORE  | Sample definition and recruitment  | depends:-  | status:UNRESOLVED
- [ ] T2 | CORE  | Measurement instrument selection   | depends:T1 | status:UNRESOLVED
- [ ] T3 | MINOR | Codebook label naming convention   | depends:T2 | status:UNRESOLVED
```

### 5. CORE/MINOR is split by cost of reversal

The classifier is a decision rule, not a list of domain examples, so classification does not stall on a decision the list never anticipated.

```
CORE  = costly to reverse, or constrains other decisions
MINOR = easy to reverse, and constrains nothing else
```

### 6. It does not merely record — it fixes decisions on a binding surface

A decision written down somewhere becomes a subject of debate again at the next meeting. `grip-it` splits its output into two surfaces.

| Surface | Function | Examples |
|---|---|---|
| **Record surface** | Where the decision and its rationale live | Planning docs · business plans · research protocols · minutes |
| **Binding surface** | Where later work automatically reads and complies | Team rules · approval criteria · operating policy · **preregistration** · `CLAUDE.md`, rules, hooks |

Preregistration in research is the exact analogue of an agent harness: once fixed, it constrains later behavior, and deviating requires an explicit stated reason.

### 7. It asks in a kind, explanatory conversational register

The promise that "you only confirm or correct" holds only if the question is understood **on first reading**.

| Property | Rule |
|---|---|
| Complete sentences | No clipped nominal endings ("Scope undefined. Confirmation required.") |
| Polite register | Statements and questions both fully formed |
| Explain first | One sentence on why this is being asked now, before the question |
| Guiding, not imperative | "You may…" rather than "Do…" |
| Restrained affect | No exaggeration, exclamation, or praise |
| Length cap | One context sentence + one question sentence |

Structure blocks — the Grip Ledger, counters, tables — **stay terse**. The ledger is a `grep` target, and turning it into prose breaks resume and counting.

### 8. English technical terms stay in English, with a short gloss in parentheses

Removing the original term makes it impossible to search or cross-check against source material, and translated terms vary by field, which adds confusion rather than removing it.

```
preregistration (registering the analysis plan publicly before data collection)
idempotency (the property that repeating a request yields the same result as sending it once)
```

Transliterations are judged by **whether they are established** in the field, and translated terms are checked for **polysemous mistranslation** (for example, `significant` in a statistical context).

Notation priority is **existing project notation > field-standard term > the agent's own translation**. Silently changing a project's internal notation makes its existing documents and the new records diverge in vocabulary.

### 9. Terms are glossed directly beneath the question

A decision approved without being understood contaminates the ledger and propagates to the binding surface. The gloss is not a courtesy — it is a **safeguard for ledger accuracy**.

Three classes are glossed: ① domain terms ② field idioms and abbreviations ③ **project-specific coinages** (source citation required). A coinage with no definition found in scope is marked `not defined in this project`, and **defining it is raised as a MINOR topic candidate.**

Length is controlled: only terms that actually appeared this turn, once per session, at most four per turn, one line each, and the block is omitted entirely when there is nothing to gloss.

### 10. The last option is always "Other (free text)"

Closed options reduce shared ownership of the decision to an approval request, and forcing a choice that does not match the real intent means **a decision that does not exist gets recorded as RESOLVED**.

```
1st      Recommended option (with one-line rationale)
2nd–nth  The remaining real choices (one-line trade-off each)
last     Other — free text
```

The count is **2–4 real choices plus Other**, and Other does not count against that cap. Even where a question UI supplies a free-text field automatically, it is stated in the options themselves so behavior is identical across all three vendors.

A free-text answer is recorded in the ledger **in the user's own wording**. If it overturns the topic's premise, the topic is marked `DROPPED` while **the denominator is preserved** (shrinking it would distort the progress rate).

### 11. You can stop and resume at any time

Progress lives in the Grip Ledger, so ending a session mid-way resumes from the first `UNRESOLVED` topic next time. The material-pending state (`MATERIAL_PENDING`) is also preserved as a stub, leaving a checklist of exactly what to bring.

---

## Three Pillars (mandatory gates)

```
Boundedness   — Are the reference scope and direction stated, is the extraction baseline present, and is exploration confined to that scope?
Visibility    — Is the full unresolved-topic list extracted up front, and is progress (resolved / dropped / remaining) visible each turn?
Persistence   — Is each topic reflected into the record surface + binding surface and logged in the Grip Ledger the moment it is resolved?
```

The skill does not advance unless all three hold at once.

---

## Quick start

### Prerequisites

- Cursor, Claude Code, or Codex
- **Reference material** (at minimum, something filling R1 and R3) and a **direction of interest**

### Installing the skill

Choose either **personal** or **project** scope. Both fetch only `SKILL.md` with `curl`. **Do not clone this repository into your working repo.**

| | Personal skill | Project skill |
|---|----------|--------------|
| **Applies to** | Every project you open | This repo only |
| **Git impact** | No files added to your working repo | Skill files can be committed (team sharing) |

#### Personal scope (recommended — leaves your Git repo untouched)

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

#### Project scope

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

#### After installing

- **Cursor**: Reload Window once
- **Claude Code**: edits reload live; a new top-level `.claude/skills/` added after the session started may need a restart
- **Codex**: restart if the skill is not detected

### How to use it

Tell the agent which material to reference and what you want clarified, then ask it to "sort out what isn't decided yet before we start." The agent applies the skill automatically.

| Tool | Manual invocation |
|------|-----------|
| Cursor | `/grip-it` |
| Claude Code | `/grip-it` |
| Codex | `/skills` or `$grip-it` |

**Example requests:**

- "Using the business plan and market analysis, let's settle the undecided scope and pricing questions before we start"
- "Based on the research protocol, pull the open items in measurement and analysis design and decide them one at a time; reflect decisions into the preregistration draft"
- "Using the service plan and customer segment notes, sort out the open membership and refund policy questions"
- "Using the statement of work, let's settle the deliverable definition and the acceptance criteria"
- "We stopped partway last time — pick up from the remaining topics"

---

## OUTPUT: what remains

| Output | Content |
|--------|------|
| **Grip Ledger** | The single progress ledger of decision topics (`docs/grip/GRIP_LEDGER.md`), with a greppable `RESOLVED / DROPPED / TOTAL` counter at the top and each topic's decision and application recorded — the basis for resuming |
| **Record surface** | Planning docs, business plans, research protocols, minutes, updated per the decision |
| **Binding surface** | Team rules, approval criteria, operating policy, preregistration, agent harness — wherever CORE decisions must constrain later work |

---

## Workflow

| Step | Content |
|------|------|
| Step 0 — Intake & Scope Lock | Confirm reference scope (A), direction (B), completion condition (C), output target (D). Ask first if A or B is missing |
| **Step 0.5 — Material Check** | Read only within scope to judge R1–R5. A missing baseline (R1/R3) opens the gate → **two options, A or B**. A missing judgment basis (R2/R4) is absorbed as the first CORE topic |
| Step 1 — Topic Extraction | Read only within scope, extract every unresolved topic, present the ledger by CORE/MINOR and dependency order (end if zero) |
| Step 2 — Grip the Topic | One first-UNRESOLVED topic: options + recommendation + **`[terms]` block** + **Other option** + a single question |
| Step 3 — Resolve & Persist | On confirmation, update record and binding surfaces and the ledger before moving on |
| Step 4 — Advance or Stop | Next topic, or stop (ALL_RESOLVED / USER_PAUSED / **MATERIAL_PENDING** / BUDGET) |
| Step 5 — Resume | On re-invocation, read the ledger and resume from material check or the first UNRESOLVED topic |
| Step 6 — Closeout | Show the counter and stop reason, and summarize this session's changes |

---

## Intake 4 Blocks (startup input)

```
A. Reference scope       — the material to reason from (judged by roles R1-R5, format- and domain-agnostic)
B. Direction of interest — which ambiguity you want cleared
                           (e.g. business scope & pricing / membership & refund policy /
                            measurement & analysis design / deliverables & acceptance criteria)
C. Completion condition  — how far to go (default: every unresolved topic in that direction RESOLVED)
D. OUTPUT target         — where decisions land (default: record surface + binding surface)
```

A and B are your intent and cannot be substituted; if either is missing, the skill asks before starting. The material itself (R1-R5) is content and can be filled through conversation, so only a missing baseline (R1/R3) opens the gate, while a missing R2 or R4 is absorbed as the first CORE topic.

---

## Who this is for

- Anyone clearing pre-start decisions in **business, service, research, or ordinary assignments** rather than software
- Anyone who has watched an AI **invent items that were never there** because the material was too thin
- Anyone who wants to know **how many rounds of Q&A** lie ahead, from the outset
- Anyone who wants answers to land **in documents and rules**, not scattered through a chat log
- Anyone who wants the **specialist terms in a question glossed** alongside it
- Anyone who wants room to answer **in their own words** rather than only from the given options
- Anyone who wants to **stop midway and resume later**

---

## References

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
  1. ask scope: "Personal skill (~/, every project) or project skill (./, this repo only)?"
  2. ask tools: "Which of Cursor / Claude Code / Codex should it be installed for?" (multi-select allowed)
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
  question_ui_options=[recommended first, 2-4 real choices, ALWAYS "other / free-text" last, one-line tradeoff each]
  other_option_always_present=true
  other_response=[record user's own wording verbatim in decision:, re-confirm at most once, DROPPED if premise overturned (keep TOTAL), update depends: if it affects other topics]
  term_gloss_block=[classes: domain-term, field-idiom, project-coinage(cite source); max 4 per turn; 1 line each; once per session; omit block if none]
  language_tone=[polite explanatory conversational register, complete sentences, 1 info per sentence, explain-before-ask, guiding not imperative, no emoji/slang, cap = 1 context sentence + 1 question sentence]
  language_tone_exception=structure blocks (ledger rows, counters, tables) stay terse for grep/resume
  term_notation=[keep English technical terms + short parenthetical gloss; transliteration only if established, else local term + original in parens; check polysemous mistranslations; priority = existing project notation > field standard > agent's own translation]
  decision_class=[CORE = irreversible or constrains other decisions -> record+binding required, MINOR -> ledger + one-line doc]
  ledger_file=docs/grip/GRIP_LEDGER.md  # counter "RESOLVED: n / DROPPED: d / TOTAL: m", resumable
  ledger_stub_on_material_pending=true
  stop_reasons=[ALL_RESOLVED, USER_PAUSED, MATERIAL_PENDING, BUDGET]
  output_separates_areas_with=horizontal rules (---) per turn
```

---

## License

[MIT License](LICENSE)
