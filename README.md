# GrillMe MCP

Decision stress-testing for ChatGPT Web through a remote MCP app.

> **Special thanks to Matt Pocock.** GRILL was inspired by and evolved from Matt Pocock's excellent [`/grill-me`](https://github.com/mattpocock/skills/tree/main/skills/productivity/grill-me) / `grilling` workflow. His original idea — relentlessly interview a plan until shared understanding, resolve decision dependencies, research facts instead of asking the user, and recommend an answer for each decision — is the foundation that made this project possible.

This repository adapts that concept for **normal ChatGPT Web Chat** as a remotely hosted MCP app, then extends it with explicit state tracking, evidence/tool routing, contradiction handling, read-only boundaries, modern + legacy ChatGPT MCP compatibility, and a Shared Understanding approval gate.

## What it does

`GrillMe` exposes one model-visible MCP tool:

```text
grill
```

It can be invoked from a normal ChatGPT conversation after the custom app is connected, for example:

```text
@GrillMe /grill

Quiero decidir si deberíamos rediseñar la arquitectura del producto.
```

Supported control commands include:

- `start`
- `status`
- `tree`
- `assumptions`
- `facts`
- `risks`
- `resume`
- `stop`
- `approve`

## Architecture

```text
ChatGPT Web
  ↓
@GrillMe / custom app
  ↓
AppDeploy MCP gateway
  ↓
POST /api/mcp
  ↓
tool: grill
  ↓
GRILL protocol in the current conversation
```

The server is intentionally stateless for decision-session state: the conversation itself carries the evolving decision tree. The MCP tool injects/coordinates the GRILL protocol and remains read-only while GRILL is active.

## ChatGPT registration

Current hosted diagnostic frontend:

```text
https://grill-chat-sby65b.v2.appdeploy.ai/
```

Current MCP URL used to register the custom app in ChatGPT Developer Mode:

```text
https://api-v2.appdeploy.ai/app/grill-chat-sby65b/api/mcp
```

Authentication: `No authentication`.

## Repository layout

- `backend/index.ts` — production MCP backend currently deployed through AppDeploy.
- `index.html`, `src/`, configs — diagnostic frontend/source.
- `tests/tests.txt` — AppDeploy QA scenarios.
- `skill/` — GRILL v2 companion skill and references.
- `.punto/` — Punto por Punto Project Pack.

## Original work and attribution

The original `/grill-me` skill is part of [`mattpocock/skills`](https://github.com/mattpocock/skills), created by **Matt Pocock** and distributed under the MIT License.

This repository is an adaptation/extension for a different runtime and distribution model. It is not presented as Matt Pocock's official ChatGPT implementation.

See [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md) for the upstream copyright and license notice.

## Governance

`main` is canonical. Substantive changes should land through branch → pull request → human review/merge. Project-specific canonical context lives under `.punto/`; the Punto por Punto mother repository can register and federate the project without duplicating its memory.
