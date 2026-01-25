"use client"

import { Check, ChevronDown } from "lucide-react"
import Image from "next/image"

const services = [
  "Web Development",
  "UI/UX Design",
  "Branding",
  "Digital Marketing",
  "E-commerce Solutions",
  "Mobile App Development",
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
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services & Tech</h2>
          <div className="w-16 h-1 bg-accent mb-6" />
          <p className="text-muted-foreground max-w-2xl">
            I craft digital experiences that inspire and engage. I build for clients who care about craft, performance, and user experience.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* What I Do - Service Cards */}
          <div>
            <h3 className="text-xl font-bold mb-6">What I Do</h3>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => (
                <div 
                  key={service} 
                  className="flex items-center gap-3 p-4 border border-border rounded-lg hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium">{service}</span>
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
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors group"
                >
                  <div className="relative w-10 h-10">
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      fill
                      className="object-contain dark:filter dark:brightness-0 dark:invert dark:opacity-70 dark:group-hover:opacity-100 transition-opacity"
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
