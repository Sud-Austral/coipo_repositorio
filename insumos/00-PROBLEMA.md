# Que estaba roto, deducido de lo que se construyo

Este documento se lee hacia atras, desde lo construido hacia el problema que
lo habria originado. Aqui la cadena es especialmente debil, porque la
evidencia disponible es poca: veinticinco archivos, sin base de datos, sin
API y sin variables de entorno.

## De que trata el sistema

El contenido de la pagina vive en un unico archivo de datos
[frontend/src/data/apps.js]. La pagina lo organiza en dos agrupaciones
declaradas en el componente principal, PILARES y CONTACTOS
[frontend/src/App.jsx], y ofrece una ficha ampliada por elemento
[frontend/src/components/FichaDialog.jsx]. Los iconos disponibles son cuatro:
descarga, cierre, correo y flecha [frontend/src/components/Icons.jsx].

[INFERIDO] El sistema presenta un listado de aplicaciones agrupadas por
pilar, cada una con su ficha y su via de contacto, luego probablemente habia
un problema con saber que aplicaciones existen, de que trata cada una y a
quien preguntar por ellas. Que el archivo de datos mencione una tecnologia de
servidor [frontend/src/data/apps.js:64] refuerza que lo catalogado son
sistemas, no contenidos.

[INFERIDO] El problema incluia el contacto y no solo el inventario: hay una
agrupacion de contactos [frontend/src/App.jsx] y un icono de correo
[frontend/src/components/Icons.jsx]. [PENDIENTE] A quien se contacta y para
que.

[PENDIENTE] Que decision se tomaba mal por no tener este listado. Nada en el
codigo lo responde.

## Quien sufre el problema

[PENDIENTE]. El analizador no encontro ningun guard, ningun decorador de
autorizacion, ninguna tabla de permisos, ningun inicio de sesion ni ninguna
variable de entorno en todo el repositorio. No hay roles que nombrar con
cita.

[INFERIDO] La ausencia total de autenticacion sugiere que la audiencia no se
distingue: todos ven lo mismo. [PENDIENTE] Quienes son y si el listado esta
destinado a circular fuera de la institucion.

[PENDIENTE] Cuantas personas lo consultan.

## Como lo resolvian antes

[INFERIDO] El contenido lo escribio alguien a mano y sigue escribiendose a
mano: no hay ninguna fuente externa, ningun importador y ninguna llamada de
red en el repositorio. El listado completo esta en un archivo de codigo
[frontend/src/data/apps.js], asi que actualizarlo exige tocar el codigo y
volver a publicar [.github/workflows/deploy.yml].

[INFERIDO] Hubo material previo entregado como documento y no como dato: el
repositorio conserva dos archivos de insumo [INSUMO/documento_web.md] y
[INSUMO/ui_ux.md], el segundo mucho mas extenso que todo el codigo de la
aplicacion junta. [PENDIENTE] Quien los entrego, cuando y si siguen vigentes.

[PENDIENTE] Como se mantenia antes la lista de aplicaciones y quien la
mantenia.

## Que pasa si no se hace nada

[PENDIENTE], sin excepcion. El codigo no lo responde.

## Volumen

Los indicios dan orden de magnitud y nada mas.

[INFERIDO] El volumen es pequeno y no crece solo: todo el contenido cabe en
un archivo de unos ocho kilobytes [frontend/src/data/apps.js], no hay
paginacion, no hay busqueda detectada, no hay base de datos y no hay
indices. Un listado que se mantiene editando codigo no esta pensado para
cientos de entradas.

[PENDIENTE] Cuantas aplicaciones se espera catalogar y con que frecuencia
cambia la lista.

## Quien decide que esta terminado

[PENDIENTE], sin excepcion. Hay un archivo de requisitos en el repositorio
[REQUISITOS.md] y otro de mejoras visuales [mejora_visual.md], pero un
documento de requisitos no dice quien acepta.

## Nota sobre lo que este documento no pudo decir

Este repositorio no tiene backend, base de datos, endpoints, variables de
entorno ni pruebas. Casi todo lo anterior esta marcado [PENDIENTE] no por
descuido, sino porque el analizador efectivamente no ve nada mas. Eso es en
si mismo un resultado: quien quiera documentar este sistema tiene que
preguntarle a una persona, porque el codigo no lo sabe.
