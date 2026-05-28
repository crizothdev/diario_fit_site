import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import headerBgImg from '../assets/header_bg.jpeg'
import logoImg from '../assets/foreground.png'

const stats = [
  { icon: 'restaurant_menu', value: '189+', label: 'Alimentos TACO' },
  { icon: 'exercise', value: '7', label: 'Templates Treino' },
  { icon: 'military_tech', value: '5', label: 'Níveis Ranking' },
  { icon: 'verified_user', value: '100%', label: 'Grátis Atletas' },
]

export default function Home() {
  const [showNotice, setShowNotice] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePlayStoreClick = (e) => {
    e.preventDefault()
    setShowNotice(true)
  }

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

      {/* Hero Section */}
      <section
        className="pt-32 min-h-[660px] flex items-center relative overflow-hidden bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${headerBgImg})` }}
      >
        <div className="absolute inset-0 bg-surface-deep/40" />
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-surface-deep via-surface-deep/80 to-transparent" />
        <div className="px-6 relative z-10">
          <div className="text-left ml-[20%]">
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase font-label-caps">
              PERFORMANCE DRIVEN
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Seu Diário. Sua Rotina.<br />
              <span className="text-primary">SEUS RESULTADOS.</span>
            </h1>
            <p className="text-on-surface-variant text-base max-w-xl mb-10">
              Controle seus treinos, alimentação e evolução em um só lugar. Ganhe conquistas, medalhas e suba de nível enquanto mantém sua rotina de alta performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <button
                onClick={handlePlayStoreClick}
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform active:scale-95"
              >
                <span className="material-symbols-outlined">play_arrow</span>
                Baixar na Play Store
              </button>
              <button className="text-primary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors">
                Saber mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-20 bg-surface-container-lowest/50 border-y border-white/5">
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
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
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
                <div className="bg-surface-container-low rounded-3xl p-4 border border-white/5">
                  <div className="bg-surface-container rounded-2xl h-80 flex items-center justify-center">
                    <span className="material-symbols-outlined !text-[240px] text-primary/20">exercise</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Nutrição */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <div className="bg-surface-container-low rounded-3xl p-4 border border-white/5">
                  <div className="bg-surface-container rounded-2xl h-80 flex items-center justify-center">
                    <span className="material-symbols-outlined !text-[240px] text-secondary/20">restaurant</span>
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
                <div className="bg-surface-container-low rounded-3xl p-4 border border-white/5">
                  <div className="bg-surface-container rounded-2xl h-80 flex items-center justify-center">
                    <span className="material-symbols-outlined !text-[240px] text-tertiary/20">emoji_events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6">
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
      <footer className="bg-surface-deep pt-32 pb-16 border-t border-white/5">
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
                  <li><a href="#" className="hover:text-primary transition-colors">Funcionalidades</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Planos</a></li>
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

      {/* Custom Notice Modal */}
      {showNotice && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-surface-deep/80 backdrop-blur-sm" onClick={() => setShowNotice(false)} />
          <div className="relative z-10 bg-surface-container-high border border-white/10 rounded-3xl p-10 max-w-md w-full text-center shadow-2xl">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">rocket_launch</span>
            <h3 className="text-xl font-bold text-on-surface mb-3">Em breve nas lojas!</h3>
            <p className="text-on-surface-variant text-base mb-6">
              Estamos em fase de testes. Logo estaremos disponível nas lojas Android.
            </p>
            <button
              onClick={() => setShowNotice(false)}
              className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all w-full"
            >
              Entendi
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
