---
id: grillme-mcp-architecture
status: canonical
version: 1
updated: 2026-08-17
---

# GrillMe MCP — Arquitectura

## Flujo funcional

```text
ChatGPT Web
  ↓
custom app / @GrillMe
  ↓
POST /api/mcp
  ↓
tool: grill
  ↓
GRILL directive + structuredContent
  ↓
decision tree / frontier / evidence
  ↓
Shared Understanding
```

## Componentes

- backend MCP compatible con discovery moderno y fallback legacy;
- una tool model-visible `grill`, no-auth y read-only;
- frontend diagnóstico para self-test del endpoint;
- tests AppDeploy para handshake, metadata y error handling;
- companion skill bajo `skill/` con estado, questioning, tool routing y evals;
- deployment activo en AppDeploy con endpoint de registro para ChatGPT Developer Mode.

## Invariantes

- GRILL sólo se activa explícitamente.
- Los hechos verificables son responsabilidad del asistente; las decisiones pertenecen al usuario.
- Mientras GRILL está activo no se mutan sistemas externos ni se implementa el plan.
- Las preguntas siguen el frontier de decisiones cuyas dependencias ya están resueltas.
- La sesión termina únicamente con Shared Understanding y confirmación explícita.

## Seguridad y publicación

- El repositorio es público y no debe contener secretos.
- Credenciales o API keys de servicios externos deben permanecer fuera del código fuente.
- La memoria de proyecto publicable se limita al Project Pack específico bajo `.punto/`.
- La existencia de información en el repositorio canónico privado de Punto por Punto no la hace publicable por defecto.

## Relación con Punto por Punto

El repositorio madre registra identidad y referencias canónicas; no obtiene autoridad de escritura sobre este proyecto ni duplica su memoria específica.
