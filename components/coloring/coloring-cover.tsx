export function ColoringCover() {
  return (
    <div className="print-page w-[210mm] h-[297mm] mx-auto bg-white relative overflow-hidden flex flex-col items-center justify-center p-8">
      {/* Decorative border */}
      <div className="absolute inset-4 border-4 border-dashed border-gray-300 rounded-3xl" />

      {/* Corner decorations */}
      <svg
        className="absolute top-6 left-6 w-16 h-16"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path
          d="M32 8L36 20L48 16L40 28L52 32L40 36L48 48L36 44L32 56L28 44L16 48L24 36L12 32L24 28L16 16L28 20Z"
          className="text-gray-400"
        />
      </svg>
      <svg
        className="absolute top-6 right-6 w-16 h-16"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <circle cx="32" cy="32" r="20" className="text-gray-400" />
        <circle cx="32" cy="32" r="12" className="text-gray-400" />
        <circle cx="32" cy="32" r="4" className="text-gray-400" />
      </svg>
      <svg
        className="absolute bottom-6 left-6 w-16 h-16"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path
          d="M32 8C32 8 48 24 48 36C48 48 40 56 32 56C24 56 16 48 16 36C16 24 32 8 32 8Z"
          className="text-gray-400"
        />
      </svg>
      <svg
        className="absolute bottom-6 right-6 w-16 h-16"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <rect x="12" y="12" width="40" height="40" rx="8" className="text-gray-400" />
        <path d="M22 32H42M32 22V42" className="text-gray-400" />
      </svg>

      {/* Main content */}
      <div className="text-center z-10 max-w-[160mm]">
        {/* Bible illustration */}
        <div className="mb-8 flex justify-center">
          <svg
            className="w-32 h-32"
            viewBox="0 0 128 128"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Book */}
            <path d="M20 20H108V108H20V20Z" className="text-gray-600" />
            <path d="M64 20V108" className="text-gray-600" />
            <path d="M20 64H108" className="text-gray-600" />
            {/* Cross on cover */}
            <path d="M64 35V55M54 45H74" className="text-gray-800" strokeWidth="4" />
            {/* Heart */}
            <path
              d="M64 75C64 75 52 82 52 90C52 96 58 100 64 100C70 100 76 96 76 90C76 82 64 75 64 75Z"
              className="text-gray-600"
            />
            {/* Decorative lines */}
            <path d="M30 30H54M74 30H98" className="text-gray-400" />
            <path d="M30 98H54M74 98H98" className="text-gray-400" />
          </svg>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight mb-2">Caderno de Colorir</h1>
        <h2 className="text-3xl font-bold text-gray-600 mb-6">Histórias da Bíblia</h2>

        <div className="w-32 h-1 bg-gray-300 mx-auto rounded-full mb-6" />

        <p className="text-xl text-gray-500 leading-relaxed mb-8">
          Aprenda sobre a Palavra de Deus
          <br />
          enquanto se diverte!
        </p>

        {/* Decorative elements row */}
        <div className="flex justify-center gap-6 mb-8">
          <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
            <path
              d="M20 5L23 15L33 12L27 22L37 27L27 30L33 40L23 35L20 45L17 35L7 40L13 30L3 27L13 22L7 12L17 15Z"
              className="text-gray-400"
            />
          </svg>
          <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
            <path
              d="M20 8C20 8 8 16 8 24C8 32 14 36 20 36C26 36 32 32 32 24C32 16 20 8 20 8Z"
              className="text-gray-400"
            />
          </svg>
          <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="20" cy="20" r="15" className="text-gray-400" />
            <path d="M20 10V20L27 27" className="text-gray-400" />
          </svg>
        </div>

        {/* Age indicator */}
        <div className="inline-block border-2 border-dashed border-gray-400 rounded-full px-6 py-2">
          <span className="text-gray-600 font-semibold">3 a 10 anos</span>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-12 text-center">
        <p className="text-gray-400 font-semibold text-lg">Potinho da Fe</p>
      </div>
    </div>
  )
}
