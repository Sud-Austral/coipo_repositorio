import { useEffect, useLayoutEffect, useRef } from 'react'
import { IconClose, IconMail } from './Icons.jsx'

// Ficha ampliada de una aplicación (segundo nivel del catálogo).
//
// Usa <dialog> nativo a propósito: entrega gratis el atrapado de foco, el cierre
// con Escape y la devolución del foco al elemento que la abrió. Reimplementar eso
// a mano es la fuente habitual de fallas de accesibilidad en modales.

export default function FichaDialog({ app, onClose }) {
  const ref = useRef(null)

  // useLayoutEffect y no useEffect: la ficha debe estar abierta ANTES de que
  // la View Transition tome la instantánea del nuevo estado. Con useEffect la
  // transición captura la página sin el modal y el efecto no se ve.
  useLayoutEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (app && !dialog.open) dialog.showModal()
    if (!app && dialog.open) dialog.close()
  }, [app])

  // Bloquea el scroll del fondo mientras la ficha está abierta.
  useEffect(() => {
    if (!app) return
    const previo = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previo
    }
  }, [app])

  return (
    <dialog
      ref={ref}
      className="ficha"
      aria-labelledby="ficha-titulo"
      onClose={onClose}
      onClick={(e) => {
        // Cierra al hacer clic en el fondo, no dentro del contenido.
        if (e.target === ref.current) onClose()
      }}
    >
      {app && (
        <div className="ficha__inner">
          <div className="ficha__head">
            <p className="eyebrow">Ficha de aplicación</p>
            <button
              type="button"
              className="ficha__close"
              onClick={onClose}
              aria-label="Cerrar ficha"
            >
              <IconClose width="20" height="20" />
            </button>
          </div>

          <h2 id="ficha-titulo" className="ficha__titulo">
            {app.nombre}
          </h2>
          <p className="ficha__simple">{app.simple}</p>
          <hr className="ficha__rule" />
          <p className="ficha__detalle">{app.detallada}</p>

          <p className="ficha__accion">
            <span>¿Le sirve esta herramienta a su unidad?</span>
            <a href={`mailto:luis.monsalve@conaf.cl?subject=${encodeURIComponent(`Consulta sobre ${app.nombre}`)}`}>
              <IconMail width="18" height="18" />
              Escríbanos
            </a>
          </p>
        </div>
      )}
    </dialog>
  )
}
