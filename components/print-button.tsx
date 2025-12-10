"use client"

import { Button } from "@/components/ui/button"
import { Printer, Download } from "lucide-react"

export function PrintButton() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
      <Button
        onClick={handlePrint}
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg"
      >
        <Printer className="w-4 h-4 mr-2" />
        Imprimir PDF
      </Button>
      <Button
        onClick={handlePrint}
        variant="outline"
        className="font-bold shadow-lg border-primary text-primary bg-transparent"
      >
        <Download className="w-4 h-4 mr-2" />
        Salvar como PDF
      </Button>
    </div>
  )
}
