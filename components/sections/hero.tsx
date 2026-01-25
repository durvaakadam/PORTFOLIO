"use client"

import { MapPin, Layers } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 relative" data-aos="fade-up">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT — BIG NAME */}
        <div className="flex flex-col justify-center lg:pl-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-[0.95] tracking-[-0.03em]">
            DURVA
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-[0.95] tracking-[-0.03em] -mt-2">
            KADAM
          </h1>

{/* <div className="mt-6 inline-flex items-center">
<span
className="
inline-flex items-center
px-6 py-2.5
rounded-full
bg-emerald-500/10
border border-emerald-500/30
text-sm font-semibold
tracking-wide
text-emerald-400
shadow-sm
"
>
FULL STACK DEVELOPER
</span>
</div> */}

<div className="mt-8 flex items-center gap-4">
  {/* Accent line */}
  <div className="h-px w-16 bg-emerald-500/60" />

  {/* Role with soft background */}
  <span
    className="
      relative px-4 py-1.5
      text-sm font-medium tracking-[0.3em] uppercase
      text-emerald-400
      bg-emerald-500/10
      rounded-sm
      backdrop-blur
    "
  >
    Full Stack Developer
  </span>
</div>
        </div>

        {/* RIGHT — TAGLINE + LOCATION */}
        <div className="flex flex-col justify-center text-left max-w-md relative pl-6">

          {/* Vertical accent */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-48 w-[3px] bg-accent rounded-full" />
          
          {/* Tagline */}
          <div className="space-y-2">
            <p className="text-base sm:text-lg tracking-[0.32em] text-muted-foreground uppercase">
              I Design And Build Products That
            </p>
            <p className="text-3xl sm:text-4xl italic font-serif">
              deliver real impact.
            </p>
          </div>

          {/* Capability line */}
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Turning complex problems into clean, scalable digital experiences.
          </p>

          <div className="h-14" />

          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-accent mt-1" />
            <div>
              <p className="text-sm font-semibold tracking-wide">
                BASED IN INDIA<span className="text-accent">,</span>
              </p>
              <p className="text-xs text-muted-foreground">INDIA</p>
            </div>
          </div>

          {/* Role */}
          <div className="flex items-start gap-3 mt-6">
            <Layers className="h-5 w-5 text-accent mt-1" />
            <div>
              <p className="text-sm font-semibold tracking-wide">
                FULL STACK DEV<span className="text-accent">,</span>
              </p>
              <p className="text-xs text-muted-foreground">& SYSTEMS FOCUSED</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}



