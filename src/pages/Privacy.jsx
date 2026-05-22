import { Link } from 'react-router-dom'

export default function Privacy() {
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
        <h1 className="text-3xl font-extrabold mb-2">Política de Privacidade</h1>
        <p className="text-text-secondary text-sm mb-10">Última atualização: 22 de maio de 2026</p>

        <div className="space-y-8 text-text-secondary leading-relaxed text-[15px]">
          <section>
            <h2 className="text-white text-lg font-bold mb-3">1. Introdução</h2>
            <p>
              O Diário Fit ("nós", "nosso" ou "aplicativo") valoriza a privacidade dos seus usuários.
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos
              suas informações pessoais quando você utiliza nosso aplicativo mobile.
            </p>
            <p className="mt-3">
              Ao utilizar o Diário Fit, você concorda com a coleta e o uso de suas informações
              conforme descrito nesta política.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">2. Dados que Coletamos</h2>
            <p className="mb-3">
              O Diário Fit foi projetado com foco em privacidade. Todos os seus dados de treinos,
              refeições, conquistas e perfil são armazenados <strong className="text-white">localmente no seu dispositivo</strong>.
              Não mantemos servidores para armazenamento de dados pessoais.
            </p>
            <p className="mb-3">Coletamos apenas:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Dados de perfil fornecidos por você:</strong> nome, peso, altura,
                idade, sexo, nível de atividade física e meta calórica. Esses dados são inseridos
                voluntariamente por você durante o cadastro e permanecem apenas no seu dispositivo.
              </li>
              <li>
                <strong className="text-white">Dados de uso local:</strong> registros de treinos,
                refeições e conquistas que você cria ao utilizar o app. Tudo armazenado localmente.
              </li>
              <li>
                <strong className="text-white">Dados de diagnóstico (Google Firebase):</strong> utilizamos
                o Firebase Remote Config apenas para verificar a versão mínima do app e exibir avisos
                importantes. Não coletamos dados pessoais identificáveis através do Firebase.
              </li>
              <li>
                <strong className="text-white">Dados de publicidade (Google AdMob):</strong> exibimos
                anúncios através da plataforma Google AdMob, que pode coletar dados anônimos de
                publicidade conforme a política do Google.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">3. Como Usamos Seus Dados</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Para fornecer as funcionalidades do aplicativo (cálculo de calorias, progresso de treinos, conquistas).</li>
              <li>Para exibir anúncios relevantes através do Google AdMob.</li>
              <li>Para verificar a compatibilidade da versão do aplicativo via Firebase Remote Config.</li>
              <li>Para melhorar a experiência do usuário com base no uso do aplicativo.</li>
            </ul>
            <p className="mt-3">
              <strong className="text-white">Importante:</strong> não vendemos, alugamos ou compartilhamos
              seus dados pessoais com terceiros. Seus dados de treino, nutrição e perfil ficam
              exclusivamente no seu dispositivo.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">4. Armazenamento e Segurança</h2>
            <p>
              Todos os dados inseridos por você (perfil, treinos, refeições, conquistas) são
              armazenados <strong className="text-white">exclusivamente no armazenamento local do seu dispositivo</strong>.
              Utilizamos os mecanismos nativos de segurança do Android/iOS para proteger esses dados.
            </p>
            <p className="mt-3">
              O aplicativo não transmite seus dados pessoais para servidores externos. A única
              comunicação externa ocorre para:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Google AdMob: exibição de anúncios (dados anônimos de publicidade).</li>
              <li>Firebase Remote Config: verificação de versão e avisos do app.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">5. Seus Direitos</h2>
            <p className="mb-3">Você tem o direito de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acessar, corrigir ou excluir seus dados a qualquer momento dentro do próprio aplicativo.</li>
              <li>Desinstalar o aplicativo, o que remove todos os dados armazenados localmente.</li>
              <li>Desativar a personalização de anúncios nas configurações do seu dispositivo.</li>
              <li>Solicitar informações sobre o tratamento de dados entrando em contato conosco.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">6. Serviços de Terceiros</h2>
            <p className="mb-3">
              O Diário Fit utiliza os seguintes serviços que possuem suas próprias políticas de privacidade:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Google AdMob:</strong>{' '}
                <a href="https://policies.google.com/privacy" className="text-teal hover:underline" target="_blank" rel="noopener">
                  Política de Privacidade do Google
                </a>
              </li>
              <li>
                <strong className="text-white">Firebase (Google):</strong>{' '}
                <a href="https://firebase.google.com/support/privacy" className="text-teal hover:underline" target="_blank" rel="noopener">
                  Privacidade e Segurança do Firebase
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">7. Crianças</h2>
            <p>
              O Diário Fit não é direcionado a crianças menores de 13 anos. Não coletamos
              intencionalmente informações de crianças. Se você acredita que uma criança nos
              forneceu dados pessoais, entre em contato para que possamos removê-los.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">8. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre
              alterações significativas através do aplicativo ou por outros meios. Recomendamos
              revisar esta política regularmente.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">9. Contato</h2>
            <p>
              Para dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail:{' '}
              <a href="mailto:privacy@diariofit.app" className="text-teal hover:underline">
                privacy@diariofit.app
              </a>
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/5 py-8 px-6 text-center text-sm text-white/30">
        <div className="flex items-center justify-center gap-4">
          <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
          <Link to="/terms" className="hover:text-white/60 transition-colors">Termos de Uso</Link>
        </div>
      </footer>
    </div>
  )
}
