"use client"

import { FolderOpen, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const projects = [
  {
    title: "Scanalytics",
    subtitle: "AI-Powered Medical Analytics Platform (Mumbai Hacks GenAI Hackathon)",
    image: "/images/scanalytics.jpg",
    highlights: [
      "Built an end-to-end web platform that processes medical scans in real time and generates AI-assisted insights to support faster and more reliable clinical decision-making.",
      "Implemented modules for automated scan upload, AI-driven analysis, and intuitive result visualization, enabling doctors to view critical findings, risk flags, and patient history in a single dashboard.",
      "Designed a clean, responsive UI tailored for hospital workflows, reducing cognitive load for clinicians and improving the usability of complex medical data."
    ]
  },
  {
    title: "FliqAI",
    subtitle: "AI-Powered College Admissions Playbooks",
    image: "/images/fliqai.jpg",
    highlights: [
      "Built a web platform that analyzes patterns from successful college applications to generate personalized, step-by-step admissions roadmaps for each student.",
      "Implemented features for comparing a student's profile against past admits, highlighting gaps in academics, activities, and essays, and suggesting actionable improvements.",
      "Designed an intuitive, student-friendly interface that makes complex admissions data easy to understand through clear visuals, progress tracking, and tailored recommendations."
    ]
  },
  {
    title: "AXM",
    subtitle: "Client E-commerce Website",
    image: "/images/axm.jpg",
    highlights: [
      "Developed a fully responsive e-commerce website for a client, enabling users to browse products, view details, and place orders through a streamlined, mobile-friendly interface.",
      "Implemented core commerce flows including product listing, filtering, cart management, and order flow, ensuring a smooth and intuitive shopping experience.",
      "Designed a clean, brand-aligned UI that highlights products and key CTAs, improving usability and helping the client better showcase their catalog online."
    ]
  }
]

export function Projects() {
  // Show only first 2 projects on homepage
  const featuredProjects = projects.slice(0, 2)
  
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Selected Projects Header */}
        <div className="flex items-center gap-3 mb-2">
          <FolderOpen className="h-8 w-8 text-foreground" />
          <h2 className="text-3xl md:text-4xl font-bold">Selected Projects</h2>
        </div>
        <div className="w-20 h-1 bg-accent mb-6" />
        <p className="text-muted-foreground mb-16 max-w-3xl">
          A showcase of my recent work — from AI-powered platforms to e-commerce solutions.
        </p>
        
        {/* Projects - Alternating Layout */}
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* Project Image/Mockup */}
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary/30 border border-border shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Project Details */}
              <div className="flex-1 w-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                <p className="text-accent font-medium mb-6">{project.subtitle}</p>
                <ul className="space-y-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="flex justify-center mt-16">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/projects" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
