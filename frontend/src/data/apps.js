// Catálogo de aplicaciones COIPO.
//
// Fuente: INSUMO/documento_web.md. Por regla del proyecto, cada aplicación tiene
// exactamente tres datos: nombre, descripción simple y descripción detallada.
// No agregar campos (estado, gerencia, tecnología, enlace) sin autorización.
//
// Para sumar una aplicación: agregar un objeto a este arreglo. Nada más.

export const apps = [
  {
    nombre: 'coipo_prensa2',
    simple:
      'Monitor de prensa que muestra las últimas noticias de medios chilenos donde se menciona a CONAF.',
    detallada:
      'Reemplaza el boletín de prensa diario que CONAF recibía del servicio pagado ConectaMedia. Muestra las últimas ~100 noticias de medios chilenos con presencia web que mencionan "CONAF" o "Corporación Nacional Forestal", organizadas por tipo de medio con el formato del boletín antiguo: titular con enlace directo a la nota original, fecha y extracto con la mención destacada. Se actualiza automáticamente con una latencia máxima de una hora (lista cada día a las 8:00 para su revisión por SECOM, la Gerencia de Comunicaciones) e incluye descarga en CSV de las noticias visibles.',
  },
  {
    nombre: 'chat_botnormativa',
    simple:
      'Chatbot con inteligencia artificial para consultar la normativa de CONAF en lenguaje natural.',
    detallada:
      'Asistente basado en RAG (Retrieval-Augmented Generation) que democratiza el acceso a más de 2.000 normativas de CONAF. Funcionarios y usuarios externos formulan preguntas en lenguaje natural y reciben respuestas precisas con citas a los documentos normativos de origen, sin necesidad de conocer de antemano qué norma buscar.',
  },
  {
    nombre: 'dendroenergia',
    simple:
      'Plataforma de reporte, monitoreo y gestión del programa de Dendroenergía de CONAF.',
    detallada:
      'Plataforma web de la Gerencia de Bosques y Cambio Climático (Unidad de Dendroenergía) que sistematiza la información levantada en terreno por profesionales que atienden a productores y propietarios forestales de biocombustibles sólidos (leña, carbón vegetal, pellet) y otros productos forestales (OPF). Mantiene las funcionalidades del módulo Dendroenergía de la plataforma SIGEFOR actualmente en operación; es 100% web, multiusuario y construida íntegramente con software open source.',
  },
  {
    nombre: 'evaluacion_prioritaria',
    simple:
      'Hoja de vida de los proyectos que se tramitan ante CONAF, con priorización de evaluaciones por vencimiento de plazos legales.',
    detallada:
      'Aplicación de la Oficina Provincial Santiago que registra el ciclo completo de cada proyecto que se relaciona con la Corporación: consulta de pertinencia, evaluación en el SEIA (pronunciamientos y Permisos Ambientales Sectoriales de competencia CONAF) y tramitación sectorial de planes de manejo y autorizaciones de corta, con estados y plazos por tipo de solicitud. Prioriza las evaluaciones pendientes según el vencimiento de su plazo legal. Nace de digitalizar y ampliar la antigua "Planilla de Ingresos" en Excel.',
  },
  {
    nombre: 'interno_saff',
    simple:
      'Panel de analítica interna con los datos de tramitación del sistema SAFF.',
    detallada:
      'Panel interno que visualiza los datos del Sistema de Administración Forestal en vistas operativas para analistas, jefes regionales y directivos nacionales: tabla de solicitudes filtrable con tiempos de tramitación comparados contra el plazo legal de cada tipo de trámite, mapa interactivo de Chile por región, rankings de evaluadores técnicos y abogados, vista de fiscalizadores y estadísticas generales, con análisis asistido por IA y exportación a Excel y PDF.',
  },
  {
    nombre: 'avion',
    simple:
      'Visor en tiempo casi real de la posición de las aeronaves de CONAF que combaten incendios forestales.',
    detallada:
      'Visor táctico web de la flota aérea de CONAF: muestra en tiempo casi real la posición de helicópteros y aviones de combate de incendios forestales, su estado (volando, emitiendo en tierra o detenida), la frescura de sus datos y la trayectoria de las últimas horas. Los datos provienen de la plataforma Nexe mediante el estándar AFF JSON (Automated Flight Following). Está dirigido a operadores de centrales de coordinación (CENCO/CENCOR) y analistas de la Gerencia de Protección contra Incendios Forestales.',
  },
  {
    nombre: 'iam',
    simple:
      'Servicio central de identidad y autenticación para las aplicaciones del ecosistema COIPO.',
    detallada:
      'Gestiona los usuarios y las sesiones del ecosistema de aplicaciones: emite y valida tokens JWT que las demás apps usan para autenticar a sus usuarios, de modo que el login se resuelve una sola vez y no se duplican cuentas ni contraseñas en cada aplicación. Incluye almacenamiento seguro de credenciales con bcrypt y un flujo de intercambio de tokens del lado del servidor al estilo OAuth 2.0.',
  },
  {
    nombre: 'usuario',
    simple:
      'Aplicación de prueba: plantilla base para nuevas apps integradas con el servicio de identidad IAM.',
    detallada:
      'Sirve como plantilla estándar (Base App) y banco de pruebas del patrón técnico del ecosistema: frontend React y backend FastAPI con intercambio de tokens OAuth 2.0 gestionado en el servidor contra el servicio de identidad COIPO IAM, y configuración dinámica del frontend obtenida desde el backend. Se usa para validar el pipeline de despliegue y la integración de identidad antes de replicarlos en aplicaciones reales.',
  },
  {
    nombre: 'entrega_planta',
    simple:
      'Sistema de gestión de solicitudes y entregas de plantas del Programa de Arborización de CONAF.',
    detallada:
      'Centraliza el ciclo completo de las solicitudes de plantas del Programa de Arborización, reemplazando formularios de Google y planillas Excel descentralizadas: ingreso de solicitudes por los solicitantes, revisión y asignación por encargados de vivero, control de stock, consolidación nacional y administración, con roles diferenciados y trazabilidad integral de cada entrega. Atiende del orden de 1.800 solicitudes anuales en las 18 regiones administrativas y unos 38 viveros.',
  },
  {
    nombre: 'reserva_huesped',
    simple:
      'Sistema de reservas de la Red de Casas de Huéspedes y Veraneo del Servicio de Bienestar de CONAF.',
    detallada:
      'Permite gestionar las reservas de los inmuebles del Servicio de Bienestar: casas de huéspedes con tarifa por persona/noche y casas de veraneo con tarifa fija, considerando tarifas diferenciadas según el motivo de la estadía, disponibilidad, proceso de asignación y cobro (incluido el descuento por planilla). Actualmente en fase de maqueta funcional del frontend en validación con Bienestar; el backend se construye en una fase posterior.',
  },
  {
    nombre: 'academia',
    simple: 'Plataforma de cursos e-learning institucional de CONAF (Moodle).',
    detallada:
      'Moodle institucional de CONAF migrado desde el hosting del proveedor externo Lazzos (campus.conaf.cl) a infraestructura propia bajo academia.conaf.cl, por encargo de la Dirección Ejecutiva. Conserva los cursos, usuarios y contenidos existentes de la plataforma en producción; la migración incluye la reescritura de los enlaces internos al dominio nuevo.',
  },
  {
    nombre: 'archivo',
    simple: 'Servidor de archivos centralizado de CONAF, compatible con la API S3.',
    detallada:
      'Almacenamiento de objetos self-hosted sobre MinIO donde cualquier aplicación del ecosistema guarda sus archivos mediante la API S3 estándar, con credenciales propias acotadas a su propio bucket. Es agnóstico de las apps que lo consumen: no conoce sus esquemas ni sus reglas de negocio, y dar de alta una aplicación nueva es solo una operación de administración (crear bucket y credenciales), no un cambio de código.',
  },
  {
    nombre: 'coipo_repositorio',
    simple:
      'Catálogo web de las aplicaciones desarrolladas por la Unidad de Información y Análisis de CONAF.',
    detallada:
      'Reúne en un solo lugar las aplicaciones del ecosistema COIPO, con una ficha por cada una que explica qué hace, a quién atiende y qué problema resuelve. Nace de que hasta ahora cada aplicación se entregaba directamente a la unidad que la había solicitado, sin que existiera ningún lugar donde consultar qué se ha construido. Está dirigido a las jefaturas de CONAF y a cualquier persona, dentro o fuera de la Corporación, que quiera conocer el trabajo de la unidad. Es un sitio estático sin cuentas ni datos personales, y permite descargar el catálogo completo en PDF.',
  },
]
