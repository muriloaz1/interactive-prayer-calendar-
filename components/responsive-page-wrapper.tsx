"use client"

import React, { useEffect, useState, useRef } from "react"

const A4_WIDTH_PX = 794 // 210mm at 96dpi
const A4_HEIGHT_PX = 1123 // 297mm at 96dpi

export function ResponsivePageWrapper({ children }: { children: React.ReactNode }) {
    const [scale, setScale] = useState(1)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth
                // Calculate scale to fit container, maxing out at 1 (actual size)
                // We subtract a small buffer (e.g. 32px) for padding if needed, but w-full should handle it
                const newScale = Math.min(containerWidth / A4_WIDTH_PX, 1)
                setScale(newScale)
            }
        }

        // Initial calculation
        handleResize()

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div
            ref={containerRef}
            className="w-full flex justify-center overflow-hidden"
            style={{
                // Reserve height based on the scaled content
                height: `${A4_HEIGHT_PX * scale}px`,
                transition: "height 0.1s ease-out",
            }}
        >
            <div
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "top center",
                    width: `${A4_WIDTH_PX}px`,
                    height: `${A4_HEIGHT_PX}px`,
                    // Ensure the inner content doesn't shrink/reflow
                    flexShrink: 0,
                }}
            >
                {children}
            </div>
        </div>
    )
}
