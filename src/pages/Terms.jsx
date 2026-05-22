import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className="min-h-screen">
      <header className="px-6 py-4 flex items-center justify-between border-b border-white/5">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <span className="text-2xl">🔥</span>
          <span className="text-xl font-extrabold tracking-tight">Diário Fit</span>
        </Link>
        <Link to="/" className="text-sm text-white/60 hover:text-teal transition-colors">← Voltar</Link>
      </header>

      <main className="px-6 py-12 max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-2">Termos de Uso</h1>
        <p className="text-text-secondary text-sm mb-10">Última atualização: 22 de maio de 2026</p>

        <div className="space-y-8 text-text-secondary leading-relaxed text-[15px]">
          <section>
            <h2 className="text-white text-lg font-bold mb-3">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar ou utilizar o aplicativo Diário Fit ("Aplicativo"), você concorda em cumprir
              estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não utilize
              o Aplicativo.
            </p>
            <p className="mt-3">
              Estes Termos de Uso constituem um acordo legal entre você ("Usuário") e o desenvolvedor
              do Diário Fit ("nós", "nosso" ou "desenvolvedor").
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">2. Descrição do Serviço</h2>
            <p>
              O Diário Fit é um aplicativo mobile de diário de treinos e nutrição com elementos de
              gamificação. O Aplicativo permite que você:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Registre e acompanhe seus treinos e atividades físicas.</li>
              <li>Registre e monitore sua alimentação diária.</li>
              <li>Participe de um sistema de conquistas e gamificação.</li>
              <li>Acompanhe estatísticas e progresso ao longo do tempo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">3. Uso do Aplicativo</h2>
            <p className="mb-3">Ao utilizar o Diário Fit, você concorda em:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer informações precisas e verdadeiras no seu perfil.</li>
              <li>Utilizar o Aplicativo apenas para fins pessoais e não comerciais.</li>
              <li>Não tentar burlar, hackear ou modificar o funcionamento do Aplicativo.</li>
              <li>Não utilizar o Aplicativo para qualquer finalidade ilegal ou não autorizada.</li>
              <li>Ser o único responsável pelos dados inseridos no Aplicativo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">4. Isenção de Responsabilidade sobre Saúde</h2>
            <p className="mb-3">
              <strong className="text-white">Importante:</strong> o Diário Fit é uma ferramenta de
              registro e acompanhamento <strong className="text-white">não substitui</strong>{' '}
              orientação médica ou profissional de saúde.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Os cálculos de calorias, METs e gasto energético são estimativas baseadas em
                fórmulas científicas (ACSM) e podem não refletir valores exatos para todos os indivíduos.
              </li>
              <li>
                Consulte um médico ou nutricionista antes de iniciar qualquer programa de
                exercícios ou dieta.
              </li>
              <li>
                O desenvolvedor não se responsabiliza por lesões, danos ou problemas de saúde
                decorrentes do uso das informações fornecidas pelo Aplicativo.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">5. Propriedade Intelectual</h2>
            <p>
              O Aplicativo, incluindo seu código-fonte, design, logotipo, nome e funcionalidades,
              é propriedade exclusiva do desenvolvedor. Você não pode copiar, modificar, distribuir,
              vender ou alugar qualquer parte do Aplicativo sem autorização prévia por escrito.
            </p>
            <p className="mt-3">
              O conteúdo que você insere no Aplicativo (treinos, refeições, perfil) permanece
              sendo de sua propriedade.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">6. Publicidade e Anúncios</h2>
            <p>
              O Diário Fit é mantido gratuitamente através da exibição de anúncios via Google AdMob.
              Os anúncios são fornecidos por terceiros e estão sujeitos às políticas do Google.
              Não nos responsabilizamos pelo conteúdo dos anúncios exibidos.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">7. Atualizações do Aplicativo</h2>
            <p>
              Podemos disponibilizar atualizações do Aplicativo periodicamente para correção de bugs,
              melhorias de desempenho e novas funcionalidades. Recomendamos manter o Aplicativo
              atualizado para a melhor experiência. Através do Firebase Remote Config, podemos
              solicitar que você atualize para uma versão mínima exigida.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">8. Limitação de Responsabilidade</h2>
            <p>
              O Diário Fit é fornecido "como está" ("as is"), sem garantias de qualquer tipo,
              expressas ou implícitas. O desenvolvedor não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Perda de dados armazenados localmente no dispositivo.</li>
              <li>Interrupções ou indisponibilidade do Aplicativo.</li>
              <li>Dados incorretos decorrentes de entradas imprecisas do usuário.</li>
              <li>Danos indiretos, incidentais ou consequenciais decorrentes do uso do Aplicativo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">9. Rescisão</h2>
            <p>
              Podemos suspender ou encerrar seu acesso ao Aplicativo a qualquer momento, sem aviso
              prévio, caso você viole estes Termos de Uso. Você pode encerrar o uso do Aplicativo
              a qualquer momento desinstalando-o do seu dispositivo.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">10. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento.
              Alterações significativas serão comunicadas através do Aplicativo. O uso continuado
              do Aplicativo após as alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">11. Contato</h2>
            <p>
              Para dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail:{' '}
              <a href="mailto:contact@diariofit.app" className="text-teal hover:underline">
                contact@diariofit.app
              </a>
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/5 py-8 px-6 text-center text-sm text-white/30">
        <div className="flex items-center justify-center gap-4">
          <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
          <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacidade</Link>
        </div>
      </footer>
    </div>
  )
}
