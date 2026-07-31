# CLAUDE.md — coipo_repositorio

Catálogo web de las aplicaciones desarrolladas por la **Unidad de Información y Análisis (UIA)**
de CONAF, bajo la marca **COIPO**. Es una **vitrina institucional estática**: muestra qué se ha
construido, no da acceso a las aplicaciones.

El levantamiento completo de requisitos está en [REQUISITOS.md](REQUISITOS.md).
El contenido fuente de las aplicaciones está en [INSUMO/documento_web.md](INSUMO/documento_web.md).

---

## Reglas duras — no romper

Son decisiones tomadas por el solicitante, no preferencias. Si algo parece exigir romperlas,
preguntar antes de actuar.

1. **Cero referencias a Forestín.** Ni el nombre, ni imágenes, ni alusiones indirectas a la
   mascota de CONAF. Prohibición explícita.
2. **No usar el logo ni la identidad visual de CONAF.** El respaldo institucional se expresa
   solo como texto: "Unidad de Información y Análisis — CONAF". El sitio no está en un dominio
   institucional y usar la marca ahí puede leerse como uso indebido.
3. **Exactamente tres datos por aplicación:** nombre, descripción simple, descripción detallada.
   Nada más — ni estado, ni gerencia, ni tecnología, ni fecha. Regla del INSUMO.
4. **Sin enlaces para entrar a las aplicaciones.** La página describe; no lleva a ninguna parte.
5. **Sin capturas de pantalla de las aplicaciones.** Varias muestran datos personales reales
   (SAFF, entrega de plantas, reservas, evaluación prioritaria). Publicarlas sería una filtración.
6. **Sin analítica ni rastreadores de terceros.**
7. **Sin backend.** No hay login, no hay formularios que guarden datos, no hay base de datos,
   no se consume ninguna API. Es un sitio estático.
8. **Accesibilidad AA obligatoria.** Contraste ≥4.5:1 en texto, navegación completa por teclado
   con foco visible, jerarquía de encabezados sin saltos, textos alternativos. Es exigencia
   normativa para sitios de órganos del Estado, no un extra.

---

## Los dos fracasos inaceptables

Declarados textualmente por el solicitante como causa de rechazo:

- **Diseño malo.** La calidad visual es criterio de aceptación.
- **Que no despliegue en GitHub Pages.**

Cualquier cambio debe verificarse contra estos dos antes de darlo por terminado.

---

## Stack y comandos

```bash
cd frontend
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo
npm run build     # compilar a frontend/dist
npm run preview   # previsualizar lo compilado
npm run lint      # oxlint
```

| Componente | Versión |
|---|---|
| React | 19 |
| Vite | 8 |
| oxlint | 1.75 |
| Node | 22 |

---

## Despliegue

El sitio se publica en **`https://sud-austral.github.io/coipo_repositorio/`** mediante GitHub
Actions al hacer push a `main`.

**Cuidado con la ruta base.** Al servirse desde un subdirectorio, Vite necesita
`base: '/coipo_repositorio/'` en `frontend/vite.config.js`. Sin eso el sitio **carga en blanco**
—los assets se piden a la raíz del dominio y devuelven 404—. Es el error más fácil de cometer
aquí y coincide con uno de los dos fracasos inaceptables.

Si se cambia el nombre del repositorio o la organización, hay que actualizar `base`.

---

## Estructura del contenido

Las aplicaciones viven en un **archivo de datos separado**, no incrustadas en los componentes.
Agregar una aplicación al catálogo debe ser editar ese archivo y nada más.

Al agregar o editar una aplicación, respetar el tono del INSUMO:

- **Descripción simple:** una sola frase, para la tarjeta. Dice qué es y para quién.
- **Descripción detallada:** un párrafo, para la ficha. Explica qué problema resuelve, a quién
  atiende y qué reemplaza. Sin jerga innecesaria; el lector es una jefatura, no un desarrollador.

---

## Sistema visual

El sitio está **comprometido con el modo oscuro**: no invierte según la preferencia del
sistema. Color en `oklch()` para que los degradados y los estados no se ensucien al
interpolar. Tipografía del sistema para texto y monoespaciada para nombres de aplicación,
índices y etiquetas.

El movimiento va ligado al scroll con `animation-timeline` (`scroll()` y `view()`), no con
listeners de JavaScript: corre en el compositor y no toca el hilo principal.

**Regla que no se puede saltar:** toda animación con `animation-timeline` debe ir dentro de
`@supports (animation-timeline: …)` y de `@media (prefers-reduced-motion: no-preference)`.
Sin el `@supports`, un navegador que no soporte la propiedad la ignora, la animación corre
con duración 0 y **los elementos quedan en su estado inicial: invisibles**.

Al tocar colores, verificar contraste midiendo el color renderizado —`oklch` hay que
resolverlo a sRGB para calcular el ratio—, no estimándolo a ojo.

## Impresión y PDF

La descarga en PDF usa la impresión del navegador. El PDF debe contener **solo las 13 fichas**
—nombre, descripción simple y descripción detallada—, sin encabezado, sin "quiénes somos",
sin contacto y sin controles de la interfaz. Al tocar CSS de impresión, verificar el resultado
generando el PDF y mirándolo, no razonando sobre las reglas.

---

## Contactos publicados

- Luis Monsalve — `luis.monsalve@conaf.cl`
- Rodrigo Parra — `rodrigo.parra@conaf.cl`

Van en texto plano por decisión explícita. **Ojo:** en el levantamiento apareció escrito
`rogrigo.parra@conaf.cl`; la forma correcta es **`rodrigo.parra@conaf.cl`**.

---

## Contexto institucional

- **UIA** — Unidad de Información y Análisis. Depende de la Secretaría de Dirección Ejecutiva
  de CONAF. Son 3 personas.
- **COIPO** — marca del ecosistema de aplicaciones. El nombre viene de la especie del coipo.
  *(La conexión con la mascota institucional no se menciona en ninguna parte del sitio — ver
  regla dura 1.)*
- **Ideas fuerza de la unidad:** software libre, desarrollo interno en vez de comprar,
  reemplazo de servicios pagados, IA aplicada.
- **Audiencia por prioridad:** jefaturas y Dirección Ejecutiva → funcionarios de otras
  gerencias → otros servicios públicos → ciudadanía y prensa → equipos de informática del
  Estado → postulantes y proveedores.
