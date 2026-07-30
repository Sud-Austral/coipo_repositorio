import { useState } from 'react'
import { apps } from './data/apps.js'
import FichaDialog from './components/FichaDialog.jsx'
import { IconArrow, IconDownload, IconMail } from './components/Icons.jsx'
import './App.css'

const PILARES = [
  {
    titulo: 'Desarrollo interno',
    texto:
      'Construimos las herramientas dentro de la Corporación, en vez de comprarlas. Quien programa entiende el problema forestal que hay detrás.',
  },
  {
    titulo: 'Software libre',
    texto:
      'Todo el ecosistema se levanta sobre tecnología abierta. Sin licencias que renovar ni dependencia de un proveedor único.',
  },
  {
    titulo: 'Reemplazo de servicios pagados',
    texto:
      'Varias de estas aplicaciones sustituyen servicios que antes se contrataban afuera, con el mismo resultado y sin costo recurrente.',
  },
  {
    titulo: 'Inteligencia artificial aplicada',
    texto:
      'Usamos IA donde resuelve algo concreto: consultar 2.000 normativas en lenguaje natural o analizar tiempos de tramitación.',
  },
]

const CONTACTOS = [
  { nombre: 'Luis Monsalve', correo: 'luis.monsalve@conaf.cl' },
  { nombre: 'Rodrigo Parra', correo: 'rodrigo.parra@conaf.cl' },
]

function App() {
  const [seleccionada, setSeleccionada] = useState(null)

  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>

      <header className="topbar">
        <div className="wrap topbar__inner">
          <span className="marca">
            <span className="marca__nombre">COIPO</span>
            <span className="marca__sep" aria-hidden="true" />
            <span className="marca__unidad">
              Unidad de Información y Análisis&nbsp;— CONAF
            </span>
          </span>
          <nav aria-label="Secciones del sitio" className="topnav">
            <a href="#catalogo">Aplicaciones</a>
            <a href="#unidad">Quiénes somos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main id="contenido">
        <section className="hero">
          <div className="wrap hero__inner">
            <p className="eyebrow">Catálogo de aplicaciones</p>
            <h1 className="hero__titulo">
              El software que CONAF construye
              <span className="hero__titulo-acento"> puertas adentro</span>
            </h1>
            <p className="hero__bajada">
              COIPO es el ecosistema de aplicaciones que desarrolla la Unidad de
              Información y Análisis. Herramientas propias que reemplazan planillas,
              formularios dispersos y servicios contratados afuera.
            </p>

            <dl className="cifras">
              <div className="cifra">
                <dt>Aplicaciones</dt>
                <dd>{apps.length}</dd>
              </div>
              <div className="cifra">
                <dt>Personas en la unidad</dt>
                <dd>3</dd>
              </div>
              <div className="cifra">
                <dt>Software libre</dt>
                <dd>100%</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="catalogo" className="seccion" aria-labelledby="catalogo-titulo">
          <div className="wrap">
            <div className="seccion__head">
              <div>
                <p className="eyebrow">El catálogo</p>
                <h2 id="catalogo-titulo">Aplicaciones</h2>
              </div>
              <button
                type="button"
                className="boton boton--secundario"
                onClick={() => window.print()}
              >
                <IconDownload width="18" height="18" />
                Descargar en PDF
              </button>
            </div>

            <p className="seccion__intro">
              Cada tarjeta abre una ficha con el detalle de qué resuelve la aplicación
              y a quién atiende.
            </p>

            <ul className="grilla">
              {apps.map((app) => (
                <li key={app.nombre}>
                  <article className="tarjeta">
                    <h3 className="tarjeta__nombre">
                      <button
                        type="button"
                        className="tarjeta__trigger"
                        onClick={() => setSeleccionada(app)}
                      >
                        {app.nombre}
                      </button>
                    </h3>
                    <p className="tarjeta__simple">{app.simple}</p>
                    <span className="tarjeta__pie" aria-hidden="true">
                      Ver ficha
                      <IconArrow width="16" height="16" />
                    </span>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="unidad" className="seccion seccion--alt" aria-labelledby="unidad-titulo">
          <div className="wrap">
            <p className="eyebrow">La unidad</p>
            <h2 id="unidad-titulo">Quiénes somos</h2>
            <p className="seccion__intro seccion__intro--ancha">
              La Unidad de Información y Análisis depende de la Secretaría de Dirección
              Ejecutiva de CONAF. Somos tres personas y desarrollamos, mantenemos y
              operamos las aplicaciones de este catálogo.
            </p>

            <ul className="pilares">
              {PILARES.map((pilar) => (
                <li key={pilar.titulo} className="pilar">
                  <h3 className="pilar__titulo">{pilar.titulo}</h3>
                  <p className="pilar__texto">{pilar.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contacto" className="seccion" aria-labelledby="contacto-titulo">
          <div className="wrap">
            <p className="eyebrow">Hablemos</p>
            <h2 id="contacto-titulo">Contacto</h2>
            <p className="seccion__intro seccion__intro--ancha">
              ¿Su unidad necesita una herramienta, o alguna de estas aplicaciones le
              sirve? Escríbanos.
            </p>

            <ul className="contactos">
              {CONTACTOS.map((persona) => (
                <li key={persona.correo}>
                  <a className="contacto" href={`mailto:${persona.correo}`}>
                    <IconMail width="20" height="20" />
                    <span>
                      <strong>{persona.nombre}</strong>
                      <span className="contacto__correo">{persona.correo}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="pie">
        <div className="wrap pie__inner">
          <p>
            <strong>COIPO</strong> — Unidad de Información y Análisis
            <br />
            Secretaría de Dirección Ejecutiva, Corporación Nacional Forestal
          </p>
        </div>
      </footer>

      <FichaDialog app={seleccionada} onClose={() => setSeleccionada(null)} />

      {/*
        Versión para imprimir. Solo se muestra en @media print y contiene
        únicamente las fichas, sin encabezado, quiénes somos ni contacto.
      */}
      <section className="impresion" aria-hidden="true">
        <h2 className="impresion__titulo">
          COIPO — Catálogo de aplicaciones
        </h2>
        {apps.map((app) => (
          <article key={app.nombre} className="impresion__ficha">
            <h3>{app.nombre}</h3>
            <p className="impresion__simple">{app.simple}</p>
            <p>{app.detallada}</p>
          </article>
        ))}
      </section>
    </>
  )
}

export default App
