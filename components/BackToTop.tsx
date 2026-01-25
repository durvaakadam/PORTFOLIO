"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="
        fixed bottom-6 right-6 z-50
        h-10 w-10 rounded-full
        bg-accent/90 text-accent-foreground
        flex items-center justify-center
        shadow-lg shadow-accent/30
        transition-all duration-300
        hover:scale-110 hover:bg-accent
        focus:outline-none
      "
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}