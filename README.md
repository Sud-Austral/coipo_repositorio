# coipo_repositorio

Catálogo web (vitrina institucional estática) de las 13 aplicaciones desarrolladas por la Unidad de Información y Análisis (UIA) de CONAF bajo la marca COIPO. Está dirigido a jefaturas y Dirección Ejecutiva de CONAF, otras gerencias, otros servicios públicos y público general. Describe las aplicaciones; **no** da acceso a ellas.

Sitio publicado: https://sud-austral.github.io/coipo_repositorio/ (URL declarada en `.github/workflows/deploy.yml` y `frontend/vite.config.js`; el 2026-11-24 respondió 200).

## Stack (VERIFICADO en `frontend/package.json`)

React 19, Vite 8, oxlint 1.75. Node 22 en CI. Sin backend, sin base de datos, sin pruebas automatizadas.

## Estructura

```
frontend/                 aplicación React + Vite
  src/App.jsx             página (pilares, contactos, listado, impresión)
  src/data/apps.js        contenido: las 13 aplicaciones (nombre, simple, detallada)
  src/components/         FichaDialog.jsx, Icons.jsx
  README.md               el de la plantilla de Vite, sin información del proyecto
  vite.config.js          base: '/coipo_repositorio/' (imprescindible en Pages)
.github/workflows/        deploy.yml (GitHub Pages). El generador readme.yml se quitó el 2026-10-25 (961db83)
INSUMO/                   material fuente (documento_web.md, ui_ux.md)
insumos/                  documentos de problema y solución, MANIFIESTO.yaml
REQUISITOS.md             levantamiento de requisitos (30-jul-2026)
mejora_visual.md          ronda de ajuste visual
```

## Ejecución

```bash
cd frontend
npm ci
npm run dev       # desarrollo
npm run build     # compila a frontend/dist
npm run preview   # previsualiza lo compilado
npm run lint      # oxlint
```

Verificado el 2026-11-24: `npm ci`, `npm run build` (un JS de 207 kB) y `npm run lint` (sin hallazgos, código de salida 0) pasan. No hay pruebas automatizadas.

## Configuración

No usa variables de entorno. Para agregar o editar una aplicación se edita solo `frontend/src/data/apps.js` (exactamente tres datos por aplicación).

## Despliegue

Al hacer push a `main`, `deploy.yml` compila `frontend/` y publica `frontend/dist` en GitHub Pages (requiere Settings > Pages > Source: "GitHub Actions"). Si cambia el nombre del repositorio hay que actualizar `base` en `vite.config.js`, o el sitio carga en blanco.

## Documentos

- [CLAUDE.md](CLAUDE.md): reglas duras y guía para agentes.
- [insumos/00-PROBLEMA.md](insumos/00-PROBLEMA.md) y [insumos/01-SOLUCION.md](insumos/01-SOLUCION.md).
- [REQUISITOS.md](REQUISITOS.md).
