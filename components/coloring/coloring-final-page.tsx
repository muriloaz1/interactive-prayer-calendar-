export function ColoringFinalPage() {
  return (
    <div className="print-page w-[210mm] h-[297mm] mx-auto bg-white relative overflow-hidden flex flex-col items-center justify-center p-12">
      {/* Decorative border */}
      <div className="absolute inset-6 border-4 border-dashed border-gray-300 rounded-3xl" />

      {/* Corner stars */}
      <svg
        className="absolute top-10 left-10 w-12 h-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M24 4L28 16L40 12L32 24L44 28L32 32L40 44L28 40L24 52L20 40L8 44L16 32L4 28L16 24L8 12L20 16Z"
          className="text-gray-400"
        />
      </svg>
      <svg
        className="absolute top-10 right-10 w-12 h-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M24 4L28 16L40 12L32 24L44 28L32 32L40 44L28 40L24 52L20 40L8 44L16 32L4 28L16 24L8 12L20 16Z"
          className="text-gray-400"
        />
      </svg>
      <svg
        className="absolute bottom-10 left-10 w-12 h-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M24 4L28 16L40 12L32 24L44 28L32 32L40 44L28 40L24 52L20 40L8 44L16 32L4 28L16 24L8 12L20 16Z"
          className="text-gray-400"
        />
      </svg>
      <svg
        className="absolute bottom-10 right-10 w-12 h-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M24 4L28 16L40 12L32 24L44 28L32 32L40 44L28 40L24 52L20 40L8 44L16 32L4 28L16 24L8 12L20 16Z"
          className="text-gray-400"
        />
      </svg>

      {/* Main content */}
      <div className="text-center z-10 max-w-[150mm]">
        {/* Heart with cross */}
        <div className="mb-8 flex justify-center">
          <svg className="w-32 h-32" viewBox="0 0 128 128" fill="none" stroke="currentColor" strokeWidth="3">
            <path
              d="M64 120C64 120 16 80 16 48C16 24 32 8 56 8C64 8 64 16 64 16C64 16 64 8 72 8C96 8 112 24 112 48C112 80 64 120 64 120Z"
              className="text-gray-500"
            />
            <path d="M64 45V85M49 65H79" className="text-gray-600" strokeWidth="4" />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-gray-700 mb-6">Parabens!</h2>

        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Voce terminou de colorir todas as historias!
          <br />
          Continue aprendendo sobre o amor de Deus.
        </p>

        <div className="w-32 h-1 bg-gray-300 mx-auto rounded-full mb-8" />

        {/* Certificate area */}
        <div className="border-2 border-dashed border-gray-400 rounded-2xl p-6 mb-8">
          <p className="text-sm text-gray-500 mb-2">Este caderno pertence a:</p>
          <div className="border-b-2 border-gray-300 w-full h-8 mb-4" />
          <p className="text-sm text-gray-500 mb-2">Data:</p>
          <div className="border-b-2 border-gray-300 w-48 h-8 mx-auto" />
        </div>

        {/* Bible verse */}
        <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 mb-8">
          <p className="text-lg italic text-gray-600 mb-2">
            &quot;Ensina a crianca no caminho em que deve andar,
            <br />e ainda quando for velho nao se desviara dele.&quot;
          </p>
          <p className="text-sm text-gray-500">Proverbios 22:6</p>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-6">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
            <path
              d="M16 4C16 4 8 10 8 18C8 24 12 28 16 28C20 28 24 24 24 18C24 10 16 4 16 4Z"
              className="text-gray-400"
            />
          </svg>
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
            <path
              d="M16 2L18 10L26 8L20 16L28 20L20 22L26 30L18 26L16 34L14 26L6 30L12 22L4 20L12 16L6 8L14 10Z"
              className="text-gray-400"
            />
          </svg>
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
            <path
              d="M16 4C16 4 8 10 8 18C8 24 12 28 16 28C20 28 24 24 24 18C24 10 16 4 16 4Z"
              className="text-gray-400"
            />
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-12 text-center">
        <p className="text-gray-400 text-sm">Feito com amor</p>
        <p className="text-gray-500 font-semibold mt-2">Potinho da Fe</p>
      </div>
    </div>
  )
}
