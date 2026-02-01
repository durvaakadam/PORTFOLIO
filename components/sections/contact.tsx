"use client"

import { Mail, Phone, Github, Linkedin, AtSign } from "lucide-react"
import { SiLeetcode, SiWhatsapp } from "react-icons/si"
import Link from "next/link"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether animation should happen only once
    });
  }, [])

  return (
    <section id="contact" className="py-10 px-4 mt-10 mb-0 pb-15" data-aos="fade-up">
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
                p-8 rounded-2xl
                bg-white/90 dark:bg-card
                border border-border/70
                flex flex-col items-center
                transition-all duration-300
                shadow-md hover:shadow-2xl
                hover:-translate-y-2 hover:bg-white dark:hover:bg-card/80
                active:scale-95
                group
              "
            >
            <div className="
              w-14 h-14 rounded-full
              bg-accent/20 dark:bg-accent/10
              flex items-center justify-center mb-5
              transition-all duration-300
              group-hover:bg-accent/30 group-hover:scale-110
            ">
              <Mail className="h-6 w-6 text-accent transition-colors duration-300 group-hover:text-accent" />
            </div>
            <h3 className="relative font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300 inline-block">Email
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-8" />
            </h3>
            <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
              durvakadam204@gmail.com
            </p>
          </Link>

          {/* Phone Card */}
          <Link
            href="tel:+918828174914"
            className="
              p-8 rounded-2xl
              bg-white/90 dark:bg-card
              border border-border/70
              flex flex-col items-center
              transition-all duration-300
              shadow-md hover:shadow-2xl
              hover:-translate-y-2 hover:bg-white dark:hover:bg-card/80
              active:scale-95
              group
            "
          >
            <div className="
              w-14 h-14 rounded-full
              bg-accent/20 dark:bg-accent/10
              flex items-center justify-center mb-5
              transition-all duration-300
              group-hover:bg-accent/30 group-hover:scale-110
            ">
              <Phone className="h-6 w-6 text-accent transition-colors duration-300 group-hover:text-accent" />
            </div>
            <h3 className="relative font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300 inline-block">Phone
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-8" />
            </h3>
            <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
              +91 8828174914
            </p>
          </Link>

          {/* Socials Card */}
          <div
            className="
              p-8 rounded-2xl
              bg-white/90 dark:bg-card
              border border-border/70
              flex flex-col items-center
              transition-all duration-300
              shadow-md hover:shadow-2xl
              hover:-translate-y-2 hover:bg-white dark:hover:bg-card/80
              sm:col-span-2 lg:col-span-1
              group
              cursor-pointer
            "
          >
            <div className="
              w-14 h-14 rounded-full
              bg-accent/20 dark:bg-accent/10
              flex items-center justify-center mb-5
              transition-all duration-300
              group-hover:bg-accent/30 group-hover:scale-110
            ">
              <AtSign className="h-6 w-6 text-accent transition-colors duration-300 group-hover:text-accent" />
            </div>

            <h3 className="relative font-semibold text-lg mb-4 group-hover:text-accent transition-colors duration-300 inline-block">Socials
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-8" />
            </h3>

            <div className="flex gap-5 justify-center">
              <Link
                href="https://www.linkedin.com/in/durva-kadam-02a22a25a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent hover:scale-125 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>

              <Link
                href="https://github.com/durvaakadam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent hover:scale-125 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>

              <Link
                href="https://leetcode.com/u/v5S4HTYapf/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent hover:scale-125 transition-all duration-300"
              >
                <SiLeetcode className="h-5 w-5" />
                <span className="sr-only">LeetCode</span>
              </Link>

              <Link
                href="https://api.whatsapp.com/send/?phone=918828174914&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-green-500 hover:scale-125 transition-all duration-300"
              >
                <SiWhatsapp className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}