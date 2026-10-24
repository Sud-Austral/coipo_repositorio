# Solución

Actualizado el 2026-10-24 contra el código de `main`. VERIFICADO = visto en archivos del repositorio; no ejecuté build ni lint para este documento.

## Arquitectura

Sitio estático React 19 + Vite 8 (`frontend/package.json`), sin backend, base de datos, API, variables de entorno ni pruebas. Publicado en GitHub Pages por GitHub Actions (`.github/workflows/deploy.yml`: `npm ci`, `npm run build`, sube `frontend/dist`; Node 22).

## Componentes (VERIFICADO)

- `frontend/src/App.jsx`: página; define `PILARES` (4: desarrollo interno, software libre, reemplazo de servicios pagados, IA aplicada) y `CONTACTOS` (2 personas, enlaces `mailto:`); el botón de descarga llama a `window.print()`; la versión para imprimir está en `@media print` de `App.css`.
- `frontend/src/data/apps.js`: única fuente del listado, 13 objetos con `nombre`, `simple` y `detallada` (el último es este mismo catálogo).
- `frontend/src/components/FichaDialog.jsx`: diálogo con la ficha ampliada. `Icons.jsx`: iconos (descarga, cierre, correo, flecha).
- `frontend/vite.config.js`: `base: '/coipo_repositorio/'`, necesario para Pages.
- `.github/workflows/readme.yml`: llama al generador de README de la flota (`Sud-Austral/coipo_aireadme`, versión v1).

## Flujo de datos

`apps.js` -> `App.jsx` (tarjetas) -> `FichaDialog` (detalle). Sin llamadas de red en tiempo de ejecución.

## Decisiones (reglas escritas en `CLAUDE.md`)

Tres datos por aplicación; sin enlaces de acceso ni capturas; sin analítica; sin logo de CONAF ni Forestín; modo oscuro fijo con color `oklch()`; animaciones con `animation-timeline` siempre dentro de `@supports` y `prefers-reduced-motion: no-preference`.

## Estado y pendientes

Catálogo implementado en `main`. Pendientes: los de `00-PROBLEMA.md` (validación de contenido, crecimiento del catálogo) y comprobar manualmente accesibilidad AA y el PDF (no lo comprobé). `insumos/MANIFIESTO.yaml` conserva marcas `[PENDIENTE]` y `[VERIFICAR]` sobre datos personales de los archivos de contenido (los correos de contacto son públicos por decisión explícita según `CLAUDE.md`).
