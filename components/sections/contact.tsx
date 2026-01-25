"use client"

import { Mail, Phone, Github, Linkedin, Twitter, AtSign } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-6" />
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Email Card */}
          <Link 
            href="mailto:durvakadam@gmail.com"
            className="p-8 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-colors group flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-muted-foreground text-sm">durvakadam@gmail.com</p>
          </Link>
          
          {/* Phone Card */}
          <Link 
            href="tel:+919876543210"
            className="p-8 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-colors group flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
              <Phone className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <p className="text-muted-foreground text-sm">+91 98765 43210</p>
          </Link>
          
          {/* Socials Card */}
          <div className="p-8 rounded-xl bg-card border border-border/50 sm:col-span-2 lg:col-span-1 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-5">
              <AtSign className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-4">Socials</h3>
            <div className="flex gap-5 justify-center">
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">X (Twitter)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
