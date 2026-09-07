# Que se construyo

## Advertencia sobre la densidad de este documento

Normalmente este es el documento con mas citas, porque el codigo es la
solucion. Aqui no. El repositorio tiene veinticinco archivos, de los cuales
seis son codigo de la aplicacion. El analizador no detecto ninguna ruta de
API, ninguna tabla de base de datos, ninguna variable de entorno y ninguna
senal de capacidad. Este documento se queda corto porque la evidencia es
corta, y eso tambien es informacion: significa que casi todo lo que este
sistema hace hay que preguntarselo a una persona.

## Que hace el sistema

Presenta un listado de aplicaciones agrupadas y permite abrir la ficha de
cada una. La agrupacion la fija el componente principal en dos conjuntos,
PILARES y CONTACTOS [frontend/src/App.jsx]; el contenido de ambos vive en un
unico archivo de datos [frontend/src/data/apps.js]; y la ficha ampliada la
resuelve un dialogo [frontend/src/components/FichaDialog.jsx].

Permite ademas dos salidas hacia afuera desde cada ficha: descargar algo y
escribir un correo. Se deduce del conjunto de iconos disponibles, que es de
cuatro y solo cuatro: descarga, cierre, correo y flecha
[frontend/src/components/Icons.jsx]. [INFERIDO] Un icono no prueba que la
accion funcione, solo que se previo.

## Capacidades, una por una

**Listar y agrupar.** Dos agrupaciones declaradas en el componente principal
[frontend/src/App.jsx], sobre el contenido de un archivo unico
[frontend/src/data/apps.js].

**Abrir el detalle de un elemento.** Un dialogo dedicado
[frontend/src/components/FichaDialog.jsx], con su icono de cierre
[frontend/src/components/Icons.jsx].

**Publicarse sola.** Hay un flujo de publicacion automatica
[.github/workflows/deploy.yml] y otro que regenera el README
[.github/workflows/readme.yml]. El README actual tiene una sola linea, el
nombre del repositorio [README.md].

**Revisarse sola.** Hay reglas de revision estatica declaradas
[frontend/.oxlintrc.json] y un comando que las ejecuta
[frontend/package.json:9].

## Roles: quien ve que

No hay roles. El analizador no detecto ningun guard, ningun decorador de
autorizacion, ninguna tabla de permisos, ningun inicio de sesion, ninguna
variable de entorno y ninguna nocion de usuario en las veinticinco rutas del
repositorio.

[INFERIDO] La aplicacion es de solo lectura para quien la abre: no hay
formulario detectado, no hay llamada de red y no hay nada que persistir.

[PENDIENTE] Quien debe poder ver este listado y si esta destinado a
publicarse abiertamente.

## De donde salen los datos

[INFERIDO] De un solo archivo escrito a mano [frontend/src/data/apps.js]. No
hay base de datos, no hay API, no hay archivo semilla, no hay llamada de red
y no hay importador. Todo lo que la pagina muestra esta escrito en ese
archivo o en el componente principal [frontend/src/App.jsx].

[INFERIDO] Ese archivo describe sistemas de terceros: menciona por nombre al
menos una tecnologia de servidor que este repositorio no usa
[frontend/src/data/apps.js:64]. Es una descripcion escrita, no una
integracion.

[INFERIDO] Hubo dos documentos de insumo que quedaron versionados junto al
codigo [INSUMO/documento_web.md], [INSUMO/ui_ux.md].

[PENDIENTE] Quien es dueno del contenido de ese archivo: quien decide que
aplicacion entra al listado, quien redacta su ficha y quien la actualiza
cuando cambia.

## Que NO hace

Solo ausencias que el analizador busco de forma exhaustiva.

[INFERIDO] No existe ningun endpoint: el analizador no detecto ninguna ruta
de servidor ni ninguna llamada de red del cliente en todo el repositorio.

[INFERIDO] No existe ninguna tabla de base de datos declarada: el analizador
no detecto ninguna.

[INFERIDO] No existe ninguna variable de entorno: el analizador no detecto
ninguna, ni siquiera una ruta base de publicacion.

[INFERIDO] No hay ninguna prueba automatizada: el manifiesto declara cuatro
comandos, y ninguno es de prueba [frontend/package.json:7],
[frontend/package.json:8], [frontend/package.json:9],
[frontend/package.json:10]. Tampoco hay dependencia de pruebas entre las
siete declaradas [frontend/package.json:13] a
[frontend/package.json:19].

[INFERIDO] Cuatro tecnologias aparecen nombradas en textos del repositorio
sin estar declaradas en ningun manifiesto ni importadas en ningun archivo.
Dos de esas menciones estan en un documento de insumo
[INSUMO/ui_ux.md:181], [INSUMO/ui_ux.md:356] y otra en el archivo de datos
[frontend/src/data/apps.js:64]. Nombrar no es usar: este proyecto no usa
ninguna de ellas.

## Iteraciones

[INFERIDO] Hubo al menos una ronda de ajuste visual posterior a la
construccion inicial: existe un documento dedicado a ella
[mejora_visual.md], separado del de requisitos [REQUISITOS.md]. No hay
CHANGELOG, ni tags detectados, ni migraciones. [PENDIENTE] Que se cambio y a
peticion de quien.

## Nota sobre la calidad de esta reconstruccion

Este es el caso limite del ejercicio: un repositorio con tan poca evidencia
que los tres documentos salen casi enteros en [PENDIENTE]. Se escriben igual,
porque decir que el analizador no ve nada es en si mismo un dato util para
quien tenga que levantar esto con personas.
