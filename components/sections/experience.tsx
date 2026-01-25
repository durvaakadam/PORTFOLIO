"use client"

import { Briefcase } from "lucide-react"

const experiences = [
  {
    company: "HumbleWalking",
    role: "Backend Engineer · Internship",
    type: "Mumbai, India",
    period: "May 2025 – July 2025",
    highlights: [
      "Built and optimized RESTful APIs using Node.js & Express, improving data retrieval performance by ~30%",
      "Designed and implemented MongoDB schemas for user, appointment, and HR modules at production scale",
      "Integrated JWT-based authentication and secure role-based access flows",
      "Collaborated with frontend and product teams to ship reliable client-facing features",
      "Owned backend development lifecycle — from API design to testing and integration",
      "Tech used: Node.js · Express · MongoDB · JWT · REST APIs · Postman"
    ]
  }
]

export function Experience() {
  return (
    <section id="work" className="py-20 px-4" data-aos="fade-up">
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
        <div className="grid md:grid-cols-1 gap-6 w-full max-w-3xl">
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
