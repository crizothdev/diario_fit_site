import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/foreground.png'

const WHATSAPP_URL = 'https://wa.me/5512981539092'

const howItWorks = [
  {
    icon: 'assignment',
    title: 'Cadastre alunos e treinos',
    text: 'Monte os treinos dos seus alunos e envie direto para o app deles, sem papel e sem planilha.',
  },
  {
    icon: 'monitoring',
    title: 'Acompanhe a evolução',
    text: 'Veja frequência, carga, volume e progresso de cada aluno em relatórios simples e completos.',
  },
  {
    icon: 'palette',
    title: 'Personalize com a sua marca',
    text: 'Deixe o app com a cara do seu negócio: cores, logo e identidade da sua academia ou consultoria.',
  },
  {
    icon: 'bolt',
    title: 'Agilize novos alunos',
    text: 'Mantenha treinos pré-estabelecidos para acelerar a entrada de novos alunos e padronizar a metodologia.',
  },
]

const features = [
  { icon: 'group', label: 'Gestão de alunos', text: 'Perfil, histórico e treinos de cada aluno em um só lugar.' },
  { icon: 'badge', label: 'Gestão de professores', text: 'Organize a equipe e os alunos de cada profissional.' },
  { icon: 'fitness_center', label: 'Planos de treino', text: 'Crie e envie treinos personalizados em minutos.' },
  { icon: 'trending_up', label: 'Relatórios e métricas', text: 'Acompanhe frequência e evolução com dados claros.' },
  { icon: 'palette', label: 'White label', text: 'App com a marca, cores e identidade do seu negócio.' },
  { icon: 'devices', label: 'App para os alunos', text: 'Seus alunos acompanham tudo pelo celular.' },
]

const plans = [
  {
    name: 'Starter',
    price: 49,
    tagline: 'Para personal trainers que estão começando.',
    features: ['Até 30 alunos', '1 professor', 'Gestão de treinos', 'Relatórios básicos'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: 99,
    tagline: 'Para academias que querem se modernizar.',
    features: ['Até 200 alunos', '10 professores', 'White label', 'Treinos pré-estabelecidos', 'Relatórios completos'],
    highlight: true,
    badge: 'Mais escolhido',
  },
  {
    name: 'Enterprise',
    price: 199,
    tagline: 'Para redes e academias de grande porte.',
    features: ['Alunos ilimitados', 'Professores ilimitados', 'White label completo', 'Integração Wellhub', 'Suporte prioritário'],
    highlight: false,
  },
]

function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })
}

export default function Painel() {
  const [contractModal, setContractModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  const openContract = (plan) => {
    setSelectedPlan(plan)
    setContractModal(true)
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-extrabold text-on-surface flex items-center gap-2">
          <img src={logoImg} alt="Diário Fit" className="w-10 h-10" />
          <span className="hidden sm:inline">Painel Diário Fit</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/links" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">
            Links
          </Link>
          <Link to="/" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">
            ← Voltar ao site
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pb-28 text-center">
        <div className="absolute top-0 -left-32 w-96 h-96 bg-primary/10 blur-[140px] rounded-full" />
        <div className="absolute top-24 -right-24 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full" />
        <div className="px-6 relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase font-label-caps">
            <span className="material-symbols-outlined !text-sm">admin_panel_settings</span>
            Painel Diário Fit
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.1]">
            O painel para <span className="text-primary">gerenciar sua academia</span> e acompanhar a evolução dos seus
            alunos
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-10">
            Crie treinos, acompanhe resultados e entregue um app com a cara do seu negócio. Simples para você, prático
            para os seus alunos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#precos"
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform active:scale-95"
            >
              <span className="material-symbols-outlined">sell</span>
              Ver planos
            </a>
            <a
              href="#funcionamento"
              className="text-primary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors"
            >
              Como funciona
            </a>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 md:py-24" id="funcionamento">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest uppercase font-semibold text-primary font-label-caps">Como funciona</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 mt-3">
              Do papel para o digital em <span className="text-primary">4 passos</span>
            </h2>
            <p className="text-on-surface-variant text-base max-w-2xl mx-auto">
              O painel foi pensado para simplificar a rotina de academias e personal trainers — do cadastro ao
              acompanhamento da evolução.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {howItWorks.map((step, i) => (
              <div key={step.title} className="bg-surface-container-low rounded-3xl border border-white/5 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined !text-2xl">{step.icon}</span>
                  </div>
                  <span className="text-3xl font-extrabold text-primary/30 font-label-caps">0{i + 1}</span>
                </div>
                <h3 className="font-bold text-on-surface mb-2">{step.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-20 md:py-24 bg-surface-container-lowest/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest uppercase font-semibold text-primary font-label-caps">Recursos</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 mt-3">
              Tudo para o seu <span className="text-primary">negócio crescer</span>
            </h2>
            <p className="text-on-surface-variant text-base max-w-2xl mx-auto">
              Do controle de treinos ao white label, uma infraestrutura completa para modernizar sua academia.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="bg-surface-container rounded-2xl border border-white/5 p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined !text-2xl">{feature.icon}</span>
                </div>
                <h3 className="font-bold text-on-surface mb-1">{feature.label}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section className="py-20 md:py-28 relative overflow-hidden" id="precos">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-72 bg-primary/5 blur-[120px] rounded-full" />
        <div className="px-6 relative max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs tracking-widest uppercase font-semibold text-primary font-label-caps">Planos e Preços</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 mt-3">
              Escolha o plano para o <span className="text-primary">seu negócio</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto mb-12 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 flex items-start gap-4">
            <span className="material-symbols-outlined text-amber-400 !text-3xl shrink-0 mt-0.5">construction</span>
            <div>
              <h3 className="font-bold text-amber-300 mb-1">Esta página ainda está em desenvolvimento</h3>
              <p className="text-sm text-amber-100/80 leading-relaxed">
                O painel ainda não está operando. Os valores abaixo são fictícios, apenas para demonstração.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-3xl border p-8 flex flex-col transition-transform hover:-translate-y-1 ${
                  plan.highlight
                    ? 'bg-gradient-to-b from-surface-container-high to-surface-container-low border-primary/40 shadow-2xl shadow-primary/10'
                    : 'bg-surface-container-low border-white/5'
                }`}
              >
                <div className="flex items-start justify-between mb-4 gap-3">
                  <h4 className="text-2xl font-extrabold text-on-surface">{plan.name}</h4>
                  {plan.highlight && (
                    <span className="shrink-0 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-on-primary bg-primary rounded-full px-3 py-1">
                      <span className="material-symbols-outlined !text-sm">star</span>
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{plan.tagline}</p>

                <div className="flex items-end gap-2 mb-6">
                  <span className="text-5xl font-extrabold text-on-surface">{formatBRL(plan.price)}</span>
                  <span className="text-on-surface-variant font-semibold mb-1.5">/mês</span>
                </div>

                <ul className="border-t border-white/5 pt-6 mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-on-surface">
                      <span className="material-symbols-outlined !text-lg text-primary shrink-0">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openContract(plan)}
                  className={`w-full text-center px-6 py-3.5 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-95 ${
                    plan.highlight
                      ? 'bg-primary text-on-primary shadow-lg shadow-primary/25'
                      : 'bg-white/5 text-on-surface hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  Quero contratar
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-surface-container-high to-surface-container-lowest rounded-[2rem] p-12 lg:p-16 text-center relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Quer levar sua academia para o <span className="text-primary">próximo nível?</span>
            </h2>
            <p className="text-on-surface-variant text-base mb-10 max-w-xl mx-auto">
              Fale com a gente e saiba quando o painel Diário Fit estará disponível para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform active:scale-95"
              >
                <span className="material-symbols-outlined">chat</span>
                Falar no WhatsApp
              </a>
              <Link
                to="/"
                className="text-primary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors"
              >
                Conhecer o app
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-deep pt-16 pb-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-on-surface font-extrabold">
            <img src={logoImg} alt="Diário Fit" className="w-8 h-8" />
            Painel Diário Fit
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-on-surface-variant">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <Link to="/links" className="hover:text-primary transition-colors">Links</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacidade</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Termos</Link>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-on-surface-variant/40">
          &copy; 2024 Diário Fit &bull; Dedicated to Performance
        </p>
      </footer>

      {/* Quero contratar modal */}
      {contractModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setContractModal(false)} />
          <div className="relative bg-surface-container-high border border-white/10 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl shadow-black/40">
            <div className="w-14 h-14 mx-auto bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-400 mb-5">
              <span className="material-symbols-outlined !text-3xl">construction</span>
            </div>
            <h3 className="text-2xl font-extrabold mb-2">Ainda em desenvolvimento</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              O plano{' '}
              {selectedPlan && <strong className="text-on-surface">{selectedPlan.name}</strong>} ainda não está
              disponível para contratação. O painel Diário Fit está em desenvolvimento e os valores apresentados são
              fictícios. Quer saber mais? Fale com a gente.
            </p>
            <div className="grid gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="bg-primary text-on-primary w-full px-6 py-3 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all"
              >
                Falar no WhatsApp
              </a>
              <button
                onClick={() => setContractModal(false)}
                className="bg-white/5 text-on-surface w-full px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-all"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
