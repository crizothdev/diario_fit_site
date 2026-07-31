import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import headerBgImg from '../assets/header_bg.jpeg'
import logoImg from '../assets/foreground.png'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=br.com.diariofit'
const WHATSAPP_URL = 'https://wa.me/5512981539092'
const PLANS_API = 'https://api-dev.diariofit.app.br/plan/active'

const stats = [
  { icon: 'restaurant_menu', value: '189+', label: 'Alimentos TACO' },
  { icon: 'exercise', value: '7', label: 'Templates Treino' },
  { icon: 'military_tech', value: '5', label: 'Níveis Ranking' },
  { icon: 'verified_user', value: '100%', label: 'Grátis Atletas' },
]

const planTabs = [
  { key: 'improve', label: 'Quero melhorar meu treino', icon: 'fitness_center' },
  { key: 'academy', label: 'Sou Academia', icon: 'apartment' },
  { key: 'personal', label: 'Sou Personal Trainer', icon: 'person_pin_circle' },
]

const individualFeatures = [
  {
    icon: 'fitness_center',
    label: 'Monte seu treino',
    text: 'Crie seus próprios templates do A ao G e registre cada série, repetição e volume total.',
  },
  {
    icon: 'restaurant_menu',
    label: 'Controle sua alimentação',
    text: 'Registre refeições e macros na base oficial TACO, com mais de 189 alimentos cadastrados.',
  },
  {
    icon: 'local_fire_department',
    label: 'Calorias automáticas',
    text: 'Descubra seu gasto energético diário calculado por METs, sem precisar de calculadora.',
  },
  {
    icon: 'military_tech',
    label: 'Gamificação',
    text: 'Ganhe XP, conquiste medalhas e suba no ranking de temporada a cada treino concluído.',
  },
  {
    icon: 'verified_user',
    label: 'Privacidade total',
    text: 'Seus dados ficam salvos apenas no seu dispositivo, sem servidores externos.',
  },
  {
    icon: 'devices',
    label: 'Onde você estiver',
    text: 'Disponível para Android na Play Store e em breve para iOS, com dashboard web.',
  },
]

const tabCopy = {
  improve: {
    title: 'O Diário Fit é 100% gratuito para você',
    description:
      'O app feito para quem quer melhorar o treino por conta própria. Gerencie sua rotina, alimentação e evolução sem pagar nada — é só baixar e começar.',
  },
  academy: {
    title: 'Planos para Academias',
    description:
      'Gerencie alunos, professores, treinos e métricas da sua academia em uma única plataforma, do básico ao enterprise.',
    badge: 'Mais escolhido',
    highlight: 'Pro',
  },
  personal: {
    title: 'Planos para Personal Trainers',
    description:
      'Organize seus alunos, monte treinos personalizados e acompanhe a evolução de cada atleta com simplicidade.',
    badge: 'Para começar',
    highlight: 'Basic',
  },
}

const FEATURES = {
  students: { label: 'Gestão de alunos', icon: 'group' },
  teachers: { label: 'Gestão de professores', icon: 'badge' },
  'training-plans': { label: 'Planos de treino', icon: 'fitness_center' },
  exercises: { label: 'Biblioteca de exercícios', icon: 'exercise' },
  notifications: { label: 'Notificações', icon: 'notifications' },
  ads: { label: 'Anúncios', icon: 'campaign' },
  whitelabel: { label: 'Marca personalizada', icon: 'palette' },
  reports: { label: 'Relatórios e métricas', icon: 'bar_chart' },
  'subscription-management': { label: 'Gestão de assinaturas', icon: 'credit_card' },
  marketplace: { label: 'Marketplace', icon: 'storefront' },
  wellhub: { label: 'Integração Wellhub', icon: 'link' },
}

function featureInfo(key) {
  return FEATURES[key] || { label: key.replace(/-/g, ' '), icon: 'check_circle' }
}

function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })
}

function formatLimit(value) {
  return value >= 999999 ? 'Ilimitado' : value
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('improve')
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const carouselRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let cancelled = false
    fetch(PLANS_API)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        setPlans(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(() => {
        if (cancelled) return
        setError(true)
        setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const handlePlayStoreClick = (e) => {
    e.preventDefault()
    window.open(PLAY_STORE_URL, '_blank', 'noopener')
  }

  const scrollCarousel = (direction) => {
    const el = carouselRef.current
    if (!el) return
    const card = el.querySelector('[data-plan-card]')
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.85
    el.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  const copy = tabCopy[activeTab]

  const roleForTab = { academy: 'tenant_admin', personal: 'personal_trainer' }
  const visiblePlans = plans.filter(
    (plan) => !plan.allowedRoles?.length || plan.allowedRoles.includes(roleForTab[activeTab])
  )

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${scrolled ? '-translate-y-full' : 'translate-y-0'} md:translate-y-0`}>
        <div className="px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-3xl font-extrabold text-on-surface flex items-center gap-2">
            <img src={logoImg} alt="Diário Fit" className="w-12 h-12" />
            Diário Fit
          </Link>
          <button
            onClick={handlePlayStoreClick}
            className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold hover:scale-105 active:scale-95 transition-all duration-150 cyan-glow"
          >
            Baixar na Play Store
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28" id="inicio">
        <div className="absolute inset-0 bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(${headerBgImg})` }} />
        <div className="absolute inset-0 bg-surface-deep/45" />
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-surface-deep via-surface-deep/85 to-transparent" />
        <div className="absolute top-24 -left-40 w-[28rem] h-[28rem] bg-primary/15 blur-[140px] rounded-full" />
        <div className="absolute top-40 -right-24 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full" />

        <div className="px-6 relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase font-label-caps">
              <span className="material-symbols-outlined !text-sm">bolt</span>
              Performance Driven
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.1]">
              Seu Diário. Sua Rotina.
              <br />
              <span className="text-primary">SEUS RESULTADOS.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-10">
              O Diário Fit é o app que centraliza seus treinos, alimentação e evolução em um só lugar — com conquistas,
              medalhas e ranking para manter sua rotina de alta performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handlePlayStoreClick}
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform active:scale-95"
              >
                <span className="material-symbols-outlined">play_arrow</span>
                Baixar na Play Store
              </button>
              <a
                href="#funcionalidades"
                className="text-primary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors"
              >
                Saber mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 md:py-32 relative overflow-hidden" id="planos">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-72 bg-primary/5 blur-[120px] rounded-full" />
        <div className="px-6 relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs tracking-widest uppercase font-semibold text-primary font-label-caps">Planos e Preços</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 mt-3">
              Escolha o que combina <span className="text-primary">com você</span>
            </h2>
            <p className="text-on-surface-variant text-base max-w-2xl mx-auto">
              Para atletas, academias e personal trainers. Use grátis ou escolha o plano ideal para o seu negócio.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 rounded-2xl bg-surface-container-low border border-white/5 gap-1">
              {planTabs.map((tab) => {
                const isActive = activeTab === tab.key
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
                      isActive
                        ? 'bg-primary text-on-primary shadow-lg shadow-primary/25'
                        : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5'
                    }`}
                  >
                    <span className="material-symbols-outlined !text-lg">{tab.icon}</span>
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">{copy.title}</h3>
            <p className="text-on-surface-variant max-w-2xl mx-auto">{copy.description}</p>
          </div>

          {/* Individual content */}
          {activeTab === 'improve' && (
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-gradient-to-b from-surface-container-high to-surface-container-low p-8 md:p-14">
                <div className="relative z-10 text-center mb-12">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-on-primary bg-primary rounded-full px-4 py-1.5 mb-6">
                    <span className="material-symbols-outlined !text-sm">verified</span>
                    100% grátis para sempre
                  </span>
                  <h4 className="text-3xl md:text-4xl font-extrabold mb-4">Seu treino, do seu jeito</h4>
                  <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                    O Diário Fit foi feito para quem quer melhorar o treino por conta própria. Sem mensalidade, sem
                    planilhas e sem complicação: você mesmo gerencia seus treinos, alimentação e evolução na palma da mão.
                  </p>
                </div>

                <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                  {individualFeatures.map((feature) => (
                    <div
                      key={feature.label}
                      className="bg-surface-container rounded-2xl border border-white/5 p-5 flex flex-col items-start gap-3 hover:border-primary/30 transition-colors"
                    >
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined !text-2xl">{feature.icon}</span>
                      </div>
                      <h5 className="font-bold text-on-surface">{feature.label}</h5>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{feature.text}</p>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handlePlayStoreClick}
                    className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform active:scale-95"
                  >
                    <span className="material-symbols-outlined">play_arrow</span>
                    Baixar grátis na Play Store
                  </button>
                  <a
                    href="#funcionalidades"
                    className="text-primary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors"
                  >
                    Conhecer o app
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Carousel */}
          {activeTab !== 'improve' && loading && (
            <div className="flex gap-6 overflow-hidden">
              {[0, 1, 2].map((i) => (
                <div key={i} className="min-w-[85%] sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)]">
                  <div className="animate-pulse rounded-3xl bg-surface-container-low border border-white/5 p-8 space-y-4">
                    <div className="h-5 w-1/3 rounded-full bg-surface-container-high" />
                    <div className="h-3 w-2/3 rounded-full bg-surface-container-high" />
                    <div className="h-10 w-2/3 rounded-xl bg-surface-container-high" />
                    <div className="space-y-2 pt-2">
                      {[0, 1, 2, 3].map((j) => (
                        <div key={j} className="h-3 w-full rounded-full bg-surface-container-high" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab !== 'improve' && error && !loading && (
            <div className="max-w-lg mx-auto text-center bg-surface-container-low rounded-3xl border border-white/5 p-10">
              <span className="material-symbols-outlined !text-5xl text-primary mb-4">cloud_off</span>
              <h4 className="text-xl font-bold text-on-surface mb-2">Não foi possível carregar os planos</h4>
              <p className="text-on-surface-variant text-sm mb-6">
                Tente novamente em instantes para ver os planos disponíveis.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                Tentar novamente
              </button>
            </div>
          )}

          {activeTab !== 'improve' && !loading && !error && visiblePlans.length === 0 && (
            <div className="max-w-lg mx-auto text-center bg-surface-container-low rounded-3xl border border-white/5 p-10">
              <span className="material-symbols-outlined !text-5xl text-primary mb-4">info</span>
              <h4 className="text-xl font-bold text-on-surface mb-2">Nenhum plano disponível</h4>
              <p className="text-on-surface-variant text-sm">
                Ainda não há planos liberados para este perfil. Fale com a gente para saber mais.
              </p>
            </div>
          )}

          {activeTab !== 'improve' && !loading && !error && visiblePlans.length > 0 && (
            <div className="relative">
              <div
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 px-1"
                role="region"
                aria-label="Carrossel de planos"
              >
                {visiblePlans.map((plan) => {
                  const isHighlight = plan.name === copy.highlight
                  const isFree = plan.price === 0
                  return (
                    <article
                      key={plan.id}
                      data-plan-card
                      className={`snap-start shrink-0 min-w-[85%] sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)] rounded-3xl border p-8 flex flex-col transition-transform hover:-translate-y-1 ${
                        isHighlight
                          ? 'bg-gradient-to-b from-surface-container-high to-surface-container-low border-primary/40 shadow-2xl shadow-primary/10'
                          : 'bg-surface-container-low border-white/5'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4 gap-3">
                        <h4 className="text-2xl font-extrabold text-on-surface">{plan.name}</h4>
                        {isHighlight && (
                          <span className="shrink-0 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-on-primary bg-primary rounded-full px-3 py-1">
                            <span className="material-symbols-outlined !text-sm">star</span>
                            {copy.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{plan.description}</p>

                      <div className="mb-6">
                        {isFree ? (
                          <div className="text-5xl font-extrabold text-on-surface">
                            Free Trial
                            <span className="block text-sm font-semibold text-on-surface-variant mt-1">
                              15 dias de teste grátis
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-end gap-2">
                            <span className="text-5xl font-extrabold text-on-surface">{formatBRL(plan.price)}</span>
                            <span className="text-on-surface-variant font-semibold mb-1.5">/mês</span>
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-surface-container rounded-xl px-3 py-2 flex items-center gap-2">
                          <span className="material-symbols-outlined !text-lg text-primary">group</span>
                          <div>
                            <div className="text-[10px] uppercase tracking-wider text-on-surface-variant">Alunos</div>
                            <div className="text-sm font-bold text-on-surface">{formatLimit(plan.maxStudents)}</div>
                          </div>
                        </div>
                        <div className="bg-surface-container rounded-xl px-3 py-2 flex items-center gap-2">
                          <span className="material-symbols-outlined !text-lg text-primary">badge</span>
                          <div>
                            <div className="text-[10px] uppercase tracking-wider text-on-surface-variant">Professores</div>
                            <div className="text-sm font-bold text-on-surface">{formatLimit(plan.maxTeachers)}</div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-white/5 pt-6 mb-8 flex-1">
                        <h5 className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant font-label-caps mb-4">
                          Recursos incluídos
                        </h5>
                        <ul className="space-y-3">
                          {(plan.features || []).map((feature) => {
                            const info = featureInfo(feature)
                            return (
                              <li key={feature} className="flex items-center gap-3 text-sm text-on-surface">
                                <span className="material-symbols-outlined !text-lg text-primary shrink-0">{info.icon}</span>
                                {info.label}
                              </li>
                            )
                          })}
                        </ul>
                      </div>

                      <a
                        href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Olá! Tenho interesse no plano ${plan.name} do Diário Fit.`)}`}
                        target="_blank"
                        rel="noopener"
                        className={`w-full text-center px-6 py-3.5 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-95 ${
                          isHighlight
                            ? 'bg-primary text-on-primary shadow-lg shadow-primary/25'
                            : 'bg-white/5 text-on-surface hover:bg-primary/10 hover:text-primary'
                        }`}
                      >
                        Quero este plano
                      </a>
                    </article>
                  )
                })}
              </div>

              <button
                onClick={() => scrollCarousel(-1)}
                aria-label="Planos anteriores"
                className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:flex w-11 h-11 rounded-full bg-surface-container-high border border-white/10 items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={() => scrollCarousel(1)}
                aria-label="Próximos planos"
                className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:flex w-11 h-11 rounded-full bg-surface-container-high border border-white/10 items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-16 bg-surface-container-lowest/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
                <div className="text-4xl font-extrabold text-primary mb-1">{s.value}</div>
                <div className="text-xs tracking-widest uppercase font-semibold text-on-surface-variant font-label-caps">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Sections */}
      <section className="py-24 md:py-32" id="funcionalidades">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-xs tracking-widest uppercase font-semibold text-primary font-label-caps">Recursos</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 mt-3">
              Tudo o que você precisa em <span className="text-primary">um só app</span>
            </h2>
            <p className="text-on-surface-variant text-base max-w-2xl mx-auto">
              Uma infraestrutura digital completa projetada para quem leva o treinamento a sério, eliminando a complexidade e focando em resultados.
            </p>
          </div>
          <div className="space-y-32">
            {/* Feature 1: Treinos */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 order-2 lg:order-1">
                <div className="inline-flex items-center gap-3 text-primary mb-6">
                  <span className="material-symbols-outlined text-4xl">fitness_center</span>
                  <span className="text-xs tracking-widest uppercase font-semibold font-label-caps">Performance</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Treinos Inteligentes &amp; Adaptáveis</h3>
                <p className="text-on-surface-variant text-base mb-8">
                  Crie templates de treino personalizados (A-G), registre cada série com precisão e acompanhe seu volume total. Nosso sistema calcula calorias via METs para otimizar seu gasto energético diário.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-on-surface">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Registro de séries e repetições
                  </li>
                  <li className="flex items-center gap-3 text-on-surface">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Cálculo automático de METs
                  </li>
                  <li className="flex items-center gap-3 text-on-surface">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Histórico detalhado por exercício
                  </li>
                </ul>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="relative bg-surface-container-low rounded-3xl p-4 border border-white/5">
                  <div className="absolute inset-x-8 top-8 h-40 bg-primary/10 blur-[80px] rounded-full" />
                  <div className="relative bg-surface-container rounded-2xl h-80 flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined !text-[220px] text-primary/20">exercise</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Nutrição */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <div className="relative bg-surface-container-low rounded-3xl p-4 border border-white/5">
                  <div className="absolute inset-x-8 top-8 h-40 bg-secondary/10 blur-[80px] rounded-full" />
                  <div className="relative bg-surface-container rounded-2xl h-80 flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined !text-[220px] text-secondary/20">restaurant</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-3 text-secondary mb-6">
                  <span className="material-symbols-outlined text-4xl">nutrition</span>
                  <span className="text-xs tracking-widest uppercase font-semibold font-label-caps">Nutrição</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Nutrição de Precisão Clínica</h3>
                <p className="text-on-surface-variant text-base mb-8">
                  Utilize a base oficial TACO para um controle rigoroso. Monitore seus macronutrientes em tempo real e ajuste sua dieta conforme seus objetivos de hipertrofia ou perda de gordura.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-on-surface">
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    189+ alimentos cadastrados
                  </li>
                  <li className="flex items-center gap-3 text-on-surface">
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    Tracking de Macros em tempo real
                  </li>
                  <li className="flex items-center gap-3 text-on-surface">
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    Diário alimentar integrado
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3: Gamificação */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 order-2 lg:order-1">
                <div className="inline-flex items-center gap-3 text-tertiary mb-6">
                  <span className="material-symbols-outlined text-4xl">military_tech</span>
                  <span className="text-xs tracking-widest uppercase font-semibold font-label-caps">Engagement</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Evolução Gamificada</h3>
                <p className="text-on-surface-variant text-base mb-8">
                  Transforme sua jornada em um jogo. Ganhe XP por cada treino concluído, conquiste medalhas raras e suba no ranking da temporada para mostrar que você faz parte da elite.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container p-4 rounded-xl border border-white/5">
                    <div className="text-tertiary font-bold mb-1">Rank S</div>
                    <div className="text-xs text-on-surface-variant">Nível de Elite</div>
                  </div>
                  <div className="bg-surface-container p-4 rounded-xl border border-white/5">
                    <div className="text-tertiary font-bold mb-1">Closed Beta</div>
                    <div className="text-xs text-on-surface-variant">Em testes</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="relative bg-surface-container-low rounded-3xl p-4 border border-white/5">
                  <div className="absolute inset-x-8 top-8 h-40 bg-tertiary/10 blur-[80px] rounded-full" />
                  <div className="relative bg-surface-container rounded-2xl h-80 flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined !text-[220px] text-tertiary/20">emoji_events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-surface-container-high to-surface-container-lowest rounded-[2rem] p-12 lg:p-20 text-center relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-[100px] -ml-32 -mb-32" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Pronto para levar seu treino ao{' '}
              <span className="text-primary">próximo nível?</span>
            </h2>
            <p className="text-on-surface-variant text-base mb-12 max-w-2xl mx-auto">
              Junte-se a milhares de atletas que abandonaram as planilhas manuais por uma gestão de performance inteligente e automatizada.
            </p>
            <div className="flex justify-center">
              <button
                onClick={handlePlayStoreClick}
                className="bg-primary text-on-primary px-12 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-primary/20"
              >
                <span className="material-symbols-outlined">rocket_launch</span>
                Começar Agora Grátis
              </button>
            </div>
            <p className="mt-8 text-xs tracking-widest uppercase font-semibold text-on-surface-variant/40 font-label-caps">
              iOS • Android • Web Dashboard
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-deep pt-24 pb-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div>
              <div className="text-2xl font-extrabold text-on-surface flex items-center gap-2 mb-6">
                <img src={logoImg} alt="Diário Fit" className="w-8 h-8" />
                Diário Fit
              </div>
              <p className="text-on-surface-variant max-w-xs text-sm">
                A plataforma definitiva para atletas que buscam excelência técnica e consistência diária.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div>
                <h4 className="text-xs tracking-widest uppercase font-semibold text-on-surface mb-6 font-label-caps">
                  PLATAFORMA
                </h4>
                <ul className="space-y-4 text-sm text-on-surface-variant">
                  <li><a href="#funcionalidades" className="hover:text-primary transition-colors">Funcionalidades</a></li>
                  <li><a href="#planos" className="hover:text-primary transition-colors">Planos</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">TACO Database</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs tracking-widest uppercase font-semibold text-on-surface mb-6 font-label-caps">
                  SUPORTE
                </h4>
                <ul className="space-y-4 text-sm text-on-surface-variant">
                  <li><a href="#" className="hover:text-primary transition-colors">Ajuda</a></li>
                  <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacidade</Link></li>
                  <li><Link to="/terms" className="hover:text-primary transition-colors">Termos</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs tracking-widest uppercase font-semibold text-on-surface mb-6 font-label-caps">
                  SOCIAL
                </h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-on-surface-variant hover:bg-primary/20 hover:text-primary transition-all">
                    <span className="material-symbols-outlined text-xl">share</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-on-surface-variant hover:bg-primary/20 hover:text-primary transition-all">
                    <span className="material-symbols-outlined text-xl">camera</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-sm text-on-surface-variant/50">
            <p>&copy; 2024 Diário Fit &bull; Dedicated to Performance</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-on-surface transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-on-surface transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
