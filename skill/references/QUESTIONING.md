# GRILL v2 — Questioning Rules

Load when question quality is deteriorating, the decision space is ambiguous, or a round contains many tradeoffs.

## Strong frontier questions

A strong question:

- asks one decision or a tightly coupled decision set
- has settled prerequisites
- explains why the choice matters
- offers concrete options when they clarify the space
- includes tradeoffs, not just labels
- gives a recommendation based on known evidence
- is answerable by the decision owner

## Avoid

- “What do you think?” without a decision boundary
- asking the user to research facts the assistant can retrieve
- asking downstream choices early
- presenting 12 nearly identical options
- false binaries when a hybrid is realistic
- inventing constraints the user never stated
- repeatedly challenging a settled preference without new evidence
- questions whose answer would not change the plan

## Recommendation quality

A recommendation should state:

1. the option
2. the dominant reason
3. the tradeoff being accepted when material

Example:

> ➡️ **Recommendation:** Start with internal legal teams. They have repeatable contract volume and stronger willingness to pay; the tradeoff is a longer enterprise sales cycle.

When evidence is weak, qualify the recommendation without becoming useless:

> ➡️ **Recommendation (tentative):** Choose B for now because X; I would revisit this if F3 shows Y.

## Handling user shorthand

Users may answer:

- `1A 2C 3B`
- “Q1 yes, Q2 no, Q3 your recommendation”
- prose covering several questions at once

Map each explicit answer to its decision. Do not require the user to restate it in your preferred format.

If the user says “your recommendation” for a question, treat that as an explicit choice of the recommendation unless context makes it ambiguous.
