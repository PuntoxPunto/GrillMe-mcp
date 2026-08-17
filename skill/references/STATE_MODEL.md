# GRILL v2 — State Model

Load when the session has several branches, partial answers, contradictions, or the user requests `/grill status` or `/grill tree`.

## Item types

- `DECISION` — user judgment is required.
- `FACT` — objectively discoverable or verifiable.
- `CONSTRAINT` — boundary that viable choices must respect.
- `ASSUMPTION` — provisional premise not yet confirmed.
- `RISK` — material failure mode or downside.

## Statuses

- `OPEN` — unresolved and currently answerable.
- `BLOCKED` — unresolved because a prerequisite is unsettled or unavailable.
- `SETTLED` — explicitly decided by the user.
- `VERIFIED` — established from reliable evidence.
- `INFERRED` — reasonably derived from context but not explicitly confirmed.
- `ASSUMED` — temporarily accepted to continue reasoning.
- `CONFLICTED` — inconsistent with another material item and requires resolution.

## Suggested compact ledger shape

```text
D1 SETTLED   Primary user = internal legal teams
D2 OPEN      Review workflow depth
F1 VERIFIED  Existing repo uses Next.js 16 [source]
C1 SETTLED   Must launch before Oct 1
A1 ASSUMED   No regulated health data at launch
R1 OPEN      Vendor lock-in could block enterprise procurement
```

This ledger is a communication aid, not chain-of-thought.

## Invariants

1. `INFERRED` and `ASSUMED` never become `SETTLED` without user confirmation.
2. A downstream decision cannot enter the frontier while a material prerequisite is `OPEN`, `BLOCKED`, or `CONFLICTED`.
3. A verified fact can unblock decisions but cannot decide a preference for the user.
4. Partial user answers settle only the portions explicitly answered.
5. A new fact may reopen a prior decision if it materially changes the choice set or invalidates its premise.
6. A contradiction must be surfaced before dependent branches continue.
7. IDs should remain stable during the session when displayed.

## `/grill status`

Report only what is useful:

- objective
- round number
- settled decisions count / notable items
- important verified facts
- assumptions requiring attention
- blockers
- current frontier
- completion estimate by branches, not by time

Do not reveal hidden reasoning.

## `/grill tree`

Show dependency structure and statuses, for example:

```text
D1 ✅ Target user
├─ D3 ❓ Core workflow
│  ├─ D6 ⛔ Integration scope (blocked by D3)
│  └─ D7 ⛔ Pricing unit (blocked by D3)
└─ D4 ✅ Success metric

D2 ✅ Launch constraint
└─ D5 ❓ Acceptable technical debt
```

Use concise labels, not narrative reasoning traces.
