import logoImg from '../assets/foreground.png'
import googlePlayLogo from '../assets/google_play_logo.png'
import appleLogo from '../assets/apple_logo.png'
import whatsappLogo from '../assets/whatsapp_logo.png'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=br.com.diariofit'
const WHATSAPP_URL = 'https://wa.me/5512981539092'

export default function Links() {
  return (
    <div className="min-h-screen bg-surface-deep flex flex-col items-center justify-center px-6 py-12">
      <div className="flex flex-col items-center text-center max-w-sm w-full">
        <img src={logoImg} alt="Diário Fit" className="w-20 h-20 mb-4" />
        <h1 className="text-3xl font-extrabold text-on-surface mb-1">Diário Fit</h1>
        <p className="text-on-surface-variant text-sm mb-10">
          Transforme sua Performance
        </p>

        <div className="flex flex-col gap-4 w-full">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener"
            className="bg-white text-surface-deep px-6 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all"
          >
            <img src={googlePlayLogo} alt="" className="h-6 w-6" />
            Google Play
          </a>

          <button
            disabled
            className="bg-[#555555] text-white/60 px-6 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 cursor-not-allowed"
          >
            <img src={appleLogo} alt="" className="h-6 object-contain invert brightness-0" />
            App Store &mdash; Em breve
          </button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all"
          >
            <img src={whatsappLogo} alt="" className="h-6 w-6" />
            Fale Conosco
          </a>
        </div>

        <p className="mt-12 text-xs text-on-surface-variant/40">
          &copy; 2024 Diário Fit
        </p>
      </div>
    </div>
  )
}
