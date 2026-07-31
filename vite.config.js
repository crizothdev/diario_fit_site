import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { aeoVitePlugin } from 'aeo.js/vite'
import { copyFileSync, mkdirSync, existsSync, readFileSync, writeFileSync } from 'fs'
import { ROUTES, buildRouteHtml } from './seo.mjs'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'generate-route-html',
      writeBundle() {
        copyFileSync('dist/index.html', 'dist/404.html')

        for (const routeKey of Object.keys(ROUTES)) {
          const dir = `dist/${routeKey}`
          if (!existsSync(dir)) mkdirSync(dir)
          const baseHtml = readFileSync('dist/index.html', 'utf-8')
          writeFileSync(`${dir}/index.html`, buildRouteHtml(baseHtml, routeKey), 'utf-8')
        }
      },
    },
    aeoVitePlugin({
      title: 'Diário Fit — Treino, Nutrição e Evolução em um App',
      description:
        'O Diário Fit é o app gratuito de diário de treino e nutrição com base TACO, cálculo de calorias por METs e gamificação. Controle sua performance em um só lugar.',
      url: 'https://diariofit.app',
      contentDir: 'content',
      outDir: 'dist',
      generators: {
        robotsTxt: true,
        llmsTxt: true,
        llmsFullTxt: true,
        rawMarkdown: true,
        manifest: true,
        sitemap: true,
        aiIndex: true,
        schema: false,
      },
      schema: { enabled: false },
      og: { enabled: false },
      widget: { enabled: false },
    }),
  ],
  base: '/',
})
