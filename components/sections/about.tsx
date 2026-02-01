"use client"

import { Button } from "@/components/ui/button"
import { Download, ChevronDown } from "lucide-react"

const journey = [
  "Started coding in 2022",
  "Transitioned into full-stack development in 2024",
  "Interned as a Backend Engineer",
  "Participated in national-level hackathons",
  "Contributed to open-source projects",
]

const techStack = [
  "React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL",
  "GraphQL", "Tailwind CSS", "Redux", "Express", "Docker", "AWS",
]

export function About() {
  return (
    <section id="about" className="py-20 px-4" data-aos="fade-up" data-aos-duration="900">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About Me
              </h2>
              <div className="w-16 h-1 bg-accent" />
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I’m a Full Stack Developer and Computer Science undergraduate based in Mumbai,
              with a strong focus on building scalable, production-grade web systems.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              My work spans modern frontend development with React and Next.js,
              robust backend systems using Node.js, Express, and FastAPI,
              and AI-driven platforms involving RAG pipelines, agentic workflows,
              and large-scale document intelligence systems.
            </p>

            <div className="flex items-center gap-8 pt-4">
              <a href="/DURVA_KADAM.pdf" download target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full bg-accent text-white hover:bg-accent/80 px-6 py-2 text-base font-semibold shadow-none">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
              <ChevronDown className="h-8 w-8 text-accent animate-bounce hidden lg:block" />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10" data-aos="fade-up" data-aos-delay="200">
            
            {/* Journey */}
            <div>
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>

              <ul className="space-y-0">
                {journey.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 min-h-8 transition-all duration-300 hover:pl-2 cursor-pointer group"
                  >
                    {/* Timeline */}
                    <div className="flex flex-col items-center h-full relative">
                      {index !== 0 && (
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-1/2 bg-accent/60" />
                      )}

                      <span className="w-2.5 h-2.5 bg-accent rounded-full z-10 transition-all duration-300 group-hover:w-3.5 group-hover:h-3.5" />

                      {index !== journey.length - 1 && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-1/2 bg-accent/60" />
                      )}
                    </div>

                    <span className="leading-relaxed transition-colors duration-300 group-hover:text-accent">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>

              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className="
                      group flex items-center gap-3 px-5 py-3 text-sm font-medium rounded-2xl
                      bg-white dark:bg-[#0e0e0e]
                      border border-black/10 dark:border-white/10
                      shadow-[0_6px_20px_rgba(0,0,0,0.06)]
                      dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                      text-foreground
                      transition-all duration-300 ease-out
                      hover:-translate-y-1
                      hover:scale-[1.03]
                      hover:border-accent/40
                      hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)]
                      dark:hover:shadow-[0_30px_80px_rgba(0,0,0,0.7)]
                    "
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
