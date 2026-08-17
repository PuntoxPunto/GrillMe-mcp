---
id: grillme-mcp-current-state
status: canonical
version: 1
updated: 2026-08-17
---

# GrillMe MCP — Estado actual

## Canonical baseline

El repositorio fue bootstrappeado en `main` con un README mínimo en:

`18c9d98f5752c57288651188ba2e50f09aba96dd`

Ese commit existe únicamente para crear una revisión canónica desde la cual pueda seguirse el flujo branch → PR.

## Propuesta activa

La inicialización completa del proyecto se prepara en:

`agent/init-grillme-mcp`

Mientras esa branch no sea mergeada a `main`, el Project Pack y la implementación publicados allí tienen provenance `change_proposal` y no habilitan el alta canónica en el Project Registry.

## Alcance de la propuesta

- fuente del MCP desplegado actualmente en AppDeploy;
- tool `grill` con comandos `start`, `status`, `tree`, `assumptions`, `facts`, `risks`, `resume`, `stop`, `approve`;
- compatibilidad ChatGPT MCP moderna + legacy;
- frontend diagnóstico y suite de QA;
- companion skill GRILL v2 y referencias operativas;
- documentación pública de endpoint e invocación.

## Registro Punto por Punto

El proyecto todavía no debe considerarse registrado en `PuntoxPunto/Punto-x-Punto` hasta que este Project Pack exista en `main` y pase `pp:project-health` con scope `pack`.

## Próximo gate

Revisión humana y merge de la PR de inicialización. Después del merge, ejecutar `pp:project-register` desde el SHA canónico y proponer el alta en `projects/registry.json`.
