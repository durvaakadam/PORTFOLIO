"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
        // transition: 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        transition: 'transform 0.0s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 2L10.46 21.35L12.36 14.36L19.38 12.36L3 2Z"
          fill="url(#gradient)"
          stroke="url(#gradient)"
          strokeWidth="0.5"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
2