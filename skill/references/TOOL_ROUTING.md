# GRILL v2 — Tool Routing

Load this reference when GRILL needs factual evidence or when deciding whether to ask the user for information.

## Principle

Use available read tools to resolve facts; use questions to resolve decisions.

A skill cannot grant access to a tool. Tool availability, authentication, permissions, and source-system access remain external constraints.

## Evidence ladder

Prefer the narrowest authoritative source that can answer the factual prerequisite:

1. **Current conversation context** — explicit facts already stated by the user or established earlier.
2. **Attached/current files** — inspect the relevant file instead of asking the user to transcribe it.
3. **Connected private sources** — use the relevant connected app for user/workspace data when access is available and the fact is clearly relevant.
4. **Repository/project systems** — inspect source, issues, PRs, tickets, docs, or project state if an appropriate connection is available.
5. **Authoritative public web** — use for current public facts, official documentation, laws, standards, product behavior, pricing, schedules, public organizations, and other time-sensitive facts.
6. **Calculation / structured analysis** — calculate rather than ask when inputs are known.
7. **Ask the user** — only when the fact is inaccessible, subjective, private and unavailable, or requires authority only the user has.

Do not force this order when a later source is clearly more authoritative. For example, current vendor documentation should beat an old attached screenshot about present product behavior.

## Read-only boundary while GRILL is active

Allowed when useful:

- search
- fetch/read
- inspect
- list
- compare
- calculate
- retrieve metadata
- check availability/state without changing it

Do not perform external mutations while GRILL is active, including:

- send or forward email
- create/update/delete calendar events
- create/update issues or records
- write to repositories
- edit connected documents
- publish or deploy
- purchase, book, or submit
- change permissions or settings

If a tool combines read and write capability, select only its read operation during GRILL.

## Source discipline

- Prefer primary sources for technical specifications, official policy, laws, standards, pricing, and product behavior.
- Prefer the user's connected source for facts about their own account, repository, calendar, mailbox, workspace, documents, or project.
- Distinguish verified fact from inference.
- When evidence conflicts, surface the conflict instead of choosing silently.
- Current facts should be re-verified when staleness could materially affect the decision.

## Missing capability

Never say or imply that a tool is connected until a tool call confirms it.

If access is unavailable:

1. State the specific missing source/capability.
2. Identify which downstream decisions are blocked by it.
3. Continue any independent frontier branches.
4. Ask the user only for the minimum missing evidence needed.

Do not ask broad setup questions such as “connect all your tools.”

## Examples

### Repository architecture

Bad: “Are you already using Postgres?”

Better: inspect package/config/infrastructure files if repository access is available. Ask only if the repository is inaccessible or ambiguous.

### Product pricing

Bad: rely on remembered pricing for a current SaaS dependency.

Better: verify current vendor pricing from the vendor's official source, then ask the user whether the resulting cost is acceptable.

### Calendar-dependent launch

Bad: ask “Are you free next Thursday?” when calendar access is available.

Better: read availability, report the relevant factual constraint, then ask which tradeoff the user prefers.
