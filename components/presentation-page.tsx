import { Star, Heart, Cloud, Moon, Sparkles } from "./decorative-elements"

export function PresentationPage() {
  return (
    <div className="pdf-page print-page bg-white relative overflow-hidden p-8">
      {/* Decorative corners */}
      <Cloud className="absolute top-4 left-4 w-16 h-16 text-[var(--blue)]/30" />
      <Star className="absolute top-4 right-4 w-10 h-10 text-[var(--yellow)]" filled />
      <Heart className="absolute bottom-4 left-4 w-10 h-10 text-[var(--pink)]/50" />
      <Sparkles className="absolute bottom-4 right-4 w-12 h-12 text-[var(--lilac)]/50" />

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-extrabold text-foreground mb-2">📖 Como Usar o Quadrinho</h2>
        <div className="w-32 h-1 bg-[var(--lilac)] mx-auto rounded-full" />
      </div>

      {/* What is it section */}
      <div className="bg-[var(--blue)]/20 rounded-2xl p-6 mb-6">
        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
          <Moon className="w-6 h-6 text-[var(--blue)]" />
          Para que serve?
        </h3>
        <p className="text-foreground leading-relaxed">
          O Quadrinho Interativo é um <strong>calendário mensal</strong> criado especialmente para ajudar seu filho(a) a
          desenvolver o hábito de orar todas as noites. A cada noite de oração, a criança marca uma estrelinha no
          calendário!
        </p>
      </div>

      {/* How to use section */}
      <div className="bg-[var(--pink)]/20 rounded-2xl p-6 mb-6">
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Star className="w-6 h-6 text-[var(--star-gold)]" filled />
          Como usar?
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="bg-[var(--lilac)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
              1
            </span>
            <p className="text-foreground">
              <strong>Imprima</strong> o calendário em uma folha A4
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-[var(--lilac)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
              2
            </span>
            <p className="text-foreground">
              <strong>Pendure</strong> no quarto da criança ou em local visível
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-[var(--lilac)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
              3
            </span>
            <p className="text-foreground">
              <strong>Escreva</strong> o mês no espaço indicado
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-[var(--lilac)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
              4
            </span>
            <p className="text-foreground">
              <strong>Marque</strong> cada noite de oração com estrelinhas, adesivos ou lápis colorido
            </p>
          </div>
        </div>
      </div>

      {/* Benefits section */}
      <div className="bg-[var(--yellow)]/30 rounded-2xl p-6 mb-6">
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Heart className="w-6 h-6 text-[var(--pink)]" />
          Benefícios
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[var(--star-gold)]" filled />
            <span className="text-foreground">Motivação diária</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[var(--star-gold)]" filled />
            <span className="text-foreground">Rotina saudável</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[var(--star-gold)]" filled />
            <span className="text-foreground">Disciplina espiritual</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[var(--star-gold)]" filled />
            <span className="text-foreground">Momento em família</span>
          </div>
        </div>
      </div>

      {/* Reusable note */}
      <div className="bg-[var(--lilac)]/20 rounded-2xl p-4 text-center">
        <p className="text-foreground font-semibold flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-[var(--lilac)]" />
          Reutilizável todos os meses! Imprima quantas vezes precisar.
          <Sparkles className="w-5 h-5 text-[var(--lilac)]" />
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-muted-foreground text-sm">Potinho da Fé • Quadrinho Interativo</p>
      </div>
    </div>
  )
}
