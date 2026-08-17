---
id: grillme-mcp-current-state
status: canonical
version: 2
updated: 2026-08-17
---

# GrillMe MCP — Estado actual

## Canonical baseline

La inicialización completa de GrillMe MCP fue incorporada a `main` mediante PR #1.

Estado canónico observado para esta reconciliación:

`00395febf1dcac8ac432b0aed10d1f3945d303eb`

Ese baseline contiene el Project Pack v1, la fuente del MCP remoto, la companion skill, tests, documentación pública y la atribución explícita a Matt Pocock por el workflow original `/grill-me`.

## Estado funcional observado

- el MCP remoto fue desplegado en AppDeploy como `grill-chat-sby65b`;
- ChatGPT Web Developer Mode registró correctamente el plugin `GrillMe`;
- la tool `grill` fue descubierta e invocada desde un Chat normal;
- la sesión GRILL quedó activa en modo read-only durante la prueba real;
- el endpoint de registro utilizado es `https://api-v2.appdeploy.ai/app/grill-chat-sby65b/api/mcp`.

## Integración con Punto por Punto

- `project_id: grillme-mcp` está registrado en `PuntoxPunto/Punto-x-Punto`;
- el alta fue incorporada mediante Registry PR #33;
- Registry merge SHA observado: `5e45bae0f566e1a6f3e869ac94681d7164102fd0`;
- el Registry referencia `.punto/project.yaml`, `canonical_ref: main` e `identity_node_id: grillme-mcp-identity`;
- no se añadió ninguna relación cross-project implícita durante el registro.

## Alcance canónico actual

- tool MCP `grill` con comandos `start`, `status`, `tree`, `assumptions`, `facts`, `risks`, `resume`, `stop`, `approve`;
- compatibilidad de discovery moderna y fallback legacy validada para ChatGPT Web;
- frontend diagnóstico y suite de QA;
- companion skill GRILL y referencias operativas;
- documentación de deployment e invocación;
- atribución y aviso MIT del trabajo original de Matt Pocock.

## Próximo gate

Cualquier cambio funcional posterior debe entrar por branch → PR → revisión/merge. El Project Pack y el Registry ya pueden utilizarse como contexto canónico del proyecto.
