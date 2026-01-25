"use client"

import { Briefcase } from "lucide-react"

const experiences = [
  {
    company: "Atrey.dev",
    role: "Full-Stack Developer",
    type: "Remote",
    period: "Jan 2025 - Present",
    highlights: [
      "Delivered 5-7 full-stack web projects for Atrey.dev clients, covering landing pages, dashboards, and internal tools end to end",
      "Built responsive frontends using React/Next.js and modern UI libraries, ensuring mobile-friendly layouts and consistent design implementation from Figma",
      "Implemented and integrated REST/GraphQL APIs on Node.js/Express, handling database design and queries with MongoDB/PostgreSQL for production features"
    ]
  },
  {
    company: "Fliq AI",
    role: "Frontend Developer",
    type: "Remote",
    period: "MAR-2025 - SEP-2025",
    highlights: [
      "Built responsive UI components for Fliq AI's web app using React, TypeScript, and Tailwind CSS, improving mobile usability and layout consistency",
      "Collaborated with designers and backend engineers to implement new product flows, reducing UI bugs and handoff issues through clear Figma-to-code processes",
      "Optimized page load and bundle size by refactoring components and cleaning unused styles, leading to faster navigation and smoother user experience"
    ]
  }
]

export function Experience() {
  return (
    <section id="work" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Work Experience Header */}
        <div className="flex items-center gap-3 mb-2">
          <Briefcase className="h-8 w-8 text-foreground" />
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="w-20 h-1 bg-accent mb-6" />
        <p className="text-muted-foreground mb-12 max-w-3xl">
          A curated selection of projects I&apos;ve brought to life — from launched websites and innovative digital tools to creative collaborations with talented teams.
        </p>
        
        {/* Work Experience Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold mb-1">{exp.company}</h4>
                  <p className="text-accent font-medium">{exp.role} | {exp.type}</p>
                </div>
                <span className="px-4 py-2 rounded-full border border-border text-sm font-medium whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
