export const SITE_URL = 'https://diariofit.app'
export const SITE_NAME = 'Diário Fit'

const PRIVACY_CONTENT = `
<div class="seo-fallback">
  <header>
    <h1>Política de Privacidade — Diário Fit</h1>
    <p>Esta Política de Privacidade explica como o Diário Fit coleta, usa e protege as informações dos usuários. Última atualização: 22 de maio de 2026.</p>
  </header>
  <section>
    <h2>Princípios de privacidade do Diário Fit</h2>
    <p>Todos os dados de treinos, refeições, conquistas e perfil ficam armazenados localmente no dispositivo. O Diário Fit não mantém servidores para armazenamento de dados pessoais.</p>
    <ul>
      <li>Dados de perfil: nome, peso, altura, idade, sexo, nível de atividade e meta calórica ficam apenas no seu dispositivo.</li>
      <li>Dados de uso local: registros de treinos, refeições e conquistas ficam armazenados localmente.</li>
      <li>Firebase Remote Config: usado apenas para verificar a versão mínima do app, sem coletar dados pessoais identificáveis.</li>
      <li>Google AdMob: a exibição de anúncios pode coletar dados anônimos de publicidade conforme a política do Google.</li>
    </ul>
    <p>O Diário Fit não vende, aluga ou compartilha seus dados pessoais com terceiros. Para dúvidas, entre em contato pelo e-mail privacy@diariofit.app.</p>
  </section>
</div>
`

const TERMS_CONTENT = `
<div class="seo-fallback">
  <header>
    <h1>Termos de Uso — Diário Fit</h1>
    <p>Estes Termos de Uso regem o uso do aplicativo Diário Fit. Última atualização: 22 de maio de 2026.</p>
  </header>
  <section>
    <h2>Resumo dos termos</h2>
    <p>Ao utilizar o Diário Fit, você concorda em fornecer informações precisas, usar o aplicativo para fins pessoais e não comerciais, e não tentar modificar ou burlar o funcionamento do aplicativo.</p>
    <ul>
      <li>O Diário Fit é uma ferramenta de registro e acompanhamento e não substitui orientação médica ou profissional de saúde.</li>
      <li>Os cálculos de calorias e gasto energético são estimativas baseadas em fórmulas científicas (ACSM).</li>
      <li>O aplicativo é mantido gratuitamente pela exibição de anúncios do Google AdMob.</li>
    </ul>
    <p>Para dúvidas sobre estes termos, entre em contato pelo e-mail contact@diariofit.app.</p>
  </section>
</div>
`

const LINKS_CONTENT = `
<div class="seo-fallback">
  <header>
    <h1>Baixar Diário Fit</h1>
    <p>Links oficiais do Diário Fit, o app gratuito de diário de treino e nutrição com base TACO, cálculo de calorias por METs e gamificação.</p>
  </header>
  <section>
    <h2>Downloads e contato</h2>
    <ul>
      <li><a href="https://play.google.com/store/apps/details?id=br.com.diariofit">Baixar Diário Fit na Google Play Store</a> — disponível para Android.</li>
      <li>App Store (iOS) — versão em breve.</li>
      <li><a href="https://wa.me/5512981539092">Fale conosco pelo WhatsApp</a> — suporte e dúvidas.</li>
    </ul>
    <p>O Diário Fit é gratuito e permite registrar treinos, monitorar a alimentação e acompanhar sua evolução com gamificação.</p>
  </section>
</div>
`

function pageSchema(url, name, description) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    url,
    description,
    inLanguage: 'pt-BR',
    isPartOf: {
      '@type': 'WebSite',
      url: SITE_URL,
      name: SITE_NAME,
    },
  }
}

function breadcrumbSchema(url, label) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: label, item: url },
    ],
  }
}

export const ROUTES = {
  privacy: {
    url: `${SITE_URL}/privacy`,
    title: 'Política de Privacidade — Diário Fit',
    description:
      'Saiba como o Diário Fit coleta, usa e protege seus dados. Seus dados de treino, nutrição e perfil ficam armazenados apenas no seu dispositivo.',
    staticContent: PRIVACY_CONTENT,
    schemas: [
      pageSchema(
        `${SITE_URL}/privacy`,
        'Política de Privacidade — Diário Fit',
        'Saiba como o Diário Fit coleta, usa e protege seus dados. Seus dados de treino, nutrição e perfil ficam armazenados apenas no seu dispositivo.',
      ),
      breadcrumbSchema(`${SITE_URL}/privacy`, 'Política de Privacidade'),
    ],
  },
  terms: {
    url: `${SITE_URL}/terms`,
    title: 'Termos de Uso — Diário Fit',
    description:
      'Conheça os Termos de Uso do Diário Fit: regras de uso, responsabilidades, propriedade intelectual e limitação de responsabilidade do aplicativo.',
    staticContent: TERMS_CONTENT,
    schemas: [
      pageSchema(
        `${SITE_URL}/terms`,
        'Termos de Uso — Diário Fit',
        'Conheça os Termos de Uso do Diário Fit: regras de uso, responsabilidades, propriedade intelectual e limitação de responsabilidade do aplicativo.',
      ),
      breadcrumbSchema(`${SITE_URL}/terms`, 'Termos de Uso'),
    ],
  },
  links: {
    url: `${SITE_URL}/links`,
    title: 'Baixar Diário Fit — Links Oficiais',
    description:
      'Baixe o Diário Fit na Google Play Store e fale conosco pelo WhatsApp. Links oficiais do app gratuito de treino e nutrição com gamificação.',
    staticContent: LINKS_CONTENT,
    schemas: [
      pageSchema(
        `${SITE_URL}/links`,
        'Baixar Diário Fit — Links Oficiais',
        'Baixe o Diário Fit na Google Play Store e fale conosco pelo WhatsApp. Links oficiais do app gratuito de treino e nutrição com gamificação.',
      ),
    ],
  },
}

function escapeJsonLd(value) {
  return JSON.stringify(value, null, 2).replace(/</g, '\\u003c')
}

export function buildRouteHtml(baseHtml, routeKey) {
  const route = ROUTES[routeKey]
  if (!route) throw new Error(`Unknown route: ${routeKey}`)

  let html = baseHtml
    .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${route.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, () => `<meta name="description" content="${route.description}"`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, () => `<link rel="canonical" href="${route.url}"`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, () => `<meta property="og:url" content="${route.url}"`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, () => `<meta property="og:title" content="${route.title}"`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, () => `<meta property="og:description" content="${route.description}"`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, () => `<meta name="twitter:title" content="${route.title}"`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, () => `<meta name="twitter:description" content="${route.description}"`)
    .replace(/<script type="application\/ld\+json" id="seo-schema">[\s\S]*?<\/script>/, () => `<script type="application/ld+json" id="seo-schema">\n${escapeJsonLd(route.schemas)}\n    </script>`)
    .replace(/<!--seo-content-->[\s\S]*?<!--\/seo-content-->/, () => `<!--seo-content-->\n${route.staticContent}\n      <!--/seo-content-->`)

  return html
}
