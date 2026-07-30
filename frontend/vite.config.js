import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// El sitio se sirve desde un subdirectorio de GitHub Pages
// (sud-austral.github.io/coipo_repositorio/), no desde la raíz del dominio.
// Sin esta ruta base los assets se piden a "/" y la página carga en blanco.
// Si cambia el nombre del repositorio, hay que actualizar este valor.
export default defineConfig({
  base: '/coipo_repositorio/',
  plugins: [react()],
})
