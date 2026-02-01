"use client"

import { FolderOpen, ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Aos from "aos"
import "aos/dist/aos.css"
import { ProjectImageCarousel } from "@/components/ui/ProjectImageCarousel"
export const projects = [
  {
    title: "CityShield",
    subtitle: "AI-Powered Predictive Policing & Crime Management System",
    images: [
      "/images/PROJECTS/CityShield/cityshield.jpeg",
      "/images/PROJECTS/CityShield/cityshield2.jpeg",
      "/images/PROJECTS/CityShield/cityshield3.png"
    ],
   link: "https://github.com/inception-js-org/CityShield",
highlights: [
  "A crime analytics and operational decision-support system focused on real-time risk assessment and situational awareness.",
  "Uses an ensemble of machine learning models to forecast crime likelihood at zone and subtype levels from temporal, spatial, and environmental features.",
  "Provides interactive geospatial visualizations, patrol route optimization, and live incident tracking built on a real-time data pipeline."
]

  },
  {
    title: "ATTENDIX",
    subtitle: "AI-Powered Smart Attendance & Identity Verification System",
    images: [
      "/images/PROJECTS/Attendix/attendix.jpg"
    ],
    link: "https://github.com/inception-js-org/HackCrypt",
   highlights: [
  "A full-stack biometric attendance system integrating facial embeddings and fingerprint verification for identity validation.",
  "Implements real-time face recognition and batch video-based attendance using embedding similarity search with caching and vector database fallback.",
  "Designed with a scalable API-driven architecture, supporting session tracking, verification workflows, and analytics pipelines."
]

  },
  {
    title: "Victor",
    subtitle: "Retrieval-Augmented Question Answering System",
    images: [
      "/images/PROJECTS/Victor/victor.jpeg"
    ],
    link: "https://github.com/durvaakadam/victor",
    highlights: [
      "A retrieval-augmented question answering system built on LangChain and Milvus for semantic document search and contextual responses.",
      "Uses asynchronous FastAPI pipelines, embedding caching, and reranking to keep query latency low even with large document collections.",
      "Supports secure document ingestion and authenticated streaming responses, handling over 1,000 indexed document chunks."
    ]
  },
  {
    title: "CodeIQ",
    subtitle: "Agentic Code Documentation System",
    images: [
      "/images/PROJECTS/CodeIQ/codeiq.jpg"
    ],
    link: "https://github.com/durvaakadam/CodeIQ",
 highlights: [
  "An agentic system that generates and validates documentation across large Python codebases using specialized collaborating agents.",
  "Integrates static analysis (AST / Tree-sitter) with contextual retrieval and LLM-based generation for accurate, structured docstrings.",
"Applies execution-level verification through controlled function invocation and behavioral observation to detect inconsistencies and refine generated documentation."
]

  },
  {
    title: "UrbanDepot",
    subtitle: "Real-Time Parking Marketplace Web Platform",
    images: [
      "/images/PROJECTS/UrbanDepot/urban.jpg",
      "/images/PROJECTS/UrbanDepot/urban1.jpeg"
    ],
    link: "https://github.com/durvaakadam/UrbanDepot",
    highlights: [
  "A real-time parking discovery and booking platform built around map-based search, availability filtering, and slot reservation workflows.",
  "Integrates Google Maps for live location visualization, routing, and distance-aware search, enabling time- and location-based parking decisions.",
  "Implements secure onboarding and operations using Firebase authentication, OCR-based document verification, role-based access control, and Razorpay payments."
]

  },
  {
    title: "DISPENZO 2.0",
    subtitle: "Smart Ration Dispensing & Monitoring System (IoT + Web)",
    images: [
      "/images/PROJECTS/Dispenzo/dispenzo.jpg"
    ],
    link: "https://github.com/durvaakadam/DISPENZO-2.0",
    highlights: [
      "An IoT-based smart ration distribution system designed to improve transparency and reduce manual intervention in public distribution workflows.",
      "Combines ESP32-based hardware with load cells, temperature sensors, ultrasonic sensors, and servo motors for automated dispensing and monitoring.",
      "Provides a web dashboard showing real-time weight tracking, container levels, temperature status, and system alerts.",
    ]
  },
  {
    title: "CRM Dashboard",
    subtitle: "Role-Based Scheduling & Analytics Platform",
    images: [
      "/images/PROJECTS/Crm-Dashboard/crm-dashboard.jpg",
      "/images/PROJECTS/Crm-Dashboard/1crm-dashboard.jpg"
    ],
    link: "https://github.com/durvaakadam/CRM-DASHBOARD",
    highlights: [
      "A modular CRM dashboard system organized around role-specific workflows for CEOs, counsellors, and HR teams.",
      "Includes centralized calendar-based appointment scheduling with list and calendar views.",
      "Provides high-level analytics panels for activity tracking, trends, and operational visibility.",
      "Uses a separated frontend and backend structure to support scalability and clearer responsibility boundaries."
    ]
  },
  {
    title: "VisionGuard",
    subtitle: "Web-Based Image Classification System",
    images: [
      "/images/PROJECTS/VisionGuard/visionguard.jpg"
    ],
    link: "https://github.com/durvaakadam/VisionGuard",
    highlights: [
      "An image classification web application powered by a custom convolutional neural network.",
      "Allows image uploads and returns predicted classes with confidence scores through a FastAPI inference API.",
      "Displays uploaded images and predictions side-by-side in a clean, responsive interface with light and dark themes.",
      "Designed for experimentation, demos, and lightweight deployment of custom-trained CNN models."
    ]
  },
  {
    title: "Velvet & Whisk",
    subtitle: "E-Commerce Web Application",
    images: [
      "/images/PROJECTS/VelvetWhisk/1.jpg",
      "/images/PROJECTS/VelvetWhisk/2.jpg",
      "/images/PROJECTS/VelvetWhisk/3.jpg"
    ],
    link: "https://github.com/durvaakadam/Velvet-and-Whisk",
    highlights: [
      "A front-end e-commerce application focused on smooth navigation and a polished shopping experience.",
      "Includes product listings, product detail views, and a persistent shopping cart.",
      "Uses Redux for cart state management and React Router for client-side navigation.",
      "Integrates Razorpay for secure checkout and payment processing."
    ]
  }
]




export function Projects() {
  const featuredProjects = projects.slice(0, 2)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <FolderOpen className="h-8 w-8 text-foreground" />
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
        </div>

        <div className="w-20 h-1 bg-accent mb-6" />

        <p className="text-muted-foreground mb-16 max-w-3xl">
          A selection of systems I’ve built — spanning Agentic AI, large-scale retrieval,
          and real-world full-stack platforms.
        </p>

        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 100}
            >
              <div className="flex-1 w-full">
                <ProjectImageCarousel images={project.images} alt={project.title} />
              </div>

              <div className="flex-1 w-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-2">
                  {project.title}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-7 w-7 text-green-500 hover:text-green-400 transition-colors" />
                    </a>
                  )}
                </h3>

                <p className="text-accent font-medium mb-6">
                  {project.subtitle}
                </p>

                <ul className="space-y-4">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-muted-foreground leading-relaxed"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-accent text-white hover:bg-accent/80 px-6 py-2 text-base font-semibold shadow-none"
          >
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
