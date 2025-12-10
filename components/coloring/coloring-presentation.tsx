export function ColoringPresentation() {
  return (
    <div className="print-page w-[210mm] h-[297mm] mx-auto bg-white relative overflow-hidden flex flex-col p-12">
      {/* Decorative corner elements */}
      <svg
        className="absolute top-4 left-4 w-12 h-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M24 4L28 16L40 12L32 24L44 28L32 32L40 44L28 40L24 52L20 40L8 44L16 32L4 28L16 24L8 12L20 16Z"
          className="text-gray-300"
        />
      </svg>
      <svg
        className="absolute top-4 right-4 w-12 h-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="24" cy="24" r="16" className="text-gray-300" />
        <circle cx="24" cy="24" r="8" className="text-gray-300" />
      </svg>

      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Queridos Pais e Responsaveis</h2>
        <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full" />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-6 text-gray-600 leading-relaxed">
        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6">
          <h3 className="font-bold text-lg text-gray-700 mb-3 flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8Z" />
            </svg>
            Por que colorir e importante?
          </h3>
          <p className="text-base">
            Colorir e muito mais do que uma atividade divertida! Ajuda no desenvolvimento da coordenacao motora fina,
            estimula a criatividade, melhora a concentracao e proporciona momentos de calma e relaxamento. Quando
            combinado com historias biblicas, torna-se uma ferramenta poderosa de aprendizado.
          </p>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6">
          <h3 className="font-bold text-lg text-gray-700 mb-3 flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4H20V20H4V4Z" />
              <path d="M12 4V20M4 12H20" />
              <path d="M12 7V11M9 9H15" strokeWidth="3" />
            </svg>
            Como este material ajuda?
          </h3>
          <p className="text-base">
            Este caderno foi criado para apresentar as principais historias da Biblia de forma ludica e acessivel. Cada
            pagina traz um desenho simples, uma frase biblica adaptada para criancas e uma mini-atividade que reforça o
            aprendizado. E uma forma carinhosa de plantar sementes de fe no coracao dos pequenos.
          </p>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6">
          <h3 className="font-bold text-lg text-gray-700 mb-3 flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 4C12 4 6 8 6 14C6 18 9 20 12 20C15 20 18 18 18 14C18 8 12 4 12 4Z" />
            </svg>
            Como usar este caderno?
          </h3>
          <ul className="text-base space-y-2 ml-4">
            <li>• Leia a historia biblica com seu filho antes de colorir</li>
            <li>• Deixe a crianca escolher as cores livremente</li>
            <li>• Faca as atividades juntos e converse sobre a mensagem</li>
            <li>• Use como momento de conexao e oracao em familia</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
          <h3 className="font-bold text-lg text-gray-700 mb-2 text-center">Idade Recomendada</h3>
          <p className="text-center text-2xl font-bold text-gray-600">3 a 10 anos</p>
          <p className="text-center text-sm text-gray-500 mt-2">
            Os desenhos tem tracos grossos e simples, ideais para criancas em diferentes fases de desenvolvimento.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 pt-6 border-t-2 border-dashed border-gray-200">
        <p className="text-gray-400 text-sm">Feito com amor para fortalecer a fe das criancas</p>
      </div>
    </div>
  )
}
