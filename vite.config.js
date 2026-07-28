import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync, mkdirSync, existsSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-404',
      closeBundle() {
        copyFileSync('dist/index.html', 'dist/404.html')

        const routes = ['privacy', 'terms', 'links']
        for (const route of routes) {
          const dir = `dist/${route}`
          if (!existsSync(dir)) mkdirSync(dir)
          copyFileSync('dist/index.html', `${dir}/index.html`)
        }
      },
    },
  ],
  base: '/',
})
