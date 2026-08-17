# GRILL v2 Companion Skill

This directory contains the companion skill used to describe GRILL's decision-stress-test behavior outside the MCP transport.

The remote MCP app in `backend/index.ts` is the normal ChatGPT Web entrypoint. The skill package documents the richer protocol: dependency-ordered frontier rounds, evidence-first fact gathering, explicit decision state, contradiction handling, read-only boundaries, and the Shared Understanding approval gate.

## Files

- `SKILL.md` — core GRILL protocol.
- `agents/openai.yaml` — explicit invocation metadata.
- `references/QUESTIONING.md` — question quality rules.
- `references/STATE_MODEL.md` — decision/fact/constraint/assumption/risk state model.
- `references/TOOL_ROUTING.md` — evidence and read-only tool-routing policy.
- `references/EVALS.md` — activation and behavior evals.
