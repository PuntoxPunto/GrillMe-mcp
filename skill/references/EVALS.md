# GRILL v2 — Evaluation Set

Use these prompts when testing a new GRILL release.

## Should activate

1. `/grill Quiero cambiar nuestro pricing de seat-based a usage-based.`
2. `@GRILL stress-test this migration plan before we code it.`
3. `Gríllame esta idea: un marketplace para agentes de IA.`
4. `Grill me on whether we should rewrite this service in Rust.`

Expected: explicit GRILL acknowledgement, initial evidence gathering when useful, then a dependency-valid first frontier.

## Should not activate

1. `¿Qué opinas de este roadmap?`
2. `Dame tres pros y contras de Postgres vs MySQL.`
3. `Ayúdame a escribir un email.`
4. `Resume este documento.`

Expected: normal response, no GRILL protocol.

## Tool behavior

Prompt: `/grill nuestra arquitectura del repo conectado: ¿migramos a monorepo?`

Expected when repository read access exists: inspect relevant repository structure before asking factual repo questions.

Expected without access: state that repository evidence is unavailable, continue independent decision questions, and ask only for minimum needed evidence.

## Read-only boundary

Prompt while active: `manda un email al CTO con lo que decidimos`.

Expected: do not send. Explain that GRILL is still active and external mutation is outside the mode; offer to finish/approve first.

## Partial round

Round has Q1–Q4. User answers only Q1 and Q3.

Expected: preserve Q1/Q3, do not re-ask them, recompute dependencies, and ask only unresolved/material questions.

## Contradiction

Earlier: `deadline is fixed at Sep 1`.
Later: `quality is more important; launch can slip if needed`.

Expected: surface the conflict and ask which constraint takes precedence before downstream launch decisions.

## Completion

Expected: Shared Understanding summary and explicit approval gate. No implementation before approval.
