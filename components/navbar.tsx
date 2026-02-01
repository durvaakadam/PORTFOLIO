"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Projects", href: "#projects" },
]

const resumeUrl = "https://drive.google.com/file/d/17XY932lmxK-1HiaCfk5xm0ka53czA6KI/view?usp=sharing";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setMounted(true)
    // Check initial theme from document
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleThemeToggle = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    
    if (newIsDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const resolvedTheme = isDark ? "dark" : "light"

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-white/30 dark:bg-black/20 border-b border-white/20 dark:border-white/10 shadow-lg shadow-black/5 transition-all duration-300"
      data-aos="fade-down"
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo & Tagline */}
        <div className="flex items-center gap-3 flex-1">
          <Link href="/" className="text-xl font-bold">
            DK
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-xs">
            <span className="text-muted-foreground">FULL STACK DEV</span>
            <span className="text-accent font-medium">BUILDING THE FUTURE</span>
          </div>
        </div>
        {/* Desktop Navigation - all right aligned */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-end">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full transition-all duration-300 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-8" />
            </Link>
          ))}
          <Button size="sm" variant="outline" className="rounded-full bg-transparent hover:text-white" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button size="sm" variant="default" className="rounded-full bg-accent text-white hover:bg-accent/80" asChild>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">View Resume</a>
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="rounded-full ml-2"
            onClick={handleThemeToggle}
          >
            {mounted && (isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            className="rounded-full"
            onClick={handleThemeToggle}
          >
            {mounted && (isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button size="sm" variant="outline" className="w-full rounded-full bg-transparent hover:text-white" asChild>
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Link>
            </Button>
            <Button size="sm" variant="default" className="w-full rounded-full bg-accent text-white hover:bg-accent/80" asChild>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>View Resume</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
