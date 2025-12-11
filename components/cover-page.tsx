import { Star, Moon, Cloud, Heart, Sparkles } from "./decorative-elements"

export function CoverPage() {
  return (
    <div className="pdf-page print-page bg-gradient-to-b from-[var(--blue)] via-[var(--lilac)] to-[var(--pink)] relative overflow-hidden flex flex-col items-center justify-center p-8">
      {/* Decorative elements */}
      <Star className="absolute top-8 left-12 w-8 h-8 text-[var(--yellow)]" filled />
      <Star className="absolute top-16 right-16 w-6 h-6 text-[var(--yellow)]" filled />
      <Star className="absolute top-32 left-24 w-5 h-5 text-[var(--yellow)]" filled />
      <Star className="absolute bottom-48 right-12 w-7 h-7 text-[var(--yellow)]" filled />
      <Star className="absolute bottom-32 left-16 w-5 h-5 text-[var(--yellow)]" filled />

      <Moon className="absolute top-12 right-32 w-16 h-16 text-[var(--yellow)] opacity-90" />

      <Cloud className="absolute top-24 left-8 w-20 h-20 text-white/60" />
      <Cloud className="absolute bottom-40 right-8 w-24 h-24 text-white/50" />
      <Cloud className="absolute top-48 right-4 w-16 h-16 text-white/40" />

      <Sparkles className="absolute top-20 left-1/3 w-8 h-8 text-white/70" />
      <Sparkles className="absolute bottom-56 left-20 w-6 h-6 text-white/60" />

      {/* Order Bump Badge */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[var(--yellow)] text-foreground px-6 py-2 rounded-full font-bold text-sm shadow-lg transform -rotate-2">
        ⭐ Order Bump – Oferta Única ⭐
      </div>

      {/* Main content */}
      <div className="text-center z-10 bg-white/90 rounded-3xl p-10 shadow-2xl max-w-[90%] w-full sm:w-auto">
        {/* Calendar icon illustration */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="w-24 h-28 bg-white rounded-xl border-4 border-[var(--lilac)] shadow-lg overflow-hidden">
              <div className="bg-[var(--lilac)] h-8 flex items-center justify-center">
                <span className="text-white font-bold text-xs">ORAÇÃO</span>
              </div>
              <div className="grid grid-cols-4 gap-1 p-2">
                {[...Array(12)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-[var(--star-gold)]" filled={i < 8} />
                ))}
              </div>
            </div>
            <Star className="absolute -top-3 -right-3 w-10 h-10 text-[var(--star-gold)]" filled />
            <Heart className="absolute -bottom-2 -left-3 w-8 h-8 text-[var(--pink)]" />
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-foreground leading-tight mb-4">
          Quadrinho Interativo
          <br />
          <span className="text-[var(--lilac)]">da Rotina da Oração</span>
        </h1>

        <div className="w-24 h-1 bg-[var(--yellow)] mx-auto rounded-full mb-4" />

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Marque cada noite de oração e<br />
          acompanhe o progresso do seu filho(a)!
        </p>

        <div className="flex justify-center gap-3">
          <Star className="w-6 h-6 text-[var(--star-gold)]" filled />
          <Heart className="w-6 h-6 text-[var(--pink)]" />
          <Moon className="w-6 h-6 text-[var(--blue)]" />
          <Star className="w-6 h-6 text-[var(--star-gold)]" filled />
        </div>
      </div>

      {/* Footer branding */}
      <div className="absolute bottom-8 text-center">
        <p className="text-white font-bold text-lg drop-shadow-lg">✨ Potinho da Fé ✨</p>
      </div>
    </div>
  )
}
