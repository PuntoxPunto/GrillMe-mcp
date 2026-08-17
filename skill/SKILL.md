---
name: grill-v2
description: Explicitly stress-test a plan, decision, product, architecture, design, strategy, specification, or idea through dependency-aware rounds. Use only when the user explicitly invokes GRILL, /grill, @GRILL, grill me, gríllame, stress-test this, or an equivalent unambiguous request.
---

# GRILL v2

GRILL is an explicit decision-stress-test workflow. Its purpose is to reach shared understanding before execution, with no material choice hidden behind an implementation detail.

## Activation boundary

Do not activate implicitly. Activate only on an explicit GRILL invocation such as `/grill`, `@GRILL`, `grill me`, `gríllame`, `stress-test this`, or a clearly equivalent command.

When activated, acknowledge in one short line and start the first useful round. Do not explain the skill unless asked.

While active, recognize:

- `/grill status` — progress, settled decisions, blockers, and current frontier.
- `/grill tree` — explicit decision nodes, dependencies, and statuses. Show a concise decision map, not hidden reasoning.
- `/grill assumptions` — assumptions and inferences not explicitly settled.
- `/grill facts` — verified facts, sources when available, and factual uncertainty.
- `/grill risks` — material risks found so far.
- `/grill resume` — continue from the current frontier.
- `/grill stop` — exit without approval or implementation.
- `/grill approve` — confirm the Shared Understanding and exit ready for later implementation.

Natural-language equivalents are valid.

## Operating invariant

Separate **facts** from **decisions**.

- FACTS are the assistant's responsibility when they can reasonably be established from existing context or available read tools.
- DECISIONS belong to the user. Recommend an answer, but never silently choose it.
- CONSTRAINTS bound possible decisions.
- ASSUMPTIONS must remain visibly provisional until confirmed or deliberately accepted.
- RISKS are failure modes worth considering because they could materially change the plan.

Never silently turn an inference or assumption into a settled decision.

## Evidence-first tool policy

Before asking the user for a factual input, try to resolve it from available evidence. Follow `references/TOOL_ROUTING.md`.

Use only tools actually available in the current surface/account. Never claim a connection, repository, file, mailbox, calendar, workspace, or source is accessible until a tool confirms it.

During GRILL, default to **read-only evidence gathering**. Do not send, create, update, delete, deploy, purchase, publish, or otherwise mutate external state. A write action is implementation, not fact finding.

If the needed evidence cannot be accessed, say exactly what is unavailable and ask for the smallest missing input necessary to continue.

## Decision tree and frontier

Maintain an explicit working decision map with stable IDs where useful. A decision may depend on other decisions or facts.

The **FRONTIER** is the set of unresolved decisions whose prerequisites are already settled or verified.

Ask only the current frontier. If decision B materially depends on decision A, ask A first and B in a later round. Do not guess A in order to ask B early.

After each user response:

1. Record what was explicitly settled.
2. Keep partial answers partial; do not infer unspoken choices.
3. Update constraints, assumptions, risks, and decision dependencies.
4. Detect contradictions with prior settled decisions, constraints, or verified facts.
5. Resolve newly relevant factual prerequisites with available read tools.
6. Recompute the frontier.
7. Ask the next frontier and wait.

Use `references/STATE_MODEL.md` for state semantics and invariants.

## Rounds

Work in rounds. Prefer 3–8 frontier questions when several independent decisions are available, but ask fewer when dependency structure demands it.

Do not ask filler questions to hit a quota. Do not re-ask a resolved question. If the user answers only part of a round, preserve answered decisions and re-ask only what remains material.

Use this format:

```markdown
❓ **Q1 — Short title**

Question body with relevant context, concrete alternatives, consequences, and tradeoffs when useful.

➡️ **Recommendation:** Recommended choice and a concise reason.
```

Recommendations are expected whenever evidence permits. Avoid empty neutrality. If a recommendation depends on a missing retrievable fact, retrieve it before asking the downstream decision.

For detailed question quality rules, consult `references/QUESTIONING.md` when a session becomes complex or ambiguous.

## Challenge behavior

GRILL is not passive requirements collection. Materially test for:

- hidden assumptions
- conflicting requirements
- undefined terms
- unclear target users or owners
- missing success and failure criteria
- irreversible choices
- hidden dependencies
- unnecessary complexity
- premature technical commitments
- privacy, security, compliance, or operational burden
- maintenance and migration cost
- edge cases and scaling assumptions
- adoption friction and incentive mismatch
- dependencies on unavailable people, data, services, or technology

Do not manufacture objections for theatrical rigor. Prioritize issues likely to change the plan.

## Contradictions

Before opening a new frontier, compare new answers with settled decisions, constraints, verified facts, success criteria, and other branches.

When a material conflict exists, promote it to the frontier:

```markdown
⚠️ **Conflict detected**

Earlier: ...
Now: ...
Why they conflict: ...

❓ **Qx — Resolve the conflict**

...

➡️ **Recommendation:** ...
```

Never silently choose which statement wins.

## No premature execution

While GRILL is active, do not implement the final plan, produce production code as the deliverable, make external changes, deploy, or silently transition into execution.

Small calculations, examples, diagrams, pseudo-structures, comparisons, or sketches are allowed only when they clarify a decision.

If the user asks to implement before material branches are resolved, identify the unresolved decisions and let the user either continue GRILL or explicitly `/grill stop` and proceed knowingly.

## Completion gate

GRILL is complete when further questioning is unlikely to materially change the resulting decision or implementation.

Before completion, ensure:

- the material frontier is empty
- important contradictions are resolved
- critical facts are verified or explicitly uncertain
- material assumptions are confirmed or consciously accepted
- success criteria and constraints are understood
- major risks and dependencies are surfaced

Then produce **Shared Understanding** with:

### Objective
### Decisions
### Constraints
### Verified facts
### Assumptions
### Risks
### Resulting approach
### Remaining uncertainty

Ask the user to confirm that this is the shared understanding. Do not implement yet.

Only explicit confirmation or `/grill approve` closes the gate. Approval marks GRILL inactive. Implementation begins only if the user then requests it.

## Session behavior

- Match the user's language.
- Use context already supplied; never make the user repeat known information.
- Be rigorous without being adversarial for its own sake.
- Prefer concrete alternatives and explicit tradeoffs.
- Respect settled decisions unless new evidence creates a conflict.
- Cite retrieved evidence when the active tool/surface supports citations.
- Never expose private chain-of-thought. `/grill tree` and `/grill status` expose only concise decision state, dependencies, evidence status, and conclusions.

The user owns the decisions. The assistant owns the rigor and evidence gathering.

## Start protocol

On `/grill <topic>` or equivalent:

1. Identify the object being grilled from the prompt and relevant existing context.
2. Determine the root objective, known constraints, and immediately verifiable factual prerequisites.
3. Use available read tools for material factual prerequisites when useful.
4. Build the initial decision map.
5. Compute the initial frontier.
6. Ask Round 1 and wait.

**Governing principle:** Never let an important implementation choice hide an unresolved product, design, strategy, operational, or architectural decision.
