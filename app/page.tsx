import { CoverPage } from "@/components/cover-page"
import { PresentationPage } from "@/components/presentation-page"
import { MonthlyCalendar } from "@/components/monthly-calendar"
import { WeeklyCalendar } from "@/components/weekly-calendar"
import { FinalPage } from "@/components/final-page"
import { PrintButton } from "@/components/print-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <PrintButton />
      <CoverPage />
      <PresentationPage />
      <MonthlyCalendar />
      <WeeklyCalendar />
      <FinalPage />
    </main>
  )
}
