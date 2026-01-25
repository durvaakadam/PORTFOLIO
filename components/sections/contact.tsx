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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Email Card */}
          <Link
            href="mailto:durvakadam@gmail.com"
            className="
              p-8 rounded-xl bg-card
              border border-border/50
              flex flex-col items-center
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl hover:bg-card/80
              active:scale-95
              group
            "
          >
            <div className="
              w-14 h-14 rounded-full
              bg-accent/10
              flex items-center justify-center mb-5
              transition-all duration-300
              group-hover:bg-accent/30 group-hover:scale-110
            ">
              <Mail className="h-6 w-6 text-accent transition-colors duration-300 group-hover:text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">Email</h3>
            <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
              durvakadam204@gmail.com
            </p>
          </Link>

          {/* Phone Card */}
          <Link
            href="tel:+918828174914"
            className="
              p-8 rounded-xl bg-card
              border border-border/50
              flex flex-col items-center
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl hover:bg-card/80
              active:scale-95
              group
            "
          >
            <div className="
              w-14 h-14 rounded-full
              bg-accent/10
              flex items-center justify-center mb-5
              transition-all duration-300
              group-hover:bg-accent/30 group-hover:scale-110
            ">
              <Phone className="h-6 w-6 text-accent transition-colors duration-300 group-hover:text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">Phone</h3>
            <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
              +91 8828174914
            </p>
          </Link>

          {/* Socials Card */}
          <div
            className="
              p-8 rounded-xl bg-card
              border border-border/50
              flex flex-col items-center
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl hover:bg-card/80
              sm:col-span-2 lg:col-span-1
              group
              cursor-pointer
            "
          >
            <div className="
              w-14 h-14 rounded-full
              bg-accent/10
              flex items-center justify-center mb-5
              transition-all duration-300
              group-hover:bg-accent/30 group-hover:scale-110
            ">
              <AtSign className="h-6 w-6 text-accent transition-colors duration-300 group-hover:text-accent" />
            </div>

            <h3 className="font-semibold text-lg mb-4 group-hover:text-accent transition-colors duration-300">Socials</h3>

            <div className="flex gap-5 justify-center">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent hover:scale-125 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent hover:scale-125 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent hover:scale-125 transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}