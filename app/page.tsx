import { CoverPage } from "@/components/cover-page"
import { PresentationPage } from "@/components/presentation-page"
import { MonthlyCalendar } from "@/components/monthly-calendar"
import { WeeklyCalendar } from "@/components/weekly-calendar"
import { FinalPage } from "@/components/final-page"
import { PrintButton } from "@/components/print-button"
import { ResponsivePageWrapper } from "@/components/responsive-page-wrapper"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col items-center gap-8">
      <div className="no-print fixed top-4 right-4 z-50">
        <PrintButton />
      </div>
      <ResponsivePageWrapper>
        <CoverPage />
      </ResponsivePageWrapper>
      <ResponsivePageWrapper>
        <PresentationPage />
      </ResponsivePageWrapper>
      <ResponsivePageWrapper>
        <MonthlyCalendar />
      </ResponsivePageWrapper>
      <ResponsivePageWrapper>
        <WeeklyCalendar />
      </ResponsivePageWrapper>
      <ResponsivePageWrapper>
        <FinalPage />
      </ResponsivePageWrapper>
    </main>
  )
}
