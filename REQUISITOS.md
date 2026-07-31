# Levantamiento de requisitos — Catálogo web COIPO

**Proyecto:** `coipo_repositorio`
**Solicitante:** Jefe de la Unidad de Información y Análisis (UIA), CONAF
**Levantado con:** Luis Monsalve
**Fecha:** 30 de julio de 2026
**Plazo de publicación:** hoy, 30 de julio de 2026

---

## 1. Resumen ejecutivo


Sitio web público y estático que expone en un solo lugar el catálogo de las 13 aplicaciones
desarrolladas por la Unidad de Información y Análisis de CONAF bajo la marca COIPO. Es una
**vitrina institucional**: su objetivo es mostrar hacia afuera —jefaturas de CONAF, otros
servicios públicos y público general— qué ha construido la unidad, no servir de puerta de
acceso a las aplicaciones. Cada aplicación se presenta con una tarjeta breve y una ficha
ampliada. No tiene cuentas de usuario, ni formularios, ni datos personales, ni conexión con
ningún otro sistema.

---

## 2. Usuarios y sus capacidades

No hay autenticación: todos los visitantes ven exactamente lo mismo. La única distinción real
es entre quien **lee** y quien **mantiene** el contenido.

| Usuario | Prioridad | Qué puede hacer |
|---|---|---|
| Jefaturas y Dirección Ejecutiva de CONAF | **1 (principal)** | Ver el catálogo, abrir fichas, descargar el PDF, leer quiénes somos y contactos |
| Funcionarios de otras gerencias de CONAF | 2 | Lo mismo |
| Otros servicios públicos (ministerios, municipios, SEIA) | 3 | Lo mismo |
| Ciudadanía y prensa llegando por buscador | 4 | Lo mismo |
| Equipos de informática del Estado | 5 | Lo mismo |
| Postulantes y proveedores | 6 | Lo mismo |
| **Luis Monsalve (mantenedor)** | — | Agregar/editar/eliminar aplicaciones editando el repositorio y haciendo push |

**Volumen esperado:** no cuantificado. Irrelevante para el dimensionamiento: GitHub Pages
absorbe cualquier tráfico que este sitio vaya a tener.

---

## 3. Funcionalidades en alcance

### Crítico — sin esto no se publica

| # | Funcionalidad | Detalle |
|---|---|---|
| C1 | Listado de las 13 aplicaciones | Tarjeta por aplicación con nombre y descripción simple |
| C2 | Ficha ampliada por aplicación | Segundo nivel: se abre bajo demanda y muestra la descripción detallada |
| C3 | Despliegue funcionando en GitHub Pages | En `sud-austral.github.io/coipo_repositorio/`, vía GitHub Actions |
| C4 | Calidad visual profesional | Criterio explícito del solicitante: "diseño malo" es causa de rechazo |
| C5 | Funcionamiento correcto en celular | Es probable que el destinatario abra el enlace en el teléfono |

### Importante — comprometido para esta versión

| # | Funcionalidad | Detalle |
|---|---|---|
| I1 | Sección "Quiénes somos" | Qué es la UIA, de quién depende, cuántos son y qué la distingue |
| I2 | Contacto | Luis Monsalve `luis.monsalve@conaf.cl` y Rodrigo Parra `rodrigo.parra@conaf.cl`, publicados en texto plano |
| I3 | Descarga en PDF | Vía impresión del navegador; contiene **solo las 13 fichas**, sin quiénes somos ni contacto |
| I4 | Accesibilidad nivel AA | Contraste ≥4.5:1, navegación por teclado, jerarquía de encabezados, textos alternativos |
| I5 | Contenido en archivo de datos separado | Agregar una aplicación debe ser editar un archivo, no tocar el diseño |

### Deseable — si alcanza

| # | Funcionalidad |
|---|---|
| D1 | Modo oscuro según preferencia del sistema |
| D2 | Respeto a `prefers-reduced-motion` |
| D3 | Metadatos para compartir el enlace (título y descripción al pegarlo en correo o chat) |

---

## 4. Funcionalidades fuera de alcance

| Queda fuera | Por qué | ¿Para después? |
|---|---|---|
| **Enlaces para entrar a las aplicaciones** | Decisión explícita: "¿quieres entrar a la app? no por ahora". La página describe, no da acceso | Sí, cuando se decida |
| **Capturas de pantalla de las apps** | Varias muestran datos personales en pantalla (SAFF, entrega de plantas, reservas, evaluación prioritaria). Publicarlas sería una filtración | Descartado |
| **Buscador, filtros y categorías** | Con 13 tarjetas no se justifican | Sí, si el catálogo crece |
| **Dirección web propia por ficha** | El sitio recién se está publicando; no hay necesidad de compartir fichas individuales todavía | Sí, si aparece la necesidad |
| **Login, cuentas y roles** | Sitio estático sin backend | No previsto |
| **Datos extra por aplicación** (estado, gerencia, tecnología, fecha) | Regla del INSUMO: exactamente tres datos por aplicación | Sin definir |
| **Analítica de visitas** | Descartado explícitamente | No |
| **Dominio institucional `*.conaf.cl`** | Se queda en `sud-austral.github.io/coipo_repositorio` | Sin definir |
| **Uso del logo y la identidad visual de CONAF** | El sitio no está en un dominio institucional; usar la marca ahí puede leerse como uso indebido | No |
| **Cualquier referencia a Forestín** | Prohibición explícita del solicitante: ni nombre, ni imagen, ni alusión | No |

---

## 5. Integraciones requeridas

**Ninguna.** Confirmado punto por punto:

- **No** hay analítica ni rastreadores de terceros.
- **No** obtiene datos de ningún sistema (ni IAM, ni SAFF, ni ninguna API). El contenido va escrito en el repositorio.
- **No** hay ningún sitio existente que vaya a enlazar hacia esta página (ni intranet, ni conaf.cl, ni firma de correo).

Consecuencia: el sitio no tiene dependencias externas en tiempo de ejecución y no puede romperse por un servicio ajeno.

---

## 6. Restricciones técnicas confirmadas

Verificadas leyendo el repositorio y el sitio de CONAF, no supuestas.

| Restricción | Valor | Cómo se verificó |
|---|---|---|
| Alojamiento | GitHub Pages | Definido por el solicitante |
| Repositorio remoto | `github.com/Sud-Austral/coipo_repositorio` | `git remote -v` |
| Ruta de publicación | `sud-austral.github.io/coipo_repositorio/` | Se deriva del remoto |
| Framework | React 19 + Vite 8 | `frontend/package.json` |
| Linter | oxlint 1.75 | `frontend/package.json` |
| Node / npm | v22.23.1 / 10.9.8 | `node -v`, `npm -v` |
| Arquitectura | Sitio estático: sin backend, sin base de datos, sin sesiones | Consecuencia de GitHub Pages |
| Visibilidad del repositorio | Público | Requisito de GitHub Pages en plan gratuito |
| Mantenedor | Luis Monsalve, edita directo en el repositorio | Declarado |
| Presupuesto | $0 — sin licencias ni proveedores | Declarado |

### Estado real del código al momento del levantamiento

`frontend/` contiene la **plantilla por defecto de Vite + React sin modificar**: pantalla
"Get started", botón "Count is 0", logos de React y Vite, y enlaces a Discord, Bluesky y X
de la comunidad Vite. `index.html` tiene `<title>frontend</title>` y `lang="en"`. La carpeta
**no está versionada** (aparece como `??` en `git status`). No existe ninguna funcionalidad
del catálogo.

### Configuración obligatoria para que el despliegue funcione

Un sitio Vite servido desde un subdirectorio de GitHub Pages **carga en blanco** si no se
declara la ruta base. Hoy no está configurado:

1. `base: '/coipo_repositorio/'` en `frontend/vite.config.js`.
2. Workflow de GitHub Actions que compile `frontend/` y publique `dist/` en Pages.
3. Activar Pages en el repositorio con origen "GitHub Actions".

### Identidad visual

Decisión: **identidad propia de COIPO**, con el respaldo institucional como mención de texto
("Unidad de Información y Análisis — CONAF"), sin usar el logo de CONAF.

Referencia medida sobre el CSS de `conaf.cl` (útil como guía cromática, no como obligación):

| Variable en conaf.cl | Color | Contraste sobre blanco |
|---|---|---|
| `--color-primary` | `#79ac78` | 2.39:1 — **no apto para texto** |
| `--color-primary-hover` | `#518e48` | intermedio |
| `--color-primary-active` | `#34582f` | 8.13:1 — apto AAA |

### Normativa aplicable

Al no haber datos personales ni formularios, lo único exigible en la práctica es
**accesibilidad web nivel AA** conforme a la normativa de sitios web de órganos del Estado.
Instrucción del solicitante: "debe cumplir todo lo legal".

---

## 7. Criterios de aceptación de la primera versión

La versión 1 se considera aceptada cuando:

1. El sitio carga correctamente en `sud-austral.github.io/coipo_repositorio/` — **sin pantalla en blanco**.
2. El despliegue ocurre automáticamente al hacer push a `main`.
3. Se muestran las 13 aplicaciones con su nombre y descripción simple.
4. Cada aplicación abre su ficha con la descripción detallada.
5. No queda ningún rastro de la plantilla de Vite: ni logos, ni contador, ni enlaces a Discord/X/Bluesky, ni `<title>frontend</title>`, ni `lang="en"`.
6. Se ve correctamente en un teléfono, sin desbordes ni scroll horizontal.
7. El botón de descarga produce un PDF legible con las 13 fichas y sin el resto del sitio.
8. Están el "quiénes somos" y los dos correos de contacto.
9. Contraste, foco de teclado y jerarquía de encabezados cumplen AA.
10. No aparece Forestín en ninguna forma, ni el logo de CONAF.

**Fracasos inaceptables**, declarados textualmente por el solicitante:

- **Diseño malo.** La calidad visual es criterio de aceptación, no un adorno.
- **Que no despliegue en GitHub Pages.**

---

## 8. Preguntas sin respuesta

Quedaron ambiguas y requieren definición. Ninguna bloquea la versión 1.

| # | Pregunta | Por qué importa |
|---|---|---|
| P1 | ¿Hasta cuántas aplicaciones va a crecer el catálogo? | Respondido "se verá más adelante". Define cuándo hace falta buscador y filtros. Mitigado: el contenido queda en un archivo de datos aparte |
| P2 | ¿La regla del INSUMO de "exactamente tres datos" es permanente? | Si se relaja, entran estado, gerencia responsable, tecnología y enlace — y cambia el diseño de la ficha |
| P3 | ¿Cuándo se agregan los enlaces para entrar a las aplicaciones? | Hoy la vitrina no lleva a ninguna parte; es la evolución natural del sitio |
| P4 | ¿Alguien de CONAF valida el contenido antes de publicarlo? | El sitio habla en nombre de una unidad de un servicio público, en un dominio que no es institucional |
| P5 | ¿Se mantiene indefinidamente bajo la organización Sud-Austral? | Una vitrina institucional alojada bajo una organización externa se nota en la barra de direcciones |
| P6 | ¿Qué más distingue a la UIA? | Se declaró "software libre, desarrollo interno, reemplazo de servicios pagados, IA aplicada" y "todo eso y más". Falta el resto |
| P7 | ¿Quién aprueba la redacción final del "quiénes somos" y de la ficha de `coipo_repositorio`? | Las redacta Claude; falta confirmar el visto bueno |
| P8 | ¿Los dos correos personales publicados en texto plano son aceptables a largo plazo? | Se confirmó publicarlos así. Serán recolectados por robots de spam |

---

## Anexo — Las 13 aplicaciones del catálogo

Las 12 primeras provienen textualmente de [`INSUMO/documento_web.md`](INSUMO/documento_web.md).
La decimotercera es este mismo sitio, agregado por instrucción del solicitante, y su redacción
está pendiente de aprobación.

1. `coipo_prensa2` — Monitor de prensa
2. `chat_botnormativa` — Chatbot de normativa con IA
3. `dendroenergia` — Plataforma del programa de Dendroenergía
4. `evaluacion_prioritaria` — Hoja de vida de proyectos en tramitación
5. `interno_saff` — Panel de analítica del sistema SAFF
6. `avion` — Visor de la flota aérea de combate de incendios
7. `iam` — Servicio central de identidad y autenticación
8. `usuario` — Plantilla base para nuevas aplicaciones
9. `entrega_planta` — Solicitudes y entregas del Programa de Arborización
10. `reserva_huesped` — Reservas de casas de huéspedes y veraneo
11. `academia` — Plataforma Moodle institucional
12. `archivo` — Servidor de archivos compatible con S3
13. `coipo_repositorio` — **Este catálogo**
