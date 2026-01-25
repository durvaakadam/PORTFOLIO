"use client"

import { Button } from "@/components/ui/button"
import { Download, ChevronDown } from "lucide-react"

const journey = [
  "Started coding in 2022",
  "Transitioned to Web Development in 2024",
  "Built 50+ Projects",
  "Worked with Startups",
  "Contributed to Open Source"
]

const techStack = [
  "React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL",
  "GraphQL", "Tailwind CSS", "Redux", "Express", "Docker", "AWS"
]

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Me */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
              <div className="w-16 h-1 bg-accent" />
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              I&apos;m a passionate Full Stack Developer based in India, with a deep love for creating beautiful, functional, and user-centered digital experiences. With a background in Computer Science, I bring both technical expertise and creative problem-solving to every project.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My journey started with a curiosity about how things work on the web, which quickly turned into a career building scalable applications. I thrive in collaborative environments and am always eager to learn new technologies to stay ahead of the curve.
            </p>
            
            <div className="flex items-center gap-8 pt-4">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <ChevronDown className="h-8 w-8 text-accent animate-bounce hidden lg:block" />
            </div>
          </div>
          
          {/* Right Column - Journey & Tech Stack */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
<ul className="space-y-0">
{journey.map((item, index) => (
  <li key={index} className="flex items-stretch gap-3 text-muted-foreground min-h-8">
    {/* Dot + line column */}
    <div className="flex flex-col items-center h-full relative">
      {/* Full vertical line (except first and last) */}
      {index !== 0 && (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-1/2 bg-accent/60" />
      )}
      {/* Dot */}
      <span className="w-2.5 h-2.5 bg-accent rounded-full z-10" />
      {/* Full vertical line (except last) */}
      {index !== journey.length - 1 && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-1/2 bg-accent/60" />
      )}
    </div>
    {/* Text */}
    <span className="leading-relaxed">{item}</span>
  </li>
))}
</ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 text-sm border border-border rounded-md text-foreground bg-background/80 shadow-md hover:bg-background/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
