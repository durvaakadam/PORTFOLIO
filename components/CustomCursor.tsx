"use client"

import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  const mouse = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })
  const angle = useRef(0)
  const targetAngle = useRef(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    window.addEventListener("mousemove", onMove)

    const animate = () => {
      // --- POSITION ---
      const dx = mouse.current.x - pos.current.x
      const dy = mouse.current.y - pos.current.y

      // smooth follow (no snap)
      pos.current.x += dx * 0.18
      pos.current.y += dy * 0.18

      // --- ROTATION TARGET ---
      if (Math.abs(dx) + Math.abs(dy) > 0.1) {
        targetAngle.current = Math.atan2(dy, dx) * (180 / Math.PI)
      }

      // --- ROTATION LERP (THIS IS THE KEY) ---
      angle.current += (targetAngle.current - angle.current) * 0.15

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(${pos.current.x - 12}px, ${pos.current.y - 12}px, 0)
          rotate(${angle.current + 90}deg)
        `
      }

      requestAnimationFrame(animate)
    }

    animate()
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#269BFF"
          stroke="#269BFF"
          strokeWidth="2.5"
          d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
        />
      </svg>
    </div>
  )
}
