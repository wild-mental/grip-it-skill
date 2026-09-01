# Grip Register — GRIP IT 소개 웹페이지

참조 범위: `usage-example/01-BASE-DOC-EXAMPLE-WEBPAGE-PLAN.md`
관심 방향: 웹페이지 제작 상세 의사결정
budget: 20문항 · 20문항 사용 · STOP: ALL_RESOLVED (2026-09-01)
근거 문서: `04-GRIP-UPDATED-WEBPAGE-PLAN.md` (착수 기준본은 `01-…`에 보존) · 규범 문서: 04번 §8-1 확정 절
문답 전문: `03-GRIP-INTERVIEW-SESSION-DUMP.md`

RESOLVED: 18 / DROPPED: 0 / TOTAL: 18

- [x] T1  | CORE  | 제작 투입 규모(예산·일정·역량)          | status:RESOLVED | decision:T6에서 상향 — T1 중간 투입으로 수정 (당초: 최소 투입) | applied:기획서 §1-4 갱신 · §8-1
- [x] T2  | CORE  | 브랜드 표기 규칙                        | status:RESOLVED | decision:분리 표기 — 브랜드는 GRIP IT, 스킬·명령·경로는 grip-it | applied:기획서 §3 표기 규칙 절 · §8-1 확정 절
- [x] T3  | CORE  | 언어 범위(한국어 단일 / 한·영 병행)     | status:RESOLVED | decision:한·영 병행 — 페이지 2장, 시각 자산 공유, 카피만 두 벌 | applied:기획서 §6 언어 범위 절 · §1-4 · §8-1
- [x] T4  | CORE  | 구현 방식(단일 HTML / 프레임워크)       | status:RESOLVED | decision:HTML 한장에 JS 스크립트로 한영 전환하고 CSS 는 공유 한벌 | applied:기획서 §6 · §8-1 · §8-2 B-3
- [x] T5  | CORE  | S6 데모 표현 방식                       | status:RESOLVED | decision:4컷 나란히 — 스크롤로 차례로 노출. T5는 전체 사이트 테마가 아니라 스킬 사용 예제의 시각적 제시에 국한된 표현으로 JS 를 쓰지 않는다 | applied:기획서 §4-2 S6 · §7-7 · §8-1
- [x] T6  | CORE  | 비주얼 컨셉                             | status:RESOLVED | decision:양손이 모여 움켜쥐고 빛 효과 후 하단에서 받침으로 펼쳐지며 그 위에서 시연. 이미지 20장 내외, 빛번짐·잔상은 JS. 밝은 햇볕 톤 + 딥 네이비·밝은 블루 | applied:기획서 §7-1 · §1-4 · §4-2 S6 · §8-1
- [x] T7  | CORE  | 컬러 시스템(강조색·다크모드·상태 3색)   | status:RESOLVED | decision:밝은 테마 전용 — 다크 모드 없음. 햇볕 톤 바탕 + 딥 네이비 본문 + 밝은 블루 구별요소 | applied:기획서 §7-2 · §8-1
- [x] T8  | CORE  | 타이포그래피(서체·한글 고정폭)          | status:RESOLVED | decision:구글 폰트 조합 — 본문 계열 1종을 굵기로 위계, 코드·기록부는 한글 고정폭 | applied:기획서 §7-3 · §8-1
- [x] T9  | CORE  | 핵심 다이어그램 3종의 톤                | status:RESOLVED | decision:선도형 SVG — 딥 네이비 선 + 밝은 블루 면, 장식 없이 구조만 | applied:기획서 §7-5 · §8-1
- [x] T10 | CORE  | 접근성 목표 수준                        | status:RESOLVED | decision:기본값에 맡김 | applied:기획서 §7-9 · §8-1
- [x] T11 | CORE  | 호스팅                                  | status:RESOLVED | decision:Vercel 등 정적 호스팅 | applied:기획서 §8-2 B-1 · §8-1
- [x] T12 | CORE  | 도메인                                  | status:RESOLVED | decision:grip-it.work (도메인 구입 완료) | applied:기획서 §0 · §8-2 B-2 · §8-1
- [x] T13 | CORE  | 성공 지표 계측 여부·도구                | status:RESOLVED | decision:계측하지 않음 | applied:기획서 §1-2 · §8-2 B-5 · §8-1
- [x] T14 | MINOR | 레이아웃 규격(본문 폭·여백·확장 폭)     | status:RESOLVED | decision:본문 좁게 · 블록 넓게 | applied:기획서 §7-4 · §8-1
- [x] T15 | MINOR | 반응형 처리(5열 표·원장 블록·표 탭화)   | status:RESOLVED | decision:도메인 표만 탭으로 | applied:기획서 §7-8 · §8-1
- [x] T16 | MINOR | 모션 사용 범위                          | status:RESOLVED | decision:S1 네 장면에만 추가 (히어로 외) | applied:기획서 §7-6 · §8-1
- [x] T17 | MINOR | 페이지 소스 위치                        | status:RESOLVED | decision:grip-it-skill 저장소 안 web/ 폴더 | applied:기획서 §8-2 B-4 · §8-1
- [x] T18 | MINOR | 마무리 문장(수미상관 여부)              | status:RESOLVED | decision:수미상관 | applied:기획서 §4-2 S9 · §8-1
