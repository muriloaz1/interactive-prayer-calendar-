import { ColoringCover } from "@/components/coloring/coloring-cover"
import { ColoringPresentation } from "@/components/coloring/coloring-presentation"
import { ColoringPage } from "@/components/coloring/coloring-page"
import { ColoringFinalPage } from "@/components/coloring/coloring-final-page"
import { PrintButton } from "@/components/print-button"
import {
  CreationScene,
  NoahArkScene,
  DavidGoliathScene,
  DanielLionsScene,
  JonahWhaleScene,
  JesusCalmingStormScene,
  MultiplicationBreadScene,
  BirthOfJesusScene,
  LostSheepScene,
  JesusChildrenScene,
} from "@/components/coloring/coloring-illustrations"

const coloringPages = [
  {
    title: "A Criação do Mundo",
    verse: "Deus fez tudo muito bonito!",
    reference: "Gênesis 1:31",
    activity: "Conte quantas estrelas você vê!",
    illustration: CreationScene,
  },
  {
    title: "Noé e a Arca",
    verse: "Noé obedeceu a Deus e salvou os animais!",
    reference: "Gênesis 6:22",
    activity: "Trace o caminho até a arca!",
    illustration: NoahArkScene,
  },
  {
    title: "Davi e Golias",
    verse: "Com Deus, podemos vencer qualquer gigante!",
    reference: "1 Samuel 17:45",
    activity: "Circule as 5 pedras de Davi!",
    illustration: DavidGoliathScene,
  },
  {
    title: "Daniel na Cova dos Leões",
    verse: "Deus protege quem confia Nele!",
    reference: "Daniel 6:22",
    activity: "Quantos leões você conta?",
    illustration: DanielLionsScene,
  },
  {
    title: "Jonas e o Grande Peixe",
    verse: "Deus sempre nos dá uma segunda chance!",
    reference: "Jonas 2:10",
    activity: "Desenhe bolhas ao redor do peixe!",
    illustration: JonahWhaleScene,
  },
  {
    title: "Jesus Acalma a Tempestade",
    verse: "Jesus tem poder sobre tudo!",
    reference: "Marcos 4:39",
    activity: "Circule o sol que aparece!",
    illustration: JesusCalmingStormScene,
  },
  {
    title: "A Multiplicação dos Pães",
    verse: "Jesus cuida de todas as nossas necessidades!",
    reference: "João 6:11",
    activity: "Conte os pães e os peixes!",
    illustration: MultiplicationBreadScene,
  },
  {
    title: "O Nascimento de Jesus",
    verse: "Jesus nasceu para nos amar!",
    reference: "Lucas 2:11",
    activity: "Desenhe mais estrelas no céu!",
    illustration: BirthOfJesusScene,
  },
  {
    title: "A Ovelha Perdida",
    verse: "Jesus nos ama tanto que vai atrás de nós!",
    reference: "Lucas 15:6",
    activity: "Ajude o pastor a encontrar a ovelha!",
    illustration: LostSheepScene,
  },
  {
    title: "Jesus e as Crianças",
    verse: "Jesus ama todas as crianças!",
    reference: "Marcos 10:14",
    activity: "Desenhe você perto de Jesus!",
    illustration: JesusChildrenScene,
  },
]

export default function ColorirPage() {
  return (
    <main className="min-h-screen">
      <PrintButton />
      <ColoringCover />
      <ColoringPresentation />
      {coloringPages.map((page, index) => (
        <ColoringPage
          key={index}
          pageNumber={index + 1}
          title={page.title}
          verse={page.verse}
          reference={page.reference}
          activity={page.activity}
          Illustration={page.illustration}
        />
      ))}
      <ColoringFinalPage />
    </main>
  )
}
