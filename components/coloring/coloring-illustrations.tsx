export function CreationScene() {
  return (
    <svg
      className="w-full h-full max-w-[160mm] max-h-[160mm]"
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Sun */}
      <circle cx="320" cy="80" r="35" className="text-gray-600" />
      <path
        d="M320 30V45M320 115V130M270 80H285M355 80H370M283 43L293 53M347 107L357 117M283 117L293 107M347 53L357 43"
        className="text-gray-600"
      />

      {/* Moon */}
      <path
        d="M80 70C80 70 60 85 60 100C60 120 75 130 95 130C75 130 65 115 65 95C65 80 80 70 80 70Z"
        className="text-gray-600"
        strokeWidth="3"
      />

      {/* Stars */}
      <path
        d="M120 50L123 58L132 56L126 63L134 68L125 70L128 80L120 73L112 80L115 70L106 68L114 63L108 56L117 58Z"
        className="text-gray-500"
        strokeWidth="2"
      />
      <path
        d="M180 30L182 36L189 35L185 40L191 44L184 45L186 52L180 47L174 52L176 45L169 44L175 40L171 35L178 36Z"
        className="text-gray-500"
        strokeWidth="2"
      />
      <path
        d="M250 55L252 61L259 60L255 65L261 69L254 70L256 77L250 72L244 77L246 70L239 69L245 65L241 60L248 61Z"
        className="text-gray-500"
        strokeWidth="2"
      />

      {/* Mountains */}
      <path d="M0 280L80 180L160 280" className="text-gray-600" />
      <path d="M120 280L200 160L280 280" className="text-gray-600" />
      <path d="M240 280L340 200L400 280" className="text-gray-600" />

      {/* Trees */}
      <path d="M50 280V320M30 290L50 260L70 290M25 310L50 275L75 310" className="text-gray-600" />
      <path d="M350 280V320M330 290L350 260L370 290M325 310L350 275L375 310" className="text-gray-600" />

      {/* Flowers */}
      <circle cx="100" cy="350" r="12" className="text-gray-500" strokeWidth="2" />
      <circle cx="100" cy="350" r="5" className="text-gray-500" strokeWidth="2" />
      <path d="M100 362V385" className="text-gray-500" strokeWidth="2" />

      <circle cx="300" cy="355" r="10" className="text-gray-500" strokeWidth="2" />
      <circle cx="300" cy="355" r="4" className="text-gray-500" strokeWidth="2" />
      <path d="M300 365V385" className="text-gray-500" strokeWidth="2" />

      {/* Water/waves at bottom */}
      <path d="M0 380Q50 370 100 380T200 380T300 380T400 380" className="text-gray-500" strokeWidth="2" />
      <path d="M0 395Q50 385 100 395T200 395T300 395T400 395" className="text-gray-500" strokeWidth="2" />

      {/* Birds */}
      <path d="M150 120Q160 110 170 120Q180 110 190 120" className="text-gray-500" strokeWidth="2" />
      <path d="M220 100Q228 92 236 100Q244 92 252 100" className="text-gray-500" strokeWidth="2" />
    </svg>
  )
}

export function NoahArkScene() {
  return (
    <svg
      className="w-full h-full max-w-[160mm] max-h-[160mm]"
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Rainbow */}
      <path d="M30 200Q200 50 370 200" className="text-gray-600" strokeWidth="4" />
      <path d="M50 200Q200 70 350 200" className="text-gray-500" strokeWidth="4" />
      <path d="M70 200Q200 90 330 200" className="text-gray-400" strokeWidth="4" />

      {/* Ark */}
      <path d="M80 280H320L350 340H50L80 280Z" className="text-gray-600" strokeWidth="3" />
      <path d="M100 280V240H300V280" className="text-gray-600" />
      <path d="M100 240L200 180L300 240" className="text-gray-600" />

      {/* Ark details - windows */}
      <rect x="130" y="250" width="30" height="25" rx="3" className="text-gray-500" strokeWidth="2" />
      <rect x="185" y="250" width="30" height="25" rx="3" className="text-gray-500" strokeWidth="2" />
      <rect x="240" y="250" width="30" height="25" rx="3" className="text-gray-500" strokeWidth="2" />

      {/* Noah waving */}
      <circle cx="200" cy="210" r="12" className="text-gray-600" strokeWidth="2" />
      <path d="M200 222V240" className="text-gray-600" strokeWidth="2" />
      <path d="M200 225L215 210" className="text-gray-600" strokeWidth="2" />

      {/* Animals peeking */}
      {/* Giraffe head */}
      <ellipse cx="140" cy="235" rx="8" ry="12" className="text-gray-500" strokeWidth="2" />
      <path d="M135 225L133 215M145 225L147 215" className="text-gray-500" strokeWidth="2" />

      {/* Elephant head */}
      <circle cx="260" cy="235" r="10" className="text-gray-500" strokeWidth="2" />
      <path d="M270 235Q280 240 275 255" className="text-gray-500" strokeWidth="2" />

      {/* Water waves */}
      <path d="M20 360Q60 350 100 360T180 360T260 360T340 360T400 360" className="text-gray-500" strokeWidth="2" />
      <path d="M0 380Q40 370 80 380T160 380T240 380T320 380T400 380" className="text-gray-500" strokeWidth="2" />

      {/* Clouds */}
      <path
        d="M30 120Q20 100 40 90Q50 70 80 80Q100 60 120 80Q140 70 150 90Q170 100 160 120Z"
        className="text-gray-400"
        strokeWidth="2"
      />
      <path
        d="M280 100Q270 80 290 70Q300 50 330 60Q350 40 370 60Q390 50 400 70"
        className="text-gray-400"
        strokeWidth="2"
      />

      {/* Dove */}
      <path
        d="M320 140Q330 130 340 140L335 145Q340 150 335 155L320 150Q315 155 320 140Z"
        className="text-gray-500"
        strokeWidth="2"
      />
      <path d="M340 140L355 135" className="text-gray-500" strokeWidth="2" />
    </svg>
  )
}

export function DavidGoliathScene() {
  return (
    <svg
      className="w-full h-full max-w-[160mm] max-h-[160mm]"
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Goliath - large figure */}
      <circle cx="300" cy="100" r="30" className="text-gray-600" />
      <path d="M300 130V220" className="text-gray-600" strokeWidth="4" />
      <path d="M300 150L340 180M300 150L260 180" className="text-gray-600" strokeWidth="4" />
      <path d="M300 220L330 300M300 220L270 300" className="text-gray-600" strokeWidth="4" />
      {/* Goliath helmet */}
      <path d="M270 85Q300 60 330 85" className="text-gray-600" strokeWidth="2" />
      <path d="M300 60V50" className="text-gray-600" strokeWidth="2" />
      {/* Goliath face */}
      <circle cx="290" cy="95" r="4" className="text-gray-500" strokeWidth="2" />
      <circle cx="310" cy="95" r="4" className="text-gray-500" strokeWidth="2" />
      <path d="M290 115Q300 120 310 115" className="text-gray-500" strokeWidth="2" />

      {/* David - small figure */}
      <circle cx="100" cy="220" r="20" className="text-gray-600" />
      <path d="M100 240V300" className="text-gray-600" strokeWidth="3" />
      <path d="M100 260L130 240" className="text-gray-600" strokeWidth="3" />
      <path d="M100 260L70 280" className="text-gray-600" strokeWidth="3" />
      <path d="M100 300L120 360M100 300L80 360" className="text-gray-600" strokeWidth="3" />
      {/* David face - happy */}
      <circle cx="93" cy="215" r="3" className="text-gray-500" strokeWidth="2" />
      <circle cx="107" cy="215" r="3" className="text-gray-500" strokeWidth="2" />
      <path d="M93 230Q100 238 107 230" className="text-gray-500" strokeWidth="2" />
      {/* David hair */}
      <path d="M80 210Q90 195 100 200Q110 195 120 210" className="text-gray-500" strokeWidth="2" />

      {/* Slingshot */}
      <path d="M130 240Q150 230 145 250" className="text-gray-500" strokeWidth="2" />
      <path d="M145 250L170 240" className="text-gray-500" strokeWidth="2" />

      {/* 5 stones on ground - for activity */}
      <circle cx="60" cy="380" r="8" className="text-gray-500" strokeWidth="2" />
      <circle cx="90" cy="385" r="7" className="text-gray-500" strokeWidth="2" />
      <circle cx="120" cy="378" r="9" className="text-gray-500" strokeWidth="2" />
      <circle cx="150" cy="383" r="6" className="text-gray-500" strokeWidth="2" />
      <circle cx="180" cy="380" r="8" className="text-gray-500" strokeWidth="2" />

      {/* Ground line */}
      <path d="M0 370Q100 365 200 370T400 370" className="text-gray-400" strokeWidth="2" />

      {/* Hills in background */}
      <path d="M0 350Q50 320 100 350" className="text-gray-300" strokeWidth="2" />
      <path d="M350 350Q380 330 400 350" className="text-gray-300" strokeWidth="2" />

      {/* Sun */}
      <circle cx="50" cy="60" r="25" className="text-gray-500" strokeWidth="2" />
      <path
        d="M50 20V30M50 90V100M10 60H20M80 60H90M22 32L30 40M70 80L78 88M22 88L30 80M70 40L78 32"
        className="text-gray-500"
        strokeWidth="2"
      />
    </svg>
  )
}

export function DanielLionsScene() {
  return (
    <svg
      className="w-full h-full max-w-[160mm] max-h-[160mm]"
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Cave/den walls */}
      <path d="M20 50Q10 200 30 380" className="text-gray-400" strokeWidth="4" />
      <path d="M380 50Q390 200 370 380" className="text-gray-400" strokeWidth="4" />
      <path d="M20 50Q200 20 380 50" className="text-gray-400" strokeWidth="4" />

      {/* Daniel - praying figure */}
      <circle cx="200" cy="150" r="25" className="text-gray-600" />
      <path d="M200 175V250" className="text-gray-600" strokeWidth="3" />
      {/* Praying hands */}
      <path
        d="M200 200L180 180M200 200L220 180M180 180L195 175M220 180L205 175"
        className="text-gray-600"
        strokeWidth="3"
      />
      <path d="M200 250L180 320M200 250L220 320" className="text-gray-600" strokeWidth="3" />
      {/* Daniel peaceful face */}
      <path d="M190 145Q195 140 200 145" className="text-gray-500" strokeWidth="2" />
      <path d="M200 145Q205 140 210 145" className="text-gray-500" strokeWidth="2" />
      <path d="M193 162Q200 168 207 162" className="text-gray-500" strokeWidth="2" />

      {/* Lion 1 - sitting left */}
      <ellipse cx="80" cy="300" rx="40" ry="30" className="text-gray-600" />
      <circle cx="80" cy="260" r="25" className="text-gray-600" />
      {/* Mane */}
      <path d="M55 245Q45 260 55 280Q45 290 60 300" className="text-gray-500" strokeWidth="2" />
      <path d="M105 245Q115 260 105 280Q115 290 100 300" className="text-gray-500" strokeWidth="2" />
      <path d="M60 240Q80 225 100 240" className="text-gray-500" strokeWidth="2" />
      {/* Face */}
      <circle cx="72" cy="255" r="4" className="text-gray-500" strokeWidth="2" />
      <circle cx="88" cy="255" r="4" className="text-gray-500" strokeWidth="2" />
      <ellipse cx="80" cy="270" rx="6" ry="4" className="text-gray-500" strokeWidth="2" />
      {/* Tail */}
      <path d="M120 300Q140 280 135 310Q145 320 140 330" className="text-gray-500" strokeWidth="2" />

      {/* Lion 2 - sitting right */}
      <ellipse cx="320" cy="300" rx="40" ry="30" className="text-gray-600" />
      <circle cx="320" cy="260" r="25" className="text-gray-600" />
      {/* Mane */}
      <path d="M295 245Q285 260 295 280Q285 290 300 300" className="text-gray-500" strokeWidth="2" />
      <path d="M345 245Q355 260 345 280Q355 290 340 300" className="text-gray-500" strokeWidth="2" />
      <path d="M300 240Q320 225 340 240" className="text-gray-500" strokeWidth="2" />
      {/* Face */}
      <circle cx="312" cy="255" r="4" className="text-gray-500" strokeWidth="2" />
      <circle cx="328" cy="255" r="4" className="text-gray-500" strokeWidth="2" />
      <ellipse cx="320" cy="270" rx="6" ry="4" className="text-gray-500" strokeWidth="2" />
      {/* Tail */}
      <path d="M280 300Q260 280 265 310Q255 320 260 330" className="text-gray-500" strokeWidth="2" />

      {/* Lion 3 - lying down front */}
      <ellipse cx="200" cy="360" rx="50" ry="25" className="text-gray-600" />
      <circle cx="200" cy="330" r="20" className="text-gray-600" />
      {/* Small mane */}
      <path d="M180 320Q175 330 180 345" className="text-gray-500" strokeWidth="2" />
      <path d="M220 320Q225 330 220 345" className="text-gray-500" strokeWidth="2" />
      {/* Face - peaceful */}
      <path d="M192 325Q195 322 198 325" className="text-gray-500" strokeWidth="2" />
      <path d="M202 325Q205 322 208 325" className="text-gray-500" strokeWidth="2" />
      <ellipse cx="200" cy="338" rx="5" ry="3" className="text-gray-500" strokeWidth="2" />

      {/* Light rays from above */}
      <path d="M200 20V80" className="text-gray-300" strokeWidth="2" strokeDasharray="5,5" />
      <path d="M170 25L185 85" className="text-gray-300" strokeWidth="2" strokeDasharray="5,5" />
      <path d="M230 25L215 85" className="text-gray-300" strokeWidth="2" strokeDasharray="5,5" />
    </svg>
  )
}

export function JonahWhaleScene() {
  return (
    <svg
      className="w-full h-full max-w-[160mm] max-h-[160mm]"
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Whale body */}
      <path
        d="M50 200Q30 150 100 120Q200 80 300 120Q380 160 370 220Q360 280 280 300Q200 320 100 300Q30 280 50 200Z"
        className="text-gray-600"
        strokeWidth="4"
      />

      {/* Whale eye */}
      <circle cx="120" cy="180" r="15" className="text-gray-600" />
      <circle cx="125" cy="175" r="5" className="text-gray-500" />

      {/* Whale smile */}
      <path d="M80 220Q120 250 180 230" className="text-gray-600" strokeWidth="3" />

      {/* Whale fin */}
      <path d="M200 150Q230 100 260 150" className="text-gray-600" strokeWidth="3" />

      {/* Whale tail */}
      <path d="M350 200Q380 180 390 150M350 200Q380 220 390 250" className="text-gray-600" strokeWidth="3" />
      <path d="M390 150Q400 200 390 250" className="text-gray-500" strokeWidth="2" />

      {/* Jonah inside whale (belly area) */}
      <circle cx="200" cy="220" r="18" className="text-gray-500" strokeWidth="2" />
      <path d="M200 238V270" className="text-gray-500" strokeWidth="2" />
      <path d="M200 250L185 265M200 250L215 265" className="text-gray-500" strokeWidth="2" />
      {/* Jonah praying */}
      <path d="M190 255L200 245L210 255" className="text-gray-500" strokeWidth="2" />
      {/* Jonah face */}
      <circle cx="195" cy="215" r="2" className="text-gray-500" />
      <circle cx="205" cy="215" r="2" className="text-gray-500" />

      {/* Water waves */}
      <path d="M0 340Q40 330 80 340T160 340T240 340T320 340T400 340" className="text-gray-500" strokeWidth="2" />
      <path d="M0 360Q40 350 80 360T160 360T240 360T320 360T400 360" className="text-gray-500" strokeWidth="2" />
      <path d="M0 380Q40 370 80 380T160 380T240 380T320 380T400 380" className="text-gray-500" strokeWidth="2" />

      {/* Bubbles - for activity */}
      <circle cx="60" cy="300" r="8" className="text-gray-400" strokeWidth="2" />
      <circle cx="85" cy="280" r="5" className="text-gray-400" strokeWidth="2" />
      <circle cx="50" cy="260" r="6" className="text-gray-400" strokeWidth="2" />
      <circle cx="340" cy="290" r="7" className="text-gray-400" strokeWidth="2" />
      <circle cx="360" cy="310" r="4" className="text-gray-400" strokeWidth="2" />

      {/* Water splash */}
      <path d="M300 100Q310 80 320 100" className="text-gray-400" strokeWidth="2" />
      <path d="M315 90Q325 70 335 90" className="text-gray-400" strokeWidth="2" />

      {/* Fish in water */}
      <path
        d="M30 360Q40 355 50 360L45 365Q50 370 45 375L30 370Q25 375 30 360Z"
        className="text-gray-400"
        strokeWidth="2"
      />
      <path d="M380 350Q390 345 400 350" className="text-gray-400" strokeWidth="2" />
    </svg>
  )
}

export function JesusCalmingStormScene() {
  return (
    <svg
      className="w-full h-full max-w-[160mm] max-h-[160mm]"
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Sun breaking through - for activity */}
      <circle cx="350" cy="60" r="30" className="text-gray-500" strokeWidth="2" />
      <path
        d="M350 15V25M350 95V105M305 60H315M385 60H395M320 30L328 38M372 82L380 90M320 90L328 82M372 38L380 30"
        className="text-gray-500"
        strokeWidth="2"
      />

      {/* Clouds dispersing */}
      <path
        d="M20 60Q10 40 30 30Q40 10 70 20Q90 0 110 20Q130 10 140 30Q160 40 150 60Z"
        className="text-gray-400"
        strokeWidth="2"
      />
      <path
        d="M180 40Q170 20 190 10Q200 -10 230 0Q250 -20 270 0Q290 -10 300 10Q320 20 310 40Z"
        className="text-gray-400"
        strokeWidth="2"
      />

      {/* Boat */}
      <path d="M60 280H340L370 340H30L60 280Z" className="text-gray-600" strokeWidth="3" />
      <path d="M60 280Q200 260 340 280" className="text-gray-600" strokeWidth="2" />

      {/* Mast */}
      <path d="M200 280V140" className="text-gray-600" strokeWidth="3" />

      {/* Sail */}
      <path d="M200 150L280 220L200 250Z" className="text-gray-500" strokeWidth="2" />

      {/* Jesus standing - calm pose */}
      <circle cx="280" cy="220" r="18" className="text-gray-600" />
      <path d="M280 238V280" className="text-gray-600" strokeWidth="3" />
      {/* Arms extended - calming gesture */}
      <path d="M280 250L310 235M280 250L250 235" className="text-gray-600" strokeWidth="3" />
      {/* Peaceful face */}
      <circle cx="275" cy="215" r="2" className="text-gray-500" />
      <circle cx="285" cy="215" r="2" className="text-gray-500" />
      <path d="M275 228Q280 232 285 228" className="text-gray-500" strokeWidth="2" />
      {/* Halo */}
      <circle cx="280" cy="220" r="25" className="text-gray-300" strokeWidth="1" strokeDasharray="3,3" />

      {/* Disciples - afraid poses */}
      <circle cx="100" cy="240" r="12" className="text-gray-600" strokeWidth="2" />
      <path d="M100 252V275" className="text-gray-600" strokeWidth="2" />
      <path d="M100 258L85 270M100 258L115 250" className="text-gray-600" strokeWidth="2" />

      <circle cx="150" cy="250" r="12" className="text-gray-600" strokeWidth="2" />
      <path d="M150 262V280" className="text-gray-600" strokeWidth="2" />

      {/* Calming waves */}
      <path d="M0 360Q50 350 100 360T200 360T300 360T400 360" className="text-gray-500" strokeWidth="2" />
      <path d="M0 380Q50 370 100 380T200 380T300 380T400 380" className="text-gray-500" strokeWidth="2" />

      {/* Light rays from Jesus */}
      <path d="M310 220H350" className="text-gray-300" strokeWidth="2" strokeDasharray="4,4" />
      <path d="M300 200L340 180" className="text-gray-300" strokeWidth="2" strokeDasharray="4,4" />
      <path d="M300 240L340 260" className="text-gray-300" strokeWidth="2" strokeDasharray="4,4" />
    </svg>
  )
}

export function MultiplicationBreadScene() {
  return (
    <svg
      className="w-full h-full max-w-[160mm] max-h-[160mm]"
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Jesus */}
      <circle cx="200" cy="100" r="25" className="text-gray-600" />
      <path d="M200 125V200" className="text-gray-600" strokeWidth="3" />
      <path d="M200 150L240 180M200 150L160 180" className="text-gray-600" strokeWidth="3" />
      <path d="M200 200L220 260M200 200L180 260" className="text-gray-600" strokeWidth="3" />
      {/* Face */}
      <circle cx="192" cy="95" r="3" className="text-gray-500" />
      <circle cx="208" cy="95" r="3" className="text-gray-500" />
      <path d="M193 110Q200 116 207 110" className="text-gray-500" strokeWidth="2" />
      {/* Halo */}
      <circle cx="200" cy="100" r="32" className="text-gray-300" strokeWidth="1" strokeDasharray="3,3" />

      {/* Basket */}
      <path d="M160 180H240L250 220H150L160 180Z" className="text-gray-600" />
      <path d="M155 200H245" className="text-gray-500" strokeWidth="2" />

      {/* Bread loaves - for counting */}
      <ellipse cx="100" cy="300" rx="25" ry="15" className="text-gray-600" />
      <path d="M85 300Q100 290 115 300" className="text-gray-500" strokeWidth="2" />

      <ellipse cx="170" cy="310" rx="25" ry="15" className="text-gray-600" />
      <path d="M155 310Q170 300 185 310" className="text-gray-500" strokeWidth="2" />

      <ellipse cx="240" cy="305" rx="25" ry="15" className="text-gray-600" />
      <path d="M225 305Q240 295 255 305" className="text-gray-500" strokeWidth="2" />

      <ellipse cx="310" cy="300" rx="25" ry="15" className="text-gray-600" />
      <path d="M295 300Q310 290 325 300" className="text-gray-500" strokeWidth="2" />

      <ellipse cx="200" cy="340" rx="25" ry="15" className="text-gray-600" />
      <path d="M185 340Q200 330 215 340" className="text-gray-500" strokeWidth="2" />

      {/* Fish - for counting */}
      <path
        d="M80 370Q95 360 110 370L105 375Q110 385 100 390L80 380Q70 385 80 370Z"
        className="text-gray-600"
        strokeWidth="2"
      />
      <circle cx="88" cy="372" r="2" className="text-gray-500" />

      <path
        d="M320 365Q335 355 350 365L345 370Q350 380 340 385L320 375Q310 380 320 365Z"
        className="text-gray-600"
        strokeWidth="2"
      />
      <circle cx="328" cy="367" r="2" className="text-gray-500" />

      {/* People in background */}
      <circle cx="50" cy="200" r="10" className="text-gray-400" strokeWidth="2" />
      <path d="M50 210V240" className="text-gray-400" strokeWidth="2" />

      <circle cx="80" cy="210" r="10" className="text-gray-400" strokeWidth="2" />
      <path d="M80 220V250" className="text-gray-400" strokeWidth="2" />

      <circle cx="320" cy="200" r="10" className="text-gray-400" strokeWidth="2" />
      <path d="M320 210V240" className="text-gray-400" strokeWidth="2" />

      <circle cx="350" cy="210" r="10" className="text-gray-400" strokeWidth="2" />
      <path d="M350 220V250" className="text-gray-400" strokeWidth="2" />

      {/* Grass */}
      <path
        d="M0 390Q20 385 40 390T80 390T120 390T160 390T200 390T240 390T280 390T320 390T360 390T400 390"
        className="text-gray-400"
        strokeWidth="2"
      />
    </svg>
  )
}

export function BirthOfJesusScene() {
  return (
    <svg
      className="w-full h-full max-w-[160mm] max-h-[160mm]"
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Stable structure */}
      <path d="M50 180L200 80L350 180" className="text-gray-600" strokeWidth="4" />
      <path d="M70 180V350H330V180" className="text-gray-600" strokeWidth="3" />
      <path d="M200 80V180" className="text-gray-500" strokeWidth="2" />

      {/* Big star - for activity */}
      <path
        d="M200 20L210 50L245 45L220 65L240 95L200 75L160 95L180 65L155 45L190 50Z"
        className="text-gray-600"
        strokeWidth="2"
      />

      {/* Small stars */}
      <path
        d="M80 60L83 68L92 66L86 73L92 80L83 78L80 86L77 78L68 80L74 73L68 66L77 68Z"
        className="text-gray-500"
        strokeWidth="1.5"
      />
      <path
        d="M320 50L323 58L332 56L326 63L332 70L323 68L320 76L317 68L308 70L314 63L308 56L317 58Z"
        className="text-gray-500"
        strokeWidth="1.5"
      />
      <path
        d="M130 100L132 106L140 105L135 110L140 116L132 114L130 120L128 114L120 116L125 110L120 105L128 106Z"
        className="text-gray-500"
        strokeWidth="1.5"
      />
      <path
        d="M280 90L282 96L290 95L285 100L290 106L282 104L280 110L278 104L270 106L275 100L270 95L278 96Z"
        className="text-gray-500"
        strokeWidth="1.5"
      />

      {/* Manger with baby Jesus */}
      <path d="M160 320H240V290H160V320Z" className="text-gray-600" />
      <path d="M150 320H250" className="text-gray-600" strokeWidth="3" />
      {/* Hay */}
      <path
        d="M165 290L170 270M180 290L175 275M195 290L200 268M215 290L210 275M230 290L235 270"
        className="text-gray-400"
        strokeWidth="2"
      />
      {/* Baby Jesus */}
      <ellipse cx="200" cy="300" rx="25" ry="12" className="text-gray-500" strokeWidth="2" />
      <circle cx="200" cy="285" r="12" className="text-gray-600" />
      {/* Halo */}
      <circle cx="200" cy="285" r="18" className="text-gray-300" strokeWidth="1" strokeDasharray="2,2" />

      {/* Mary */}
      <circle cx="130" cy="250" r="18" className="text-gray-600" />
      <path d="M130 268V340" className="text-gray-600" strokeWidth="3" />
      {/* Veil */}
      <path d="M110 240Q130 225 150 240Q155 280 130 300Q105 280 110 240Z" className="text-gray-500" strokeWidth="2" />
      {/* Face */}
      <circle cx="125" cy="247" r="2" className="text-gray-500" />
      <circle cx="135" cy="247" r="2" className="text-gray-500" />
      <path d="M125 258Q130 262 135 258" className="text-gray-500" strokeWidth="2" />

      {/* Joseph */}
      <circle cx="270" cy="250" r="18" className="text-gray-600" />
      <path d="M270 268V340" className="text-gray-600" strokeWidth="3" />
      <path d="M270 280L290 320" className="text-gray-600" strokeWidth="3" />
      {/* Beard */}
      <path d="M260 265Q270 280 280 265" className="text-gray-500" strokeWidth="2" />
      {/* Face */}
      <circle cx="265" cy="247" r="2" className="text-gray-500" />
      <circle cx="275" cy="247" r="2" className="text-gray-500" />

      {/* Animals */}
      {/* Sheep */}
      <ellipse cx="80" cy="340" rx="20" ry="15" className="text-gray-500" strokeWidth="2" />
      <circle cx="70" cy="330" r="10" className="text-gray-500" strokeWidth="2" />
      <path d="M60 340V355M75 345V355M85 340V355M95 345V355" className="text-gray-500" strokeWidth="2" />

      {/* Donkey head */}
      <ellipse cx="320" cy="320" rx="15" ry="20" className="text-gray-500" strokeWidth="2" />
      <path d="M310 305L305 285M330 305L335 285" className="text-gray-500" strokeWidth="2" />
      <circle cx="315" cy="315" r="2" className="text-gray-500" />
    </svg>
  )
}

export function LostSheepScene() {
  return (
    <svg
      className="w-full h-full max-w-[160mm] max-h-[160mm]"
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Hills background */}
      <path d="M0 200Q100 150 200 200T400 200V400H0Z" className="text-gray-300" strokeWidth="2" />
      <path d="M0 250Q80 220 160 250T320 250T400 250" className="text-gray-400" strokeWidth="2" />

      {/* Shepherd (Jesus) */}
      <circle cx="280" cy="180" r="22" className="text-gray-600" />
      <path d="M280 202V300" className="text-gray-600" strokeWidth="3" />
      <path d="M280 230L310 260M280 230L250 260" className="text-gray-600" strokeWidth="3" />
      <path d="M280 300L260 370M280 300L300 370" className="text-gray-600" strokeWidth="3" />
      {/* Shepherd staff */}
      <path d="M250 260V350" className="text-gray-600" strokeWidth="3" />
      <path d="M250 260Q230 260 230 280" className="text-gray-600" strokeWidth="3" />
      {/* Face - loving expression */}
      <circle cx="273" cy="175" r="3" className="text-gray-500" />
      <circle cx="287" cy="175" r="3" className="text-gray-500" />
      <path d="M273 192Q280 200 287 192" className="text-gray-500" strokeWidth="2" />
      {/* Beard */}
      <path d="M268 195Q280 210 292 195" className="text-gray-500" strokeWidth="2" />

      {/* Lost sheep - separate, looking scared */}
      <ellipse cx="80" cy="150" rx="30" ry="22" className="text-gray-600" />
      <circle cx="55" cy="135" r="18" className="text-gray-600" />
      {/* Woolly texture */}
      <path d="M60 130Q55 120 65 125Q70 115 75 125Q85 120 80 130" className="text-gray-500" strokeWidth="2" />
      <path
        d="M50 155Q45 165 60 165Q55 175 70 170Q65 180 80 175Q75 185 90 180Q100 175 105 165Q115 160 110 150"
        className="text-gray-500"
        strokeWidth="2"
      />
      {/* Face */}
      <circle cx="48" cy="132" r="3" className="text-gray-500" />
      <circle cx="60" cy="132" r="3" className="text-gray-500" />
      <ellipse cx="54" cy="145" rx="4" ry="3" className="text-gray-500" />
      {/* Legs */}
      <path d="M65 172V195M85 172V195" className="text-gray-600" strokeWidth="2" />

      {/* Path/trail - for activity: help shepherd find sheep */}
      <path
        d="M100 180Q150 200 180 250Q210 300 250 320"
        className="text-gray-400"
        strokeWidth="2"
        strokeDasharray="8,8"
      />

      {/* Other sheep in group */}
      <ellipse cx="350" cy="330" rx="22" ry="16" className="text-gray-500" strokeWidth="2" />
      <circle cx="335" cy="320" r="12" className="text-gray-500" strokeWidth="2" />

      <ellipse cx="320" cy="350" rx="20" ry="14" className="text-gray-500" strokeWidth="2" />
      <circle cx="307" cy="342" r="10" className="text-gray-500" strokeWidth="2" />

      <ellipse cx="370" cy="360" rx="18" ry="12" className="text-gray-500" strokeWidth="2" />
      <circle cx="360" cy="352" r="9" className="text-gray-500" strokeWidth="2" />

      {/* Sun */}
      <circle cx="350" cy="50" r="25" className="text-gray-500" strokeWidth="2" />
      <path
        d="M350 10V20M350 80V90M310 50H320M380 50H390M322 22L330 30M370 70L378 78M322 78L330 70M370 30L378 22"
        className="text-gray-500"
        strokeWidth="2"
      />

      {/* Flowers */}
      <circle cx="150" cy="380" r="8" className="text-gray-400" strokeWidth="2" />
      <circle cx="150" cy="380" r="3" className="text-gray-400" strokeWidth="2" />
      <path d="M150 388V400" className="text-gray-400" strokeWidth="2" />

      <circle cx="220" cy="385" r="6" className="text-gray-400" strokeWidth="2" />
      <path d="M220 391V400" className="text-gray-400" strokeWidth="2" />
    </svg>
  )
}

export function JesusChildrenScene() {
  return (
    <svg
      className="w-full h-full max-w-[160mm] max-h-[160mm]"
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Background - simple outdoor setting */}
      <path d="M0 320Q100 300 200 320T400 320V400H0Z" className="text-gray-300" strokeWidth="2" />

      {/* Tree */}
      <path d="M50 220V380" className="text-gray-600" strokeWidth="4" />
      <circle cx="50" cy="180" r="50" className="text-gray-400" strokeWidth="2" />
      <circle cx="20" cy="200" r="30" className="text-gray-400" strokeWidth="2" />
      <circle cx="80" cy="200" r="30" className="text-gray-400" strokeWidth="2" />

      {/* Jesus seated */}
      <circle cx="200" cy="200" r="28" className="text-gray-600" />
      <path d="M200 228V310" className="text-gray-600" strokeWidth="3" />
      {/* Arms open welcoming */}
      <path d="M200 250L250 220M200 250L150 220" className="text-gray-600" strokeWidth="3" />
      {/* Seated legs */}
      <path d="M200 310Q180 320 160 310M200 310Q220 320 240 310" className="text-gray-600" strokeWidth="3" />
      {/* Loving face */}
      <circle cx="190" cy="195" r="4" className="text-gray-500" />
      <circle cx="210" cy="195" r="4" className="text-gray-500" />
      <path d="M188 215Q200 225 212 215" className="text-gray-500" strokeWidth="2" />
      {/* Hair/beard */}
      <path d="M172 195Q180 175 200 170Q220 175 228 195" className="text-gray-500" strokeWidth="2" />
      <path d="M185 225Q200 240 215 225" className="text-gray-500" strokeWidth="2" />
      {/* Halo */}
      <circle cx="200" cy="200" r="38" className="text-gray-300" strokeWidth="1" strokeDasharray="3,3" />

      {/* Child 1 - running to Jesus */}
      <circle cx="130" cy="270" r="15" className="text-gray-600" strokeWidth="2" />
      <path d="M130 285V330" className="text-gray-600" strokeWidth="2" />
      <path d="M130 295L145 280" className="text-gray-600" strokeWidth="2" />
      <path d="M130 330L120 360M130 330L140 360" className="text-gray-600" strokeWidth="2" />
      {/* Happy face */}
      <circle cx="126" cy="267" r="2" className="text-gray-500" />
      <circle cx="134" cy="267" r="2" className="text-gray-500" />
      <path d="M126 278Q130 282 134 278" className="text-gray-500" strokeWidth="1.5" />

      {/* Child 2 - closer to Jesus */}
      <circle cx="170" cy="290" r="12" className="text-gray-600" strokeWidth="2" />
      <path d="M170 302V340" className="text-gray-600" strokeWidth="2" />
      <path d="M170 340L162 370M170 340L178 370" className="text-gray-600" strokeWidth="2" />
      {/* Pigtails */}
      <circle cx="160" cy="285" r="5" className="text-gray-500" strokeWidth="1.5" />
      <circle cx="180" cy="285" r="5" className="text-gray-500" strokeWidth="1.5" />

      {/* Child 3 - on other side */}
      <circle cx="270" cy="275" r="14" className="text-gray-600" strokeWidth="2" />
      <path d="M270 289V335" className="text-gray-600" strokeWidth="2" />
      <path d="M270 300L255 315" className="text-gray-600" strokeWidth="2" />
      <path d="M270 335L260 365M270 335L280 365" className="text-gray-600" strokeWidth="2" />
      {/* Happy face */}
      <circle cx="266" cy="272" r="2" className="text-gray-500" />
      <circle cx="274" cy="272" r="2" className="text-gray-500" />
      <path d="M266 283Q270 287 274 283" className="text-gray-500" strokeWidth="1.5" />

      {/* Child 4 - small toddler */}
      <circle cx="230" cy="300" r="10" className="text-gray-600" strokeWidth="2" />
      <path d="M230 310V340" className="text-gray-600" strokeWidth="2" />
      <path d="M230 340L224 365M230 340L236 365" className="text-gray-600" strokeWidth="2" />

      {/* Empty space for "draw yourself" activity */}
      <rect
        x="300"
        y="280"
        width="80"
        height="100"
        rx="10"
        className="text-gray-300"
        strokeWidth="2"
        strokeDasharray="5,5"
      />
      <text x="340" y="340" textAnchor="middle" className="text-gray-400" fontSize="10" fontFamily="sans-serif">
        Voce!
      </text>

      {/* Flowers */}
      <circle cx="320" cy="390" r="6" className="text-gray-400" strokeWidth="1.5" />
      <path d="M320 396V400" className="text-gray-400" strokeWidth="1.5" />

      <circle cx="100" cy="385" r="5" className="text-gray-400" strokeWidth="1.5" />
      <path d="M100 390V400" className="text-gray-400" strokeWidth="1.5" />

      {/* Birds */}
      <path d="M350 80Q358 72 366 80Q374 72 382 80" className="text-gray-400" strokeWidth="2" />
      <path d="M300 100Q308 92 316 100Q324 92 332 100" className="text-gray-400" strokeWidth="2" />

      {/* Sun */}
      <circle cx="380" cy="40" r="20" className="text-gray-500" strokeWidth="2" />
      <path d="M380 10V15M380 65V70M350 40H355M405 40H410" className="text-gray-500" strokeWidth="2" />
    </svg>
  )
}
