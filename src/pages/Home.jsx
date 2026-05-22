import { Link } from 'react-router-dom'

const features = [
  {
    icon: '🏋️',
    title: 'Treinos',
    desc: 'Crie templates de treino (A-G), registre séries, cargas e repetições. Calcule calorias gastas via METs automaticamente.',
  },
  {
    icon: '🍽️',
    title: 'Nutrição',
    desc: 'Busque entre 189 alimentos da base TACO. Registre porções e acompanhe seu consumo calórico diário.',
  },
  {
    icon: '🏆',
    title: 'Conquistas',
    desc: 'Ganhe medalhas, XP e moedas ao completar desafios. Suba de rank (E a S) a cada temporada.',
  },
  {
    icon: '📊',
    title: 'Estatísticas',
    desc: 'Acompanhe frequência de treinos, médias calóricas e evolução mensal em um painel completo.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🔥</span>
          <span className="text-xl font-extrabold tracking-tight">Diário Fit</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-white/60">
          <Link to="/privacy" className="hover:text-teal transition-colors">Privacidade</Link>
          <Link to="/terms" className="hover:text-teal transition-colors">Termos</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 pt-24 pb-16 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-1.5 text-teal text-sm font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
          Disponível na Play Store
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Seu diário fitness{' '}
          <span className="text-teal">gamificado</span>
        </h1>
        <p className="text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
          Controle seus treinos, alimentação e evolução em um só lugar. 
          Ganhe conquistas, medalhas e suba de nível enquanto mantém sua rotina.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-black font-bold px-8 py-3.5 rounded-full transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.4V3.6c0-.9.9-1.4 1.7-.9l14.4 8.4c.7.4.7 1.4 0 1.8L4.7 21.3c-.8.5-1.7 0-1.7-.9z"/>
            </svg>
            Baixar na Play Store
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white font-semibold px-8 py-3.5 rounded-full transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </a>
        </div>
      </section>

      {/* Features grid */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-surface border border-white/5 rounded-2xl p-6 hover:border-teal/20 transition-all"
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className="text-lg font-bold mt-3 mb-2">{f.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-lg mx-auto bg-gradient-to-b from-teal/10 to-transparent border border-teal/20 rounded-3xl p-10">
          <h2 className="text-2xl font-extrabold mb-3">Pronto para evoluir?</h2>
          <p className="text-text-secondary mb-6">
            Comece agora e transforme sua rotina de treinos em um jogo.
          </p>
          <a
            href="#"
            className="inline-flex bg-teal hover:bg-teal-dark text-black font-bold px-10 py-3.5 rounded-full transition-all"
          >
            Baixar agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 text-center text-sm text-white/30">
        <p>© {new Date().getFullYear()} Diário Fit · crizoth</p>
        <div className="mt-2 flex items-center justify-center gap-4">
          <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacidade</Link>
          <Link to="/terms" className="hover:text-white/60 transition-colors">Termos</Link>
        </div>
      </footer>
    </div>
  )
}
