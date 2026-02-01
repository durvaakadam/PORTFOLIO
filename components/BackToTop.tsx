"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [bottomOffset, setBottomOffset] = useState(24); // 6 * 4px = 24px
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);

      // Check for footer overlap
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // If the footer is visible in the viewport
        if (footerRect.top < windowHeight) {
          // Calculate how much the button should move up
          const overlap = windowHeight - footerRect.top;
          setBottomOffset(Math.max(24, overlap + 24));
        } else {
          setBottomOffset(24);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    // Run once on mount
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Find the footer element on mount
  useEffect(() => {
    footerRef.current = document.querySelector("footer");
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{ position: "fixed", right: 24, bottom: bottomOffset, zIndex: 50 }}
      className="
        h-10 w-10 rounded-full
        bg-accent text-white
        flex items-center justify-center
        shadow-none
        transition-all duration-300
        hover:scale-110 hover:bg-accent/80
        focus:outline-none
      "
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}