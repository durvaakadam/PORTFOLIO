"use client"

import { FolderOpen, ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Aos from "aos"
import "aos/dist/aos.css"
export const projects = [
  {
    title: "CityShield",
    subtitle: "AI-Powered Predictive Policing & Crime Management System",
    image: "/images/cityshield2.jpeg",
    link: "https://github.com/inception-js-org/CityShield",
    highlights: [
      "A city-scale crime prediction and law enforcement management platform focused on real-time situational awareness and patrol optimization.",
      "Combines multiple machine learning models to forecast crime risk at zone and subtype levels using temporal, spatial, and environmental data.",
      "Provides interactive dashboards for administrators and patrol officers, including heat maps, patrol routes, and live incident alerts.",
      "Supports digital FIR filing, complaint tracking, and evidence management with end-to-end status workflows.",
      "Includes real-time patrol tracking and AI-generated route recommendations based on predicted crime hotspots."
    ]
  },
  {
    title: "ATTENDIX",
    subtitle: "AI-Powered Smart Attendance & Identity Verification System",
    image: "/images/attendix.png",
    link: "https://github.com/inception-js-org/HackCrypt",
    highlights: [
      "A smart attendance and identity verification platform that combines facial recognition and fingerprint authentication for educational institutions.",
      "Uses real-time face detection and ArcFace embeddings for live camera attendance, along with batch video processing for multi-person verification.",
      "Includes role-based dashboards for students, faculty, and administrators with session management, analytics, and grievance handling.",
      "Integrates a local embedding cache with Pinecone fallback to balance low-latency verification and scalable similarity search.",
      "Supports hardware-based fingerprint verification via Arduino serial communication for additional biometric assurance."
    ]
  },
  {
    title: "Victor",
    subtitle: "Retrieval-Augmented Question Answering System",
    image: "/images/victor.jpeg",
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
    image: "/images/codeiq.jpg",
    link: "https://github.com/durvaakadam/CodeIQ",
    highlights: [
      "A system that generates and validates code documentation using multiple coordinated AI agents.",
      "Combines static analysis and runtime inspection through AST parsing and execution tracing to improve documentation quality.",
      "Automates repository workflows such as branch creation, commits, and pull request generation."
    ]
  },
  {
    title: "UrbanDepot",
    subtitle: "Real-Time Parking Marketplace Web Platform",
    image: "/images/urban.jpg",
    link: "https://github.com/durvaakadam/UrbanDepot",
    highlights: [
      "A full-stack web platform for discovering and booking parking spaces based on real-time availability.",
      "Integrates Google Maps for live location tracking, routing, and distance-based search to reduce parking discovery time.",
      "Includes OCR-based document verification to automate parking owner onboarding and validation."
    ]
  },
  {
    title: "DISPENZO 2.0",
    subtitle: "Smart Ration Dispensing & Monitoring System (IoT + Web)",
    image: "/images/dispenzo.jpg",
    link: "https://github.com/durvaakadam/DISPENZO-2.0",
    highlights: [
      "An IoT-based smart ration distribution system designed to improve transparency and reduce manual intervention in public distribution workflows.",
      "Combines ESP32-based hardware with load cells, temperature sensors, ultrasonic sensors, and servo motors for automated dispensing and monitoring.",
      "Provides a web dashboard showing real-time weight tracking, container levels, temperature status, and system alerts.",
      "Supports live telemetry and remote monitoring, with serial logs and threshold-based dispensing control."
    ]
  },
  {
    title: "CRM Dashboard",
    subtitle: "Role-Based Scheduling & Analytics Platform",
    image: "/images/crm-dashboard.jpg",
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
    image: "/images/visionguard.jpg",
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
    image: "/images/velvet-whisk.jpg",
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
    <section id="projects" className="py-20 px-4" data-aos="fade-up">
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
            >
              <div className="flex-1 w-full">
                {/* <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary/30 border border-border shadow-2xl"> */}

                <div className="relative aspect-[15/9] rounded-xl overflow-hidden bg-secondary/30 border border-border shadow-2xl">


                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
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
            className="bg-accent text-accent-foreground hover:bg-accent/90"
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
