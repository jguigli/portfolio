import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "./src",
    },
  },
  // Configuration pour GitHub Pages
  // Utilisez '/portfolio/' si votre repo s'appelle 'portfolio', sinon utilisez le nom de votre repo
  base: mode === 'production' ? '/portfolio/' : '/',
}))
