import type { ComponentType } from "react"

interface ColoringPageProps {
  pageNumber: number
  title: string
  verse: string
  reference: string
  activity: string
  Illustration: ComponentType
}

export function ColoringPage({ pageNumber, title, verse, reference, activity, Illustration }: ColoringPageProps) {
  return (
    <div className="print-page w-[210mm] h-[297mm] mx-auto bg-white relative overflow-hidden flex flex-col p-8">
      {/* Header with title */}
      <div className="text-center mb-4">
        <span className="text-sm text-gray-400 font-medium">Pagina {pageNumber}</span>
        <h2 className="text-2xl font-bold text-gray-700 mt-1">{title}</h2>
        <div className="w-20 h-1 bg-gray-300 mx-auto rounded-full mt-2" />
      </div>

      {/* Main illustration area */}
      <div className="flex-1 flex items-center justify-center border-4 border-dashed border-gray-200 rounded-3xl mx-4 my-2">
        <Illustration />
      </div>

      {/* Bible verse */}
      <div className="text-center my-4 px-8">
        <div className="inline-block bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl px-6 py-3">
          <p className="text-lg font-semibold text-gray-700 italic">&quot;{verse}&quot;</p>
          <p className="text-sm text-gray-500 mt-1">{reference}</p>
        </div>
      </div>

      {/* Activity box */}
      <div className="mx-8 mb-4">
        <div className="flex items-center gap-3 bg-white border-2 border-gray-300 rounded-xl px-4 py-3">
          <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="16" cy="16" r="12" className="text-gray-400" />
            <path d="M16 10V16L20 20" className="text-gray-600" />
          </svg>
          <div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Atividade:</span>
            <p className="text-base font-medium text-gray-700">{activity}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-300 text-sm">Feito com amor</div>
    </div>
  )
}
