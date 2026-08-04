import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import headerBgImg from '../assets/header_bg.jpeg'
import logoImg from '../assets/foreground.png'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=br.com.diariofit'
const WHATSAPP_URL = 'https://wa.me/5512981539092'
const PLANS_API = 'https://api-dev.diariofit.app.br/plan/active'
const LEAD_FORM_ENDPOINT = 'https://formsubmit.co/ajax/crizoth.dev%2Bdiariofitform@gmail.com'

const stats = [
  { icon: 'restaurant_menu', value: '189+', label: 'Alimentos TACO' },
  { icon: 'exercise', value: '7', label: 'Templates Treino' },
  { icon: 'military_tech', value: '5', label: 'Níveis Ranking' },
  { icon: 'verified_user', value: '100%', label: 'Grátis Atletas' },
]

const planTabs = [
  { key: 'academy', label: 'Sou Academia', icon: 'apartment' },
  { key: 'personal', label: 'Sou Personal Trainer', icon: 'person_pin_circle' },
]

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'O App', href: '#app' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Planos', href: '#planos' },
  { label: 'Para Negócios', href: '#negocios' },
  { label: 'FAQ', href: '#faq' },
]

const appPillars = [
  {
    icon: 'verified_user',
    label: 'Gratuito para sempre',
    text: 'Todas as funções do app são gratuitas. Monte treinos, registre refeições e acompanhe sua evolução sem pagar nada.',
  },
  {
    icon: 'link',
    label: 'Integração com academia parceira',
    text: 'Sua academia aderiu ao Diário Fit? Receba seus treinos e o acompanhamento do professor direto no app, sem depender da ficha em papel.',
  },
  {
    icon: 'description',
    label: 'Da ficha de papel para a digital',
    text: 'O app não substitui o profissional: ele repassa o treino da ficha de papel para uma ficha digital organizada, sempre à mão.',
  },
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
    icon: 'lock',
    label: 'Privacidade total',
    text: 'Seus dados ficam salvos apenas no seu dispositivo, sem servidores externos.',
  },
  {
    icon: 'trending_up',
    label: 'Evolução com dados',
    text: 'Histórico de séries, repetições, volume e calorias para você e para quem acompanha seu treino.',
  },
  {
    icon: 'devices',
    label: 'Onde você estiver',
    text: 'Disponível para Android na Play Store e em breve para iOS, com dashboard web.',
  },
]

const businessFeatures = [
  {
    icon: 'dashboard',
    title: 'Painel administrativo',
    text: 'Crie e envie treinos para seus alunos e acompanhe a evolução de cada um em tempo real.',
  },
  {
    icon: 'palette',
    title: 'White label — com a cara do seu negócio',
    text: 'Personalize cores, logo e marca. Seus alunos usam um app exclusivo da sua academia.',
  },
  {
    icon: 'devices',
    title: 'Alunos no app, você no controle',
    text: 'Seus alunos acompanham os treinos no celular enquanto você gerencia tudo pelo painel.',
  },
]

const faqItems = [
  {
    question: 'O Diário Fit é gratuito?',
    answer:
      'Sim! O app é 100% gratuito para atletas, alunos e qualquer pessoa que queira organizar treinos e alimentação. Você baixa, monta seus treinos, registra refeições e acompanha sua evolução sem pagar nada — para sempre.',
  },
  {
    question: 'O Diário Fit monta o meu treino?',
    answer:
      'Não. O app não dispensa o profissional de educação física — pelo contrário, ele valoriza o seu trabalho. O Diário Fit serve para repassar o treino da ficha de papel para uma ficha digital, organizada e sempre à mão.',
  },
  {
    question: 'Qualquer academia usa o Diário Fit?',
    answer:
      'Qualquer pessoa pode usar o app gratuitamente. Mas, para a academia gerenciar seus alunos e os treinos deles, ela precisa aderir a um dos planos do painel Diário Fit.',
  },
  {
    question: 'Minha academia precisa assinar o painel para eu usar o app?',
    answer:
      'Não. A assinatura do painel permite que a academia crie os treinos dos alunos com mais facilidade, gerencie tudo e mantenha treinos pré-estabelecidos para agilizar a entrada de novos alunos. Mas o aluno de academia pode gerenciar o próprio treino no app sem depender da assinatura da academia.',
  },
  {
    question: 'Para quem é o Diário Fit?',
    answer:
      'Para todos que levam treino e saúde a sério: alunos de academia que querem deixar a ficha de papel de lado; academias que querem se modernizar e se renovar; personal trainers que querem acompanhar de perto a evolução dos seus alunos; pessoas que querem controlar a ingestão de calorias por saúde ou esporte; e nutricionistas que querem acompanhar seus pacientes.',
  },
]

const tabCopy = {
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
  const [activeTab, setActiveTab] = useState('academy')
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [panelModalOpen, setPanelModalOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [planModalOpen, setPlanModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [leadForm, setLeadForm] = useState({ name: '', email: '', whatsapp: '', role: 'academia' })
  const [leadStatus, setLeadStatus] = useState('idle')
  const carouselRef = useRef(null)

  useEffect(() => {
    let lastY = window.scrollY
    const handleScroll = () => {
      const y = window.scrollY
      const goingDown = y > lastY
      lastY = y
      setScrolled(y > 100 && goingDown)
    }
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

  const openPlanModal = (plan) => {
    setSelectedPlan(plan)
    setLeadForm({
      name: '',
      email: '',
      whatsapp: '',
      role: activeTab === 'personal' ? 'personal' : 'academia',
    })
    setLeadStatus('idle')
    setPlanModalOpen(true)
  }

  const handleLeadSubmit = async (e) => {
    e.preventDefault()
    setLeadStatus('submitting')
    const profile = leadForm.role === 'personal' ? 'Personal Trainer' : 'Academia'
    const formData = new FormData()
    formData.append('nome', leadForm.name)
    formData.append('email', leadForm.email)
    formData.append('whatsapp', leadForm.whatsapp)
    formData.append('perfil', profile)
    formData.append('plano', selectedPlan?.name || '')
    formData.append('_subject', `Novo interesse: plano ${selectedPlan?.name || ''} (${profile})`)
    formData.append('_template', 'table')
    formData.append('_captcha', 'false')
    try {
      await fetch(LEAD_FORM_ENDPOINT, { method: 'POST', body: formData })
      setLeadStatus('success')
    } catch {
      setLeadStatus('error')
    }
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
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-surface-deep/80 backdrop-blur-xl border-b border-white/5 transition-transform duration-300 ${
          scrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-3xl font-extrabold text-on-surface flex items-center gap-2">
            <img src={logoImg} alt="Diário Fit" className="w-12 h-12" />
            <span className="hidden sm:inline">Diário Fit</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-on-surface-variant hover:text-primary px-3 py-2 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/links"
              className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined !text-lg">link</span>
              Links
            </Link>
            <button
              onClick={() => setPanelModalOpen(true)}
              className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-on-surface bg-surface-container-high border border-white/10 px-4 py-2 rounded-lg hover:border-primary/50 transition-all"
            >
              <span className="material-symbols-outlined !text-lg">admin_panel_settings</span>
              Acessar o Painel
            </button>
            <button
              onClick={handlePlayStoreClick}
              className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold hover:scale-105 active:scale-95 transition-all duration-150 cyan-glow"
            >
              Baixar na Play Store
            </button>
          </div>
        </div>

        <div className="md:hidden flex gap-2 px-4 pb-3 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setPanelModalOpen(true)}
            className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-on-primary bg-primary px-3 py-1.5 rounded-full"
          >
            <span className="material-symbols-outlined !text-base">admin_panel_settings</span>
            Acessar o Painel
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 inline-flex items-center text-xs font-semibold text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/links"
            className="shrink-0 inline-flex items-center text-xs font-semibold text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full"
          >
            Links
          </Link>
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

      {/* O App */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-surface-container-lowest/40" id="app">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full" />
        <div className="px-6 relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest uppercase font-semibold text-primary font-label-caps">O App</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 mt-3">
              Gratuito para você. <span className="text-primary">Integrado com a sua academia.</span>
            </h2>
            <p className="text-on-surface-variant text-base max-w-2xl mx-auto">
              O Diário Fit é 100% gratuito para usar como quiser. E se você treina em uma academia parceira, o seu
              treino chega pronto — direto da ficha digital, sem papel.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {appPillars.map((pillar) => (
              <div
                key={pillar.label}
                className="bg-surface-container rounded-2xl border border-white/5 p-6 flex flex-col items-start gap-3 hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined !text-2xl">{pillar.icon}</span>
                </div>
                <h4 className="font-bold text-on-surface">{pillar.label}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handlePlayStoreClick}
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform active:scale-95 mx-auto"
            >
              <span className="material-symbols-outlined">play_arrow</span>
              Baixar grátis na Play Store
            </button>
          </div>
        </div>
      </section>

      {/* Para Negócios */}
      <section className="py-24 md:py-32 relative overflow-hidden" id="negocios">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 blur-[140px] rounded-full" />
        <div className="px-6 relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs tracking-widest uppercase font-semibold text-primary font-label-caps">
                Para Academias &amp; Personal Trainers
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 mt-3">
                Seu negócio, <span className="text-primary">digital e com a sua cara</span>
              </h2>
              <p className="text-on-surface-variant text-base mb-8">
                Modernize sua academia ou consultoria com o painel do Diário Fit: controle os treinos dos alunos,
                acompanhe a evolução de cada um e entregue um app com a marca do seu negócio.
              </p>
              <ul className="space-y-6 mb-10">
                {businessFeatures.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined !text-2xl">{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">{feature.title}</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{feature.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                to="/painel"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform active:scale-95"
              >
                Quero conhecer
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="relative">
              <div className="relative bg-surface-container-low rounded-3xl p-6 border border-white/5 overflow-hidden">
                <div className="absolute inset-x-8 top-8 h-40 bg-primary/10 blur-[80px] rounded-full" />
                <div className="relative space-y-4">
                  <div className="bg-surface-container rounded-2xl border border-white/5 p-5">
                    <div className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant mb-3 font-label-caps">
                      Painel — Visão geral
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <div className="text-2xl font-extrabold text-primary">248</div>
                        <div className="text-[10px] uppercase tracking-wider text-on-surface-variant">Alunos</div>
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold text-primary">1.2k</div>
                        <div className="text-[10px] uppercase tracking-wider text-on-surface-variant">Treinos</div>
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold text-primary">87%</div>
                        <div className="text-[10px] uppercase tracking-wider text-on-surface-variant">Frequência</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface-container rounded-2xl border border-white/5 p-5">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                        <span className="material-symbols-outlined !text-xl">fitness_center</span>
                      </div>
                      <div className="text-sm font-bold text-on-surface mb-1">Treino A</div>
                      <div className="text-xs text-on-surface-variant">Enviado para 32 alunos</div>
                    </div>
                    <div className="bg-surface-container rounded-2xl border border-white/5 p-5">
                      <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-3">
                        <span className="material-symbols-outlined !text-xl">palette</span>
                      </div>
                      <div className="text-sm font-bold text-on-surface mb-1">White label</div>
                      <div className="text-xs text-on-surface-variant">App com a sua marca</div>
                    </div>
                  </div>
                </div>
              </div>
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
              Escolha o plano ideal para o <span className="text-primary">seu negócio</span>
            </h2>
            <p className="text-on-surface-variant text-base max-w-2xl mx-auto">
              Para academias e personal trainers. Escolha o plano que combina com o seu momento.
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

          <div className="max-w-2xl mx-auto mb-10 rounded-2xl border border-red-500/40 bg-red-500/10 p-5 flex items-start gap-4">
            <span className="material-symbols-outlined text-red-400 !text-3xl shrink-0 mt-0.5">construction</span>
            <div className="text-left">
              <h4 className="font-bold text-red-300 mb-1">Ainda em desenvolvimento</h4>
              <p className="text-sm text-red-200/80 leading-relaxed">
                Esta parte ainda não está concluída. Os valores abaixo ainda não correspondem à realidade e podem
                mudar a qualquer momento.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">{copy.title}</h3>
            <p className="text-on-surface-variant max-w-2xl mx-auto">{copy.description}</p>
          </div>

          {/* Carousel */}
          {loading && (
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

          {error && !loading && (
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

          {!loading && !error && visiblePlans.length === 0 && (
            <div className="max-w-lg mx-auto text-center bg-surface-container-low rounded-3xl border border-white/5 p-10">
              <span className="material-symbols-outlined !text-5xl text-primary mb-4">info</span>
              <h4 className="text-xl font-bold text-on-surface mb-2">Nenhum plano disponível</h4>
              <p className="text-on-surface-variant text-sm">
                Ainda não há planos liberados para este perfil. Fale com a gente para saber mais.
              </p>
            </div>
          )}

          {!loading && !error && visiblePlans.length > 0 && (
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

                      <button
                        onClick={() => openPlanModal(plan)}
                        className={`w-full text-center px-6 py-3.5 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-95 ${
                          isHighlight
                            ? 'bg-primary text-on-primary shadow-lg shadow-primary/25'
                            : 'bg-white/5 text-on-surface hover:bg-primary/10 hover:text-primary'
                        }`}
                      >
                        Quero este plano
                      </button>
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
      <section className="py-10 md:py-14 bg-surface-container-low relative overflow-hidden" id="funcionalidades">
        <div
          className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <span className="text-xs tracking-widest uppercase font-semibold text-primary font-label-caps">Recursos</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 mt-2 text-on-surface">
              Tudo o que você precisa em <span className="text-primary">um só app</span>
            </h2>
            <p className="text-on-surface-variant text-sm max-w-2xl mx-auto">
              Uma infraestrutura digital completa projetada para quem leva o treinamento a sério, eliminando a complexidade e focando em resultados.
            </p>
          </div>
          <div className="space-y-10">
            {/* Feature 1: Treinos */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 text-primary mb-3">
                  <span className="material-symbols-outlined !text-3xl">fitness_center</span>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-on-surface-variant font-label-caps">Performance</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-on-surface">Treinos Inteligentes &amp; Adaptáveis</h3>
                <p className="text-on-surface-variant text-sm mb-4">
                  Crie templates de treino personalizados (A-G), registre cada série com precisão e acompanhe seu volume total. Nosso sistema calcula calorias via METs para otimizar seu gasto energético diário.
                </p>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined !text-base text-primary">check_circle</span>
                    Registro de séries e repetições
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined !text-base text-primary">check_circle</span>
                    Cálculo automático de METs
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined !text-base text-primary">check_circle</span>
                    Histórico detalhado por exercício
                  </li>
                </ul>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="relative bg-surface-container-high rounded-3xl p-3 border border-white/10 shadow-lg shadow-black/20">
                  <div className="absolute inset-x-8 top-6 h-20 bg-primary/10 blur-[80px] rounded-full" />
                  <div className="relative bg-surface-container rounded-2xl h-40 flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined !text-[110px] text-primary/20">exercise</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Nutrição */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="relative bg-surface-container-high rounded-3xl p-3 border border-white/10 shadow-lg shadow-black/20">
                  <div className="absolute inset-x-8 top-6 h-20 bg-secondary/10 blur-[80px] rounded-full" />
                  <div className="relative bg-surface-container rounded-2xl h-40 flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined !text-[110px] text-secondary/20">restaurant</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 text-secondary mb-3">
                  <span className="material-symbols-outlined !text-3xl">nutrition</span>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-on-surface-variant font-label-caps">Nutrição</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-on-surface">Nutrição de Precisão Clínica</h3>
                <p className="text-on-surface-variant text-sm mb-4">
                  Utilize a base oficial TACO para um controle rigoroso. Monitore seus macronutrientes em tempo real e ajuste sua dieta conforme seus objetivos de hipertrofia ou perda de gordura.
                </p>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined !text-base text-secondary">check_circle</span>
                    189+ alimentos cadastrados
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined !text-base text-secondary">check_circle</span>
                    Tracking de Macros em tempo real
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined !text-base text-secondary">check_circle</span>
                    Diário alimentar integrado
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3: Gamificação */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 text-tertiary mb-3">
                  <span className="material-symbols-outlined !text-3xl">military_tech</span>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-on-surface-variant font-label-caps">Engagement</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-on-surface">Evolução Gamificada</h3>
                <p className="text-on-surface-variant text-sm mb-4">
                  Transforme sua jornada em um jogo. Ganhe XP por cada treino concluído, conquiste medalhas raras e suba no ranking da temporada para mostrar que você faz parte da elite.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-surface-container-high p-3 rounded-xl border border-white/10">
                    <div className="text-tertiary font-bold mb-1">Rank S</div>
                    <div className="text-xs text-on-surface-variant">Nível de Elite</div>
                  </div>
                  <div className="bg-surface-container-high p-3 rounded-xl border border-white/10">
                    <div className="text-tertiary font-bold mb-1">Closed Beta</div>
                    <div className="text-xs text-on-surface-variant">Em testes</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="relative bg-surface-container-high rounded-3xl p-3 border border-white/10 shadow-lg shadow-black/20">
                  <div className="absolute inset-x-8 top-6 h-20 bg-tertiary/10 blur-[80px] rounded-full" />
                  <div className="relative bg-surface-container rounded-2xl h-40 flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined !text-[110px] text-tertiary/20">emoji_events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-surface-container-lowest/40" id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest uppercase font-semibold text-primary font-label-caps">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 mt-3">
              Perguntas <span className="text-primary">frequentes</span>
            </h2>
            <p className="text-on-surface-variant text-base">As respostas que você procura, direto ao ponto.</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={item.question}
                  className={`rounded-2xl border bg-surface-container transition-colors ${
                    isOpen ? 'border-primary/40' : 'border-white/5'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-on-surface">{item.question}</span>
                    <span
                      className={`material-symbols-outlined text-primary shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm text-on-surface-variant leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
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
                  <li><a href="#app" className="hover:text-primary transition-colors">O App</a></li>
                  <li><a href="#funcionalidades" className="hover:text-primary transition-colors">Funcionalidades</a></li>
                  <li><a href="#planos" className="hover:text-primary transition-colors">Planos</a></li>
                  <li><Link to="/painel" className="hover:text-primary transition-colors">Painel Diário Fit</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs tracking-widest uppercase font-semibold text-on-surface mb-6 font-label-caps">
                  SUPORTE
                </h4>
                <ul className="space-y-4 text-sm text-on-surface-variant">
                  <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                  <li><Link to="/links" className="hover:text-primary transition-colors">Links</Link></li>
                  <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacidade</Link></li>
                  <li><Link to="/terms" className="hover:text-primary transition-colors">Termos</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs tracking-widest uppercase font-semibold text-on-surface mb-6 font-label-caps">
                  SOCIAL
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/diariofit.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-on-surface-variant hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <span className="material-symbols-outlined text-xl">camera</span>
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-on-surface-variant hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <span className="material-symbols-outlined text-xl">chat</span>
                  </a>
                  <Link
                    to="/links"
                    aria-label="Links"
                    className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-on-surface-variant hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <span className="material-symbols-outlined text-xl">link</span>
                  </Link>
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

      {/* Acessar o Painel modal */}
      {panelModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setPanelModalOpen(false)} />
          <div className="relative bg-surface-container-high border border-white/10 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl shadow-black/40">
            <div className="w-14 h-14 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5">
              <span className="material-symbols-outlined !text-3xl">construction</span>
            </div>
            <h3 className="text-2xl font-extrabold mb-2">Em breve!</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              O acesso ao painel administrativo do Diário Fit está em desenvolvimento. Em breve você poderá entrar para
              gerenciar seus alunos, treinos e a evolução de cada um.
            </p>
            <button
              onClick={() => setPanelModalOpen(false)}
              className="bg-primary text-on-primary w-full px-6 py-3 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all"
            >
              Entendi
            </button>
          </div>
        </div>
      )}

      {/* Quero este plano modal */}
      {planModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setPlanModalOpen(false)} />
          <div className="relative bg-surface-container-high border border-white/10 rounded-3xl p-8 max-w-lg w-full shadow-2xl shadow-black/40 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setPlanModalOpen(false)}
              aria-label="Fechar"
              className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {leadStatus === 'success' ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5">
                  <span className="material-symbols-outlined !text-3xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-extrabold mb-2">Recebemos seu interesse!</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Obrigado, {leadForm.name.split(' ')[0] || 'atleta'}! Anotamos seu contato no plano{' '}
                  <strong className="text-on-surface">{selectedPlan?.name}</strong>. Em breve falaremos com você pelo
                  WhatsApp.
                </p>
                <button
                  onClick={() => setPlanModalOpen(false)}
                  className="bg-primary text-on-primary w-full px-6 py-3 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Fechar
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined !text-2xl">handshake</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold">Quero este plano</h3>
                    <p className="text-xs text-on-surface-variant">
                      Plano <strong className="text-primary">{selectedPlan?.name}</strong>
                    </p>
                  </div>
                </div>

                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="lead-name" className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                      Nome
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      required
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                      placeholder="Seu nome completo"
                      className="w-full bg-surface-container border border-white/10 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="lead-email" className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                      E-mail
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      required
                      value={leadForm.email}
                      onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                      placeholder="voce@exemplo.com"
                      className="w-full bg-surface-container border border-white/10 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="lead-whatsapp" className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="lead-whatsapp"
                      type="tel"
                      required
                      value={leadForm.whatsapp}
                      onChange={(e) => setLeadForm({ ...leadForm, whatsapp: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="w-full bg-surface-container border border-white/10 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>

                  <div>
                    <span className="block text-xs font-semibold text-on-surface-variant mb-1.5">Você é</span>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { key: 'academia', label: 'Sou Academia', icon: 'apartment' },
                        { key: 'personal', label: 'Sou Personal Trainer', icon: 'person_pin_circle' },
                      ].map((option) => {
                        const isActive = leadForm.role === option.key
                        return (
                          <button
                            key={option.key}
                            type="button"
                            onClick={() => setLeadForm({ ...leadForm, role: option.key })}
                            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                              isActive
                                ? 'bg-primary text-on-primary shadow-lg shadow-primary/25'
                                : 'bg-surface-container text-on-surface-variant hover:text-on-surface border border-white/10'
                            }`}
                          >
                            <span className="material-symbols-outlined !text-lg">{option.icon}</span>
                            {option.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {leadStatus === 'error' && (
                    <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
                      Não foi possível enviar agora. Tente novamente ou fale direto com a gente pelo{' '}
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener"
                        className="underline hover:text-red-300"
                      >
                        WhatsApp
                      </a>
                      .
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={leadStatus === 'submitting'}
                    className="w-full bg-primary text-on-primary px-6 py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {leadStatus === 'submitting' ? (
                      <>
                        <span className="material-symbols-outlined !text-lg animate-spin">progress_activity</span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined !text-lg">send</span>
                        Enviar interesse
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
