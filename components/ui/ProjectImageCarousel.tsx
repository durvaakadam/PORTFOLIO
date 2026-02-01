"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import clsx from "clsx"

interface ProjectImageCarouselProps {
  images: string[]
  alt: string
}

export function ProjectImageCarousel({
  images,
  alt
}: ProjectImageCarouselProps) {
  const [index, setIndex] = useState(0)

  if (!images || images.length === 0) return null

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1))

  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className="relative aspect-[15/9] overflow-hidden rounded-xl bg-secondary/30 border border-border shadow-2xl transition-transform duration-300 hover:scale-105 cursor-pointer">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent z-10 pointer-events-none" />

      {/* Sliding track */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="relative min-w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-background/70 hover:bg-background rounded-full p-2 transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-background/70 hover:bg-background rounded-full p-2 transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={clsx(
                  "h-2 w-2 rounded-full transition-colors",
                  i === index
                    ? "bg-accent"
                    : "bg-muted-foreground/40"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
