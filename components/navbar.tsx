"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Blogs", href: "#blogs" },
]

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo & Tagline */}
        <div className="flex items-center gap-3">
          <Link href="/" className="text-xl font-bold">
            DK
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-xs">
            <span className="text-muted-foreground">FULL STACK DEV</span>
            <span className="text-accent font-medium">BUILDING THE FUTURE</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 ml-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full"
              onClick={handleThemeToggle}
            >
              {mounted && (isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button size="sm" variant="outline" className="rounded-full bg-transparent hover:text-white" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
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
          </div>
        </div>
      )}
    </header>
  )
}
