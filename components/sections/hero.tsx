"use client"

import { MapPin, Layers } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex items-center px-6">
        <div className="w-full max-w-xl text-center lg:text-left">
          
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-[-0.02em]">
            DURVA
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-[-0.02em] -mt-1">
            KADAM
          </h1>

          {/* Badge */}
          <div className="mt-4 flex justify-center lg:justify-start">
            <span className="inline-block px-4 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs tracking-widest uppercase">
              Full Stack Developer
            </span>
          </div>

          {/* Tagline */}
          <div className="mt-6 space-y-1">
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
              I Design And Build Products That
            </p>
            <p className="text-xl sm:text-2xl italic font-serif">
              deliver real impact.
            </p>
          </div>
        </div>
      </div>

      {/* Image */}
      <div
        className="
          absolute bottom-0
          w-[320px] sm:w-[380px] md:w-[420px]
          h-[440px] sm:h-[500px] md:h-[560px]
          left-1/2 -translate-x-1/2
          lg:left-auto lg:right-0 lg:translate-x-0
          lg:w-[500px] lg:h-[650px]
        "
      >
        <Image
          src="/images/profile.png"
          alt="Durva Kadam"
          fill
          className="object-contain object-bottom drop-shadow-2xl"
          priority
        />
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 flex justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-accent" />
          <div>
            <p className="text-xs font-semibold">BASED IN INDIA,</p>
            <p className="text-xs text-muted-foreground">INDIA</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-accent" />
          <div>
            <p className="text-xs font-semibold">FULL STACK DEV,</p>
            <p className="text-xs text-muted-foreground">& DESIGNER</p>
          </div>
        </div>
      </div>
    </section>
  )
}