import { Link } from 'react-router-dom'
import resourceImg from '../assets/resource-icon.png'

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
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-dark/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔥</span>
            <span className="text-lg font-extrabold tracking-tight">Diário Fit</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-white/60">
            <Link to="/privacy" className="hover:text-teal transition-colors">Privacidade</Link>
            <Link to="/terms" className="hover:text-teal transition-colors">Termos</Link>
          </nav>
        </div>
      </header>

      {/* Hero Image */}
      <section className="pt-16">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-teal/10 via-transparent to-dark pointer-events-none" />
          <img
            src={resourceImg}
            alt="Diário Fit"
            className="w-full max-h-[60vh] object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
        </div>
      </section>

      {/* Hero Text */}
      <section className="px-6 pb-12 md:pb-20 -mt-16 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-1.5 text-teal text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            Disponível na Play Store
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Seu diário fitness{' '}
            <span className="text-teal">gamificado</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Controle seus treinos, alimentação e evolução em um só lugar.
            Ganhe conquistas, medalhas e suba de nível enquanto mantém sua rotina.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.crizoth.diario_fit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-teal hover:bg-teal-dark text-black font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.4V3.6c0-.9.9-1.4 1.7-.9l14.4 8.4c.7.4.7 1.4 0 1.8L4.7 21.3c-.8.5-1.7 0-1.7-.9z"/>
            </svg>
            Baixar na Play Store
          </a>
        </div>
      </section>

      {/* Features grid */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12">
            Tudo que você precisa em{' '}
            <span className="text-teal">um só app</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-surface border border-white/5 rounded-2xl p-6 hover:border-teal/30 hover:bg-teal/5 transition-all duration-300"
              >
                <span className="text-3xl group-hover:scale-110 inline-block transition-transform">{f.icon}</span>
                <h3 className="text-lg font-bold mt-3 mb-2">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ['189+', 'Alimentos'],
            ['7', 'Templates'],
            ['5', 'Ranks'],
            ['100%', 'Grátis'],
          ].map(([value, label]) => (
            <div key={label} className="bg-surface border border-white/5 rounded-2xl p-6">
              <div className="text-2xl md:text-3xl font-extrabold text-teal">{value}</div>
              <div className="text-text-secondary text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-xl mx-auto bg-gradient-to-b from-teal/10 to-transparent border border-teal/20 rounded-3xl p-10">
          <h2 className="text-2xl font-extrabold mb-3">Pronto para evoluir?</h2>
          <p className="text-text-secondary mb-6">
            Comece agora e transforme sua rotina de treinos em um jogo.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.crizoth.diario_fit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-black font-bold px-10 py-3.5 rounded-full transition-all hover:scale-105"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.4V3.6c0-.9.9-1.4 1.7-.9l14.4 8.4c.7.4.7 1.4 0 1.8L4.7 21.3c-.8.5-1.7 0-1.7-.9z"/>
            </svg>
            Baixar na Play Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 text-center text-sm text-white/30">
        <p>&copy; {new Date().getFullYear()} Diário Fit · crizoth</p>
        <div className="mt-2 flex items-center justify-center gap-4">
          <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacidade</Link>
          <Link to="/terms" className="hover:text-white/60 transition-colors">Termos</Link>
        </div>
      </footer>
    </div>
  )
}
