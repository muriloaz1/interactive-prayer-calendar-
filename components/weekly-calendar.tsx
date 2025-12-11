import { Star, Moon, Heart, Cloud, Sparkles } from "./decorative-elements"

const weekDays = [
  { name: "Segunda", short: "SEG" },
  { name: "Terça", short: "TER" },
  { name: "Quarta", short: "QUA" },
  { name: "Quinta", short: "QUI" },
  { name: "Sexta", short: "SEX" },
  { name: "Sábado", short: "SÁB" },
  { name: "Domingo", short: "DOM" },
]

function WeekRow({ weekNumber }: { weekNumber: number }) {
  return (
    <div className="mb-4">
      <div className="text-center mb-2">
        <span className="bg-[var(--lilac)] text-white text-xs font-bold px-3 py-1 rounded-full">
          Semana {weekNumber}
        </span>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {weekDays.map((day) => (
          <div
            key={`${weekNumber}-${day.short}`}
            className="aspect-[3/4] border-2 border-[var(--lilac)]/40 rounded-xl bg-[var(--background)] flex flex-col items-center p-2"
          >
            {/* Day name */}
            <div className="text-[10px] font-bold text-[var(--lilac)] mb-1">{day.short}</div>

            {/* Date input line */}
            <div className="text-xs text-muted-foreground w-full text-center border-b border-dashed border-[var(--lilac)]/30 mb-2 pb-1">
              ___
            </div>

            {/* Large star space */}
            <div className="flex-1 flex items-center justify-center">
              <Star className="w-10 h-10 text-[var(--lilac)]/25" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function WeeklyCalendar() {
  return (
    <div className="pdf-page print-page bg-white relative overflow-hidden p-6">
      {/* Background decorations */}
      <Cloud className="absolute top-2 left-6 w-10 h-10 text-[var(--blue)]/20" />
      <Moon className="absolute top-4 right-10 w-8 h-8 text-[var(--yellow)]/40" />
      <Sparkles className="absolute bottom-16 left-8 w-8 h-8 text-[var(--lilac)]/30" />
      <Heart className="absolute bottom-20 right-10 w-8 h-8 text-[var(--pink)]/30" />

      {/* Header */}
      <div className="text-center mb-4">
        <div className="inline-block bg-[var(--pink)]/20 rounded-full px-4 py-1 mb-2">
          <span className="text-xs font-semibold text-[var(--pink)]">✨ Versão para Crianças Pequenas ✨</span>
        </div>
        <h2 className="text-xl font-extrabold text-foreground flex items-center justify-center gap-2">
          <Star className="w-6 h-6 text-[var(--star-gold)]" filled />
          Minha Rotina da Oração
          <Star className="w-6 h-6 text-[var(--star-gold)]" filled />
        </h2>

        {/* Month input */}
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="text-sm font-semibold text-muted-foreground">Mês:</span>
          <div className="border-b-2 border-dashed border-[var(--lilac)] w-40 h-6" />
        </div>
      </div>

      {/* Weekly grids - 4 weeks */}
      <div className="space-y-2">
        <WeekRow weekNumber={1} />
        <WeekRow weekNumber={2} />
        <WeekRow weekNumber={3} />
        <WeekRow weekNumber={4} />
      </div>

      {/* Legend */}
      <div className="mt-3 bg-[var(--yellow)]/20 rounded-xl p-2 flex items-center justify-center gap-4">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-[var(--star-gold)]" filled />
          <span className="text-xs text-foreground">= Orei!</span>
        </div>
        <div className="flex items-center gap-1">
          <Heart className="w-4 h-4 text-[var(--pink)]" />
          <span className="text-xs text-foreground">= Especial</span>
        </div>
        <div className="flex items-center gap-1">
          <Sparkles className="w-4 h-4 text-[var(--lilac)]" />
          <span className="text-xs text-foreground">= Extra!</span>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-muted-foreground text-xs">
          Potinho da Fé • Quadrinhos com espaços maiores para os pequeninos
        </p>
      </div>
    </div>
  )
}
