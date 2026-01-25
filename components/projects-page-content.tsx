"use client"

import { FolderOpen, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { projects } from "@/components/sections/projects"

export function ProjectsPageContent() {
  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8 hover:bg-secondary">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <FolderOpen className="h-8 w-8 text-foreground" />
          <h1 className="text-3xl md:text-4xl font-bold">All Projects</h1>
        </div>
        <div className="w-20 h-1 bg-accent mb-6" />
        <p className="text-muted-foreground mb-16 max-w-3xl">
          A complete collection of my work — from AI-powered platforms and e-commerce solutions to creative collaborations and innovative digital tools.
        </p>
        
        {/* Projects - Alternating Layout */}
        <div className="space-y-24">
          {projects.map((project, index) => (
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
                <h2 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h2>
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
        
        {/* Back to Home Button at Bottom */}
        <div className="flex justify-center mt-20">
          <Button asChild size="lg" variant="outline" className="bg-transparent border-border hover:bg-secondary">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
