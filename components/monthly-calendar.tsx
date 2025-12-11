import { Star, Moon, Cloud, Heart } from "./decorative-elements"

export function MonthlyCalendar() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <div className="pdf-page print-page bg-white relative overflow-hidden p-6">
      {/* Background decorations */}
      <Cloud className="absolute top-2 right-8 w-12 h-12 text-[var(--blue)]/20" />
      <Moon className="absolute top-4 left-8 w-10 h-10 text-[var(--yellow)]/40" />
      <Star className="absolute bottom-4 right-12 w-8 h-8 text-[var(--yellow)]/30" filled />
      <Heart className="absolute bottom-6 left-10 w-8 h-8 text-[var(--pink)]/30" />

      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-extrabold text-foreground flex items-center justify-center gap-2">
          <Star className="w-7 h-7 text-[var(--star-gold)]" filled />
          Minha Rotina da Oração
          <Star className="w-7 h-7 text-[var(--star-gold)]" filled />
        </h2>

        {/* Month input */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="text-lg font-semibold text-muted-foreground">Mês:</span>
          <div className="border-b-2 border-dashed border-[var(--lilac)] w-48 h-8" />
        </div>
      </div>

      {/* Calendar Grid - 7 columns x 5 rows (covering 31 days) */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {/* Day headers */}
        {["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"].map((day) => (
          <div key={day} className="text-center text-xs font-bold text-[var(--lilac)] py-1">
            {day}
          </div>
        ))}

        {/* Day squares */}
        {days.map((day) => (
          <div
            key={day}
            className="aspect-square border-2 border-[var(--lilac)]/40 rounded-xl bg-[var(--background)] flex flex-col items-center justify-between p-1.5 hover:border-[var(--lilac)] transition-colors"
          >
            {/* Date space */}
            <div className="text-xs font-semibold text-muted-foreground w-full text-center border-b border-dashed border-[var(--lilac)]/30 pb-0.5">
              {day}
            </div>

            {/* Star space for marking */}
            <div className="flex-1 flex items-center justify-center">
              <Star className="w-6 h-6 text-[var(--lilac)]/30" />
            </div>
          </div>
        ))}

        {/* Empty cells to complete the grid */}
        {Array.from({ length: (7 - (31 % 7)) % 7 }, (_, i) => (
          <div key={`empty-${i}`} className="aspect-square" />
        ))}
      </div>

      {/* Legend */}
      <div className="bg-[var(--yellow)]/20 rounded-xl p-3 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-[var(--star-gold)]" filled />
          <span className="text-sm text-foreground">= Orei hoje!</span>
        </div>
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-[var(--pink)]" />
          <span className="text-sm text-foreground">= Dia especial</span>
        </div>
      </div>

      {/* Motivational strip at bottom */}
      <div className="absolute bottom-4 left-6 right-6">
        <div className="bg-gradient-to-r from-[var(--pink)]/30 via-[var(--lilac)]/30 to-[var(--blue)]/30 rounded-full py-2 px-4 text-center">
          <p className="text-sm font-semibold text-foreground">✨ Cada estrelinha é um momento especial com Deus! ✨</p>
        </div>
      </div>
    </div>
  )
}
