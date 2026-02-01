"use client"

import { Check, ChevronDown } from "lucide-react"
import Image from "next/image"

const services = [
  "Full-Stack Development",
  "Frontend Engineering",
  "Backend APIs & Databases",
  "UI/UX Design & Prototyping",
  "Performance & Optimization",
  "Startup & MVP Development",
]

const technologies = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
  { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
  { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
  { name: "After Effects", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical Expertise
          </h2>
          <div className="w-16 h-1 bg-accent mb-6" />
          <p className="text-muted-foreground max-w-2xl">
            I design and build scalable, high-performance web applications from idea to production — with a strong focus on usability, performance, and clean architecture.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">What I Do</h3>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service}
                  className="
                    group flex items-center gap-3 p-4 rounded-lg
                    bg-white dark:bg-[#0e0e0e]
                    border border-black/10 dark:border-white/10
                    shadow-[0_6px_20px_rgba(0,0,0,0.06)]
                    dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                    hover:-translate-y-1
                    hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)]
                    dark:hover:shadow-[0_30px_80px_rgba(0,0,0,0.7)]
                    hover:border-accent/40
                    transition-all duration-300 ease-out
                  "
                >
                  <div
                    className="
                      flex items-center justify-center w-8 h-8 rounded-full
                      bg-accent/40
                      transition-transform duration-300
                      group-hover:scale-110
                    "
                  >
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="relative">
            <div className="absolute -top-8 right-0">
              <ChevronDown className="h-6 w-6 text-accent animate-bounce" />
            </div>

            <h3 className="text-xl font-bold mb-6">Technologies</h3>
            <div className="grid grid-cols-5 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="
                    flex flex-col items-center justify-center p-4 rounded-xl
                    bg-white dark:bg-[#0e0e0e]
                    border border-black/10 dark:border-white/10
                    shadow-[0_6px_20px_rgba(0,0,0,0.06)]
                    dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                    hover:scale-105
                    hover:border-accent/40
                    transition-all duration-300 ease-out
                  "
                >
                  <div className="relative w-10 h-10">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain dark:invert dark:brightness-200 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
