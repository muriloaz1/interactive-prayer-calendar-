import { Star, Moon, Cloud, Heart, Sparkles } from "./decorative-elements"

export function FinalPage() {
  return (
    <div className="print-page w-[210mm] h-[297mm] mx-auto bg-gradient-to-b from-[var(--lilac)]/30 via-white to-[var(--pink)]/30 relative overflow-hidden flex flex-col items-center justify-center p-8">
      {/* Decorative elements */}
      <Star className="absolute top-12 left-16 w-10 h-10 text-[var(--star-gold)]" filled />
      <Star className="absolute top-20 right-20 w-8 h-8 text-[var(--star-gold)]" filled />
      <Star className="absolute bottom-32 left-20 w-6 h-6 text-[var(--star-gold)]" filled />
      <Star className="absolute bottom-24 right-16 w-9 h-9 text-[var(--star-gold)]" filled />
      <Star className="absolute top-1/3 left-8 w-5 h-5 text-[var(--star-gold)]" filled />
      <Star className="absolute top-1/2 right-10 w-7 h-7 text-[var(--star-gold)]" filled />

      <Moon className="absolute top-16 right-1/3 w-14 h-14 text-[var(--yellow)]/60" />

      <Cloud className="absolute top-8 left-1/4 w-16 h-16 text-[var(--blue)]/30" />
      <Cloud className="absolute bottom-16 right-1/4 w-20 h-20 text-[var(--blue)]/25" />

      <Heart className="absolute top-1/4 right-12 w-8 h-8 text-[var(--pink)]/50" />
      <Heart className="absolute bottom-1/3 left-12 w-10 h-10 text-[var(--pink)]/40" />

      <Sparkles className="absolute top-32 left-1/3 w-6 h-6 text-white/50" />
      <Sparkles className="absolute bottom-40 right-1/3 w-8 h-8 text-white/40" />

      {/* Main content */}
      <div className="text-center z-10 max-w-[150mm]">
        {/* Central illustration */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-[var(--yellow)]">
              <div className="text-6xl">🙏</div>
            </div>
            <Star className="absolute -top-2 -right-2 w-10 h-10 text-[var(--star-gold)] animate-pulse" filled />
            <Star className="absolute -bottom-1 -left-2 w-8 h-8 text-[var(--star-gold)]" filled />
            <Heart className="absolute top-1/2 -right-4 w-6 h-6 text-[var(--pink)]" />
          </div>
        </div>

        {/* Main message */}
        <div className="bg-white/80 rounded-3xl p-8 shadow-xl mb-8">
          <h2 className="text-3xl font-extrabold text-foreground mb-4 leading-tight">
            Cada estrelinha é um
            <br />
            <span className="text-[var(--lilac)]">momento especial</span>
            <br />
            com Deus!
          </h2>

          <div className="flex justify-center gap-2 mb-6">
            <Star className="w-8 h-8 text-[var(--star-gold)]" filled />
            <Star className="w-8 h-8 text-[var(--star-gold)]" filled />
            <Star className="w-8 h-8 text-[var(--star-gold)]" filled />
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Parabéns por cultivar a fé do seu filho(a)!
            <br />
            Continue firme nessa jornada de amor e oração.
          </p>
        </div>

        {/* Decorative row of hearts and stars */}
        <div className="flex justify-center items-center gap-3">
          <Heart className="w-6 h-6 text-[var(--pink)]" />
          <Star className="w-5 h-5 text-[var(--star-gold)]" filled />
          <Heart className="w-6 h-6 text-[var(--pink)]" />
          <Star className="w-5 h-5 text-[var(--star-gold)]" filled />
          <Heart className="w-6 h-6 text-[var(--pink)]" />
        </div>
      </div>

      {/* Footer branding */}
      <div className="absolute bottom-8 text-center">
        <div className="bg-white/90 rounded-full px-6 py-3 shadow-lg">
          <p className="text-foreground font-bold text-lg">✨ Potinho da Fé ✨</p>
          <p className="text-muted-foreground text-sm">Criando momentos de fé em família</p>
        </div>
      </div>
    </div>
  )
}
